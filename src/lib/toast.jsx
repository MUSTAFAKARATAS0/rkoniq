import { useEffect, useState } from 'react';

let notify = null;

export const toast = {
  success(message) {
    notify?.(message);
  },
};

export function ToastHost() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    notify = (nextMessage) => {
      setMessage(nextMessage);
      window.setTimeout(() => setMessage(''), 3000);
    };
    return () => {
      notify = null;
    };
  }, []);

  if (!message) return null;

  return (
    <div className="fixed right-4 top-4 z-[100] rounded-xl bg-zinc-900 px-4 py-3 text-sm text-white shadow-lg">
      {message}
    </div>
  );
}
