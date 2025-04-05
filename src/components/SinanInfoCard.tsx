
import { StudyCard } from './StudyCard';
import { AlertCircle, FileText, Activity, ClipboardList } from 'lucide-react';

export const SinanInfoCard = () => {
  return (
    <div className="space-y-6">
      <StudyCard 
        title="SINAN - Sistema Nacional de Notificação de Agravos" 
        icon={<FileText />}
        className="border-l-4 border-l-blue-500"
      >
        <div className="space-y-4">
          <p>
            É um sistema de informação implantado pelo Ministério da Saúde que coleta, armazena 
            e difunde dados obtidos pelo Sistema de Vigilância Epidemiológica, auxiliando 
            na análise das informações e no planejamento de todas as ações em saúde.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Importância do SINAN
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>
                As informações do SINAN mostram as causas de morte e adoecimento dos trabalhadores, 
                associando-as com o ramo de atividade econômica e os processos de trabalho de forma integrada.
              </li>
              <li>
                Por meio dessas informações, é possível estabelecer ações para promoção da saúde dos trabalhadores, 
                prevenção, controle de agravos e doenças relacionados ao trabalho.
              </li>
              <li>
                Contribui para a redução dos riscos e danos à saúde do trabalhador e oferece melhores condições de trabalho.
              </li>
            </ul>
          </div>
        </div>
      </StudyCard>
      
      <StudyCard 
        title="Notificação Compulsória no SINAN" 
        icon={<ClipboardList />}
        className="border-l-4 border-l-orange-500"
      >
        <div className="space-y-4">
          <p>
            É importante que os fisioterapeutas saibam como e quando notificar, ou seja, realizar a 
            comunicação de agravo ou doença, uma vez que compete aos profissionais de saúde e 
            responsáveis por serviços de saúde realizar a notificação compulsória.
          </p>
          
          <div className="bg-orange-50 p-4 rounded-md">
            <h4 className="font-medium text-orange-800 mb-2">Portaria nº 205 do MS - Agravos de Notificação Compulsória:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Acidente de trabalho fatal
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Acidentes com mutilações
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Acidentes com material biológico
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Dermatoses ocupacionais
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Intoxicações exógenas
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                LER/DORT
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Pneumoconioses
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                PAIR (Perda Auditiva Induzida por Ruído)
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Transtornos mentais relacionados ao trabalho
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded border border-orange-200">
                <span className="bg-orange-100 text-orange-500 p-1 rounded-full">•</span>
                Câncer relacionado ao trabalho
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Como notificar:</h4>
            <p>
              A notificação deve ser realizada quando o profissional suspeitar ou diagnosticar 
              agravo e/ou uma das doenças relacionadas ao trabalho que compõem a lista de 
              notificação compulsória, nas fichas de investigação própria do agravo no sistema SINAN net 
              nas unidades de saúde.
            </p>
            <p className="mt-2">
              No caso do município que não tenha rede informatizada nas unidades, caberá à 
              Secretaria Municipal de Saúde efetuar o registro no sistema.
            </p>
          </div>
        </div>
      </StudyCard>
      
      <StudyCard 
        title="Fluxograma de Ações e Vigilância em Saúde do Trabalhador" 
        icon={<AlertCircle />}
        className="border-l-4 border-l-green-500"
      >
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md border">
            <h4 className="font-medium mb-3 text-center">Fluxograma de Notificação e Vigilância</h4>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-green-100 p-3 rounded-md w-full md:w-3/4 text-center">
                Acidentes de trabalho, intoxicação, doenças relacionadas ao trabalho
              </div>
              <div className="text-green-600">↓</div>
              <div className="bg-blue-100 p-3 rounded-md w-full md:w-3/4 text-center">
                Notificar ao SINAN para investigação epidemiológica
              </div>
              <div className="text-green-600">↓</div>
              <div className="bg-orange-100 p-3 rounded-md w-full md:w-3/4 text-center">
                Vigilância em Saúde
              </div>
              <div className="flex flex-col md:flex-row justify-center w-full gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-green-600">↓</div>
                  <div className="bg-purple-100 p-3 rounded-md text-center w-full">
                    CEREST: Assistência e vigilância
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-green-600">↓</div>
                  <div className="bg-indigo-100 p-3 rounded-md text-center w-full">
                    Investigação do agravo, condições de trabalho, investigação epidemiológica
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Ações da Vigilância em Saúde abrangem:</h4>
            
            <div className="space-y-4 mt-3">
              <div className="border-l-4 border-l-blue-400 p-3 bg-blue-50">
                <h5 className="font-medium text-blue-700">1. Vigilância Epidemiológica (VE)</h5>
                <p className="mt-1 text-sm">
                  Realiza a vigilância e o controle das doenças transmissíveis e dos agravos não 
                  transmissíveis por meio de conhecimento e reconhecimento de fatores determinantes 
                  da saúde individual e coletiva com a finalidade de recomendar medidas de 
                  prevenção e controle das doenças e dos agravos.
                </p>
                <h6 className="mt-2 font-medium text-sm">Atribuições da VE:</h6>
                <ul className="pl-5 list-disc text-sm space-y-1 mt-1">
                  <li>Elaborar o perfil epidemiológico dos trabalhadores em uma dada região</li>
                  <li>Disponibilizar e monitorar indicadores de morbidade e mortalidade por causas</li>
                  <li>Fornecer dados que permitam a análise causal entre o trabalho e o adoecimento</li>
                  <li>Capacitar profissionais de saúde para realizar a notificação compulsória</li>
                  <li>Produzir boletins epidemiológicos para auxiliar no planejamento de ações</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-l-red-400 p-3 bg-red-50">
                <h5 className="font-medium text-red-700">2. Vigilância em Saúde do Trabalhador (VISAT)</h5>
                <p className="mt-1 text-sm">
                  Tem como objetivo identificar a existência de riscos nos ambientes e processos 
                  de trabalho e de casos de agravos e doenças relacionadas ao trabalho para 
                  planejamento de ações, a fim de minimizar riscos e proteger a saúde dos trabalhadores.
                </p>
                <p className="mt-2 text-sm">
                  Deve ser incorporada às ações desenvolvidas pelas equipes de atenção básica, 
                  que devem identificar e mapear o perfil produtivo do território, ou seja, 
                  identificar as atividades produtivas realizadas no território e a presença de 
                  situações de risco para a saúde dos trabalhadores, da população em geral e do ambiente.
                </p>
              </div>
              
              <div className="border-l-4 border-l-green-400 p-3 bg-green-50">
                <h5 className="font-medium text-green-700">3. Vigilância Sanitária (VS) e Vigilância em Saúde Ambiental (VA)</h5>
                <p className="mt-1 text-sm">
                  A vigilância dos ambientes e dos processos de trabalho pelo SUS deve ser 
                  desenvolvida de forma integrada com a VS e a VA.
                </p>
                <p className="mt-2 text-sm">
                  As ações de vigilância e fiscalização sanitária devem levar em consideração, além do produto, 
                  o consumidor, as condições de trabalho e a saúde dos trabalhadores.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Medidas de Prevenção de Doenças e Proteção dos Trabalhadores:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-md">
                <h5 className="font-medium text-green-700 mb-2">Medidas Coletivas</h5>
                <ul className="space-y-1 pl-5 list-disc text-sm">
                  <li>Substituição de agentes ou substâncias tóxicas no processo produtivo</li>
                  <li>Controle de engenharia para melhorar condições dos ambientes</li>
                  <li>Sistemas de exaustão e ventilação do ar</li>
                  <li>Manutenção preventiva</li>
                  <li>Mudanças na organização do trabalho</li>
                  <li>Mecanização de tarefas</li>
                  <li>Rodízio de atividades</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h5 className="font-medium text-blue-700 mb-2">Medidas Individuais</h5>
                <ul className="space-y-1 pl-5 list-disc text-sm">
                  <li>Equipamentos de Proteção Individual (EPIs)</li>
                  <li>Protetores auriculares</li>
                  <li>Luvas</li>
                  <li>Óculos de proteção</li>
                  <li>Controles médicos</li>
                  <li>Exames médicos periódicos</li>
                  <li>Educação ao trabalhador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </StudyCard>
      
      <div className="text-sm text-gray-500 text-center mt-6">
        © Todos os direitos reservados - StudyWel
      </div>
    </div>
  );
};
