import { dictionary } from '@/libs/en';

export default function NotAvailable() {
  return (
    <p className="pb-4 pt-3 text-slate-200">
      <span className="font-bold">{dictionary.sidebarForm.notAvailable}</span>
    </p>
  );
}
