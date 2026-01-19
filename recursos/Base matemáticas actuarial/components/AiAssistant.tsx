
import React, { useState, useContext } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { getActuarialExplanation } from '../services/geminiService';
import { ChatMessage } from '../types';
import { LanguageContext } from '../App';

export const AiAssistant: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) return null;
  const { t, lang } = context;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: t.ai.welcome }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const explanation = await getActuarialExplanation(input, lang);
    setMessages(prev => [...prev, { role: 'assistant', content: explanation }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-indigo-100 flex flex-col h-[500px] overflow-hidden">
      <div className="bg-indigo-600 p-4 text-white flex items-center gap-2">
        <Sparkles size={20} />
        <h3 className="font-bold">{t.ai.title}</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl flex gap-3 ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'
            }`}>
              <div className="shrink-0 mt-1">
                {msg.role === 'user' ? <User size={16}/> : <Bot size={16}/>}
              </div>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 rounded-tl-none animate-pulse text-slate-400 text-sm">
              {t.ai.thinking}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t.ai.placeholder}
          className="flex-1 bg-slate-100 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
