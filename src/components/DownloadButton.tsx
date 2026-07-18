import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  /** Path relative to the site base, e.g. 'documents/Lily-Morningstar-CV.pdf'. */
  path: string;
  label: string;
}

/**
 * Download link that checks whether the target file actually exists.
 * If it is missing, the button is disabled and a friendly note is shown —
 * so publishing the site without the CV files never produces broken links.
 */
export function DownloadButton({ path, label }: DownloadButtonProps) {
  const href = import.meta.env.BASE_URL + path;
  const [state, setState] = useState<'checking' | 'available' | 'missing'>('checking');

  useEffect(() => {
    let cancelled = false;
    fetch(href, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setState(res.ok ? 'available' : 'missing');
      })
      .catch(() => {
        if (!cancelled) setState('missing');
      });
    return () => {
      cancelled = true;
    };
  }, [href]);

  if (state === 'available') {
    return (
      <a href={href} download className="btn-primary">
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <span className="inline-flex flex-col gap-1">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-500 dark:bg-stone-800 dark:text-stone-400"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      {state === 'missing' && (
        <span className="text-xs text-stone-500 dark:text-stone-400">
          Updated CV will be available soon.
        </span>
      )}
    </span>
  );
}
