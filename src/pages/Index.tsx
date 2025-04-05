import { useState, useEffect } from 'react';
import { NavBar } from '@/components/NavBar';
import { StudyCard } from '@/components/StudyCard';
import { StudyTable } from '@/components/StudyTable';
import { StudyProgress } from '@/components/StudyProgress';
import { Flashcard } from '@/components/Flashcard';
import { Book, FileText, CheckSquare, Clipboard, BookOpen, Users, Clock, Shield, BookOpen as BookIcon } from 'lucide-react';
import { formatTime, getTotalStudyTime, saveStudySession } from '@/utils/studyTimer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const studyTopics = [
  { id: 'legislacao', name: 'Legislação' },
  { id: 'orgaos', name: 'Órgãos Responsáveis' },
  { id: 'constituicao', name: 'Constituição Federal' },
  { id: 'clt', name: 'CLT' },
  { id: 'tipos-atividades', name: 'Tipos de Atividades de Risco' },
  { id: 'responsabilidades', name: 'Responsabilidades' },
  { id: 'lei-seguranca', name: 'Lei 6.514/77' },
  { id: 'normas', name: 'Normas Regulamentadoras' },
  { id: 'pnstt', name: 'PNSTT' },
  { id: 'programas', name: 'Programas e Comissões' },
  { id: 'fisioterapia', name: 'Fisioterapia e Saúde do Trabalhador' },
  { id: 'renast', name: 'Renast' },
  { id: 'sinan-info', name: 'SINAN' },
  { id: 'recursos-adicionais', name: 'Recursos Adicionais' },
  { id: 'imagens-ilustrativas', name: 'Imagens Ilustrativas' }
];

const ministryData = [
  { 
    nome: 'Ministério do Trabalho e Emprego (MTE)', 
    funcao: 'Regula e fiscaliza a saúde e segurança do trabalho'
  },
  { 
    nome: 'Ministério da Saúde', 
    funcao: 'Elabora políticas públicas, como a PNST' 
  },
  { 
    nome: 'Ministério da Previdência e Assistência Social', 
    funcao: 'Relacionado a benefícios por acidentes/doenças do trabalho (ex: INSS)' 
  },
  { 
    nome: 'Ministério do Meio Ambiente', 
    funcao: 'Atua na prevenção de riscos ambientais que afetam a saúde do trabalhador' 
  },
];

const tiposAtividadesData = [
  {
    tipo: 'Penosa',
    caracteristicas: 'Esforço físico excessivo, cansativo'
  },
  {
    tipo: 'Insalubre',
    caracteristicas: 'Contato com agentes nocivos (químicos, físicos, biológicos) acima do limite de tolerância'
  },
  {
    tipo: 'Perigosa',
    caracteristicas: 'Risco iminente à vida (explosivos, inflamáveis, eletricidade)'
  }
];

const programasData = [
  {
    sigla: 'SESMT',
    significado: 'Serviço Especializado em Segurança e Medicina do Trabalho',
    funcao: 'Exige profissionais como engenheiro, médico e técnico em segurança'
  },
  {
    sigla: 'CIPA (NR 5)',
    significado: 'Comissão Interna de Prevenção de Acidentes',
    funcao: 'Previne acidentes e doenças ocupacionais'
  },
  {
    sigla: 'PCMSO (NR 7)',
    significado: 'Programa de Controle Médico de Saúde Ocupacional',
    funcao: 'Promove e preserva a saúde dos trabalhadores'
  },
  {
    sigla: 'PPRA (NR 9) ou PGR',
    significado: 'Programa de Prevenção de Riscos Ambientais',
    funcao: 'Avaliação de riscos no ambiente de trabalho'
  }
];

const flashcardsData = [
  {
    question: 'Quais são os princípios do SUS aplicados à saúde do trabalhador?',
    answer: 'Universalidade (todos têm direito ao acesso à saúde), Integralidade (cuidado completo), Equidade (atendimento de acordo com as necessidades específicas).',
    category: 'SUS'
  },
  {
    question: 'O que é a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT)?',
    answer: 'Define princípios, diretrizes e estratégias que devem ser seguidos pelas três esferas de gestão (União, Estados e Municípios) com o objetivo de garantir atenção integral à saúde do trabalhador dentro do SUS.',
    category: 'Políticas'
  },
  {
    question: 'Qual a função da NR 17?',
    answer: 'A NR 17 trata de Ergonomia. É muito relevante para fisioterapeutas, pois estabelece parâmetros para adaptar as condições de trabalho às características psicofisiológicas dos trabalhadores.',
    category: 'Normas Regulamentadoras'
  },
  {
    question: 'O que é a Renast?',
    answer: 'A Renast (Rede Nacional de Atenção Integral à Saúde do Trabalhador) foi criada em 2002, dentro do SUS, com o objetivo de promover a saúde do trabalhador por meio de ações de promoção, prevenção, proteção, vigilância e assistência à saúde.',
    category: 'Redes de Atenção'
  },
  {
    question: 'Quais são as responsabilidades do fisioterapeuta na saúde do trabalhador?',
    answer: 'O fisioterapeuta atua na prevenção, promoção e reabilitação de doenças relacionadas ao trabalho, como LER/DORT, problemas posturais, avaliações ergonômicas, avaliações ocupacionais, reabilitação funcional para retorno ao trabalho e participação em CIPA e SESMT.',
    category: 'Fisioterapia'
  }
];

const Index = () => {
  const [studyTimer, setStudyTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    setTotalStudyTime(getTotalStudyTime());

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isTimerActive) {
      interval = window.setInterval(() => {
        setStudyTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive]);
  
  const handleStopTimer = () => {
    setIsTimerActive(false);
    if (studyTimer > 0 && activeSection) {
      saveStudySession(activeSection, studyTimer);
      setTotalStudyTime(prevTotal => prevTotal + studyTimer);
      setStudyTimer(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-health-700 mb-2">
                Fisioterapia na Saúde do Trabalhador
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Material completo sobre legislação, fiscalização e atuação profissional
              </p>
              
              <div className="mt-6">
                <Link to="/quiz">
                  <Button className="bg-health-600 hover:bg-health-700 flex items-center gap-2">
                    <BookIcon size={18} />
                    Testar conhecimentos no Quiz
                  </Button>
                </Link>
                <Link to="/sinaninfo" className="ml-4 inline-block">
                  <Button variant="outline" className="border-health-600 text-health-600 hover:bg-health-50 px-6 py-3 text-lg font-medium">
                    <FileText size={20} className="mr-2" />
                    Informações sobre o SINAN
                  </Button>
                </Link>
              </div>
            </header>
            
            <section className="study-section">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-health-800">
                    Material de Estudo
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Este material abrange todos os aspectos da Saúde do Trabalhador relevantes para a 
                    formação em Fisioterapia, focando em legislação, fiscalização e atuação profissional.
                  </p>
                </div>
                <div className="md:w-72 bg-health-50 p-4 rounded-lg shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Tempo total de estudo</p>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="text-health-600" size={20} />
                      <span className="text-xl font-mono">{formatTime(totalStudyTime)}</span>
                    </div>
                    
                    <div className="mt-3 flex flex-col xs:flex-row gap-2 justify-center">
                      {!isTimerActive ? (
                        <button 
                          onClick={() => setIsTimerActive(true)}
                          className="text-sm px-3 py-1 bg-health-600 text-white rounded hover:bg-health-700 transition-colors"
                        >
                          Iniciar Sessão
                        </button>
                      ) : (
                        <button 
                          onClick={handleStopTimer}
                          className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          Parar ({formatTime(studyTimer)})
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="study-highlight">
                <p className="font-medium">
                  Este material foi elaborado para facilitar sua preparação para provas e avaliações sobre
                  Fisioterapia na Saúde do Trabalhador, com foco na legislação vigente e competências profissionais.
                </p>
              </div>
            </section>
            
            <section id="legislacao" className="study-section">
              <h2><FileText size={24} className="mr-2" /> Saúde do Trabalhador (Legislação e Fiscalização)</h2>
              <p className="mb-4">
                A saúde do trabalhador é regida por um extenso conjunto de leis, normas e diretrizes que 
                visa garantir condições seguras e saudáveis no ambiente de trabalho, prevenindo acidentes 
                e doenças ocupacionais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <StudyCard 
                  title="Constituição Federal de 1988" 
                  icon={<FileText size={20} />}
                >
                  <p className="mb-3"><strong>Artigo 196</strong></p>
                  <blockquote className="italic border-l-4 border-health-300 pl-4 py-2 mb-4">
                    "A saúde é um direito de todos e dever do Estado, garantido mediante políticas 
                    sociais e econômicas."
                  </blockquote>
                  <p className="text-gray-600 mb-3">
                    <strong>Importante:</strong> a saúde deve ser integral, universal e equitativa — inclusive nos locais de trabalho.
                  </p>
                  
                  <p className="mb-2"><strong>Artigo 7º</strong></p>
                  <p>Direitos dos trabalhadores urbanos e rurais:</p>
                  <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                    <li>Seguro contra acidentes de trabalho (responsabilidade do empregador)</li>
                    <li>Proibição de trabalho noturno, perigoso ou insalubre para menores de 18 anos</li>
                    <li>Melhoria da condição social do trabalhador</li>
                  </ul>
                </StudyCard>
                
                <StudyCard 
                  title="CLT – Consolidação das Leis do Trabalho" 
                  icon={<Book size={20} />}
                >
                  <p className="mb-2">Criada em 1943, é o conjunto de normas que regem o trabalho com carteira assinada.</p>
                  <p className="mb-2">Garante direitos como:</p>
                  <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                    <li>Salário mínimo</li>
                    <li>Férias</li>
                    <li>13° salário</li>
                    <li>FGTS</li>
                    <li>Jornada de trabalho</li>
                    <li>Carteira de Trabalho (digital desde 2019)</li>
                    <li>INSS</li>
                  </ul>
                  
                  <p className="mt-3 text-health-700">
                    <strong>Artigo 29 da CLT:</strong> o empregador deve anotar admissão, alterações 
                    contratuais e rescisão na carteira de trabalho em até 5 dias úteis.
                  </p>
                </StudyCard>
                
                <StudyCard 
                  title="Lei 6.514/77 – Segurança e Medicina do Trabalho" 
                  icon={<Shield size={20} />}
                >
                  <p className="mb-2"><strong>Capítulo V:</strong></p>
                  <ul className="list-disc list-inside pl-4 text-gray-600 space-y-1">
                    <li>Empresas devem seguir normas federais, estaduais, municipais e convenções coletivas</li>
                    <li>Obrigações incluem prevenção de doenças ocupacionais e acidentes, e adoção de medidas de segurança</li>
                  </ul>
                  <p className="mt-3">
                    Esta lei estabeleceu as diretrizes para a criação das Normas Regulamentadoras (NRs) 
                    pelo Ministério do Trabalho e Emprego.
                  </p>
                </StudyCard>
                
                <StudyCard 
                  title="Responsabilidades das Empresas e Empregados (CLT)" 
                  icon={<CheckSquare size={20} />}
                  className="h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Empresas devem:</h4>
                      <ul className="list-disc list-inside pl-2 text-gray-600 space-y-1">
                        <li>Cumprir e fazer cumprir normas de segurança</li>
                        <li>Fornecer treinamentos e EPIs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Empregados devem:</h4>
                      <ul className="list-disc list-inside pl-2 text-gray-600 space-y-1">
                        <li>Observar e seguir as normas de segurança</li>
                        <li>Colaborar com a empresa na aplicação das normas</li>
                      </ul>
                    </div>
                  </div>
                </StudyCard>
              </div>
            </section>
            
            <section id="orgaos" className="study-section">
              <h2><Users size={24} className="mr-2" /> Órgãos Responsáveis pela Saúde do Trabalhador</h2>
              
              <StudyTable
                columns={[
                  { header: 'Ministério', accessor: 'nome' },
                  { header: 'Função Principal', accessor: 'funcao' }
                ]}
                data={ministryData}
              />
              
              <p className="mt-4">
                Estes órgãos trabalham em conjunto para garantir a proteção da saúde e segurança dos 
                trabalhadores através de políticas públicas, fiscalização e regulamentação.
              </p>
            </section>
            
            <section id="tipos-atividades" className="study-section">
              <h2><Shield size={24} className="mr-2" /> Tipos de Atividades de Risco</h2>
              
              <StudyTable
                columns={[
                  { header: 'Tipo', accessor: 'tipo' },
                  { header: 'Características', accessor: 'caracteristicas' }
                ]}
                data={tiposAtividadesData}
              />
              
              <div className="study-highlight mt-6">
                <h3 className="text-lg font-medium mb-2">Importância para a Fisioterapia:</h3>
                <p>
                  O fisioterapeuta deve compreender essas classificações para avaliar adequadamente os 
                  riscos aos quais os trabalhadores estão expostos e, consequentemente, planejar intervenções 
                  preventivas e terapêuticas mais eficazes.
                </p>
              </div>
            </section>
            
            <section id="normas" className="study-section">
              <h2><Clipboard size={24} className="mr-2" /> Normas Regulamentadoras (NRs)</h2>
              
              <p className="mb-4">
                Criadas pelo Ministério do Trabalho e Emprego para garantir a segurança e saúde dos trabalhadores.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-health-700 mb-3">NRs Gerais Importantes:</h3>
                  <ul className="space-y-2">
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 1:</span> Disposições gerais
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 3:</span> Embargo e interdição
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 4:</span> SESMT
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 5:</span> CIPA
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 7:</span> PCMSO
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 9:</span> PPRA/PGR
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 17:</span> Ergonomia <span className="text-red-500">(muito relevante para fisioterapeutas)</span>
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 28:</span> Fiscalização e penalidades
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-health-700 mb-3">NRs Específicas:</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 6:</span> EPI
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 10:</span> Segurança em instalações elétricas
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 15:</span> Atividades insalubres
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 16:</span> Atividades perigosas
                    </li>
                    <li className="bg-white p-3 rounded shadow-sm">
                      <span className="font-medium text-health-600">NR 32:</span> Saúde no trabalho em serviços de saúde <span className="text-red-500">(riscos biológicos, muito importante na fisioterapia hospitalar)</span>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-health-700 mb-3">NRs Setoriais:</h3>
                  <p className="text-gray-600 mb-2">
                    NR 18 (Construção civil), NR 22 (Mineração), NR 30 (Aquaviário),
                    NR 31 (Rural), NR 34, 36, 37 (Setores industriais específicos)
                  </p>
                  <p className="text-gray-600"><strong>Revogadas:</strong> NR 2, NR 27</p>
                </div>
              </div>
              
              <div className="study-highlight mt-6">
                <h3 className="text-lg font-medium">Destaque para o Fisioterapeuta:</h3>
                <p>
                  A <strong>NR 17 (Ergonomia)</strong> é a norma que mais se relaciona com a atuação do 
                  fisioterapeuta na saúde do trabalhador, pois estabelece parâmetros para adaptação das 
                  condições de trabalho às características psicofisiológicas dos trabalhadores.
                </p>
              </div>
            </section>
            
            <section id="politicas" className="study-section">
              <h2><BookOpen size={24} className="mr-2" /> Políticas e Programas em Saúde do Trabalhador</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-health-700 mb-3">
                  PNSTT – Política Nacional de Saúde do Trabalhador e da Trabalhadora
                </h3>
                <p className="mb-3"><strong>Instituída pela Portaria MS nº 1.823/2012</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-health-600">Objetivos:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Reduzir acidentes e doenças relacionadas ao trabalho</li>
                      <li>Promover a saúde no trabalho por meio do SUS</li>
                      <li>Aumentar o acesso dos trabalhadores à saúde</li>
                      <li>Monitorar ambientes e condições de trabalho</li>
                      <li>Incentivar participação dos trabalhadores nos Conselhos de Saúde</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-health-600">Princípios:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Universalidade</li>
                      <li>Integralidade</li>
                      <li>Equidade</li>
                      <li>Intersetorialidade (saúde, trabalho, previdência etc.)</li>
                    </ul>
                    
                    <h4 className="font-medium mt-4 mb-2 text-health-600">Abrange:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Atenção básica, média e alta complexidade</li>
                      <li>Notificações obrigatórias de doenças ocupacionais</li>
                      <li>Atuação dos CERESTs</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-health-700 mb-3">Renast</h3>
                <p className="mb-3">
                  A Renast (Rede Nacional de Atenção Integral à Saúde do Trabalhador) foi criada em 2002, 
                  dentro do Sistema Único de Saúde (SUS).
                </p>
                
                <h4 className="font-medium mb-2 text-health-600">Objetivos:</h4>
                <p>Promover a saúde do trabalhador por meio de ações de:</p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-4">
                  <li>Promoção</li>
                  <li>Prevenção</li>
                  <li>Proteção</li>
                  <li>Vigilância</li>
                  <li>Assistência à saúde</li>
                </ul>
                
                <h4 className="font-medium mb-2 text-health-600">Estrutura da Renast:</h4>
                <p className="mb-2">A Renast é composta por vários serviços, principalmente pelos Centros de Referência em Saúde do Trabalhador (Cerest):</p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700">
                  <li>Atuam em níveis estadual, regional e municipal</li>
                  <li>Prestam suporte técnico e assistência especializada</li>
                  <li>Existem mais de 200 Cerest ativos, cobrindo cerca de 70,7% das regiões de saúde do Brasil</li>
                  <li>Atendem mais de 84 milhões de trabalhadores</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-health-700 mb-3">
                  Programas e Comissões Importantes
                </h3>
                
                <StudyTable
                  columns={[
                    { header: 'Sigla', accessor: 'sigla' },
                    { header: 'Significado', accessor: 'significado' },
                    { header: 'Função', accessor: 'funcao' }
                  ]}
                  data={programasData}
                />
              </div>
            </section>
            
            <section id="atuacao" className="study-section">
              <h2><Users size={24} className="mr-2" /> Fisioterapia e Saúde do Trabalhador</h2>
              
              <p className="mb-5">
                A atuação do fisioterapeuta é fundamental na prevenção, promoção e reabilitação de doenças relacionadas ao trabalho.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StudyCard title="Prevenção" className="bg-health-50">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Análise ergonômica do trabalho</li>
                    <li>Palestras educativas</li>
                    <li>Ginástica laboral</li>
                    <li>Treinamento de postura e mecânica corporal</li>
                    <li>Avaliação de risco biomecânico</li>
                  </ul>
                </StudyCard>
                
                <StudyCard title="Avaliação" className="bg-health-50">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Avaliações ocupacionais</li>
                    <li>Testes de aptidão física</li>
                    <li>Identificação de fatores de risco</li>
                    <li>Análise de posto de trabalho</li>
                    <li>Exames periódicos</li>
                  </ul>
                </StudyCard>
                
                <StudyCard title="Reabilitação" className="bg-health-50">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Tratamento de LER/DORT</li>
                    <li>Reabilitação funcional</li>
                    <li>Restabelecimento da capacidade laboral</li>
                    <li>Adaptações do posto de trabalho</li>
                    <li>Reintegração ao ambiente laboral</li>
                  </ul>
                </StudyCard>
              </div>
              
              <div className="study-highlight mt-6">
                <h3 className="text-lg font-medium mb-2">Atuação em Equipe Multiprofissional:</h3>
                <p>
                  O fisioterapeuta na saúde do trabalhador frequentemente integra equipes multiprofissionais, 
                  colaborando com médicos do trabalho, engenheiros de segurança, ergonomistas, enfermeiros, 
                  psicólogos e outros profissionais para desenvolver abordagens abrangentes de prevenção e tratamento.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-health-700 mb-3">
                  Abordagem por Níveis de Atenção à Saúde
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <StudyCard title="Atenção Primária" icon={<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>}>
                    <p className="text-gray-600 text-sm mb-2">UBS, ambulatórios</p>
                    <p className="text-gray-700">
                      O fisioterapeuta deve mapear atividades produtivas, identificar riscos, notificar agravos, 
                      participar de atividades educativas e encaminhar trabalhadores para níveis de atenção adequados.
                    </p>
                  </StudyCard>
                  
                  <StudyCard title="Atenção Secundária" icon={<span className="inline-block w-4 h-4 bg-yellow-500 rounded-full"></span>}>
                    <p className="text-gray-600 text-sm mb-2">Clínicas especializadas</p>
                    <p className="text-gray-700">
                      Atendimento especializado para casos de LER/DORT, problemas posturais e outras condições 
                      relacionadas ao trabalho, com avaliação e tratamento específicos.
                    </p>
                  </StudyCard>
                  
                  <StudyCard title="Atenção Terciária" icon={<span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>}>
                    <p className="text-gray-600 text-sm mb-2">Hospitais de alta complexidade</p>
                    <p className="text-gray-700">
                      Tratamento especializado para lesões graves e reabilitação complexa, visando reintegração 
                      do trabalhador às suas atividades profissionais.
                    </p>
                  </StudyCard>
                </div>
              </div>
            </section>
            
            <section id="flashcards" className="study-section">
              <h2><BookOpen size={24} className="mr-2" /> Flashcards para Estudo</h2>
              
              <p className="mb-6">
                Utilize os flashcards abaixo para testar seus conhecimentos. Clique em cada card para 
                revelar a resposta.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {flashcardsData.map((flashcard, index) => (
                  <Flashcard 
                    key={index}
                    question={flashcard.question}
                    answer={flashcard.answer}
                    category={flashcard.category}
                  />
                ))}
              </div>
            </section>
            
            <section id="sinan-info" className="study-section">
              <h2><FileText size={24} className="mr-2" /> SINAN - Sistema de Informação de Agravos de Notificação</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-health-700 mb-3">O que é o SINAN?</h3>
                <p className="mb-4">
                  O SINAN (Sistema de Informação de Agravos de Notificação) é um sistema oficial do Ministério da Saúde 
                  para o registro e processamento de dados sobre agravos de notificação compulsória em todo o território nacional.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-health-600">Importância na Saúde do Trabalhador:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Permite a notificação de doenças e agravos relacionados ao trabalho</li>
                      <li>Possibilita a análise do perfil epidemiológico dos trabalhadores</li>
                      <li>Auxilia no planejamento de ações de vigilância em saúde do trabalhador</li>
                      <li>Contribui para a formulação de políticas públicas</li>
                      <li>Fornece dados para pesquisas e estudos epidemiológicos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-health-600">Agravos de Notificação Compulsória Relacionados ao Trabalho:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Acidentes de trabalho graves, fatais e com crianças/adolescentes</li>
                      <li>Acidentes com exposição a material biológico</li>
                      <li>Intoxicações exógenas (por substâncias químicas)</li>
                      <li>Lesões por Esforços Repetitivos/Distúrbios Osteomusculares (LER/DORT)</li>
                      <li>Perda Auditiva Induzida por Ruído (PAIR)</li>
                      <li>Pneumoconioses (silicose, asbestose, etc.)</li>
                      <li>Transtornos mentais relacionados ao trabalho</li>
                      <li>Câncer relacionado ao trabalho</li>
                      <li>Dermatoses ocupacionais</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-health-50 rounded-lg">
                  <h4 className="font-medium mb-2 text-health-600">Fluxo de Notificação:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Identificação do caso pelo profissional de saúde</li>
                    <li>Preenchimento da ficha de notificação</li>
                    <li>Envio da ficha para a vigilância epidemiológica municipal</li>
                    <li>Digitação dos dados no SINAN</li>
                    <li>Análise dos dados pelos níveis municipal, estadual e federal</li>
                    <li>Implementação de ações de vigilância e prevenção</li>
                  </ol>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-health-700 mb-3">Papel do Fisioterapeuta nas Notificações</h3>
                  <p className="mb-3">
                    O fisioterapeuta, como profissional de saúde, tem o dever de notificar casos suspeitos ou confirmados 
                    de doenças e agravos relacionados ao trabalho, especialmente:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>LER/DORT identificados durante avaliações e tratamentos</li>
                    <li>Acidentes de trabalho relatados pelos pacientes</li>
                    <li>Doenças ocupacionais com manifestações musculoesqueléticas</li>
                    <li>Condições de trabalho inadequadas relatadas pelos pacientes</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    A notificação contribui para a visibilidade das doenças ocupacionais e para o desenvolvimento 
                    de estratégias de prevenção mais eficazes.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-health-700 mb-3">Estatísticas Importantes</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">LER/DORT</p>
                      <p className="text-gray-700">Representam cerca de 70% das doenças ocupacionais notificadas no Brasil</p>
                    </div>
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Subnotificação</p>
                      <p className="text-gray-700">Estima-se que apenas 5-10% dos casos de doenças ocupacionais são notificados</p>
                    </div>
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Impacto Econômico</p>
                      <p className="text-gray-700">Doenças e acidentes de trabalho custam cerca de 4% do PIB global anualmente</p>
                    </div>
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Reabilitação</p>
                      <p className="text-gray-700">A fisioterapia pode reduzir em até 60% o tempo de afastamento do trabalho</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="recursos-adicionais" className="study-section">
              <h2><BookOpen size={24} className="mr-2" /> Recursos Adicionais e Curiosidades</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-health-700 mb-3">Vídeos Recomendados</h3>
                  <ul className="space-y-4">
                    <li className="border-b pb-3">
                      <h4 className="font-medium text-health-600">Ergonomia no Ambiente de Trabalho</h4>
                      <p className="text-gray-700 mb-2">Orientações práticas sobre ajustes ergonômicos para prevenção de LER/DORT</p>
                      <a href="https://youtu.be/s-O9CR8qMi4" target="_blank" rel="noopener noreferrer" className="text-health-600 hover:underline flex items-center">
                        <span>Assistir no YouTube</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li className="border-b pb-3">
                      <h4 className="font-medium text-health-600">Ginástica Laboral - Exercícios Práticos</h4>
                      <p className="text-gray-700 mb-2">Série de exercícios para implementação em empresas</p>
                      <a href="https://www.youtube.com/shorts/VnMBw5TrFBE" target="_blank" rel="noopener noreferrer" className="text-health-600 hover:underline flex items-center">
                        <span>Assistir no YouTube</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <h4 className="font-medium text-health-600">Avaliação Ergonômica - Passo a Passo</h4>
                      <p className="text-gray-700 mb-2">Tutorial completo sobre como realizar uma avaliação ergonômica</p>
                      <a href="https://youtu.be/ibaRiG11PYs" target="_blank" rel="noopener noreferrer" className="text-health-600 hover:underline flex items-center">
                        <span>Assistir no YouTube</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-health-700 mb-3">Curiosidades</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Você sabia?</p>
                      <p className="text-gray-700">A primeira lei sobre saúde ocupacional no Brasil foi criada em 1919, com o Decreto 3.724, que regulamentou as obrigações resultantes de acidentes de trabalho.</p>
                    </div>
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Curiosidade histórica</p>
                      <p className="text-gray-700">Bernardino Ramazzini (1633-1714) é considerado o "Pai da Medicina Ocupacional". Em seu livro "As Doenças dos Trabalhadores", ele já descrevia mais de 50 doenças relacionadas ao trabalho.</p>
                    </div>
                    <div className="p-3 bg-health-50 rounded-lg">
                      <p className="font-medium text-health-700">Fisioterapia do Trabalho</p>
                      <p className="text-gray-700">A especialidade de Fisioterapia do Trabalho foi reconhecida pelo COFFITO apenas em 2009, através da Resolução nº 351.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-health-700 mb-3">Principais Doenças Ocupacionais na Prática Fisioterapêutica</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Síndrome do Túnel do Carpo</h4>
                    <p className="text-gray-700 text-sm mb-2">Compressão do nervo mediano no punho, comum em digitadores e operadores de caixa.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Fisioterapia com ultrassom, eletroterapia, exercícios, órteses e orientações ergonômicas.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Epicondilite Lateral</h4>
                    <p className="text-gray-700 text-sm mb-2">Inflamação na inserção dos músculos extensores do punho, comum em trabalhadores manuais.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Laser, ondas de choque, exercícios excêntricos e modificação das atividades laborais.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Lombalgia Ocupacional</h4>
                    <p className="text-gray-700 text-sm mb-2">Dor lombar relacionada a esforços, posturas inadequadas ou vibração.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Terapia manual, exercícios de estabilização, escola de coluna e adequação ergonômica.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Síndrome do Impacto</h4>
                    <p className="text-gray-700 text-sm mb-2">Compressão dos tendões do manguito rotador, comum em trabalhadores que elevam os braços.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Cinesioterapia, mobilização articular, eletroterapia e correção postural.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Cervicalgia Tensional</h4>
                    <p className="text-gray-700 text-sm mb-2">Dor cervical por tensão muscular, comum em trabalhos com computador.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Alongamentos, relaxamento miofascial, termoterapia e ergonomia.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-health-600 mb-2">Tenossinovite de De Quervain</h4>
                    <p className="text-gray-700 text-sm mb-2">Inflamação dos tendões do polegar, comum em digitadores e cuidadores.</p>
                    <p className="text-gray-700 text-sm"><strong>Tratamento:</strong> Crioterapia, ultrassom, órteses e modificação das atividades.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="imagens-ilustrativas" className="study-section">
              <h2><FileText size={24} className="mr-2" /> Imagens Ilustrativas (não adicionei fotos e provavelmente não irei)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="font-medium text-health-700 mb-2">Análise Ergonômica do Posto de Trabalho</h3>
                    <p className="text-gray-700 text-sm">Exemplo de avaliação ergonômica realizada pelo fisioterapeuta do trabalho, identificando fatores de risco e propondo melhorias.</p>
                  </div>
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">[Imagem ilustrativa de análise ergonômica]</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="font-medium text-health-700 mb-2">Fluxograma de Notificação no SINAN</h3>
                    <p className="text-gray-700 text-sm">Processo de notificação de doenças e agravos relacionados ao trabalho no Sistema de Informação de Agravos de Notificação.</p>
                  </div>
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">[Fluxograma do SINAN]</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="font-medium text-health-700 mb-2">Ginástica Laboral</h3>
                    <p className="text-gray-700 text-sm">Exemplos de exercícios para implementação em programas de ginástica laboral.</p>
                  </div>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">[Imagem de ginástica laboral]</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="font-medium text-health-700 mb-2">Mapa de Riscos</h3>
                    <p className="text-gray-700 text-sm">Exemplo de mapa de riscos ocupacionais utilizado em empresas.</p>
                  </div>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">[Mapa de riscos]</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="font-medium text-health-700 mb-2">Equipamentos de Avaliação</h3>
                    <p className="text-gray-700 text-sm">Instrumentos utilizados pelo fisioterapeuta na avaliação ergonômica e funcional.</p>
                  </div>
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">[Equipamentos de avaliação]</p>
                  </div>
                </div>
              </div>
            </section>
            
            <footer className="mt-12 pt-6 border-t text-center text-gray-600">
              <p> 2025 StudyWel - Todos os direitos reservados.</p>
              <p className="text-sm mt-1">Material de estudo para uso educacional.</p>
            </footer>
          </div>
          
          <div className="md:w-80 space-y-6">
            <div className="sticky top-24">
              <StudyProgress topics={studyTopics} />
              
              <div className="bg-white rounded-lg shadow-md p-5 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-health-700">Dicas de Estudo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Faça mapas mentais para conectar conceitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Estude regularmente, não apenas na véspera da prova</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Responda a questões de provas anteriores sobre o tema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Explique o conteúdo em voz alta como se estivesse ensinando</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="text-health-600 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Relacione os conceitos com exemplos práticos da atuação do fisioterapeuta</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-health-50 rounded-lg shadow-md p-5 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-health-700">Avalie seu conhecimento</h3>
                <p className="text-gray-700 mb-3">
                  Faça nosso quiz completo com 50 questões sobre Fisioterapia na Saúde do Trabalhador, incluindo casos clínicos de diferentes níveis de dificuldade.
                </p>
                <Link to="/quiz" className="block">
                  <Button className="w-full bg-health-600 hover:bg-health-700">
                    Iniciar Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
