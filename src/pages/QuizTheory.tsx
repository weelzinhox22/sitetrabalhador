import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formatTime } from '@/utils/studyTimer';
import { Clock, CheckSquare, AlarmClock, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { quizQuestionsTheory } from '@/data/quizQuestionsTheory';

interface QuizAnswer {
  questionId: number;
  selectedOption: string | null;
}

const QuizTheory = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState([...quizQuestionsTheory]);
  const [pageVisibility, setPageVisibility] = useState(true);

  // Shuffle questions when the component is mounted
  useEffect(() => {
    const shuffled = [...quizQuestionsTheory].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
    
    // Initialize answers
    const initialAnswers = shuffled.map(q => ({
      questionId: q.id,
      selectedOption: null,
    }));
    setAnswers(initialAnswers);
  }, []);

  // Timer countdown
  useEffect(() => {
    let interval: number | null = null;

    if (quizStarted && !quizFinished && timeRemaining > 0) {
      interval = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [quizStarted, quizFinished, timeRemaining]);

  // Show warning when 5 minutes remaining
  useEffect(() => {
    if (timeRemaining === 300) { // 5 minutes
      setShowWarning(true);
      toast({
        title: "Atenção!",
        description: "Restam apenas 5 minutos para finalizar o quiz.",
        variant: "destructive",
      });
    }
  }, [timeRemaining, toast]);

  // Page visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && quizStarted && !quizFinished) {
        finishQuiz();
        toast({
          title: "Quiz finalizado automaticamente",
          description: "Você saiu da página do quiz. Por segurança, o quiz foi finalizado.",
          variant: "destructive",
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [quizStarted, quizFinished]);

  const startQuiz = () => {
    setQuizStarted(true);
    toast({
      title: "Quiz iniciado!",
      description: "Você tem 90 minutos para completar todas as questões.",
    });
  };

  const handleAnswerChange = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].selectedOption = value;
    setAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    // Only allow proceeding if an answer is selected
    if (answers[currentQuestionIndex].selectedOption !== null) {
      if (currentQuestionIndex < randomizedQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      toast({
        title: "Selecione uma resposta",
        description: "Por favor, selecione uma resposta antes de avançar.",
        variant: "destructive",
      });
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    
    // Calculate results
    const answeredQuestions = answers.filter(a => a.selectedOption !== null);
    
    // Store results in sessionStorage
    sessionStorage.setItem('quizTheoryAnswers', JSON.stringify(answers));
    sessionStorage.setItem('quizTheoryTimeSpent', (90 * 60 - timeRemaining).toString());
    
    toast({
      title: "Quiz finalizado!",
      description: `Você respondeu ${answeredQuestions.length} de ${randomizedQuestions.length} questões.`,
    });
    
    // Navigate to results page
    navigate('/quiztheoryresults');
  };

  const confirmFinishQuiz = () => {
    const answeredQuestions = answers.filter(a => a.selectedOption !== null);
    
    if (answeredQuestions.length < randomizedQuestions.length) {
      toast({
        title: "Atenção!",
        description: `Você respondeu apenas ${answeredQuestions.length} de ${randomizedQuestions.length} questões. Tem certeza que deseja finalizar?`,
        action: (
          <Button onClick={finishQuiz} variant="destructive" size="sm">
            Finalizar
          </Button>
        ),
      });
    } else {
      finishQuiz();
    }
  };

  const currentQuestion = randomizedQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];
  
  // Quiz not started yet - show start screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <h1 className="text-3xl font-bold text-center mb-6 text-health-700">
                Quiz Teórico - Fisioterapia na Saúde do Trabalhador
              </h1>
              
              <div className="space-y-6 text-center">
                <div className="bg-health-50 p-5 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Instruções:</h2>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Clock className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>O quiz tem duração máxima de <strong>90 minutos</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>São <strong>{randomizedQuestions.length} questões</strong> teóricas de diferentes níveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlarmClock className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>Você deve selecionar uma resposta antes de avançar para a próxima questão</span>
                    </li>
                    <li className="flex items-start gap-2 text-red-600 font-medium">
                      <AlertTriangle className="flex-shrink-0 mt-1" size={18} />
                      <span>ATENÇÃO: Se você sair desta página durante o quiz, ele será finalizado automaticamente!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>Ao finalizar, você verá quais questões acertou e errou</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  className="bg-health-600 hover:bg-health-700 px-8 py-6 text-lg"
                  onClick={startQuiz}
                >
                  Iniciar Quiz
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Questão</span>
                <span className="bg-health-100 text-health-800 font-medium px-3 py-1 rounded-full">
                  {currentQuestionIndex + 1} / {randomizedQuestions.length}
                </span>
              </div>
              
              <div className={`flex items-center gap-2 ${timeRemaining <= 300 ? 'text-red-500' : 'text-gray-700'}`}>
                <Clock size={18} />
                <span className="font-mono">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="bg-health-50 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="bg-health-200 text-health-800 text-xs font-medium px-2 py-1 rounded uppercase">
                    {currentQuestion.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{currentQuestion.caseDescription}</p>
                <h3 className="text-xl font-semibold text-health-800 mb-2">{currentQuestion.question}</h3>
              </div>
              
              <RadioGroup 
                value={currentAnswer?.selectedOption || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <RadioGroupItem value={option} id={`option-${index}`} className="mt-1" />
                    <label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Anterior
              </Button>
              
              <div className="flex gap-2">
                {currentQuestionIndex === randomizedQuestions.length - 1 ? (
                  <Button 
                    className="bg-health-600 hover:bg-health-700"
                    onClick={confirmFinishQuiz}
                  >
                    Finalizar Quiz
                  </Button>
                ) : (
                  <Button 
                    className="bg-health-600 hover:bg-health-700"
                    onClick={goToNextQuestion}
                  >
                    Próxima
                  </Button>
                )}
              </div>
            </div>
          </Card>
          
          <div className="mt-6 flex justify-center">
            <Button 
              variant="outline" 
              className="text-red-500 border-red-300 hover:bg-red-50"
              onClick={confirmFinishQuiz}
            >
              Encerrar Quiz Antecipadamente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTheory;