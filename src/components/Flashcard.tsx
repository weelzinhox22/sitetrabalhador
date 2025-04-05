
import { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
  category?: string;
}

export function Flashcard({ question, answer, category }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="w-full max-w-md cursor-pointer mx-auto mb-4 h-60"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute inset-0 ${isFlipped ? 'opacity-0 pointer-events-none' : ''} bg-white rounded-lg shadow-md p-6 flex flex-col`}>
          {category && (
            <span className="text-xs uppercase tracking-wide bg-health-100 text-health-800 py-1 px-2 rounded self-start mb-4">
              {category}
            </span>
          )}
          <div className="flex items-center justify-center flex-1">
            <h3 className="text-xl font-semibold">{question}</h3>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Clique para ver a resposta</p>
        </div>
        
        <div className={`absolute inset-0 ${isFlipped ? '' : 'opacity-0 pointer-events-none'} bg-health-50 rounded-lg shadow-md p-6 flex flex-col`}>
          {category && (
            <span className="text-xs uppercase tracking-wide bg-health-100 text-health-800 py-1 px-2 rounded self-start mb-2">
              {category}
            </span>
          )}
          <div className="flex flex-col justify-center flex-1">
            <p className="text-gray-600">{answer}</p>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Clique para ver a pergunta</p>
        </div>
      </div>
    </div>
  );
}
