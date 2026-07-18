import { Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  provider?: string;
  date?: string;
}

export function CertificateCard({ title, provider, date }: CertificateCardProps) {
  return (
    <article className="card flex items-start gap-3 p-4">
      <div className="rounded-lg bg-brand-50 p-2 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
        <Award className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-semibold text-stone-900 dark:text-white">{title}</h4>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          {[provider, date].filter(Boolean).join(' · ')}
        </p>
      </div>
    </article>
  );
}
