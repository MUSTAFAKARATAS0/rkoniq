import { useEffect, useState } from 'react';
import { setToastNotifier } from '../../lib/toast.js';

export default function ToastHost() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setToastNotifier((nextMessage) => {
      setMessage(nextMessage);
      window.setTimeout(() => setMessage(''), 3000);
    });
    return () => setToastNotifier(null);
  }, []);

  if (!message) return null;

  return (
    <div className="fixed right-4 top-4 z-[100] rounded-xl bg-zinc-900 px-4 py-3 text-sm text-white shadow-lg">
      {message}
    </div>
  );
}
