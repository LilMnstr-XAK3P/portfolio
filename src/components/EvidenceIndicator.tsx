import { Paperclip } from 'lucide-react';
import type { EvidenceItem } from '../data/types';

interface EvidenceIndicatorProps {
  evidence?: EvidenceItem[];
  evidencePrivate?: boolean;
}

/**
 * Shows public evidence links for a record. Private evidence
 * (item.private or record-level evidencePrivate) is never rendered.
 */
export function EvidenceIndicator({ evidence, evidencePrivate }: EvidenceIndicatorProps) {
  if (evidencePrivate || !evidence) return null;
  const visible = evidence.filter((item) => !item.private && item.href);
  if (visible.length === 0) return null;

  return (
    <div className="inline-flex items-center gap-1.5">
      <Paperclip className="h-3.5 w-3.5" aria-hidden="true" />
      {visible.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
