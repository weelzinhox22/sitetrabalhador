
import { useState, useEffect } from 'react';
import { Check, Clock } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
}

interface StudyProgressProps {
  topics: Topic[];
}

export function StudyProgress({ topics }: StudyProgressProps) {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    // Carregar progresso salvo no localStorage
    const savedProgress = localStorage.getItem('studyProgress');
    if (savedProgress) {
      setCompletedTopics(JSON.parse(savedProgress));
    }
  }, []);
  
  const toggleTopic = (topicId: string) => {
    const newCompletedTopics = {
      ...completedTopics,
      [topicId]: !completedTopics[topicId]
    };
    
    setCompletedTopics(newCompletedTopics);
    localStorage.setItem('studyProgress', JSON.stringify(newCompletedTopics));
  };
  
  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercentage = topics.length > 0 ? Math.round((completedCount / topics.length) * 100) : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-xl font-semibold mb-3 text-health-700">Seu Progresso</h3>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-health-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600 mt-2 mb-4">{completedCount} de {topics.length} tópicos ({progressPercentage}%)</p>
      
      <div className="space-y-2 mt-4">
        {topics.map(topic => (
          <div 
            key={topic.id}
            className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 cursor-pointer"
            onClick={() => toggleTopic(topic.id)}
          >
            <span className="text-gray-700">{topic.name}</span>
            {completedTopics[topic.id] ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Clock size={18} className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
