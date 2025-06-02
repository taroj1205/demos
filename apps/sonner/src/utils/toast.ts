import { addToast, removeToast, Toast } from './toast-store';

export function toast(message: string, options?: Omit<Toast, 'id' | 'message'>) {
  return addToast({ message, ...options });
}

toast.success = (message: string, options?: Omit<Toast, 'id' | 'message'>) =>
  toast(message, { ...options, type: 'success' });
toast.info = (message: string, options?: Omit<Toast, 'id' | 'message'>) =>
  toast(message, { ...options, type: 'info' });
toast.warning = (message: string, options?: Omit<Toast, 'id' | 'message'>) =>
  toast(message, { ...options, type: 'warning' });
toast.error = (message: string, options?: Omit<Toast, 'id' | 'message'>) =>
  toast(message, { ...options, type: 'error' });

toast.dismiss = (id: string) => removeToast(id);

export default toast; 