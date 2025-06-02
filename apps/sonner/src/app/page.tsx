'use client'
import { Toaster } from '../components/Toaster';
import toast from '../utils/toast';
import { useToastStore, removeToast } from '../utils/toast-store';

export default function Home() {
  const toasts = useToastStore();
  return (
    <main>
      <Toaster toasts={toasts} onDismiss={removeToast} />
      <div className="p-8">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => toast('My first toast!')}
        >
          Give me a toast
        </button>
      </div>
    </main>
  );
}
