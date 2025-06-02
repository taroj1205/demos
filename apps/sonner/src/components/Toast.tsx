import { motion } from 'motion/react';
import type { Toast } from '../utils/toast-store';

interface ToastProps {
  toast: Toast;
  onDismiss: (id: string) => void;
  className?: string;
}

const typeStyles: Record<string, string> = {
  default: 'bg-white text-gray-900',
  success: 'bg-green-500 text-white',
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-gray-900',
  error: 'bg-red-500 text-white',
};

function ToastItem({ toast, onDismiss, className }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      className={`shadow-lg rounded px-4 py-3 mb-2 flex items-center justify-between ${typeStyles[toast.type || 'default']} ${className || ''}`}
    >
      <span>{toast.message}</span>
      <button
        className="ml-4 text-lg font-bold opacity-60 hover:opacity-100"
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss"
      >
        ×
      </button>
    </motion.div>
  );
}

export default ToastItem; 