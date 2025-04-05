import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatTime } from '@/utils/studyTimer';
import { CheckCircle, XCircle, Clock, Award, ArrowLeft } from 'lucide-react';
import { quizQuestionsTheory } from '@/data/quizQuestionsTheory';

interface QuizAnswer {
  questionId: number;
  selectedOption: string | null;
}

const QuizTheoryResults = () => {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState<any[]>([]);

  useEffect(() => {
    // Get answers and time from sessionStorage
    const storedAnswers = sessionStorage.getItem('quizTheoryAnswers');
    const storedTime = sessionStorage.getItem('quizTheoryTimeSpent');
    
    if (storedAnswers) {
      const parsedAnswers = JSON.parse(storedAnswers);
      setAnswers(parsedAnswers);
      
      // Calculate score
      let correctCount = 0;
      const withAnswers = parsedAnswers.map((answer: QuizAnswer) => {
        const question = quizQuestionsTheory.find(q => q.id === answer.questionId);
        const isCorrect = question && answer.selectedOption === question.correctAnswer;
        
        if (isCorrect) correctCount++;
        
        return {
          question,
          selectedOption: answer.selectedOption,
          isCorrect
        };
      });
      
      setQuestionsWithAnswers(withAnswers);
      setScore(correctCount);
      setPercentage(Math.round((correctCount / quizQuestionsTheory.length) * 100));
    }
    
    if (storedTime) {
      setTimeSpent(parseInt(storedTime));
    }
  }, []);

  const getResultMessage = () => {
    if (percentage >= 90) return "Excelente! Você domina o conteúdo teórico sobre Saúde do Trabalhador.";
    if (percentage >= 70) return "Muito bom! Você tem um bom conhecimento teórico sobre Saúde do Trabalhador.";
    if (percentage >= 50) return "Bom! Você tem conhecimento básico sobre Saúde do Trabalhador, mas pode melhorar.";
    return "Continue estudando! Revise o conteúdo teórico sobre Saúde do Trabalhador.";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 mb-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-health-700">
              Resultados do Quiz Teórico
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-health-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-health-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-health-800 mb-1">Pontuação</h3>
                <p className="text-3xl font-bold text-health-600">{score}/{quizQuestionsTheory.length}</p>
                <p className="text-lg font-medium text-health-800">{percentage}%</p>
              </div>
              
              <div className="bg-health-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="text-health-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-health-800 mb-1">Tempo</h3>
                <p className="text-3xl font-bold text-health-600">{formatTime(timeSpent)}</p>
                <p className="text-sm text-gray-600">de 90 minutos</p>
              </div>
              
              <div className="bg-health-50 p-4 rounded-lg text-center flex flex-col justify-center">
                <p className="text-lg font-medium text-health-800">{getResultMessage()}</p>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <Link to="/">
                <Button className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Voltar para o Material de Estudo
                </Button>
              </Link>
            </div>
            
            <h2 className="text-2xl font-semibold text-health-800 mb-4">Revisão das Questões</h2>
            
            <div className="space-y-6">
              {questionsWithAnswers.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${item.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`text-sm font-medium px-2 py-1 rounded uppercase ${item.isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      Questão {index + 1} - {item.question.difficulty}
                    </span>
                    {item.isCorrect ? (
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    ) : (
                      <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-2">{item.question.caseDescription}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.question.question}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {item.question.options.map((option: string, optIndex: number) => (
                      <div 
                        key={optIndex} 
                        className={`p-3 rounded-lg ${
                          option === item.question.correctAnswer 
                            ? 'bg-green-100 border border-green-300' 
                            : option === item.selectedOption && !item.isCorrect
                              ? 'bg-red-100 border border-red-300'
                              : 'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            {option}
                          </div>
                          {option === item.question.correctAnswer && (
                            <CheckCircle className="text-green-500 flex-shrink-0 ml-2" size={18} />
                          )}
                          {option === item.selectedOption && !item.isCorrect && (
                            <XCircle className="text-red-500 flex-shrink-0 ml-2" size={18} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-health-700 mb-1">Explicação:</h4>
                    <p className="text-gray-700">{item.question.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizTheoryResults;