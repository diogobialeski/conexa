export const WHATSAPP_URL = "https://wa.me/message/57GKRVDS734WK1";
export const INSTAGRAM_URL = "https://www.instagram.com/cone_xaconsultoria/";

export const getWhatsAppLinkWithMessage = (customMessage?: string) => {
  const defaultMsg = "Olá! Gostaria de entender como a Conexa pode ajudar a estruturar a operação da minha empresa.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/message/57GKRVDS734WK1?text=${encodeURIComponent(msg)}`;
};

export interface ProblemCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  impactTag: string;
}

export const PROBLEM_CARDS: ProblemCardItem[] = [
  {
    id: "leads",
    number: "01",
    title: "Leads sem acompanhamento",
    description: "Clientes e oportunidades ficam sem retorno ou dependem exclusivamente da memória de alguém.",
    impactTag: "Perda de vendas imediatas"
  },
  {
    id: "followup",
    number: "02",
    title: "Follow-up esquecido",
    description: "Negociações esfriam porque não existe uma rotina clara e agendada de acompanhamento.",
    impactTag: "Ciclo de vendas interrompido"
  },
  {
    id: "processos",
    number: "03",
    title: "Processos diferentes",
    description: "Cada pessoa executa a mesma atividade de um jeito diferente, dificultando a gestão e o controle.",
    impactTag: "Falta de padrão operacional"
  },
  {
    id: "informacao",
    number: "04",
    title: "Informação espalhada",
    description: "Dados ficam divididos entre conversas de WhatsApp, planilhas avulsas, anotações e ferramentas isoladas.",
    impactTag: "Falta de visibilidade"
  },
  {
    id: "dependencia",
    number: "05",
    title: "Equipe dependente",
    description: "O negócio depende de pessoas específicas e da presença constante do gestor para que as tarefas aconteçam.",
    impactTag: "Gargalo no gestor"
  },
  {
    id: "tecnologia",
    number: "06",
    title: "Tecnologia desconectada",
    description: "Existem ferramentas contratadas, mas elas não conversam entre si e não estão integradas a um processo claro.",
    impactTag: "Custo sem resultado"
  }
];

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos a operação atual e identificamos gargalos reais do negócio.",
    deliverable: "Mapeamento das fricções e plano de ação inicial"
  },
  {
    number: "02",
    title: "Processos",
    description: "Organizamos etapas, responsabilidades e rotinas comerciais.",
    deliverable: "Fluxogramas e rotinas padronizadas"
  },
  {
    number: "03",
    title: "CRM",
    description: "Implementamos uma estrutura simples, fluida e adequada à realidade da empresa.",
    deliverable: "Funil de vendas ajustado à operação"
  },
  {
    number: "04",
    title: "Implementação",
    description: "Colocamos a estratégia em funcionamento real no dia a dia da empresa.",
    deliverable: "Ativação prática e conexão de fluxos"
  },
  {
    number: "05",
    title: "Treinamento",
    description: "Capacitamos a equipe para utilizar e sustentar a nova estrutura com autonomia.",
    deliverable: "Acompanhamento presencial ou guiado"
  }
];

export interface DeliverableItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const DELIVERABLES: DeliverableItem[] = [
  {
    number: "01",
    title: "CRM",
    description: "Organização da operação comercial e acompanhamento de oportunidades em um fluxo claro e visual.",
    highlight: "Sem leads perdidos no WhatsApp"
  },
  {
    number: "02",
    title: "Processos",
    description: "Mapeamento e padronização das rotinas para a equipe saber exatamente o que fazer e quando fazer.",
    highlight: "Rotinas documentadas e previsíveis"
  },
  {
    number: "03",
    title: "Automação",
    description: "Redução de tarefas manuais e repetitivas onde a automação realmente faz sentido prático.",
    highlight: "Eficiência sem burocracia"
  },
  {
    number: "04",
    title: "Inteligência Artificial",
    description: "Aplicação prática e responsável de IA para aumento de produtividade e eficiência operacional.",
    highlight: "Tecnologia como aliada prática"
  },
  {
    number: "05",
    title: "Equipe",
    description: "Treinamento, capacitação e orientação para que a nova estrutura seja adotada no dia a dia.",
    highlight: "Engajamento real do time"
  },
  {
    number: "06",
    title: "Acompanhamento",
    description: "Ajustes finos e evolução após a implementação, conforme a operação amadurece e cresce.",
    highlight: "Evolução contínua da estrutura"
  }
];

export const SEGMENTS = [
  { name: "Autoescolas", context: "Gestão de matrículas, agendamento de aulas e follow-up de interessados" },
  { name: "Clínicas & Consultórios", context: "Confirmação de consultas, reativação de pacientes e gestão da recepção" },
  { name: "Médicos & Especialistas", context: "Fluxo comercial de agendamento e acolhimento com alta discrição" },
  { name: "Escolas & Cursos", context: "Ciclo de captação de alunos, campanhas sazonais e retenção" },
  { name: "Clínicas Odontológicas", context: "Acompanhamento de planos de tratamento e orçamentos abertos" },
  { name: "Corretores & Imobiliárias", context: "Gestão de carteira de imóveis e velocidade de contato no lead quente" },
  { name: "Estética & Beleza", context: "Padronização do atendimento e rotinas recorrentes de retorno" },
  { name: "Designers & Criativos", context: "Propostas comerciais, onboarding de clientes e rotina de prazos" },
  { name: "Prestadores de Serviços", context: "Fluxo claro de propostas, fechamentos e entrega técnica" },
  { name: "Pequenas e Médias Empresas", context: "Estruturação operacional para crescer com governança e método" }
];

export const COMPARISON_DATA = {
  traditional: {
    title: "Apenas Diagnóstico",
    steps: [
      { step: "Analisa", detail: "Entrevista a diretoria e compila anotações" },
      { step: "Entrega relatório", detail: "Apresenta um PDF extenso com recomendações" },
      { step: "Encerra", detail: "Deixa a empresa sozinha para tentar executar" }
    ],
    outcome: "O relatório vai para a gaveta e a operação continua no improviso."
  },
  conexa: {
    title: "Metodologia Conexa",
    steps: [
      { step: "Entende", detail: "Mapeamento minucioso da rotina real de trabalho" },
      { step: "Diagnostica", detail: "Identificação precisa de gargalos e vazamentos comerciais" },
      { step: "Estrutura", detail: "Desenho de fluxos, rotinas e critérios objetivos" },
      { step: "Implementa", detail: "Configuração prática do CRM, automações e processos" },
      { step: "Treina", detail: "Capacitação presencial ou guiada da equipe na prática" },
      { step: "Acompanha", detail: "Ajustes finos para garantir sustentabilidade no tempo" }
    ],
    outcome: "A operação funciona no dia a dia com processos claros e equipe alinhada."
  }
};
