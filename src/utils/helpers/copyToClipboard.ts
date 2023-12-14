import { dictionary } from '@/libs/en';
import { showToast } from '@/utils/helpers/showToast';

export const copyToClipboard = async (copyText: string) => {
  try {
    await navigator.clipboard.writeText(copyText || '');
    showToast(dictionary.codeEditor.toast.success, 'success');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(dictionary.codeEditor.toast.error, err);
    showToast(dictionary.codeEditor.toast.error, 'error');
  }
};
