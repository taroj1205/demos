'use client'
import ToastItem from './Toast';
import styles from './ToastStack.module.css';
import type { Toast } from '../utils/toast-store';
import { removeToast } from '../utils/toast-store';
import { useEffect } from 'react';

interface ToasterProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

export function Toaster({ toasts, onDismiss }: ToasterProps) {
  useEffect(() => {
    if (!toasts.length) return;
    const timers = toasts.map(toast => {
      if (toast.duration === 0) return null;
      return setTimeout(() => removeToast(toast.id), toast.duration ?? 3000);
    });
    return () => { timers.forEach(t => t && clearTimeout(t)); };
  }, [toasts]);

  return (
    <div className={styles.toastStack}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={onDismiss}
          className={styles.toastItem}
        />
      ))}
    </div>
  );
} 