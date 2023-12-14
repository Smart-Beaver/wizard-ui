import { dictionary } from '@/libs/en';

export default function BeaverMemo() {
  return (
    <p className="pb-4 pt-3 text-slate-200">
      <span className="font-bold">{dictionary.sidebarForm.beaverMemo.memo}:</span>{' '}
      {dictionary.sidebarForm.beaverMemo.paragraph}{' '}
      <span className="font-bold text-teal-500">{dictionary.sidebarForm.beaverMemo.metadata}</span>
    </p>
  );
}
