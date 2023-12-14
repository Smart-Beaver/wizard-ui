import { toast } from 'react-toastify';
import type { TypeOptions } from 'react-toastify';

export const showToast = (message: string, type?: TypeOptions) => {
  return toast(message, { type: type ?? 'default' });
};
