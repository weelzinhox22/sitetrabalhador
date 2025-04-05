
import { NavBar } from '@/components/NavBar';
import { SinanInfoCard } from '@/components/SinanInfoCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SinanInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-health-700">SINAN - Sistema Nacional de Notificação de Agravos</h1>
            <p className="text-gray-600 mt-1">Informações importantes para profissionais de saúde</p>
          </div>
          
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Material de Estudo
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SinanInfoCard />
          
          <div className="mt-8 flex justify-center">
            <Link to="/quiz">
              <Button className="bg-health-600 hover:bg-health-700">
                Ir para o Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinanInfo;
