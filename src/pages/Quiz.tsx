
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formatTime } from '@/utils/studyTimer';
import { Clock, CheckSquare, AlarmClock, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { quizQuestions } from '@/data/quizQuestions';

interface QuizAnswer {
  questionId: number;
  selectedOption: string | null;
}

const Quiz = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState([...quizQuestions]);
  const [pageVisibility, setPageVisibility] = useState(true);

  // Shuffle questions when the component is mounted
  useEffect(() => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
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
    sessionStorage.setItem('quizAnswers', JSON.stringify(answers));
    sessionStorage.setItem('quizTimeSpent', (90 * 60 - timeRemaining).toString());
    
    toast({
      title: "Quiz finalizado!",
      description: `Você respondeu ${answeredQuestions.length} de ${randomizedQuestions.length} questões.`,
    });
    
    // Navigate to results page
    navigate('/quiz-results');
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
                Quiz - Fisioterapia na Saúde do Trabalhador
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
                      <span>São <strong>{randomizedQuestions.length} questões</strong> com casos clínicos de diferentes níveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlarmClock className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>Você deve selecionar uma resposta antes de avançar para a próxima questão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-health-600 flex-shrink-0 mt-1" size={18} />
                      <span>Ao finalizar, você verá quais questões acertou e errou</span>
                    </li>
                    <li className="flex items-start gap-2 text-red-600 font-medium">
                      <AlertTriangle className="flex-shrink-0 mt-1" size={18} />
                      <span>ATENÇÃO: Se você sair desta página durante o quiz, ele será finalizado automaticamente!</span>
                    </li>
                    <li className="flex items-start gap-2 text-blue-600">
                      <CheckSquare className="flex-shrink-0 mt-1" size={18} />
                      <span>As questões são exibidas em ordem aleatória para cada tentativa</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  onClick={startQuiz} 
                  size="lg" 
                  className="bg-health-600 hover:bg-health-700"
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
          {/* Timer and progress bar */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium">Questão {currentQuestionIndex + 1} de {randomizedQuestions.length}</span>
              <div className="w-full md:w-48 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-health-600 h-2.5 rounded-full" 
                  style={{width: `${((currentQuestionIndex + 1) / randomizedQuestions.length) * 100}%`}}
                ></div>
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${showWarning ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-health-50 text-health-700'}`}>
              <Clock size={20} />
              <span className="font-mono font-medium">{formatTime(timeRemaining)}</span>
            </div>
          </div>

          {/* Question */}
          <Card className="p-6 mb-6">
            <div className="mb-2 flex justify-between">
              <span className={`text-sm font-medium px-2 py-1 rounded ${
                currentQuestion.difficulty === 'fácil' 
                  ? 'bg-green-100 text-green-800' 
                  : currentQuestion.difficulty === 'médio'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}>
                Nível: {currentQuestion.difficulty}
              </span>
              
              <span className="text-sm text-gray-500">
                ID: {currentQuestion.id}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-4">Caso Clínico:</h2>
            <p className="mb-6 text-gray-700 whitespace-pre-line">{currentQuestion.caseDescription}</p>

            <h3 className="font-medium mb-4">{currentQuestion.question}</h3>

            <RadioGroup 
              value={currentAnswer?.selectedOption || ""}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <label 
                  key={index} 
                  className="flex items-start gap-2 p-3 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer"
                  htmlFor={`option-${index}`}
                >
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`} 
                    className="mt-0.5"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </RadioGroup>
          </Card>

          {/* Navigation buttons */}
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <Button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                variant="outline"
              >
                Anterior
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={confirmFinishQuiz}
                variant="destructive"
              >
                Finalizar Quiz
              </Button>
              
              <Button
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === randomizedQuestions.length - 1}
                className={answers[currentQuestionIndex].selectedOption === null ? "animate-pulse" : ""}
              >
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
