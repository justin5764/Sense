// src/app/chatbot/page.tsx

'use client';

import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useRouter } from 'next/navigation';
import Chatbot from '../../components/Chatbot';

const ChatbotPage = () => {
  const context = useContext(AppContext);
  const router = useRouter();

  if (!context) {
    throw new Error('AppContext is undefined');
  }

  const { diagnosis } = context;

  useEffect(() => {
    if (!diagnosis) {
      router.push('/diagnosis');
    }
  }, [diagnosis, router]);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold mb-8">Chatbot Assistance</h1>
      {diagnosis && <Chatbot diagnosis={diagnosis} />}
    </div>
  );
};

export default ChatbotPage;