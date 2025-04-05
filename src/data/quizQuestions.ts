
export interface QuizQuestion {
  id: number;
  difficulty: 'fácil' | 'médio' | 'difícil';
  caseDescription: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // QUESTÕES FÁCEIS
  {
    id: 1,
    difficulty: 'fácil',
    caseDescription: "Trabalhador de 32 anos, operador de máquina em indústria metalúrgica, apresenta queixa de dor lombar após 3 anos de trabalho na mesma função. Em sua rotina, realiza levantamento de cargas de aproximadamente 20kg várias vezes ao dia. Em avaliação ergonômica, foi observada flexão excessiva de tronco durante o levantamento.",
    question: "Qual norma regulamentadora está diretamente relacionada à prevenção deste tipo de lesão ocupacional?",
    options: [
      "NR 6 - Equipamentos de Proteção Individual",
      "NR 10 - Segurança em Instalações Elétricas",
      "NR 17 - Ergonomia",
      "NR 32 - Segurança em Serviços de Saúde"
    ],
    correctAnswer: "NR 17 - Ergonomia",
    explanation: "A NR 17 (Ergonomia) é a norma que estabelece parâmetros para adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, incluindo levantamento, transporte e descarga de materiais. Esta norma visa prevenir problemas posturais e musculoesqueléticos, como a lombalgia ocupacional."
  },
  {
    id: 2,
    difficulty: 'fácil',
    caseDescription: "Auxiliar de limpeza de 45 anos trabalha há 5 anos em uma unidade hospitalar. Recentemente, sofreu um acidente com material perfurocortante ao recolher o lixo de um consultório.",
    question: "Qual norma regulamentadora está especificamente voltada para a proteção dos trabalhadores de serviços de saúde expostos a riscos biológicos?",
    options: [
      "NR 9 - PPRA",
      "NR 15 - Atividades Insalubres",
      "NR 24 - Condições Sanitárias",
      "NR 32 - Segurança e Saúde no Trabalho em Serviços de Saúde"
    ],
    correctAnswer: "NR 32 - Segurança e Saúde no Trabalho em Serviços de Saúde",
    explanation: "A NR 32 é específica para estabelecimentos de saúde e visa proteger os trabalhadores dos riscos biológicos, químicos, radiações ionizantes e outros riscos específicos dos ambientes de saúde. Ela estabelece diretrizes para prevenção de acidentes com perfurocortantes e contato com material biológico."
  },
  {
    id: 3,
    difficulty: 'fácil',
    caseDescription: "Uma empresa de construção civil contratou um fisioterapeuta para implementar um programa de prevenção de lesões ocupacionais para seus funcionários.",
    question: "Qual das seguintes ações NÃO é atribuição do fisioterapeuta na saúde do trabalhador?",
    options: [
      "Realizar análise ergonômica do posto de trabalho",
      "Prescrever exercícios de ginástica laboral",
      "Emitir atestado de saúde ocupacional (ASO)",
      "Orientar sobre mecânica corporal adequada"
    ],
    correctAnswer: "Emitir atestado de saúde ocupacional (ASO)",
    explanation: "A emissão de Atestado de Saúde Ocupacional (ASO) é uma atribuição exclusiva do médico do trabalho, não sendo permitida ao fisioterapeuta. O fisioterapeuta pode realizar avaliações funcionais, análises ergonômicas, prescrever exercícios e fornecer orientações posturais, mas não pode emitir ASO."
  },
  {
    id: 4,
    difficulty: 'fácil',
    caseDescription: "Trabalhador de 29 anos, digitador, relata dor e formigamento nos dedos e punho direito após jornadas prolongadas de trabalho. Os sintomas pioram à noite e melhoram com repouso.",
    question: "Qual é o provável diagnóstico deste quadro e qual a principal medida preventiva que deveria ser adotada?",
    options: [
      "Epicondilite lateral; uso de tala noturna",
      "Síndrome do Túnel do Carpo; adequação ergonômica do posto de trabalho",
      "Tendinite do supraespinhoso; afastamento definitivo da função",
      "Síndrome do Desfiladeiro Torácico; mudança de profissão"
    ],
    correctAnswer: "Síndrome do Túnel do Carpo; adequação ergonômica do posto de trabalho",
    explanation: "Os sintomas descritos são característicos da Síndrome do Túnel do Carpo, comum em digitadores devido aos movimentos repetitivos. A adequação ergonômica do posto de trabalho, seguindo a NR 17, é a principal medida preventiva, incluindo ajuste de altura do teclado, cadeira, monitor, além de pausas periódicas."
  },
  {
    id: 5,
    difficulty: 'fácil',
    caseDescription: "Motorista de ônibus urbano de 50 anos apresenta dor lombar crônica que piora após longas jornadas sentado. O exame físico revela contratura da musculatura paravertebral e diminuição da lordose lombar.",
    question: "Qual intervenção fisioterapêutica seria mais indicada para este caso no ambiente de trabalho?",
    options: [
      "Aplicação de TENS durante intervalos de trabalho",
      "Orientações ergonômicas e exercícios para serem realizados durante pausas",
      "Encaminhamento para cirurgia de hérnia de disco",
      "Recomendação de afastamento permanente da função"
    ],
    correctAnswer: "Orientações ergonômicas e exercícios para serem realizados durante pausas",
    explanation: "Para casos de dor lombar relacionada à postura mantida, as orientações ergonômicas (ajuste do banco, uso de apoio lombar) e a realização de exercícios específicos durante as pausas são as intervenções mais apropriadas no ambiente de trabalho, pois atuam diretamente nos fatores causais sem necessidade de afastamento."
  },
  {
    id: 6,
    difficulty: 'fácil',
    caseDescription: "Uma empresa desenvolvedora de software com 150 funcionários deseja implementar um programa de prevenção de LER/DORT.",
    question: "De acordo com as normas regulamentadoras, qual comissão interna da empresa deve participar ativamente desse programa de prevenção?",
    options: [
      "CONAMA",
      "CIPA",
      "CCIH",
      "COFEN"
    ],
    correctAnswer: "CIPA",
    explanation: "A CIPA (Comissão Interna de Prevenção de Acidentes) é o órgão interno da empresa, previsto na NR 5, responsável por identificar riscos no ambiente de trabalho e promover ações preventivas, incluindo programas de prevenção de LER/DORT em conjunto com o SESMT (quando houver)."
  },
  {
    id: 7,
    difficulty: 'fácil',
    caseDescription: "Um trabalhador acabou de sofrer um acidente de trabalho com lesão no punho em uma fábrica de móveis. Foi levado imediatamente ao pronto-socorro mais próximo.",
    question: "Qual procedimento o serviço de saúde deve obrigatoriamente realizar em relação à notificação deste acidente?",
    options: [
      "Notificar apenas se houver afastamento superior a 15 dias",
      "Preencher a CAT (Comunicação de Acidente de Trabalho) e notificar o SINAN",
      "Notificar apenas a empresa empregadora",
      "Registrar apenas no prontuário do paciente, sem necessidade de notificação externa"
    ],
    correctAnswer: "Preencher a CAT (Comunicação de Acidente de Trabalho) e notificar o SINAN",
    explanation: "Todo acidente de trabalho deve ser notificado através da CAT (Comunicação de Acidente de Trabalho) ao INSS e também ao SINAN (Sistema de Informação de Agravos de Notificação) do Ministério da Saúde, independentemente da gravidade ou tempo de afastamento."
  },
  {
    id: 8,
    difficulty: 'fácil',
    caseDescription: "Trabalhador de 55 anos, que atua em uma mineradora há 25 anos exposto a níveis elevados de poeira mineral, apresenta dispneia progressiva aos esforços e tosse seca persistente. Radiografia de tórax evidencia opacidades reticulonodulares difusas.",
    question: "Qual é o provável diagnóstico e como este se classifica segundo a legislação trabalhista?",
    options: [
      "Asma ocupacional; doença relacionada ao trabalho",
      "Pneumonia; doença comum sem relação ocupacional",
      "Pneumoconiose; doença profissional",
      "DPOC; doença agravada pelo trabalho"
    ],
    correctAnswer: "Pneumoconiose; doença profissional",
    explanation: "Os sintomas e achados radiográficos são compatíveis com pneumoconiose (provavelmente silicose), que é classificada como doença profissional por ter relação direta e imediata com a atividade profissional, sendo característica da exposição a poeiras minerais em mineração."
  },
  {
    id: 9,
    difficulty: 'fácil',
    caseDescription: "Técnica de enfermagem de 39 anos trabalha em UTI de um grande hospital. Após 10 anos na função, começou a apresentar dor no ombro direito ao realizar transferência de pacientes, diagnosticada como tendinopatia do manguito rotador.",
    question: "Segundo os princípios da saúde do trabalhador, qual seria a abordagem mais adequada neste caso?",
    options: [
      "Tratar a lesão e recomendar mudança definitiva de profissão",
      "Tratar a lesão e retornar à mesma função sem modificações",
      "Tratar a lesão e implementar mudanças no processo de trabalho, incluindo treinamento em mecânica corporal e uso de equipamentos auxiliares",
      "Considerar a lesão como doença comum sem relação com o trabalho"
    ],
    correctAnswer: "Tratar a lesão e implementar mudanças no processo de trabalho, incluindo treinamento em mecânica corporal e uso de equipamentos auxiliares",
    explanation: "A abordagem adequada em saúde do trabalhador prioriza não apenas o tratamento da lesão, mas principalmente a modificação dos fatores de risco no ambiente e processo de trabalho. Neste caso, o treinamento em mecânica corporal adequada e a disponibilização de equipamentos auxiliares para transferência de pacientes são essenciais."
  },
  {
    id: 10,
    difficulty: 'fácil',
    caseDescription: "Um fisioterapeuta foi contratado para avaliar as condições de trabalho em um escritório de contabilidade onde diversos funcionários apresentam queixas de dor cervical.",
    question: "Qual documento deve ser elaborado pelo fisioterapeuta após a avaliação ergonômica do ambiente?",
    options: [
      "Análise Ergonômica do Trabalho (AET)",
      "Atestado de Saúde Ocupacional (ASO)",
      "Programa de Controle Médico de Saúde Ocupacional (PCMSO)",
      "Perfil Profissiográfico Previdenciário (PPP)"
    ],
    correctAnswer: "Análise Ergonômica do Trabalho (AET)",
    explanation: "O fisioterapeuta deve elaborar a Análise Ergonômica do Trabalho (AET), que é um documento técnico que avalia as condições de trabalho, identifica riscos ergonômicos e propõe melhorias. Os demais documentos citados têm finalidades diferentes e alguns são de competência exclusiva do médico do trabalho (como o ASO)."
  },
  
  // QUESTÕES MÉDIAS
  {
    id: 11,
    difficulty: 'médio',
    caseDescription: "Homem de 42 anos, soldador em metalúrgica há 8 anos, apresenta queixa de diminuição da acuidade visual, sensação de areia nos olhos e fotofobia. Relata que frequentemente ocorrem fagulhas próximas aos seus olhos durante o trabalho, apesar de utilizar proteção facial.",
    question: "Com base neste caso, qual medida de prevenção deve ser priorizada conforme hierarquia das medidas de controle de riscos ocupacionais?",
    options: [
      "Substituição do processo de soldagem por outro menos arriscado",
      "Instalação de barreiras físicas entre o trabalhador e a fonte de risco",
      "Fornecimento de óculos de proteção com maior vedação lateral",
      "Redução da jornada de trabalho do soldador"
    ],
    correctAnswer: "Instalação de barreiras físicas entre o trabalhador e a fonte de risco",
    explanation: "Conforme a hierarquia de controle de riscos ocupacionais, após tentar eliminar o risco (o que seria impraticável neste caso) ou substituir o processo (nem sempre viável em soldagem), a próxima medida mais eficiente é a implementação de medidas de engenharia, como barreiras físicas (proteção coletiva), que isolariam a fonte de risco. O uso de EPIs é considerado a última barreira de proteção, menos eficaz que as medidas coletivas."
  },
  {
    id: 12,
    difficulty: 'médio',
    caseDescription: "Mulher de 37 anos, costureira em indústria têxtil, apresenta dor no antebraço direito, principalmente na região do epicôndilo lateral, que piora com preensão e movimentos repetitivos. Trabalha 9 horas por dia, 6 dias por semana, fazendo movimentos repetitivos de prono-supinação do antebraço.",
    question: "Além do tratamento fisioterapêutico, qual seria a melhor recomendação para modificação do processo de trabalho neste caso?",
    options: [
      "Transferência para outro setor sem uso dos membros superiores",
      "Implementação de rodízio de funções e pausas programadas durante a jornada",
      "Fornecimento de órtese para uso durante toda a jornada de trabalho",
      "Redução da jornada para meio período, mantendo o mesmo ritmo de produção"
    ],
    correctAnswer: "Implementação de rodízio de funções e pausas programadas durante a jornada",
    explanation: "O rodízio de funções e pausas programadas são intervenções organizacionais que reduzem a sobrecarga em grupos musculares específicos e previnem lesões por esforços repetitivos. Esta abordagem permite manter a produtividade enquanto distribui a carga biomecânica, sendo superior às alternativas que não modificam o processo de trabalho ou que dependem apenas de dispositivos auxiliares."
  },
  {
    id: 13,
    difficulty: 'médio',
    caseDescription: "Operadora de telemarketing de 28 anos apresenta diagnóstico de disartria manifestada apenas durante o trabalho. A investigação médica não encontrou causa orgânica para o problema. A trabalhadora relata alto nível de estresse, pressão por produtividade e monitoramento constante das ligações.",
    question: "Como este caso deve ser classificado e abordado na perspectiva da saúde do trabalhador?",
    options: [
      "Transtorno psíquico relacionado ao trabalho, exigindo modificações no processo e organização do trabalho",
      "Simulação de doença, exigindo advertência administrativa",
      "Doença comum sem relação com o trabalho, exigindo apenas tratamento médico",
      "Incapacidade para a função, exigindo readaptação para cargo sem uso da voz"
    ],
    correctAnswer: "Transtorno psíquico relacionado ao trabalho, exigindo modificações no processo e organização do trabalho",
    explanation: "O quadro sugere um transtorno psíquico relacionado ao trabalho, onde o sintoma (disartria) manifesta-se em situações específicas de pressão laboral. Na perspectiva da saúde do trabalhador, estes casos exigem modificações nos fatores psicossociais do ambiente de trabalho (organização do trabalho, metas, pausas, autonomia), além do tratamento individual."
  },
  {
    id: 14,
    difficulty: 'médio',
    caseDescription: "Empresa de telemarketing com 1.200 funcionários solicita consultoria em saúde ocupacional após aumento de 35% nos casos de distúrbios osteomusculares e vocais entre seus operadores no último ano. A jornada é de 6 horas diárias, com 15 minutos de pausa.",
    question: "Conforme a NR 17 e seu anexo II, qual medida está inadequada na organização do trabalho desta empresa?",
    options: [
      "Jornada de 6 horas para operadores de telemarketing",
      "Pausa única de 15 minutos durante toda a jornada",
      "Mobiliário com cadeiras ajustáveis e apoio para os pés",
      "Realização de exames ocupacionais semestralmente"
    ],
    correctAnswer: "Pausa única de 15 minutos durante toda a jornada",
    explanation: "O Anexo II da NR 17, específico para trabalho em teleatendimento/telemarketing, estabelece que para jornadas de 6 horas diárias devem ser concedidas duas pausas de 10 minutos, além do intervalo obrigatório de 20 minutos para repouso e alimentação. A pausa única de 15 minutos é insuficiente e contraria a norma."
  },
  {
    id: 15,
    difficulty: 'médio',
    caseDescription: "Trabalhador de 45 anos, metalúrgico, apresenta diagnóstico de perda auditiva neurossensorial bilateral nas frequências de 3000Hz a 6000Hz, com entalhes típicos e histórico de exposição a ruído ocupacional acima de 85dB por 20 anos. A última audiometria mostra progressão da perda em relação ao exame de admissão.",
    question: "Qual procedimento deve ser adotado pelo serviço de saúde do trabalhador neste caso?",
    options: [
      "Considerar a perda auditiva como presbiacusia (envelhecimento natural) sem relação com o trabalho",
      "Notificar o caso como Perda Auditiva Induzida por Ruído Ocupacional (PAIR) no SINAN e emitir CAT",
      "Solicitar apenas o uso de protetor auricular, sem necessidade de outras medidas",
      "Aguardar mais 5 anos para confirmar se há relação com o trabalho"
    ],
    correctAnswer: "Notificar o caso como Perda Auditiva Induzida por Ruído Ocupacional (PAIR) no SINAN e emitir CAT",
    explanation: "O quadro descrito é compatível com Perda Auditiva Induzida por Ruído Ocupacional (PAIR), que é uma doença relacionada ao trabalho de notificação compulsória. O serviço de saúde deve notificar o caso ao SINAN (Sistema de Informação de Agravos de Notificação) e emitir a CAT (Comunicação de Acidente de Trabalho), além de adotar medidas preventivas para evitar progressão."
  },
  {
    id: 16,
    difficulty: 'médio',
    caseDescription: "Fisioterapeuta de 32 anos atende em clínica particular e deseja atuar também como fisioterapeuta do trabalho em uma empresa.",
    question: "Com base nas resoluções do COFFITO, qual requisito é necessário para que este profissional possa exercer a especialidade de Fisioterapia do Trabalho?",
    options: [
      "Possuir apenas registro profissional no CREFITO, sem necessidade de título de especialista",
      "Possuir título de especialista em Fisioterapia do Trabalho reconhecido pelo COFFITO",
      "Ter experiência mínima de 5 anos em qualquer área da fisioterapia",
      "Ser aprovado em concurso público específico para a área"
    ],
    correctAnswer: "Possuir título de especialista em Fisioterapia do Trabalho reconhecido pelo COFFITO",
    explanation: "Conforme a Resolução COFFITO nº 465/2016, para atuar como especialista em Fisioterapia do Trabalho, o profissional deve possuir título de especialista reconhecido pelo COFFITO, obtido por formação acadêmica (pós-graduação lato sensu) ou aprovação em prova de título aplicada pela ABENFISIO/COFFITO."
  },
  {
    id: 17,
    difficulty: 'médio',
    caseDescription: "Trabalhadora de 41 anos, técnica de laboratório em hospital universitário, sofreu perfuração com agulha contaminada durante coleta de sangue. O protocolo de acidente com material biológico foi iniciado e a trabalhadora foi encaminhada ao SESMT.",
    question: "Além do atendimento médico imediato, qual documento deve ser obrigatoriamente preenchido neste caso?",
    options: [
      "Apenas a CAT (Comunicação de Acidente de Trabalho)",
      "CAT e notificação no SINAN, ambos obrigatórios",
      "PGR (Programa de Gerenciamento de Riscos)",
      "Registro interno do SESMT, sem necessidade de notificação externa"
    ],
    correctAnswer: "CAT e notificação no SINAN, ambos obrigatórios",
    explanation: "Acidentes com material biológico são considerados acidentes de trabalho graves e de notificação compulsória. É obrigatório o preenchimento da CAT (Comunicação de Acidente de Trabalho) enviada ao INSS e a notificação no SINAN (Sistema de Informação de Agravos de Notificação) do Ministério da Saúde, conforme estabelecido pela Portaria nº 204/2016 MS."
  },
  {
    id: 18,
    difficulty: 'médio',
    caseDescription: "Empresa de médio porte no ramo de alimentos está estruturando seu serviço de saúde ocupacional conforme as normas vigentes. O quadro possui 350 funcionários e grau de risco 3.",
    question: "De acordo com a NR 4, qual a composição mínima exigida para o SESMT desta empresa?",
    options: [
      "1 Técnico de Segurança e 1 Enfermeiro do Trabalho",
      "2 Técnicos de Segurança e 1 Engenheiro de Segurança (tempo parcial)",
      "3 Técnicos de Segurança, 1 Engenheiro de Segurança e 1 Médico do Trabalho",
      "1 Técnico de Segurança, 1 Médico do Trabalho e 1 Fisioterapeuta"
    ],
    correctAnswer: "3 Técnicos de Segurança, 1 Engenheiro de Segurança e 1 Médico do Trabalho",
    explanation: "Conforme o dimensionamento previsto na NR 4 (Quadro II), uma empresa com 350 funcionários e grau de risco 3 deve ter em seu SESMT: 3 Técnicos de Segurança do Trabalho, 1 Engenheiro de Segurança do Trabalho e 1 Médico do Trabalho. O fisioterapeuta não é previsto na composição obrigatória do SESMT, podendo ser contratado como consultor ou prestador de serviços."
  },
  {
    id: 19,
    difficulty: 'médio',
    caseDescription: "Trabalhador rural de 52 anos, que utiliza agrotóxicos há mais de 20 anos, apresenta sintomas de fraqueza muscular progressiva, tremores e dificuldade para caminhar. Exames laboratoriais mostram alteração em colinesterase sérica.",
    question: "De acordo com os princípios da Vigilância em Saúde do Trabalhador, além do atendimento clínico, qual medida deve ser adotada neste caso?",
    options: [
      "Apenas tratar o paciente e orientar sobre uso adequado de EPIs",
      "Investigar outros casos na região, notificar e fiscalizar condições de trabalho",
      "Encaminhar para neurologista, sem necessidade de medidas adicionais",
      "Recomendar ao trabalhador que mude de profissão imediatamente"
    ],
    correctAnswer: "Investigar outros casos na região, notificar e fiscalizar condições de trabalho",
    explanation: "A Vigilância em Saúde do Trabalhador tem caráter coletivo, indo além do atendimento individual. Na situação descrita, é fundamental: notificar o caso como intoxicação por agrotóxico, investigar outros casos na região (busca ativa), e realizar fiscalização das condições de trabalho, incluindo uso, armazenamento, descarte de agrotóxicos e cumprimento da NR 31 (Trabalho Rural)."
  },
  {
    id: 20,
    difficulty: 'médio',
    caseDescription: "Empresa de produção de calçados implementa programa de ginástica laboral com sessões de 15 minutos diários para seus 200 funcionários. Após 3 meses, observou-se redução de 10% no absenteísmo, porém os casos de LER/DORT continuaram surgindo.",
    question: "Sob a perspectiva da saúde do trabalhador, o que explica a limitação do programa implementado?",
    options: [
      "A duração das sessões de ginástica laboral deveria ser de 30 minutos, não 15 minutos",
      "A ginástica laboral isolada não modifica os fatores de risco presentes no processo de trabalho",
      "Os exercícios deveriam ser mais intensos para fortalecer adequadamente a musculatura",
      "O programa deveria ter foco apenas nos trabalhadores com queixas prévias"
    ],
    correctAnswer: "A ginástica laboral isolada não modifica os fatores de risco presentes no processo de trabalho",
    explanation: "A ginástica laboral pode trazer benefícios como redução do absenteísmo e melhora no bem-estar imediato, porém tem eficácia limitada quando implementada isoladamente. Na perspectiva da saúde do trabalhador, é essencial intervir nos determinantes das doenças ocupacionais, modificando o processo de trabalho, ritmo de produção, pausas, desenho de postos, entre outros fatores causais das LER/DORT."
  },
  
  // QUESTÕES DIFÍCEIS
  {
    id: 21,
    difficulty: 'difícil',
    caseDescription: "Trabalhador de 38 anos, pedreiro, apresenta-se para perícia no INSS após 40 dias de afastamento por lombalgia aguda com irradiação para membro inferior direito. Foi diagnosticado com hérnia de disco L5-S1. Na avaliação funcional, apresenta teste de Laségue positivo a 30º, força muscular diminuída em extensores e flexores do tornozelo direito (grau 4), reflexos preservados e refere dor de intensidade 7/10 durante deambulação.",
    question: "Considerando a Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF) na avaliação deste caso para determinar a capacidade laboral, qual abordagem é mais adequada?",
    options: [
      "Focar apenas na lesão anatômica (hérnia de disco) como determinante para definir incapacidade total para atividades laborais",
      "Considerar exclusivamente a avaliação funcional com testes específicos como Laségue e força muscular",
      "Avaliar os fatores contextuais (exigências do trabalho, possibilidades de adaptação da função) junto com a condição de saúde e limitações funcionais",
      "Determinar capacidade laboral baseando-se apenas no tempo de afastamento, definindo retorno ao trabalho apenas após 60 dias"
    ],
    correctAnswer: "Avaliar os fatores contextuais (exigências do trabalho, possibilidades de adaptação da função) junto com a condição de saúde e limitações funcionais",
    explanation: "Segundo a CIF e os princípios da avaliação funcional para capacidade laboral, é necessária uma visão biopsicossocial, que integre a condição de saúde (hérnia de disco e suas manifestações clínicas) com as limitações funcionais objetivas (limitação de movimento, força, dor) e os fatores contextuais, que incluem as exigências específicas do trabalho (como carga, posturas, jornada) e possibilidades de adaptação. Apenas a lesão anatômica ou os testes funcionais isolados são insuficientes para determinar a real capacidade laboral."
  },
  {
    id: 22,
    difficulty: 'difícil',
    caseDescription: "Mulher de 43 anos, costureira industrial há 12 anos, foi diagnosticada com síndrome do túnel do carpo bilateral, sendo submetida a cirurgia no pulso direito há 6 meses. Apresentou melhora parcial dos sintomas, mas não retornou ao trabalho. Na avaliação atual, apresenta testes provocativos negativos, eletromiografia com melhora significativa da condução nervosa, força de preensão 70% do esperado, e queixa de dor residual ao esforço. Relata ansiedade intensa ao pensar em retornar ao trabalho.",
    question: "Qual seria a abordagem mais adequada para reabilitação profissional neste caso, considerando o modelo biopsicossocial de saúde do trabalhador?",
    options: [
      "Indicar aposentadoria por invalidez, considerando o diagnóstico de doença ocupacional crônica",
      "Programa de fortalecimento intensivo por 30 dias seguido de retorno imediato à mesma função",
      "Retorno ao trabalho com restrições temporárias, associado a modificações no processo de trabalho e acompanhamento interdisciplinar incluindo suporte psicológico",
      "Mudança definitiva de profissão, com encaminhamento para cursos de qualificação em área administrativa"
    ],
    correctAnswer: "Retorno ao trabalho com restrições temporárias, associado a modificações no processo de trabalho e acompanhamento interdisciplinar incluindo suporte psicológico",
    explanation: "A abordagem biopsicossocial na reabilitação profissional considera aspectos físicos, psicológicos e sociais do adoecimento e recuperação. Neste caso, apesar da melhora clínica e funcional significativa, fatores psicológicos (ansiedade) podem influenciar o prognóstico. O retorno gradual com restrições, associado a modificações no processo de trabalho (ergonomia, pausas, rotação de tarefas) e acompanhamento interdisciplinar que inclua suporte psicológico, oferece maior possibilidade de sucesso do que medidas extremas como aposentadoria precoce ou mudança definitiva de profissão."
  },
  {
    id: 23,
    difficulty: 'difícil',
    caseDescription: "Um hotel 5 estrelas contrata fisioterapeuta para reduzir o absenteísmo entre camareiras, que apresentam alta incidência de dor lombar. Na avaliação inicial, identifica-se: camas baixas (40cm do solo), colchões pesados (25kg), rotina de 15-20 quartos/dia/camareira, jornada de 8h com intervalo único de 1h, ausência de equipamentos auxiliares, e média de idade das trabalhadoras de 45 anos.",
    question: "Considerando os determinantes sociais do processo saúde-doença e a hierarquia das medidas de controle de riscos, qual intervenção teria maior impacto na redução dos agravos?",
    options: [
      "Implementar ginástica laboral diária e fornecer cinturões lombares para todas as camareiras",
      "Reorganizar o processo de trabalho: reduzir número de quartos/dia, incluir pausas curtas durante a jornada e trabalho em duplas para troca de roupas de cama",
      "Realizar treinamento intensivo sobre técnicas corretas de levantamento de peso",
      "Selecionar apenas camareiras jovens e sem histórico de lombalgia para a função"
    ],
    correctAnswer: "Reorganizar o processo de trabalho: reduzir número de quartos/dia, incluir pausas curtas durante a jornada e trabalho em duplas para troca de roupas de cama",
    explanation: "A reorganização do processo de trabalho atua diretamente nos determinantes organizacionais do adoecimento, seguindo a hierarquia de controle de riscos que prioriza medidas coletivas sobre individuais. A redução da carga de trabalho, introdução de pausas e trabalho em duplas para tarefas que exigem maior esforço diminui a exposição ao risco principal (sobrecarga biomecânica). Medidas como ginástica laboral e EPIs têm eficácia limitada se não houver modificação dos fatores causais presentes na organização do trabalho."
  },
  {
    id: 24,
    difficulty: 'difícil',
    caseDescription: "Uma fábrica têxtil está sob investigação após denúncia de casos de asma entre funcionários. A avaliação ambiental identificou concentração elevada de particulados têxteis no ar, principalmente na seção de corte, onde trabalham 30 pessoas. Três trabalhadores foram diagnosticados com asma ocupacional nos últimos 6 meses, confirmada por provas de função respiratória e teste de provocação brônquica específica.",
    question: "Sob a perspectiva da Vigilância em Saúde do Trabalhador e das medidas de prevenção, qual sequência de ações representa a abordagem mais adequada?",
    options: [
      "I. Fornecer máscaras respiratórias (EPIs) para todos; II. Notificar os casos ao SINAN; III. Realizar busca ativa de outros casos; IV. Implementar sistema de exaustão localizada",
      "I. Notificar os casos ao SINAN; II. Realizar busca ativa de outros casos; III. Implementar sistema de exaustão localizada; IV. Fornecer EPIs como medida complementar",
      "I. Afastar imediatamente os trabalhadores afetados; II. Aplicar multa à empresa; III. Exigir EPIs para todos os funcionários; IV. Realizar medições periódicas da qualidade do ar",
      "I. Solicitar que a empresa contrate mais médicos do trabalho; II. Realizar treinamento sobre asma; III. Reduzir a jornada de trabalho; IV. Implementar ginástica respiratória"
    ],
    correctAnswer: "I. Notificar os casos ao SINAN; II. Realizar busca ativa de outros casos; III. Implementar sistema de exaustão localizada; IV. Fornecer EPIs como medida complementar",
    explanation: "A sequência representa a aplicação correta dos princípios da Vigilância em Saúde do Trabalhador e da hierarquia de medidas preventivas. Inicia-se com a notificação compulsória dos casos de asma ocupacional, seguida de busca ativa para dimensionar corretamente o problema. As medidas de controle seguem a hierarquia: primeiro controles de engenharia (exaustão localizada) que removem o risco na fonte, e complementarmente os EPIs individuais, que são menos eficazes e constituem a última barreira de proteção."
  },
  {
    id: 25,
    difficulty: 'difícil',
    caseDescription: "Durante fiscalização em frigorífico com 700 funcionários, foram identificados 32 casos de afastamento por transtornos mentais nos últimos 12 meses, principalmente entre trabalhadores da linha de produção. O médico do trabalho da empresa atribui os casos a 'fatores individuais e predisposição genética'. A análise do processo de trabalho revela: trabalho em esteiras com ritmo determinado por máquinas, ciclos repetitivos de menos de 30 segundos, proibição de comunicação durante o trabalho, supervisão constante e metas crescentes de produtividade.",
    question: "Considerando a relação entre organização do trabalho e saúde mental, qual abordagem de intervenção seria mais adequada?",
    options: [
      "Implementar programa de ginástica laboral e relaxamento para reduzir o estresse",
      "Oferecer atendimento psicológico individual para os trabalhadores afastados",
      "Modificar aspectos da organização do trabalho: permitir variabilidade de ritmo, incluir pausas regulares, revisar metas e estilo de gestão",
      "Realizar seleção psicológica mais rigorosa para identificar candidatos com maior resistência ao estresse"
    ],
    correctAnswer: "Modificar aspectos da organização do trabalho: permitir variabilidade de ritmo, incluir pausas regulares, revisar metas e estilo de gestão",
    explanation: "A abordagem mais adequada vai além do paradigma individual e reconhece os determinantes organizacionais dos transtornos mentais relacionados ao trabalho. Fatores como trabalho repetitivo, alta exigência com baixo controle, pressão por produtividade e gestão autoritária são reconhecidos na literatura científica como fatores de risco para transtornos mentais. A intervenção nos aspectos organizacionais (ritmo, pausas, metas, estilo de gestão) atua sobre as causas primárias, enquanto medidas individuais como ginástica laboral ou seleção psicológica não modificam os fatores causais e podem reforçar o paradigma da 'culpabilização da vítima'."
  },
  {
    id: 26,
    difficulty: 'difícil',
    caseDescription: "Empresa de grande porte no setor automotivo implementa programa de ergonomia participativa para redução de distúrbios musculoesqueléticos. O programa inclui: formação de comitê multidisciplinar (engenheiros, ergonomista, fisioterapeuta, médico, representantes dos trabalhadores), análise ergonômica de postos críticos, implementação e avaliação de melhorias. Após 18 meses, observou-se redução de 40% nos novos casos de LER/DORT.",
    question: "Qual princípio teórico-metodológico fundamenta a eficácia da ergonomia participativa na prevenção de LER/DORT?",
    options: [
      "Determinismo tecnológico, que prioriza soluções técnicas avançadas independente do conhecimento dos trabalhadores",
      "Reconhecimento da expertise dos trabalhadores sobre sua própria atividade e integração deste saber com o conhecimento técnico-científico",
      "Modelo biomédico tradicional, focado na identificação e tratamento precoce das patologias já instaladas",
      "Abordagem comportamentalista, centrada na mudança de hábitos individuais dos trabalhadores"
    ],
    correctAnswer: "Reconhecimento da expertise dos trabalhadores sobre sua própria atividade e integração deste saber com o conhecimento técnico-científico",
    explanation: "A eficácia da ergonomia participativa baseia-se no reconhecimento do trabalhador como sujeito ativo do processo e detentor de um saber específico sobre sua própria atividade (trabalho real x trabalho prescrito). A integração entre este conhecimento prático e o conhecimento técnico-científico permite identificar problemas e desenvolver soluções mais efetivas e sustentáveis. Esta abordagem contrasta com modelos tecnocêntricos (determinismo tecnológico), exclusivamente biomédicos (foco na doença) ou comportamentais (foco na mudança individual)."
  },
  {
    id: 27,
    difficulty: 'difícil',
    caseDescription: "Trabalhadora de 51 anos, diarista, apresenta dor crônica em ambos os joelhos, diagnosticada como osteoartrose. Trabalha há 20 anos limpando casas, em média 5 residências por semana, em jornadas de 8-10h diárias. Permanece longos períodos ajoelhada para limpar banheiros e outra superfícies. Usa frequentemente produtos químicos irritantes. Nunca teve carteira assinada e não contribui regularmente para a previdência. Procura atendimento na UBS do seu bairro por piora da dor e limitação funcional.",
    question: "Considerando os determinantes sociais da saúde e a política de saúde do trabalhador no SUS, qual abordagem seria mais adequada para este caso?",
    options: [
      "Encaminhar exclusivamente para ortopedista do SUS para avaliar indicação cirúrgica",
      "Orientar apenas exercícios domiciliares e uso de analgésicos quando necessário",
      "Considerar apenas como doença degenerativa sem relação com o trabalho",
      "Abordagem integral: tratamento clínico-funcional, notificação como doença relacionada ao trabalho, orientações ergonômicas específicas para a atividade e informações sobre direitos sociais/previdenciários"
    ],
    correctAnswer: "Abordagem integral: tratamento clínico-funcional, notificação como doença relacionada ao trabalho, orientações ergonômicas específicas para a atividade e informações sobre direitos sociais/previdenciários",
    explanation: "A abordagem integral considera os múltiplos determinantes da saúde, incluindo os determinantes sociais e ocupacionais. No caso descrito, reconhece-se a osteoartrose como doença relacionada ao trabalho (sobrecarga biomecânica crônica nos joelhos), exigindo notificação epidemiológica. Além do tratamento clínico-funcional, a abordagem deve incluir orientações ergonômicas específicas para a atividade de limpeza doméstica e abordar a vulnerabilidade social decorrente da informalidade, com orientações sobre direitos sociais e previdenciários, materializando os princípios da integralidade e equidade do SUS."
  },
  {
    id: 28,
    difficulty: 'difícil',
    caseDescription: "Centro de Referência em Saúde do Trabalhador (CEREST) Regional identificou aumento de 60% nos casos de intoxicação por agrotóxicos nos últimos 2 anos em uma região agrícola. A maioria dos casos ocorre entre trabalhadores rurais de pequenas propriedades familiares, que produzem hortaliças para abastecimento local.",
    question: "Considerando as atribuições do CEREST e os princípios da vigilância em saúde do trabalhador, qual conjunto de ações representa a abordagem mais completa e integrada para este problema?",
    options: [
      "Treinamento sobre uso correto de EPIs e armazenamento adequado de agrotóxicos para os trabalhadores",
      "Atendimento ambulatorial especializado aos casos identificados de intoxicação",
      "Articulação intersetorial envolvendo saúde, agricultura, meio ambiente e educação; capacitação dos profissionais da atenção primária; vigilância dos ambientes de trabalho; e promoção de práticas agroecológicas",
      "Fiscalização e aplicação de multas aos produtores rurais que utilizam agrotóxicos sem registro"
    ],
    correctAnswer: "Articulação intersetorial envolvendo saúde, agricultura, meio ambiente e educação; capacitação dos profissionais da atenção primária; vigilância dos ambientes de trabalho; e promoção de práticas agroecológicas",
    explanation: "A abordagem mais completa reflete os princípios da vigilância em saúde do trabalhador e o papel articulador do CEREST. A articulação intersetorial (saúde, agricultura, meio ambiente, educação) permite abordar o problema em suas múltiplas dimensões. A capacitação da atenção primária amplia a capacidade de identificação, notificação e acompanhamento dos casos. A vigilância dos ambientes avalia os determinantes das intoxicações. A promoção de práticas agroecológicas representa uma ação de prevenção primária, atuando sobre a substituição do agente nocivo, seguindo a hierarquia de medidas de controle, mais efetiva que focar apenas no uso de EPIs ou fiscalização punitiva."
  },
  {
    id: 29,
    difficulty: 'difícil',
    caseDescription: "Homem de 38 anos, operador de telemarketing há 5 anos, apresenta diagnóstico de síndrome do desfiladeiro torácico, confirmada por exame eletroneuromiográfico e ressonância magnética. Trabalha em posto de trabalho inadequado, com monitor abaixo da linha de visão, necessitando flexão cervical constante. Relata que na empresa existem diversos colegas com sintomas semelhantes. A CAT foi emitida e o trabalhador está afastado há 45 dias, em tratamento fisioterapêutico, com melhora parcial dos sintomas.",
    question: "Além do tratamento individual, quais medidas deveriam ser adotadas, considerando o disposto na Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) e o conceito ampliado de vigilância em saúde?",
    options: [
      "Restringir as ações ao caso individual, garantindo tratamento adequado e reabilitação",
      "Investigar outros casos na empresa, realizar análise ergonômica dos postos de trabalho e propor intervenção coletiva",
      "Recomendar ao trabalhador que procure emprego em outra atividade após a recuperação",
      "Instruir o trabalhador a processar a empresa para obter indenização"
    ],
    correctAnswer: "Investigar outros casos na empresa, realizar análise ergonômica dos postos de trabalho e propor intervenção coletiva",
    explanation: "A PNSTT estabelece como diretriz a abordagem coletiva dos agravos à saúde relacionados ao trabalho. Mais do que tratar casos individuais, é necessário identificar e intervir sobre os determinantes do adoecimento. A fala do trabalhador sobre outros colegas com sintomas semelhantes sugere um problema ergonômico coletivo. Neste cenário, as ações de vigilância em saúde do trabalhador incluem: investigar outros casos (busca ativa), realizar análise ergonômica para identificar os fatores de risco no ambiente e processo de trabalho, e propor intervenções coletivas, que beneficiem todos os trabalhadores expostos às mesmas condições."
  },
  {
    id: 30,
    difficulty: 'difícil',
    caseDescription: "Auxiliar de enfermagem de 42 anos com diagnóstico de Síndrome de Burnout após 5 anos trabalhando em UTI pediátrica de hospital público superlotado, com déficit crônico de pessoal. Apresenta sintomas de exaustão emocional severa, despersonalização nas relações com pacientes e baixa realização profissional. Médico psiquiatra emitiu atestado para afastamento e CAT foi preenchida. O SESMT do hospital questiona o nexo causal entre o transtorno mental e o trabalho.",
    question: "De acordo com o atual entendimento sobre transtornos mentais relacionados ao trabalho e a legislação vigente, qual afirmativa está correta?",
    options: [
      "Transtornos mentais como Burnout não são reconhecidos como doenças relacionadas ao trabalho na legislação previdenciária brasileira",
      "O nexo causal entre Burnout e trabalho só pode ser estabelecido mediante prova documental de assédio moral",
      "A Síndrome de Burnout consta na Lista de Doenças Relacionadas ao Trabalho (Portaria MS/GM nº 2.384/2020) e pode ser equiparada a acidente de trabalho para fins previdenciários",
      "Transtornos mentais são sempre multifatoriais e, portanto, não podem ter nexo causal estabelecido com o trabalho"
    ],
    correctAnswer: "A Síndrome de Burnout consta na Lista de Doenças Relacionadas ao Trabalho (Portaria MS/GM nº 2.384/2020) e pode ser equiparada a acidente de trabalho para fins previdenciários",
    explanation: "A Síndrome de Burnout (CID-10 Z73.0) consta na Lista de Doenças Relacionadas ao Trabalho do Ministério da Saúde (atualizada pela Portaria MS/GM nº 2.384/2020) e na Lista B do Anexo II do Regulamento da Previdência Social (Decreto 3.048/99). Como doença relacionada ao trabalho, é equiparada a acidente de trabalho para fins previdenciários (Lei 8.213/91, art. 20). O nexo causal pode ser estabelecido através da análise da organização do trabalho e fatores de risco psicossocial, não sendo necessária a comprovação de assédio moral. A natureza multifatorial dos transtornos mentais não impede o estabelecimento do nexo causal, aplicando-se o conceito de 'concausalidade'."
  },
  {
    id: 31,
    difficulty: 'difícil',
    caseDescription: "Fisioterapeuta recém-contratado por uma indústria metalúrgica de médio porte (320 funcionários) identifica alta prevalência de dor lombar entre os trabalhadores do setor de fundição. Deseja implementar um programa de prevenção, mas encontra resistência da gerência, que alega 'não haver previsão legal para fisioterapeuta no SESMT' e que 'esse tipo de problema é normal na atividade'.",
    question: "De acordo com a legislação e as competências do fisioterapeuta na saúde do trabalhador, qual é a base legal mais adequada para fundamentar a atuação deste profissional?",
    options: [
      "A NR 4 estabelece que o fisioterapeuta deve compor obrigatoriamente o SESMT de empresas com mais de 300 funcionários",
      "A NR 17, ao abordar ergonomia e prevenção de problemas musculoesqueléticos, e as resoluções do COFFITO que regulamentam a especialidade de Fisioterapia do Trabalho fundamentam esta atuação",
      "O fisioterapeuta só pode atuar na empresa após os trabalhadores já estarem afastados e em reabilitação",
      "A empresa só é obrigada a contratar fisioterapeuta mediante notificação do Ministério Público do Trabalho"
    ],
    correctAnswer: "A NR 17, ao abordar ergonomia e prevenção de problemas musculoesqueléticos, e as resoluções do COFFITO que regulamentam a especialidade de Fisioterapia do Trabalho fundamentam esta atuação",
    explanation: "Embora o fisioterapeuta não seja previsto na composição obrigatória do SESMT (NR 4), sua atuação na saúde do trabalhador é fundamentada na NR 17 (Ergonomia), que exige que as empresas realizem análise ergonômica do trabalho e adotem medidas para prevenir distúrbios musculoesqueléticos. As Resoluções COFFITO nº 08/1978, nº 259/2003, nº 351/2008 e nº 465/2016 estabelecem e regulamentam a atuação do fisioterapeuta na saúde do trabalhador, incluindo ações de promoção, prevenção, avaliação, tratamento e reabilitação."
  },
  {
    id: 32,
    difficulty: 'difícil',
    caseDescription: "Uma empresa de tecnologia com 450 funcionários, após aumento significativo nos casos de LER/DORT, implementa programa de ergonomia que inclui: (1) adequação dos postos de trabalho conforme NR 17; (2) ginástica laboral diária; (3) pausas programadas de 10 minutos a cada 50 minutos trabalhados; (4) rodízio de funções; e (5) limitação do número diário de toques no teclado. Os resultados iniciais mostram diminuição nas queixas, porém o departamento financeiro questiona o custo-efetividade das pausas frequentes.",
    question: "Com base na evidência científica sobre intervenções para prevenção de LER/DORT, qual das medidas implementadas possui maior embasamento para redução efetiva dos casos?",
    options: [
      "Ginástica laboral diária orientada por fisioterapeuta",
      "Adequação dos postos de trabalho conforme NR 17",
      "Limitação do número diário de toques no teclado",
      "Pausas programadas de 10 minutos a cada 50 minutos trabalhados"
    ],
    correctAnswer: "Pausas programadas de 10 minutos a cada 50 minutos trabalhados",
    explanation: "As revisões sistemáticas e metanálises sobre intervenções para prevenção de LER/DORT em trabalho com computadores indicam que as pausas programadas frequentes (micropoauses) apresentam o maior nível de evidência para redução da incidência e severidade dos distúrbios musculoesqueléticos. A alternância entre períodos de atividade e recuperação previne a fadiga muscular, reduz a carga estática e permite recuperação tecidual. Embora as demais intervenções também sejam importantes numa abordagem multifatorial, as pausas têm se mostrado a intervenção isolada com maior impacto na prevenção das LER/DORT em trabalho repetitivo com computadores."
  },
  {
    id: 33,
    difficulty: 'difícil',
    caseDescription: "Trabalhador de 45 anos, mecânico industrial, sofreu acidente de trabalho com amputação traumática de três dedos da mão dominante (2º, 3º e 4º quirodáctilos) há 8 meses. Realizou cirurgia e reabilitação, encontrando-se agora em fase de readaptação profissional. Apresenta limitação funcional significativa para preensão fina e de força, com impacto nas atividades de vida diária e laborais. O trabalhador deseja retornar à mesma empresa, que manifestou disponibilidade para readaptá-lo.",
    question: "Considerando os conceitos de reabilitação profissional e os princípios da Classificação Internacional de Funcionalidade (CIF), qual seria a abordagem mais adequada para este caso?",
    options: [
      "Aposentadoria por invalidez, considerando a limitação permanente em mão dominante",
      "Retorno imediato à mesma função após treinamento com órteses adaptativas",
      "Programa de readaptação profissional baseado na avaliação de capacidades funcionais residuais, análise de demandas de possíveis funções e modificações no ambiente de trabalho",
      "Encaminhamento para cursos de qualificação em área administrativa sem relação com sua experiência prévia"
    ],
    correctAnswer: "Programa de readaptação profissional baseado na avaliação de capacidades funcionais residuais, análise de demandas de possíveis funções e modificações no ambiente de trabalho",
    explanation: "A abordagem alinhada aos princípios da CIF e da reabilitação profissional contemporânea foca nas capacidades residuais e na interação entre o indivíduo e o ambiente. O programa deve incluir: avaliação detalhada das capacidades funcionais remanescentes (não apenas deficiências); análise das demandas de possíveis funções compatíveis com sua experiência e perfil; modificações no ambiente e ferramentas de trabalho (tecnologia assistiva); e preparação gradual para o retorno. Esta abordagem promove inclusão e valoriza o potencial do trabalhador, em contraste com medidas como aposentadoria precoce ou encaminhamento para áreas sem relação com sua experiência."
  },
  {
    id: 34,
    difficulty: 'difícil',
    caseDescription: "Um pesquisador está analisando séries históricas de notificações de agravos relacionados ao trabalho em um estado brasileiro no período de 2010 a 2020. Ele observa dados do SINAN que mostram aumento absoluto de 230% nos casos notificados de LER/DORT, principalmente a partir de 2014, quando houve intenso trabalho de capacitação das equipes de saúde para identificação e notificação destes agravos.",
    question: "Do ponto de vista epidemiológico, qual interpretação mais adequada para esta variação observada nas notificações?",
    options: [
      "Houve piora significativa nas condições de trabalho no período, levando a aumento real na incidência de LER/DORT",
      "O aumento reflete principalmente a melhoria no sistema de vigilância e notificação, e não necessariamente aumento real na incidência",
      "A capacitação das equipes foi ineficaz, pois gerou aumento das notificações",
      "Deve-se desconsiderar estes dados por serem inconsistentes com a tendência internacional de redução de LER/DORT"
    ],
    correctAnswer: "O aumento reflete principalmente a melhoria no sistema de vigilância e notificação, e não necessariamente aumento real na incidência",
    explanation: "Na análise epidemiológica de séries temporais de agravos notificados, é essencial diferenciar o aumento real na incidência do aumento da taxa de detecção/notificação. Quando há uma intervenção específica para melhorar o sistema de vigilância (como a capacitação mencionada em 2014), o aumento subsequente nas notificações provavelmente reflete uma redução da subnotificação, aproximando os dados da incidência real, e não necessariamente um aumento na ocorrência dos casos. Este fenômeno é conhecido como 'viés de vigilância' ou 'viés de detecção'."
  },
  {
    id: 35,
    difficulty: 'difícil',
    caseDescription: "Trabalhadora rural de 44 anos, cortadora de cana-de-açúcar há 15 anos, apresenta quadro de nefropatia crônica não associada a hipertensão ou diabetes. Exames mostram deterioração da função renal (TFG: 41 mL/min/1.73m²) e proteinúria. A investigação revela que trabalha em região com temperaturas elevadas (média de 35°C), com jornadas de 8-10 horas sob exposição solar direta, ingestão hídrica insuficiente e episódios recorrentes de desidratação.",
    question: "Considerando os mecanismos fisiopatológicos e evidências recentes, qual relação pode ser estabelecida entre o trabalho e o quadro clínico apresentado?",
    options: [
      "Não há evidência científica de relação entre trabalho rural e nefropatias",
      "A nefropatia provavelmente é causada pela exposição a agrotóxicos, sem relação com fatores térmicos",
      "Trata-se de nefropatia de causa comum não relacionada ao trabalho",
      "É compatível com Nefropatia Epidêmica Mesoamericana ou nefropatia por estresse térmico, relacionada à desidratação crônica e esforço físico em clima quente"
    ],
    correctAnswer: "É compatível com Nefropatia Epidêmica Mesoamericana ou nefropatia por estresse térmico, relacionada à desidratação crônica e esforço físico em clima quente",
    explanation: "Estudos recentes identificaram uma forma de nefropatia crônica não tradicional, inicialmente descrita em trabalhadores rurais da América Central (Nefropatia Mesoamericana), mas também encontrada em outras regiões com condições similares, incluindo Brasil. A fisiopatologia envolve lesão renal recorrente por isquemia, estresse oxidativo e inflamação, relacionados a esforço físico extenuante em clima quente, com desidratação crônica e reposição volêmica inadequada. O quadro descrito é compatível com esta condição reconhecida como doença relacionada ao trabalho, exigindo modificações nas condições laborais (pausas, hidratação, proteção térmica) além do tratamento médico."
  },
  {
    id: 36,
    difficulty: 'difícil',
    caseDescription: "Empresa do setor de frigoríficos é notificada pelo Ministério Público do Trabalho após fiscalização que identificou alta prevalência de distúrbios musculoesqueléticos, principalmente em membros superiores. A empresa contrata uma equipe multidisciplinar para realizar intervenção ergonômica. Na análise das atividades, identificam-se ciclos de trabalho extremamente curtos (menos de 10 segundos), ausência de rodízio entre funções, esteira com velocidade fixa determinando o ritmo, pausas insuficientes e ambiente com temperatura abaixo de 12°C.",
    question: "Considerando a abordagem ergonômica contemporânea e as características do trabalho em frigoríficos, qual intervenção teria maior impacto na redução dos distúrbios musculoesqueléticos?",
    options: [
      "Programa intensivo de ginástica laboral no início e fim da jornada",
      "Seleção de trabalhadores com maior resistência física para as funções mais exigentes",
      "Redesenho do processo produtivo: aumento dos ciclos de trabalho, implementação de rodízio efetivo e introdução de pausas térmicas e de recuperação psicofisiológica",
      "Implementação de premiação financeira para setores com menor taxa de absenteísmo"
    ],
    correctAnswer: "Redesenho do processo produtivo: aumento dos ciclos de trabalho, implementação de rodízio efetivo e introdução de pausas térmicas e de recuperação psicofisiológica",
    explanation: "A ergonomia contemporânea, especialmente em setores como frigoríficos, reconhece que os principais determinantes dos distúrbios musculoesqueléticos estão na organização e intensificação do trabalho. As evidências científicas e a Norma Regulamentadora específica para frigoríficos (NR 36) indicam que intervenções efetivas devem modificar os elementos críticos do processo produtivo: duração dos ciclos (evitando hiperrepetitividade), implementação de rodízio que alterne grupos musculares e demandas cognitivas, e pausas adequadas (incluindo pausas térmicas obrigatórias pela exposição ao frio e pausas de recuperação psicofisiológica). Medidas como ginástica laboral isoladamente, seleção de trabalhadores 'mais resistentes' ou incentivos financeiros não agem sobre os determinantes organizacionais e têm eficácia limitada ou efeitos contraproducentes."
  },
  {
    id: 37,
    difficulty: 'difícil',
    caseDescription: "Um Centro de Referência em Saúde do Trabalhador (CEREST) está planejando ações para reduzir a exposição a riscos químicos em indústrias da região, após identificar aumento nos casos de intoxicação. Estão sendo discutidas diferentes estratégias de intervenção baseadas na hierarquia das medidas de controle.",
    question: "Considerando a hierarquia das medidas de controle de riscos ocupacionais, qual sequência abaixo representa corretamente a ordem de prioridade, da mais eficaz para a menos eficaz?",
    options: [
      "1-Eliminação; 2-Substituição; 3-Controles de engenharia; 4-Controles administrativos; 5-EPIs",
      "1-EPIs; 2-Controles administrativos; 3-Controles de engenharia; 4-Substituição; 5-Eliminação",
      "1-Controles administrativos; 2-EPIs; 3-Eliminação; 4-Substituição; 5-Controles de engenharia",
      "1-Controles de engenharia; 2-Eliminação; 3-Substituição; 4-Controles administrativos; 5-EPIs"
    ],
    correctAnswer: "1-Eliminação; 2-Substituição; 3-Controles de engenharia; 4-Controles administrativos; 5-EPIs",
    explanation: "A hierarquia de controle de riscos ocupacionais estabelece uma ordem de prioridade baseada na eficácia das medidas: 1) Eliminação: remover completamente o risco; 2) Substituição: trocar por alternativa menos perigosa; 3) Controles de engenharia: isolar o risco da exposição do trabalhador; 4) Controles administrativos: procedimentos, treinamentos, rotação de pessoal; 5) EPIs: última barreira de proteção. Esta hierarquia é reconhecida internacionalmente e incorporada em normas como a NR 1 e o PGR, fundamentando-se no princípio de que é mais eficaz controlar o risco na fonte do que depender de mudanças comportamentais ou equipamentos individuais."
  },
  {
    id: 38,
    difficulty: 'difícil',
    caseDescription: "Trabalhadora de 36 anos, operadora de caixa de supermercado há 8 anos, foi diagnosticada com tendinite do músculo supraespinhoso no ombro direito e síndrome do túnel do carpo no punho direito. Está afastada há 45 dias, em tratamento fisioterapêutico, com melhora parcial dos sintomas. Em seu posto de trabalho, realiza movimentos repetitivos de elevação do braço acima de 60° e desvio ulnar do punho durante escaneamento de produtos. Processa em média 25 clientes por hora, sem pausas programadas além do intervalo de almoço.",
    question: "Durante a avaliação para retorno ao trabalho, qual abordagem seria mais adequada segundo os princípios da ergonomia e reabilitação profissional?",
    options: [
      "Retorno imediato à mesma função, com uso de órtese para punho e ombro durante toda a jornada",
      "Afastamento definitivo da função de operadora de caixa, com readaptação para função administrativa",
      "Retorno gradual associado a modificações no posto de trabalho (reposicionamento de equipamentos), redução temporária do ritmo e implementação de pausas a cada hora",
      "Prolongamento do afastamento por mais 90 dias para garantir recuperação completa antes de qualquer tentativa de retorno"
    ],
    correctAnswer: "Retorno gradual associado a modificações no posto de trabalho (reposicionamento de equipamentos), redução temporária do ritmo e implementação de pausas a cada hora",
    explanation: "A abordagem ergonômica associada à reabilitação profissional contemporânea prioriza modificações no ambiente e processo de trabalho, não apenas a adaptação do indivíduo ao trabalho inadequado. A estratégia de retorno gradual permite monitorar a tolerância às atividades, enquanto as modificações ergonômicas (reposicionamento de equipamentos para evitar elevação excessiva do braço e desvios de punho) e organizacionais (ritmo reduzido inicialmente e pausas regulares) agem diretamente nos fatores causais das lesões. Esta abordagem é superior ao uso prolongado de órteses sem modificar o trabalho, ao afastamento definitivo sem tentativa de adaptação, ou ao prolongamento excessivo do afastamento, que pode dificultar a reinserção."
  },
  {
    id: 39,
    difficulty: 'difícil',
    caseDescription: "Um laboratório farmacêutico precisou modificar sua linha de produção após casos de dermatite de contato ocupacional entre funcionários expostos a determinado composto químico. Uma equipe interdisciplinar foi formada para avaliar as opções de controle do risco segundo a hierarquia de controles.",
    question: "Analise as seguintes intervenções propostas e identifique a que representa um 'controle de engenharia':",
    options: [
      "Substituição do composto químico por outro de menor potencial alergênico",
      "Instalação de sistema de exaustão localizada que captura o contaminante na fonte",
      "Redução da jornada de trabalho dos funcionários expostos",
      "Fornecimento de luvas de nitrilo e treinamento sobre seu uso correto"
    ],
    correctAnswer: "Instalação de sistema de exaustão localizada que captura o contaminante na fonte",
    explanation: "Os controles de engenharia são medidas que isolam ou removem o perigo da fonte, criando uma barreira física entre o trabalhador e o risco, sem depender de ações individuais. A instalação de sistema de exaustão localizada é um exemplo clássico de controle de engenharia, pois captura o contaminante na fonte antes que atinja a zona respiratória ou entre em contato com a pele do trabalhador. A substituição do composto é um exemplo de 'substituição' (2º nível), a redução da jornada é um 'controle administrativo' (4º nível), e o fornecimento de luvas representa uso de EPIs (5º nível)."
  },
  {
    id: 40,
    difficulty: 'difícil',
    caseDescription: "Trabalhador de 49 anos, montador em indústria automotiva, apresenta diagnóstico de epitrocleíte e síndrome do túnel cubital no cotovelo esquerdo, com dor, parestesia e diminuição de força em 4º e 5º dedos. A análise ergonômica do posto de trabalho revela que o trabalhador realiza, em média, 15 movimentos de flexão e extensão forçada do cotovelo por minuto, além de apoiar frequentemente o cotovelo em superfície rígida durante operações de precisão.",
    question: "De acordo com os princípios biomecânicos e ergonômicos, qual intervenção mais provavelmente reduziria o risco específico para o cotovelo neste caso?",
    options: [
      "Implementação de pausas de 10 minutos a cada hora trabalhada",
      "Redesenho da estação de trabalho para eliminar a necessidade de apoio do cotovelo e reduzir a frequência de movimentos extremos",
      "Uso de órtese de cotovelo durante toda a jornada de trabalho",
      "Rotação para outra função a cada 2 horas, alternando com colega da mesma linha"
    ],
    correctAnswer: "Redesenho da estação de trabalho para eliminar a necessidade de apoio do cotovelo e reduzir a frequência de movimentos extremos",
    explanation: "A intervenção que modifica diretamente os fatores de risco biomecânicos específicos para as lesões diagnosticadas (epitrocleíte e neuropatia cubital) é o redesenho da estação de trabalho. Esta abordagem elimina: 1) o apoio do cotovelo em superfície rígida, que causa compressão direta do nervo ulnar no túnel cubital; e 2) os movimentos extremos e frequentes de flexão/extensão do cotovelo, que sobrecarregam a inserção dos músculos flexores na epitróclea. Embora as pausas e rodízio possam auxiliar na recuperação tecidual, não eliminam os fatores causais específicos, e o uso de órtese durante toda a jornada poderia restringir a função e gerar sobrecarga compensatória em outras articulações."
  },
  {
    id: 41,
    difficulty: 'difícil',
    caseDescription: "Empresa de limpeza industrial contrata fisioterapeuta para desenvolver programa de prevenção de lombalgias. Em análise preliminar, o fisioterapeuta identifica atividade frequente de levantamento de baldes com água e produtos químicos (10kg) por trabalhadoras com média de idade de 45 anos. A técnica observada inclui flexão excessiva de tronco sem dobrar joelhos, rotação durante o levantamento e transporte do balde a distâncias de 10-15 metros.",
    question: "Considerando os princípios da ergonomia e biomecânica, qual recomendação técnica seria mais eficaz para reduzir o risco de lombalgias?",
    options: [
      "Treinar as trabalhadoras para realizar o levantamento com técnica correta: flexão de joelhos, coluna ereta e evitar rotação",
      "Reduzir o peso dos baldes para 7 kg, mantendo o mesmo processo de trabalho",
      "Redesenhar o processo de trabalho: substituir baldes por carrinhos específicos para transporte de líquidos, eliminando o levantamento manual",
      "Implementar programa de fortalecimento da musculatura lombar com exercícios diários"
    ],
    correctAnswer: "Redesenhar o processo de trabalho: substituir baldes por carrinhos específicos para transporte de líquidos, eliminando o levantamento manual",
    explanation: "Seguindo a hierarquia de controles de riscos ergonômicos, a eliminação da atividade de risco (levantamento manual) através do redesenho do processo de trabalho é mais eficaz que intervenções comportamentais ou redução parcial da carga. Estudos em ergonomia demonstram que, para riscos biomecânicos como o descrito, a eficácia de treinamentos em técnicas corretas de levantamento é limitada, pois sob pressão temporal e fadiga, os trabalhadores tendem a retornar aos padrões de movimento habituais. O uso de carrinhos específicos elimina o risco na fonte, sendo consistente com os princípios ergonômicos de adaptar o trabalho ao ser humano, não o contrário."
  },
  {
    id: 42,
    difficulty: 'difícil',
    caseDescription: "Trabalhador de 53 anos, soldador industrial há 25 anos, apresenta diagnóstico de pneumoconiose por fumos metálicos, confirmado por exames de imagem e provas funcionais respiratórias. Na empresa onde trabalha há 15 anos, utiliza solda MIG/MAG em ambiente fechado, com sistema de exaustão frequentemente defeituoso. Usa máscara respiratória, mas relata que frequentemente não há máscaras disponíveis ou são de tamanho inadequado.",
    question: "Na investigação deste caso pela equipe de vigilância em saúde do trabalhador, quais medidas devem ser adotadas, considerando os princípios da prevenção primária?",
    options: [
      "Treinamento do trabalhador para uso correto da máscara respiratória e fornecer EPIs adequados",
      "Afastamento definitivo do trabalhador da exposição e revisão do benefício previdenciário",
      "Busca ativa de outros casos, notificação compulsória e inspeção do ambiente para determinar medidas coletivas de controle dos fumos metálicos",
      "Encaminhamento para tratamento especializado em pneumologia ocupacional"
    ],
    correctAnswer: "Busca ativa de outros casos, notificação compulsória e inspeção do ambiente para determinar medidas coletivas de controle dos fumos metálicos",
    explanation: "Pneumoconioses são doenças irreversíveis e potencialmente progressivas, cuja prevenção primária (evitar novos casos) é prioritária. As ações de vigilância devem focar na dimensão coletiva, incluindo: busca ativa de outros casos (trabalhadores com exposição similar), notificação compulsória (SINAN), e inspeção detalhada do ambiente para determinar medidas coletivas, como sistemas eficazes de exaustão e ventilação. Embora o trabalhador afetado precise de atenção clínica e avaliação previdenciária, a abordagem primária de vigilância visa prevenir novos casos intervindo nos determinantes ambientais e organizacionais, seguindo a hierarquia de controles (priorizar controles na fonte sobre equipamentos de proteção individual)."
  },
  {
    id: 43,
    difficulty: 'difícil',
    caseDescription: "Engenheira de 40 anos trabalha remotamente de casa após a pandemia. Montou escritório improvisado na mesa da sala de jantar, usa notebook sem periféricos, cadeira sem ajustes e trabalha cerca de 10 horas/dia. Nos últimos 3 meses, desenvolveu cervicalgia e dor nos ombros. Consulta fisioterapeuta especialista em ergonomia para orientações.",
    question: "Considerando as especificidades do trabalho remoto e os fatores ergonômicos envolvidos, qual orientação seria mais eficaz para prevenir agravamento das queixas?",
    options: [
      "Realizar alongamentos cervicais durante 15 minutos antes e após a jornada de trabalho",
      "Usar anti-inflamatórios quando a dor se manifestar e procurar diminuir o estresse",
      "Estruturar adequadamente a estação de trabalho: monitor na altura dos olhos (com suporte ou monitor externo), teclado e mouse independentes, cadeira com apoio lombar ajustável e pausas regulares a cada 50-60 minutos",
      "Utilizar colar cervical durante o trabalho para manter o pescoço alinhado"
    ],
    correctAnswer: "Estruturar adequadamente a estação de trabalho: monitor na altura dos olhos (com suporte ou monitor externo), teclado e mouse independentes, cadeira com apoio lombar ajustável e pausas regulares a cada 50-60 minutos",
    explanation: "A intervenção ergonômica eficaz deve priorizar a adaptação do ambiente e equipamentos às características do indivíduo. O uso de notebook sem periféricos força flexão cervical excessiva para visualização da tela (posicionada abaixo da linha visual) e abdução dos ombros para digitação. A adequação da estação de trabalho com elevação do monitor à altura dos olhos e uso de periféricos (teclado e mouse) permite posicionamento neutro da coluna cervical e membros superiores, removendo os fatores biomecânicos causadores dos sintomas. As pausas regulares previnem a fadiga muscular por postura estática. Alongamentos e medidas farmacológicas são complementares, mas insuficientes se a causa primária (postura inadequada) não for corrigida."
  },
  {
    id: 44,
    difficulty: 'difícil',
    caseDescription: "Um fisioterapeuta do trabalho está realizando avaliação ergonômica em uma fábrica de peças automotivas. Na seção de montagem, trabalhadores realizam movimentos repetitivos de alta precisão em ciclos de 25 segundos, durante toda a jornada de 8 horas, com pausa única de 1 hora para almoço. A gerência relata aumento de 40% nas queixas de dor em membros superiores no último ano, após aumento da produção.",
    question: "Qual intervenção organizacional teria maior impacto na redução da sobrecarga biomecânica relatada?",
    options: [
      "Implementação de painel de produtividade visível com metas diárias para aumentar motivação",
      "Treinamento intensivo em técnicas corretas de movimentação para os operadores",
      "Implementação de pausas curtas (8-10 minutos) a cada 2 horas de trabalho ininterrupto e rodízio entre funções com solicitações biomecânicas diferentes",
      "Avaliação psicológica dos trabalhadores para identificar predisposição a queixas musculoesqueléticas"
    ],
    correctAnswer: "Implementação de pausas curtas (8-10 minutos) a cada 2 horas de trabalho ininterrupto e rodízio entre funções com solicitações biomecânicas diferentes",
    explanation: "Em atividades com movimentos repetitivos de alta precisão em ciclos curtos, os principais fatores de risco organizacionais são: ausência de variabilidade de movimentos, ausência de pausas frequentes para recuperação tecidual e jornadas prolongadas sem interrupção. A implementação de pausas regulares distribui períodos de recuperação ao longo da jornada (mais eficaz que uma pausa única prolongada), e o rodízio entre funções que solicitam diferentes grupos musculares e tipos de movimentos aumenta a variabilidade, reduzindo a sobrecarga biomecânica em estruturas específicas. Estudos em ergonomia demonstram que estas medidas organizacionais têm maior impacto na prevenção de LER/DORT que intervenções comportamentais individuais ou mudanças motivacionais."
  },
  {
    id: 45,
    difficulty: 'difícil',
    caseDescription: "Hospital universitário está revisando seus protocolos de prevenção de distúrbios musculoesqueléticos entre profissionais de enfermagem responsáveis pela movimentação de pacientes. Registros mostram alta incidência de lombalgia e lesões de ombro associadas a transferências e reposicionamentos de pacientes dependentes.",
    question: "De acordo com as evidências científicas atuais sobre prevenção de lesões ocupacionais na movimentação de pacientes, qual abordagem tem se mostrado mais eficaz?",
    options: [
      "Treinamento intensivo da equipe em técnicas manuais seguras de transferência e mobilização de pacientes",
      "Programa sistemático de 'Movimentação Segura de Pacientes' que inclui política institucional de não realização de transferências manuais, disponibilização de equipamentos mecânicos adequados, treinamento em seu uso e dimensionamento adequado das equipes",
      "Implementação de protocolo de avaliação para identificar pacientes de alto risco, que devem ser movimentados apenas por profissionais treinados",
      "Uso obrigatório de cinturões lombares por todos os profissionais durante transferências de pacientes"
    ],
    correctAnswer: "Programa sistemático de 'Movimentação Segura de Pacientes' que inclui política institucional de não realização de transferências manuais, disponibilização de equipamentos mecânicos adequados, treinamento em seu uso e dimensionamento adequado das equipes",
    explanation: "Revisões sistemáticas e estudos de intervenção demonstram que programas multicomponentes de 'Movimentação Segura de Pacientes' (Safe Patient Handling) são significativamente mais eficazes que abordagens baseadas apenas em treinamento de técnicas manuais. A abordagem completa inclui: política institucional clara ('Cultura de Segurança'); disponibilização de equipamentos mecânicos em quantidade suficiente (elevadores, pranchas deslizantes, etc.); algoritmos de decisão para seleção do método e equipamento apropriado; treinamento prático; e adequação do quadro de pessoal. Esta abordagem reconhece que o risco biomecânico da movimentação manual de pacientes dependentes frequentemente excede os limites de segurança, mesmo com técnica correta."
  },
  {
    id: 46,
    difficulty: 'difícil',
    caseDescription: "Um CEREST regional está implementando projeto de vigilância em saúde do trabalhador em frigoríficos de aves, setor com alta prevalência de distúrbios musculoesqueléticos. A equipe integrará dados de diferentes fontes para identificar empresas prioritárias para intervenção.",
    question: "Considerando os princípios e metodologias de vigilância em saúde do trabalhador, qual fonte de dados oferece informações mais precisas sobre a distribuição setorial das doenças relacionadas ao trabalho no Brasil?",
    options: [
      "RAIS (Relação Anual de Informações Sociais), que contém dados sobre todos os empregados formais",
      "Registros de CAT (Comunicação de Acidente de Trabalho) emitidas pelas empresas ao INSS",
      "SINAN (Sistema de Informação de Agravos de Notificação), que recebe notificações compulsórias de agravos relacionados ao trabalho",
      "Sistema SFIT (Sistema Federal de Inspeção do Trabalho) do Ministério do Trabalho"
    ],
    correctAnswer: "SINAN (Sistema de Informação de Agravos de Notificação), que recebe notificações compulsórias de agravos relacionados ao trabalho",
    explanation: "Na vigilância em saúde do trabalhador, cada sistema de informação tem finalidades e limitações específicas. O SINAN é o sistema mais adequado para análise da distribuição setorial de doenças relacionadas ao trabalho porque: 1) recebe notificações compulsórias de todos os serviços de saúde (não apenas da empresa); 2) inclui diagnóstico médico confirmado; 3) registra o ramo de atividade econômica; e 4) inclui trabalhadores formais e informais. As CAT têm importante subnotificação (muitas empresas não notificam doenças ocupacionais); a RAIS não contém informações de saúde; e o SFIT registra apenas infrações identificadas durante inspeções, representando amostra limitada das condições reais."
  },
  {
    id: 47,
    difficulty: 'difícil',
    caseDescription: "Empresa de engenharia civil está implementando programa de reabilitação profissional para trabalhadores com restrições médicas. Um dos casos envolve pedreiro de 42 anos com diagnóstico de hérnia de disco lombar L4-L5 tratada conservadoramente, com restrição definitiva para levantamento de cargas acima de 10kg, agachamentos repetitivos e torção de tronco.",
    question: "De acordo com os princípios da Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF) aplicados à reabilitação profissional, qual abordagem seria mais adequada?",
    options: [
      "Readaptação em função administrativa sem relação com conhecimentos prévios do trabalhador",
      "Aposentadoria por invalidez, considerando que a construção civil é incompatível com tais restrições",
      "Análise da capacidade funcional residual e demandas essenciais das possíveis funções, readaptando-o em atividade que utilize suas habilidades e experiência, como mestre de obras ou apontador",
      "Manutenção na mesma função de pedreiro, com orientação para solicitar ajuda sempre que necessitar manipular cargas acima de 10kg"
    ],
    correctAnswer: "Análise da capacidade funcional residual e demandas essenciais das possíveis funções, readaptando-o em atividade que utilize suas habilidades e experiência, como mestre de obras ou apontador",
    explanation: "A abordagem baseada na CIF foca nas capacidades preservadas, não apenas nas limitações, e considera a interação entre os fatores biológicos e contextuais (ambientais e pessoais). O modelo preconiza uma avaliação abrangente que inclui: capacidades funcionais residuais; análise detalhada das demandas essenciais das possíveis funções; e consideração da experiência, conhecimentos e habilidades desenvolvidas pelo trabalhador. Funções como mestre de obras ou apontador permitem utilizar a expertise adquirida na construção civil sem exposição às demandas físicas contraindicadas. Esta abordagem contrasta com medidas extremas (aposentadoria precoce), readaptação descontextualizada (função administrativa não relacionada), ou permanência na mesma função sem modificações significativas."
  },
  {
    id: 48,
    difficulty: 'difícil',
    caseDescription: "Estudo epidemiológico transversal realizado em empresa metalúrgica com 450 funcionários encontrou prevalência de 28% de dor lombar entre trabalhadores do setor de fundição, comparada a 12% nos setores administrativos. Análise multivariada identificou como fatores associados: levantamento manual de cargas >20kg (OR=2,3; IC95% 1,5-3,7), idade >45 anos (OR=1,8; IC95% 1,1-2,9) e ausência de pausas regulares (OR=1,9; IC95% 1,3-3,0).",
    question: "Com base nos resultados deste estudo epidemiológico, qual conclusão é mais apropriada para fundamentar intervenções preventivas?",
    options: [
      "A dor lombar é explicada principalmente pela idade avançada dos trabalhadores, indicando necessidade de contratar funcionários mais jovens",
      "O levantamento manual de cargas >20kg é um fator de risco independente para dor lombar, sugerindo necessidade de reorganização do trabalho com auxílio mecânico para estas cargas",
      "A prevalência encontrada é normal para o ramo metalúrgico, não indicando necessidade de intervenções específicas",
      "A metodologia transversal não permite estabelecer relações causais, sendo necessário aguardar estudos longitudinais antes de qualquer intervenção"
    ],
    correctAnswer: "O levantamento manual de cargas >20kg é um fator de risco independente para dor lombar, sugerindo necessidade de reorganização do trabalho com auxílio mecânico para estas cargas",
    explanation: "A análise multivariada permite identificar fatores de risco independentes, controlando possíveis confundidores. O levantamento de cargas >20kg apresentou a maior odds ratio (OR=2,3), indicando associação mais forte com a dor lombar, mesmo após ajuste para outros fatores como idade. Este resultado é consistente com a literatura sobre biomecânica ocupacional e fundamenta intervenções ergonômicas focadas na reorganização do trabalho para eliminar ou reduzir este fator de risco modificável, seguindo a hierarquia de controles. Estudos transversais têm limitações para definir causalidade, mas quando seus achados são consistentes com o conhecimento biomecânico e epidemiológico prévio, podem fundamentar intervenções preventivas."
  },
  {
    id: 49,
    difficulty: 'difícil',
    caseDescription: "Fisioterapeuta recém-contratado por empresa de telemarketing com 800 funcionários propõe implementação de programa de ergonomia para redução das LER/DORT. Em levantamento inicial, identifica que 35% dos operadores relatam sintomas musculoesqueléticos, principalmente em coluna cervical e membros superiores. A gerência solicita análise de custo-efetividade das intervenções propostas.",
    question: "Com base na literatura científica sobre ergonomia em centrais de telemarketing, qual argumento econômico mais sólido pode ser apresentado para justificar o programa?",
    options: [
      "Programas de ergonomia são obrigações legais e evitam multas, sendo seu custo irrelevante diante do risco financeiro da fiscalização",
      "Intervenções ergonômicas bem planejadas apresentam retorno sobre investimento (ROI) positivo quando consideram redução de absenteísmo, rotatividade, custos com tratamento e melhoria de produtividade",
      "O custo do programa deve ser considerado como benefício para os funcionários, não sendo necessária análise econômica",
      "O principal retorno econômico vem da melhoria da imagem da empresa perante os consumidores"
    ],
    correctAnswer: "Intervenções ergonômicas bem planejadas apresentam retorno sobre investimento (ROI) positivo quando consideram redução de absenteísmo, rotatividade, custos com tratamento e melhoria de produtividade",
    explanation: "Estudos de custo-efetividade e retorno sobre investimento (ROI) em ergonomia demonstram que intervenções bem planejadas frequentemente apresentam ROI positivo, especialmente em setores com alta prevalência de LER/DORT, como telemarketing. A análise econômica completa deve considerar: custos diretos (tratamentos médicos, fisioterapêuticos, medicamentos); custos indiretos (absenteísmo, presenteísmo, rotatividade, treinamento de substitutos); e potenciais ganhos em produtividade pela redução de fadiga e desconforto. Pesquisas indicam que intervenções multicomponentes podem apresentar ROI entre 3:1 e 6:1 num horizonte de 2-3 anos, constituindo argumento econômico mais sólido que enfoque exclusivo em obrigações legais ou marketing."
  },
  {
    id: 50,
    difficulty: 'difícil',
    caseDescription: "Um centro de pesquisas em saúde ocupacional está avaliando a eficácia de diferentes intervenções para prevenção de LER/DORT em ambientes de escritório com uso intensivo de computadores. Foram realizados quatro estudos de intervenção com desenho experimental, acompanhamento de 12 meses e desfechos que incluíram incidência de sintomas musculoesqueléticos e demandas por assistência médica.",
    question: "Com base nas evidências científicas atuais sobre ergonomia e prevenção de LER/DORT em trabalho informatizado, qual intervenção apresenta maior suporte quanto à eficácia?",
    options: [
      "Implementação isolada de ginástica laboral diária com sessões de 15 minutos no início do expediente",
      "Substituição de cadeiras convencionais por bolas de exercício (Swiss Ball) para estimular postura ativa",
      "Abordagem multicomponente que combina mobiliário ajustável, treinamento em ergonomia participativa e pausas curtas e frequentes assistidas por software",
      "Modificação da iluminação ambiente para controle do ofuscamento e do contraste nas telas"
    ],
    correctAnswer: "Abordagem multicomponente que combina mobiliário ajustável, treinamento em ergonomia participativa e pausas curtas e frequentes assistidas por software",
    explanation: "Revisões sistemáticas e meta-análises sobre intervenções para prevenção de LER/DORT em trabalho informatizado demonstram consistentemente que abordagens multicomponentes apresentam maior eficácia que intervenções isoladas. A combinação de: 1) mobiliário ajustável que permite adequação às características antropométricas individuais; 2) treinamento participativo que desenvolve competências para autoajuste e identificação de riscos; e 3) pausas curtas e frequentes que previnem fadiga muscular por contração estática prolongada, tem demonstrado resultados superiores na redução da incidência de sintomas musculoesqueléticos. Intervenções isoladas, como ginástica laboral ou mudanças específicas no mobiliário sem outras medidas, apresentam resultados inconsistentes ou inferiores nos estudos de maior qualidade metodológica."
  }
]
