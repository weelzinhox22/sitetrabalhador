
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatTime } from '@/utils/studyTimer';
import { Check, X, ChevronDown, ChevronUp, Clock, Trophy, PieChart } from 'lucide-react';
import { quizQuestions } from '@/data/quizQuestions';

interface QuizAnswer {
  questionId: number;
  selectedOption: string | null;
}

const QuizResults = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Retrieve quiz data from sessionStorage
    const savedAnswers = sessionStorage.getItem('quizAnswers');
    const savedTimeSpent = sessionStorage.getItem('quizTimeSpent');
    
    if (!savedAnswers) {
      navigate('/quiz');
      return;
    }
    
    const parsedAnswers: QuizAnswer[] = JSON.parse(savedAnswers);
    setAnswers(parsedAnswers);
    
    if (savedTimeSpent) {
      setTimeSpent(parseInt(savedTimeSpent));
    }
    
    // Calculate correct answers
    let correct = 0;
    parsedAnswers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (question && answer.selectedOption === question.correctAnswer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    
    setIsLoading(false);
  }, [navigate]);
  
  const toggleQuestionExpand = (questionId: number) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter(id => id !== questionId));
    } else {
      setExpandedQuestions([...expandedQuestions, questionId]);
    }
  };
  
  const isAnswerCorrect = (questionId: number) => {
    const answer = answers.find(a => a.questionId === questionId);
    const question = quizQuestions.find(q => q.id === questionId);
    return question && answer && answer.selectedOption === question.correctAnswer;
  };
  
  const getScoreMessage = () => {
    const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    
    if (percentage >= 90) {
      return "Excelente! Você domina o tema!";
    } else if (percentage >= 75) {
      return "Muito bom! Você está bem preparado!";
    } else if (percentage >= 60) {
      return "Bom! Continue estudando para melhorar ainda mais.";
    } else if (percentage >= 40) {
      return "Você precisa revisar alguns conceitos importantes.";
    } else {
      return "Recomendamos refazer o estudo do material completo.";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">Carregando resultados...</div>
        </div>
      </div>
    );
  }
  
  // Get all answered questions with their corresponding question data
  const answeredQuestions = answers
    .map(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      return { answer, question };
    })
    .filter(item => item.question !== undefined)
    .sort((a, b) => (a.question?.id || 0) - (b.question?.id || 0));
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-health-700">
            Resultados do Quiz
          </h1>
          
          {/* Summary Card */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-center">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="bg-green-100 text-green-800 p-4 rounded-full mb-2">
                  <Trophy size={32} />
                </div>
                <h2 className="text-3xl font-bold text-health-700">{correctAnswers}/{quizQuestions.length}</h2>
                <p className="text-gray-600">Respostas corretas</p>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="bg-blue-100 text-blue-800 p-4 rounded-full mb-2">
                  <PieChart size={32} />
                </div>
                <h2 className="text-3xl font-bold text-health-700">
                  {Math.round((correctAnswers / quizQuestions.length) * 100)}%
                </h2>
                <p className="text-gray-600">Aproveitamento</p>
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="bg-orange-100 text-orange-800 p-4 rounded-full mb-2">
                  <Clock size={32} />
                </div>
                <h2 className="text-2xl font-bold text-health-700">{formatTime(timeSpent)}</h2>
                <p className="text-gray-600">Tempo utilizado</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-lg font-medium">{getScoreMessage()}</p>
            </div>
          </Card>
          
          {/* Individual Questions Results */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Revisão das Questões</h2>
            
            {answeredQuestions.map(({ question, answer }) => {
              if (!question) return null;
              
              const isCorrect = answer.selectedOption === question.correctAnswer;
              const isExpanded = expandedQuestions.includes(question.id);
              
              return (
                <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                  <div 
                    className="p-4 flex justify-between items-start cursor-pointer"
                    onClick={() => toggleQuestionExpand(question.id)}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <X size={18} className="text-red-600" />
                        )}
                        <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          Questão {question.id} • {isCorrect ? 'Correta' : 'Incorreta'}
                        </span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                          question.difficulty === 'fácil' 
                            ? 'bg-green-100 text-green-800' 
                            : question.difficulty === 'médio'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm line-clamp-2">{question.question}</p>
                    </div>
                    
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t mt-2">
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Caso Clínico:</h3>
                        <p className="text-gray-700 text-sm whitespace-pre-line">{question.caseDescription}</p>
                      </div>
                      
                      <h3 className="font-medium mb-2">{question.question}</h3>
                      
                      <div className="space-y-2">
                        {question.options.map((option, idx) => (
                          <div 
                            key={idx} 
                            className={`p-2 rounded ${
                              option === question.correctAnswer
                                ? 'bg-green-100 border border-green-300'
                                : option === answer.selectedOption && option !== question.correctAnswer
                                  ? 'bg-red-100 border border-red-300'
                                  : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              {option === question.correctAnswer && (
                                <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                              )}
                              {option === answer.selectedOption && option !== question.correctAnswer && (
                                <X className="text-red-600 mt-0.5 flex-shrink-0" size={16} />
                              )}
                              <span>{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {!isCorrect && (
                        <div className="mt-4 bg-blue-50 p-3 rounded-md">
                          <h4 className="font-medium text-blue-800 mb-1">Explicação:</h4>
                          <p className="text-sm text-blue-700">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              onClick={() => navigate('/quiz')}
              className="bg-health-600 hover:bg-health-700"
            >
              Refazer Quiz
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
            >
              Voltar ao Material de Estudo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
