export interface QuizQuestion {
    id: number;
    difficulty: 'fácil' | 'médio' | 'difícil';
    caseDescription: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }
  
  export const quizQuestionsTheory: QuizQuestion[] = [
    // QUESTÕES FÁCEIS
    {
      id: 1,
      difficulty: 'fácil',
      caseDescription: "Durante uma aula sobre legislação em saúde do trabalhador, um estudante de fisioterapia precisa identificar o principal artigo da Constituição Federal que fundamenta o direito à saúde.",
      question: "Qual artigo da Constituição Federal estabelece que 'a saúde é um direito de todos e dever do Estado'?",
      options: [
        "Artigo 5º",
        "Artigo 7º",
        "Artigo 196",
        "Artigo 200"
      ],
      correctAnswer: "Artigo 196",
      explanation: "O Artigo 196 da Constituição Federal estabelece que 'a saúde é um direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas'. Este artigo é fundamental para a saúde do trabalhador, pois estabelece que a saúde deve ser integral, universal e equitativa, inclusive nos locais de trabalho."
    },
    {
      id: 2,
      difficulty: 'fácil',
      caseDescription: "Um fisioterapeuta recém-formado está estudando sobre as normas regulamentadoras relacionadas à saúde do trabalhador.",
      question: "Qual Norma Regulamentadora (NR) está diretamente relacionada à ergonomia e é considerada a mais relevante para a atuação do fisioterapeuta na saúde do trabalhador?",
      options: [
        "NR 4 - SESMT",
        "NR 6 - Equipamentos de Proteção Individual",
        "NR 15 - Atividades Insalubres",
        "NR 17 - Ergonomia"
      ],
      correctAnswer: "NR 17 - Ergonomia",
      explanation: "A NR 17 (Ergonomia) é a norma que mais se relaciona com a atuação do fisioterapeuta na saúde do trabalhador, pois estabelece parâmetros para adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, incluindo aspectos relacionados ao mobiliário, equipamentos, condições ambientais e organização do trabalho."
    },
    {
      id: 3,
      difficulty: 'fácil',
      caseDescription: "Durante uma palestra sobre saúde ocupacional, um fisioterapeuta precisa explicar sobre a Política Nacional de Saúde do Trabalhador e da Trabalhadora.",
      question: "Em que ano e por qual portaria foi instituída a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT)?",
      options: [
        "2002, Portaria MS nº 1.679",
        "2005, Portaria MS nº 2.437",
        "2012, Portaria MS nº 1.823",
        "2017, Portaria MS nº 3.120"
      ],
      correctAnswer: "2012, Portaria MS nº 1.823",
      explanation: "A Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) foi instituída pela Portaria MS nº 1.823/2012. Seus objetivos incluem reduzir acidentes e doenças relacionadas ao trabalho, promover a saúde no trabalho por meio do SUS, aumentar o acesso dos trabalhadores à saúde, entre outros."
    },
    {
      id: 4,
      difficulty: 'fácil',
      caseDescription: "Um estudante de fisioterapia está realizando uma pesquisa sobre os órgãos responsáveis pela saúde do trabalhador no Brasil.",
      question: "Qual é a principal função do CEREST no contexto da saúde do trabalhador?",
      options: [
        "Emitir Comunicação de Acidente de Trabalho (CAT)",
        "Fiscalizar o cumprimento das normas de segurança nas empresas",
        "Prestar suporte técnico e assistência especializada em saúde do trabalhador",
        "Conceder benefícios previdenciários aos trabalhadores acidentados"
      ],
      correctAnswer: "Prestar suporte técnico e assistência especializada em saúde do trabalhador",
      explanation: "Os Centros de Referência em Saúde do Trabalhador (CEREST) atuam em níveis estadual, regional e municipal, prestando suporte técnico e assistência especializada em saúde do trabalhador. Fazem parte da Renast (Rede Nacional de Atenção Integral à Saúde do Trabalhador) e são fundamentais para a implementação da Política Nacional de Saúde do Trabalhador."
    },
    {
      id: 5,
      difficulty: 'fácil',
      caseDescription: "Durante uma aula sobre programas de saúde ocupacional, um professor apresenta as siglas de diferentes programas e comissões.",
      question: "O que significa a sigla CIPA e qual sua principal função nas empresas?",
      options: [
        "Comissão Interna de Prevenção de Acidentes; identificar riscos e promover ações preventivas",
        "Comitê Interno de Proteção Ambiental; fiscalizar o descarte de resíduos",
        "Certificado Internacional de Proteção Auditiva; avaliar a qualidade dos protetores auriculares",
        "Controle Integrado de Prevenção de Acidentes; registrar estatísticas de acidentes"
      ],
      correctAnswer: "Comissão Interna de Prevenção de Acidentes; identificar riscos e promover ações preventivas",
      explanation: "A CIPA (Comissão Interna de Prevenção de Acidentes) é uma comissão paritária (empregados e empregadores) prevista na NR 5, que tem como objetivo identificar riscos no ambiente de trabalho e promover ações preventivas para reduzir acidentes e doenças ocupacionais."
    },
    {
      id: 6,
      difficulty: 'fácil',
      caseDescription: "Um fisioterapeuta está estudando sobre os diferentes tipos de atividades de risco no ambiente de trabalho.",
      question: "Qual é a diferença entre atividades insalubres e atividades perigosas, segundo a legislação trabalhista?",
      options: [
        "Atividades insalubres são temporárias, enquanto atividades perigosas são permanentes",
        "Atividades insalubres expõem a agentes nocivos à saúde, enquanto atividades perigosas envolvem risco de acidentes",
        "Atividades insalubres afetam apenas a saúde física, enquanto atividades perigosas afetam a saúde mental",
        "Atividades insalubres ocorrem apenas em ambientes fechados, enquanto atividades perigosas ocorrem em ambientes abertos"
      ],
      correctAnswer: "Atividades insalubres expõem a agentes nocivos à saúde, enquanto atividades perigosas envolvem risco de acidentes",
      explanation: "Segundo a legislação trabalhista, atividades insalubres são aquelas que expõem os trabalhadores a agentes nocivos à saúde (físicos, químicos ou biológicos) acima dos limites de tolerância, enquanto atividades perigosas são aquelas que envolvem risco acentuado por exposição a inflamáveis, explosivos, energia elétrica, radiações ionizantes, entre outros, com risco de acidentes."
    },
    {
      id: 7,
      difficulty: 'fácil',
      caseDescription: "Durante uma palestra sobre notificação de doenças ocupacionais, um fisioterapeuta precisa explicar sobre o SINAN.",
      question: "O que é o SINAN e qual sua importância na saúde do trabalhador?",
      options: [
        "Sistema Internacional de Normas Ambientais; padroniza as normas de proteção ambiental",
        "Serviço de Informação Nacional de Acidentes Nucleares; monitora acidentes em usinas nucleares",
        "Sistema de Informação de Agravos de Notificação; permite a notificação de doenças e agravos relacionados ao trabalho",
        "Sindicato Nacional dos Trabalhadores; representa os interesses dos trabalhadores"
      ],
      correctAnswer: "Sistema de Informação de Agravos de Notificação; permite a notificação de doenças e agravos relacionados ao trabalho",
      explanation: "O SINAN (Sistema de Informação de Agravos de Notificação) é um sistema oficial do Ministério da Saúde para o registro e processamento de dados sobre agravos de notificação compulsória em todo o território nacional. Na saúde do trabalhador, permite a notificação de doenças e agravos relacionados ao trabalho, possibilitando a análise do perfil epidemiológico e o planejamento de ações de vigilância."
    },
    {
      id: 8,
      difficulty: 'fácil',
      caseDescription: "Um fisioterapeuta está estudando sobre a atuação profissional na saúde do trabalhador.",
      question: "Quais são as três principais áreas de atuação do fisioterapeuta na saúde do trabalhador?",
      options: [
        "Diagnóstico, prescrição medicamentosa e reabilitação",
        "Prevenção, avaliação e reabilitação",
        "Fiscalização, notificação e punição",
        "Gestão, auditoria e consultoria"
      ],
      correctAnswer: "Prevenção, avaliação e reabilitação",
      explanation: "As três principais áreas de atuação do fisioterapeuta na saúde do trabalhador são: Prevenção (análise ergonômica, palestras educativas, ginástica laboral), Avaliação (avaliações ocupacionais, identificação de fatores de risco, análise de posto de trabalho) e Reabilitação (tratamento de LER/DORT, reabilitação funcional, adaptações do posto de trabalho)."
    },
    {
      id: 9,
      difficulty: 'fácil',
      caseDescription: "Durante uma aula sobre a CLT, um professor de fisioterapia discute os direitos dos trabalhadores.",
      question: "Qual artigo da CLT estabelece que o empregador deve anotar na carteira de trabalho a admissão, alterações contratuais e rescisão em até 5 dias úteis?",
      options: [
        "Artigo 15",
        "Artigo 29",
        "Artigo 41",
        "Artigo 58"
      ],
      correctAnswer: "Artigo 29",
      explanation: "O Artigo 29 da CLT (Consolidação das Leis do Trabalho) estabelece que o empregador deve anotar a admissão, alterações contratuais e rescisão na carteira de trabalho em até 5 dias úteis. Este é um direito fundamental do trabalhador para garantir o registro formal da relação de trabalho."
    },
    {
      id: 10,
      difficulty: 'fácil',
      caseDescription: "Um fisioterapeuta está estudando sobre a Lei 6.514/77, que trata da Segurança e Medicina do Trabalho.",
      question: "Qual foi a principal contribuição da Lei 6.514/77 para a saúde do trabalhador no Brasil?",
      options: [
        "Criou o Sistema Único de Saúde (SUS)",
        "Estabeleceu as diretrizes para a criação das Normas Regulamentadoras (NRs)",
        "Instituiu o Programa de Controle Médico de Saúde Ocupacional (PCMSO)",
        "Determinou a obrigatoriedade da ginástica laboral nas empresas"
      ],
      correctAnswer: "Estabeleceu as diretrizes para a criação das Normas Regulamentadoras (NRs)",
      explanation: "A Lei 6.514/77 alterou o Capítulo V da CLT, estabelecendo as diretrizes para a criação das Normas Regulamentadoras (NRs) pelo Ministério do Trabalho e Emprego. Esta lei foi fundamental para a estruturação da legislação de segurança e saúde no trabalho no Brasil, determinando que as empresas devem seguir normas federais, estaduais, municipais e convenções coletivas para prevenção de doenças ocupacionais e acidentes."
    },
    
    // QUESTÕES MÉDIAS
    {
      id: 11,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está analisando as responsabilidades das empresas e empregados conforme a CLT.",
      question: "De acordo com a CLT, quais são as principais responsabilidades das empresas em relação à segurança e saúde no trabalho?",
      options: [
        "Apenas fornecer EPIs e realizar exames periódicos",
        "Apenas contratar um médico do trabalho e um engenheiro de segurança",
        "Cumprir e fazer cumprir normas de segurança, fornecer treinamentos e EPIs",
        "Apenas pagar adicional de insalubridade ou periculosidade quando necessário"
      ],
      correctAnswer: "Cumprir e fazer cumprir normas de segurança, fornecer treinamentos e EPIs",
      explanation: "De acordo com a CLT, as empresas têm a responsabilidade de cumprir e fazer cumprir as normas de segurança e saúde no trabalho, fornecer treinamentos adequados e equipamentos de proteção individual (EPIs), além de adotar medidas coletivas de proteção e promover um ambiente de trabalho seguro e saudável."
    },
    {
      id: 12,
      difficulty: 'médio',
      caseDescription: "Durante uma aula sobre a Renast, um professor discute sua estrutura e funcionamento.",
      question: "Em que ano foi criada a Renast e qual sua principal função no Sistema Único de Saúde?",
      options: [
        "1988; fiscalizar o cumprimento das normas de segurança nas empresas",
        "1995; conceder benefícios previdenciários aos trabalhadores acidentados",
        "2002; promover a saúde do trabalhador por meio de ações de promoção, prevenção, proteção, vigilância e assistência",
        "2012; realizar perícias médicas para concessão de aposentadoria por invalidez"
      ],
      correctAnswer: "2002; promover a saúde do trabalhador por meio de ações de promoção, prevenção, proteção, vigilância e assistência",
      explanation: "A Renast (Rede Nacional de Atenção Integral à Saúde do Trabalhador) foi criada em 2002, dentro do Sistema Único de Saúde (SUS). Sua principal função é promover a saúde do trabalhador por meio de ações de promoção, prevenção, proteção, vigilância e assistência à saúde, articulando diferentes níveis de atenção e serviços do SUS."
    },
    {
      id: 13,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está estudando sobre os programas e comissões importantes na saúde do trabalhador.",
      question: "O que significa a sigla SESMT e qual sua composição mínima em uma empresa com 150 funcionários e grau de risco 3?",
      options: [
        "Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho; 1 Técnico de Segurança e 1 Engenheiro de Segurança (tempo parcial)",
        "Sistema Estadual de Saúde e Medicina do Trabalho; não é obrigatório para empresas com menos de 200 funcionários",
        "Serviço de Emergência e Saúde para Melhorias do Trabalho; 1 Médico do Trabalho e 1 Enfermeiro",
        "Setor Especializado em Saúde Mental do Trabalhador; 1 Psicólogo e 1 Assistente Social"
      ],
      correctAnswer: "Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho; 1 Técnico de Segurança e 1 Engenheiro de Segurança (tempo parcial)",
      explanation: "O SESMT (Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho) é previsto na NR 4. Para uma empresa com 150 funcionários e grau de risco 3, a composição mínima exigida é de 1 Técnico de Segurança do Trabalho e 1 Engenheiro de Segurança do Trabalho em tempo parcial, conforme o dimensionamento estabelecido no Quadro II da NR 4."
    },
    {
      id: 14,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está analisando a atuação profissional nos diferentes níveis de atenção à saúde do trabalhador.",
      question: "Como o fisioterapeuta deve atuar na Atenção Primária à Saúde do Trabalhador?",
      options: [
        "Realizando apenas tratamentos especializados para LER/DORT",
        "Focando exclusivamente na reabilitação de trabalhadores acidentados",
        "Mapeando atividades produtivas, identificando riscos, participando de atividades educativas e notificando agravos",
        "Atuando apenas em hospitais de alta complexidade para casos graves"
      ],
      correctAnswer: "Mapeando atividades produtivas, identificando riscos, participando de atividades educativas e notificando agravos",
      explanation: "Na Atenção Primária à Saúde (UBS, ambulatórios), o fisioterapeuta deve mapear atividades produtivas, identificar riscos, notificar agravos, participar de atividades educativas e encaminhar trabalhadores para níveis de atenção adequados. Esta atuação tem caráter preventivo e de vigilância em saúde, sendo fundamental para a detecção precoce de problemas relacionados ao trabalho."
    },
    {
      id: 15,
      difficulty: 'médio',
      caseDescription: "Durante uma aula sobre a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT), um professor discute seus princípios fundamentais.",
      question: "Quais são os princípios fundamentais da PNSTT?",
      options: [
        "Centralização, verticalidade, focalização e setorialidade",
        "Universalidade, integralidade, equidade e intersetorialidade",
        "Privatização, terceirização, flexibilização e desregulamentação",
        "Especialização, fragmentação, hierarquização e exclusividade"
      ],
      correctAnswer: "Universalidade, integralidade, equidade e intersetorialidade",
      explanation: "Os princípios fundamentais da Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) são: Universalidade (acesso para todos os trabalhadores), Integralidade (atenção em todos os níveis de complexidade), Equidade (priorização de grupos mais vulneráveis) e Intersetorialidade (articulação entre saúde, trabalho, previdência e outros setores)."
    },
    {
      id: 16,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está estudando sobre as doenças ocupacionais mais comuns na prática fisioterapêutica.",
      question: "Qual é a principal característica da Síndrome do Túnel do Carpo e qual grupo de trabalhadores é mais comumente afetado?",
      options: [
        "Inflamação dos tendões do polegar; cozinheiros e padeiros",
        "Compressão do nervo mediano no punho; digitadores e operadores de caixa",
        "Inflamação na inserção dos músculos extensores do punho; pintores e carpinteiros",
        "Compressão dos tendões do manguito rotador; pedreiros e carregadores"
      ],
      correctAnswer: "Compressão do nervo mediano no punho; digitadores e operadores de caixa",
      explanation: "A Síndrome do Túnel do Carpo é caracterizada pela compressão do nervo mediano no punho, causando sintomas como dor, formigamento e dormência na mão e dedos. É comum em digitadores, operadores de caixa e outros trabalhadores que realizam movimentos repetitivos de flexão e extensão do punho, sendo uma das principais LER/DORT tratadas por fisioterapeutas."
    },
    {
      id: 17,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está analisando os agravos de notificação compulsória relacionados ao trabalho no SINAN.",
      question: "Quais dos seguintes agravos relacionados ao trabalho são de notificação compulsória no SINAN?",
      options: [
        "Apenas acidentes de trabalho fatais",
        "Apenas LER/DORT e acidentes com exposição a material biológico",
        "Acidentes de trabalho graves, LER/DORT, PAIR, pneumoconioses e transtornos mentais relacionados ao trabalho",
        "Apenas doenças crônicas como hipertensão e diabetes relacionadas ao trabalho"
      ],
      correctAnswer: "Acidentes de trabalho graves, LER/DORT, PAIR, pneumoconioses e transtornos mentais relacionados ao trabalho",
      explanation: "Os agravos de notificação compulsória relacionados ao trabalho no SINAN incluem: acidentes de trabalho graves, fatais e com crianças/adolescentes, acidentes com exposição a material biológico, LER/DORT, Perda Auditiva Induzida por Ruído (PAIR), pneumoconioses, transtornos mentais relacionados ao trabalho, câncer relacionado ao trabalho e dermatoses ocupacionais, entre outros."
    },
    {
      id: 18,
      difficulty: 'médio',
      caseDescription: "Durante uma aula sobre a atuação do fisioterapeuta em equipes multiprofissionais de saúde do trabalhador, um professor discute a importância da colaboração interprofissional.",
      question: "Como deve ser a atuação do fisioterapeuta em equipes multiprofissionais de saúde do trabalhador?",
      options: [
        "Deve atuar de forma isolada, focando apenas na reabilitação física",
        "Deve assumir a liderança da equipe em todos os casos de LER/DORT",
        "Deve colaborar com médicos do trabalho, engenheiros de segurança, ergonomistas e outros profissionais para desenvolver abordagens abrangentes",
        "Deve limitar sua atuação à prescrição de exercícios, deixando as demais atividades para outros profissionais"
      ],
      correctAnswer: "Deve colaborar com médicos do trabalho, engenheiros de segurança, ergonomistas e outros profissionais para desenvolver abordagens abrangentes",
      explanation: "O fisioterapeuta na saúde do trabalhador deve atuar em equipes multiprofissionais, colaborando com médicos do trabalho, engenheiros de segurança, ergonomistas, enfermeiros, psicólogos e outros profissionais para desenvolver abordagens abrangentes de prevenção, avaliação e tratamento. Esta colaboração interprofissional é essencial para abordar os múltiplos fatores envolvidos na saúde ocupacional."
    },
    {
      id: 19,
      difficulty: 'médio',
      caseDescription: "Um fisioterapeuta está estudando sobre a história da saúde ocupacional no Brasil.",
      question: "Qual foi a primeira lei sobre saúde ocupacional no Brasil e quando foi criada?",
      options: [
        "Lei 8.080/1990, que criou o Sistema Único de Saúde",
        "Decreto 3.724/1919, que regulamentou as obrigações resultantes de acidentes de trabalho",
        "Lei 6.514/1977, que estabeleceu as Normas Regulamentadoras",
        "Portaria 3.214/1978, que aprovou as primeiras Normas Regulamentadoras"
      ],
      correctAnswer: "Decreto 3.724/1919, que regulamentou as obrigações resultantes de acidentes de trabalho",
      explanation: "A primeira lei sobre saúde ocupacional no Brasil foi o Decreto 3.724, criado em 1919, que regulamentou as obrigações resultantes de acidentes de trabalho. Esta lei representou um marco inicial na legislação brasileira sobre proteção à saúde dos trabalhadores, estabelecendo responsabilidades em casos de acidentes laborais."
    },
    {
      id: 20,
      difficulty: 'médio',
      caseDescription: "Durante uma palestra sobre a especialidade de Fisioterapia do Trabalho, um fisioterapeuta discute seu reconhecimento oficial.",
      question: "Em que ano e através de qual resolução a especialidade de Fisioterapia do Trabalho foi reconhecida pelo COFFITO?",
      options: [
        "1975, através da Resolução COFFITO nº 8",
        "1998, através da Resolução COFFITO nº 189",
        "2009, através da Resolução COFFITO nº 351",
        "2016, através da Resolução COFFITO nº 465"
      ],
      correctAnswer: "2009, através da Resolução COFFITO nº 351",
      explanation: "A especialidade de Fisioterapia do Trabalho foi reconhecida pelo COFFITO (Conselho Federal de Fisioterapia e Terapia Ocupacional) em 2009, através da Resolução nº 351. Este reconhecimento foi um marco importante para a atuação dos fisioterapeutas na área de saúde ocupacional, estabelecendo formalmente as competências e atribuições destes profissionais neste campo."
    },
    
    // QUESTÕES DIFÍCEIS
    {
      id: 21,
      difficulty: 'difícil',
      caseDescription: "Um fisioterapeuta está analisando a eficácia de diferentes intervenções na saúde do trabalhador, considerando a hierarquia das medidas de controle de riscos ocupacionais.",
      question: "De acordo com a hierarquia das medidas de controle de riscos ocupacionais, qual sequência representa corretamente a ordem de prioridade das intervenções, da mais eficaz para a menos eficaz?",
      options: [
        "1. EPIs; 2. Medidas administrativas; 3. Controles de engenharia; 4. Substituição; 5. Eliminação",
        "1. Eliminação; 2. Substituição; 3. Controles de engenharia; 4. Medidas administrativas; 5. EPIs",
        "1. Medidas administrativas; 2. EPIs; 3. Eliminação; 4. Substituição; 5. Controles de engenharia",
        "1. Controles de engenharia; 2. Eliminação; 3. EPIs; 4. Substituição; 5. Medidas administrativas"
      ],
      correctAnswer: "1. Eliminação; 2. Substituição; 3. Controles de engenharia; 4. Medidas administrativas; 5. EPIs",
      explanation: "A hierarquia das medidas de controle de riscos ocupacionais estabelece a seguinte ordem de prioridade, da mais eficaz para a menos eficaz: 1. Eliminação do risco (remover completamente o perigo); 2. Substituição (trocar por processo ou material menos perigoso); 3. Controles de engenharia (isolamento, barreiras físicas, exaustão); 4. Medidas administrativas (procedimentos, treinamentos, rodízios); 5. EPIs (última barreira de proteção). Esta hierarquia é fundamental para o planejamento de intervenções eficazes em saúde do trabalhador."
    },
    {
      id: 22,
      difficulty: 'difícil',
      caseDescription: "Um fisioterapeuta está analisando as estatísticas de subnotificação de doenças ocupacionais no Brasil.",
      question: "De acordo com as estatísticas apresentadas no material de estudo, qual é a estimativa de subnotificação de doenças ocupacionais no Brasil e qual doença representa a maior parte das notificações realizadas?",
      options: [
        "Estima-se que 30-40% dos casos são notificados; acidentes com material biológico representam a maioria",
        "Estima-se que 5-10% dos casos são notificados; LER/DORT representam cerca de 70% das doenças ocupacionais notificadas",
        "Estima-se que 50-60% dos casos são notificados; pneumoconioses representam a maioria",
        "Estima-se que 20-25% dos casos são notificados; transtornos mentais representam cerca de 80% das notificações"
      ],
      correctAnswer: "Estima-se que 5-10% dos casos são notificados; LER/DORT representam cerca de 70% das doenças ocupacionais notificadas",
      explanation: "Segundo as estatísticas apresentadas no material de estudo, estima-se que apenas 5-10% dos casos de doenças ocupacionais são notificados no Brasil, evidenciando um grave problema de subnotificação. As LER/DORT (Lesões por Esforços Repetitivos/Distúrbios Osteomusculares Relacionados ao Trabalho) representam cerca de 70% das doenças ocupacionais notificadas, sendo a categoria mais prevalente e de maior relevância para a atuação do fisioterapeuta."
    },
    {
        id: 23,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está estudando sobre a abordagem biopsicossocial na saúde do trabalhador, conforme a Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF).",
        question: "Como a Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF) contribui para uma abordagem mais completa na avaliação e intervenção em saúde do trabalhador?",
        options: [
          "Foca exclusivamente nos aspectos biológicos da doença, ignorando fatores psicossociais",
          "Substitui completamente o diagnóstico médico tradicional, tornando-o desnecessário",
          "Integra aspectos biológicos, psicológicos e sociais, considerando fatores contextuais e ambientais que influenciam a funcionalidade",
          "Serve apenas como ferramenta estatística para classificação de doenças, sem aplicação prática"
        ],
        correctAnswer: "Integra aspectos biológicos, psicológicos e sociais, considerando fatores contextuais e ambientais que influenciam a funcionalidade",
        explanation: "A CIF proporciona uma abordagem biopsicossocial ao integrar aspectos biológicos (condição de saúde), psicológicos (fatores pessoais) e sociais (fatores ambientais), considerando não apenas a doença, mas a funcionalidade do indivíduo em seu contexto. Na saúde do trabalhador, permite avaliar como as condições de trabalho afetam a funcionalidade e como fatores contextuais (como suporte social, adaptações no ambiente) podem influenciar a participação laboral."
      },
      {
        id: 24,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está analisando o impacto econômico das doenças e acidentes de trabalho, conforme dados apresentados no material de estudo.",
        question: "De acordo com as estatísticas apresentadas, qual é o impacto econômico estimado das doenças e acidentes de trabalho e como a fisioterapia pode contribuir para reduzir este impacto?",
        options: [
          "Impacto de 1% do PIB global; a fisioterapia pode reduzir em até 20% o tempo de afastamento",
          "Impacto de 4% do PIB global; a fisioterapia pode reduzir em até 60% o tempo de afastamento",
          "Impacto de 10% do PIB global; a fisioterapia pode reduzir em até 30% o tempo de afastamento",
          "Impacto de 2% do PIB global; a fisioterapia pode reduzir em até 45% o tempo de afastamento"
        ],
        correctAnswer: "Impacto de 4% do PIB global; a fisioterapia pode reduzir em até 60% o tempo de afastamento",
        explanation: "Segundo as estatísticas apresentadas no material de estudo, doenças e acidentes de trabalho custam cerca de 4% do PIB global anualmente, representando um enorme impacto econômico. A fisioterapia, através de intervenções adequadas e programas de reabilitação eficazes, pode reduzir em até 60% o tempo de afastamento do trabalho, contribuindo significativamente para a redução deste impacto econômico, além de melhorar a qualidade de vida dos trabalhadores."
      },
      {
        id: 25,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está estudando sobre a história da medicina ocupacional e seus precursores.",
        question: "Quem é considerado o 'Pai da Medicina Ocupacional' e qual foi sua principal contribuição para a área?",
        options: [
          "Hipócrates; descreveu doenças relacionadas ao trabalho de mineiros no século IV a.C.",
          "Paracelso; estudou doenças pulmonares em mineiros no século XVI",
          "Bernardino Ramazzini; descreveu mais de 50 doenças relacionadas ao trabalho em seu livro 'As Doenças dos Trabalhadores'",
          "Alice Hamilton; pioneira em toxicologia industrial nos Estados Unidos no início do século XX"
        ],
        correctAnswer: "Bernardino Ramazzini; descreveu mais de 50 doenças relacionadas ao trabalho em seu livro 'As Doenças dos Trabalhadores'",
        explanation: "Bernardino Ramazzini (1633-1714) é considerado o 'Pai da Medicina Ocupacional'. Em seu livro 'As Doenças dos Trabalhadores' (De Morbis Artificum Diatriba), publicado em 1700, ele descreveu mais de 50 doenças relacionadas ao trabalho, sendo pioneiro na associação sistemática entre ocupações e patologias específicas. Ramazzini também introduziu a pergunta 'Qual é a sua ocupação?' na anamnese médica, reconhecendo a importância do trabalho como determinante da saúde."
      },
      {
        id: 26,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está analisando o fluxo de notificação de doenças e agravos relacionados ao trabalho no SINAN.",
        question: "Qual é o fluxo correto de notificação de doenças e agravos relacionados ao trabalho no SINAN?",
        options: [
          "1. Preenchimento da CAT; 2. Atendimento médico; 3. Notificação no SINAN; 4. Análise pelos níveis municipal, estadual e federal; 5. Implementação de ações",
          "1. Identificação do caso; 2. Preenchimento da ficha de notificação; 3. Envio para vigilância epidemiológica municipal; 4. Digitação no SINAN; 5. Análise dos dados; 6. Implementação de ações",
          "1. Atendimento pelo CEREST; 2. Notificação direta ao Ministério da Saúde; 3. Comunicação à empresa; 4. Fiscalização pelo Ministério do Trabalho",
          "1. Diagnóstico médico; 2. Comunicação ao INSS; 3. Abertura de processo administrativo; 4. Fiscalização; 5. Notificação no SINAN"
        ],
        correctAnswer: "1. Identificação do caso; 2. Preenchimento da ficha de notificação; 3. Envio para vigilância epidemiológica municipal; 4. Digitação no SINAN; 5. Análise dos dados; 6. Implementação de ações",
        explanation: "O fluxo correto de notificação no SINAN segue estas etapas: 1. Identificação do caso pelo profissional de saúde; 2. Preenchimento da ficha de notificação; 3. Envio da ficha para a vigilância epidemiológica municipal; 4. Digitação dos dados no SINAN; 5. Análise dos dados pelos níveis municipal, estadual e federal; 6. Implementação de ações de vigilância e prevenção. Este fluxo é fundamental para garantir que os dados epidemiológicos sejam adequadamente registrados e utilizados para orientar políticas públicas."
      },
      {
        id: 27,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está estudando sobre a atuação profissional na saúde do trabalhador nos diferentes níveis de atenção à saúde.",
        question: "Como deve ser a atuação do fisioterapeuta na saúde do trabalhador nos três níveis de atenção à saúde (primária, secundária e terciária)?",
        options: [
          "Deve atuar apenas na atenção terciária, tratando casos graves em hospitais",
          "Deve focar principalmente na atenção secundária, em clínicas especializadas",
          "Deve atuar nos três níveis, com abordagens específicas para cada um: prevenção e vigilância na primária, atendimento especializado na secundária e reabilitação complexa na terciária",
          "Deve concentrar-se na atenção primária, deixando os demais níveis para outros profissionais"
        ],
        correctAnswer: "Deve atuar nos três níveis, com abordagens específicas para cada um: prevenção e vigilância na primária, atendimento especializado na secundária e reabilitação complexa na terciária",
        explanation: "O fisioterapeuta deve atuar nos três níveis de atenção à saúde do trabalhador: Na Atenção Primária (UBS, ambulatórios), realizando mapeamento de riscos, atividades educativas e notificação de agravos; Na Atenção Secundária (clínicas especializadas), oferecendo atendimento especializado para casos de LER/DORT e outras condições relacionadas ao trabalho; Na Atenção Terciária (hospitais de alta complexidade), tratando lesões graves e realizando reabilitação complexa visando a reintegração do trabalhador às atividades profissionais."
      },
      {
        id: 28,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está analisando a relação entre a NR 17 (Ergonomia) e a atuação do fisioterapeuta na saúde do trabalhador.",
        question: "Qual é a relação entre a NR 17 (Ergonomia) e a atuação do fisioterapeuta na saúde do trabalhador, e quais aspectos esta norma regulamenta?",
        options: [
          "A NR 17 proíbe a atuação do fisioterapeuta em ergonomia, restringindo esta área aos engenheiros; regulamenta apenas o uso de EPIs",
          "A NR 17 é irrelevante para o fisioterapeuta, pois trata apenas de aspectos técnicos de maquinário; regulamenta a fabricação de equipamentos",
          "A NR 17 é a norma que mais se relaciona com a atuação do fisioterapeuta, estabelecendo parâmetros para adaptação das condições de trabalho; regulamenta mobiliário, equipamentos, condições ambientais e organização do trabalho",
          "A NR 17 limita a atuação do fisioterapeuta à ginástica laboral; regulamenta apenas os intervalos de descanso"
        ],
        correctAnswer: "A NR 17 é a norma que mais se relaciona com a atuação do fisioterapeuta, estabelecendo parâmetros para adaptação das condições de trabalho; regulamenta mobiliário, equipamentos, condições ambientais e organização do trabalho",
        explanation: "A NR 17 (Ergonomia) é a norma regulamentadora que mais se relaciona com a atuação do fisioterapeuta na saúde do trabalhador, pois estabelece parâmetros para adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores. Ela regulamenta aspectos como: mobiliário, equipamentos, condições ambientais (ruído, temperatura, iluminação), organização do trabalho (jornada, pausas, ritmo) e capacitação. O fisioterapeuta utiliza estes parâmetros para realizar análises ergonômicas e propor intervenções."
      },
      {
        id: 29,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está estudando sobre as principais doenças ocupacionais na prática fisioterapêutica e seus tratamentos.",
        question: "Quais são as principais abordagens fisioterapêuticas para o tratamento da Lombalgia Ocupacional, considerada uma das doenças mais prevalentes relacionadas ao trabalho?",
        options: [
          "Apenas repouso absoluto por 30 dias e uso de órteses lombares permanentes",
          "Exclusivamente eletroterapia de alta potência, sem exercícios ativos",
          "Terapia manual, exercícios de estabilização, escola de coluna e adequação ergonômica",
          "Apenas orientações ergonômicas, sem intervenção terapêutica direta"
        ],
        correctAnswer: "Terapia manual, exercícios de estabilização, escola de coluna e adequação ergonômica",
        explanation: "Para a Lombalgia Ocupacional (dor lombar relacionada a esforços, posturas inadequadas ou vibração), as principais abordagens fisioterapêuticas incluem: terapia manual (mobilizações, manipulações, liberação miofascial), exercícios de estabilização para fortalecimento da musculatura profunda do tronco, escola de coluna (programa educativo sobre mecânica corporal e autocuidado) e adequação ergonômica do posto de trabalho. Esta abordagem multimodal é considerada mais eficaz que intervenções isoladas."
      },
      {
        id: 30,
        difficulty: 'difícil',
        caseDescription: "Um fisioterapeuta está analisando a eficácia de diferentes intervenções preventivas na saúde do trabalhador.",
        question: "Considerando as evidências científicas atuais, qual intervenção preventiva apresenta maior eficácia na redução de LER/DORT em ambientes de trabalho?",
        options: [
          "Apenas ginástica laboral diária de 15 minutos",
          "Apenas uso de órteses preventivas durante toda a jornada",
          "Abordagem multicomponente: modificações ergonômicas, pausas, rodízios de função e treinamento",
          "Apenas palestras educativas mensais sobre ergonomia"
        ],
        correctAnswer: "Abordagem multicomponente: modificações ergonômicas, pausas, rodízios de função e treinamento",
        explanation: "As evidências científicas atuais indicam que intervenções preventivas isoladas têm eficácia limitada. A abordagem multicomponente, que combina modificações ergonômicas (adaptação de mobiliário e equipamentos), organização do trabalho (pausas, rodízios de função), treinamento (técnicas corretas, mecânica corporal) e exercícios específicos, apresenta maior eficácia na redução de LER/DORT. Esta abordagem atua em múltiplos fatores de risco simultaneamente, sendo mais efetiva que intervenções isoladas."
      }
    ];