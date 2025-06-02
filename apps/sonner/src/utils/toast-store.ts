'use client'
import { useSyncExternalStore } from 'react';

export type Toast = {
  id: string;
  message: string;
  type?: 'default' | 'success' | 'info' | 'warning' | 'error';
  duration?: number;
};

let toasts: Toast[] = [];
let listeners: (() => void)[] = [];

function emitChange() {
  for (const listener of listeners) listener();
}

export function addToast(toast: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substr(2, 9);
  toasts = [...toasts, { ...toast, id }];
  emitChange();
  return id;
}

export function removeToast(id: string) {
  toasts = toasts.filter(t => t.id !== id);
  emitChange();
}

export function useToastStore() {
  return useSyncExternalStore(
    (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    },
    () => toasts
  );
} 