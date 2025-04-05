import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import QuizTheory from "./pages/QuizTheory"; 
import QuizTheoryResults from "./pages/QuizTheoryResults";
import NotFound from "./pages/NotFound";
import SinanInfo from "./pages/SinanInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sinaninfo" element={<SinanInfo />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-results" element={<QuizResults />} />
          <Route path="/quiztheory" element={<QuizTheory />} />
          <Route path="/quiztheoryresults" element={<QuizTheoryResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;