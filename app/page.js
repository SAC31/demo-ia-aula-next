'use client';

import React from 'react';

const learningPath = [
  {
    id: 'fundamentos',
    titulo: 'Iteração 1 — Fundamentos de IA',
    objetivo:
      'Alinhar linguagem de negócio: o que é IA, onde cria valor comercial e onde NÃO usar.',
    dinamica: '10 min de explicação + 5 min de perguntas da turma.',
    entregavel: 'Mapa rápido de oportunidades por área comercial.',
  },
  {
    id: 'prompts',
    titulo: 'Iteração 2 — Engenharia de Prompt',
    objetivo:
      'Mostrar como contexto, público, formato e objetivo mudam a qualidade da resposta.',
    dinamica: 'Comparar prompt fraco, médio e forte ao vivo.',
    entregavel: 'Checklist de prompt para uso interno.',
  },
  {
    id: 'chatbot',
    titulo: 'Iteração 3 — Chatbot Comercial',
    objetivo:
      'Demonstrar um chatbot para atendimento e qualificação de oportunidades.',
    dinamica: 'Simulação de conversa com lead em diferentes cenários.',
    entregavel: 'Fluxo padrão de perguntas e encaminhamento.',
  },
  {
    id: 'assistente',
    titulo: 'Iteração 4 — Assistente Virtual de Vendas',
    objetivo:
      'Evidenciar um assistente orientado a tarefas: preparar reunião, resumir CRM e sugerir próximos passos.',
    dinamica: 'Caso real: reunião com cliente + plano de follow-up.',
    entregavel: 'Plano de ação semanal com IA para direção comercial.',
  },
];

const promptExamples = {
  fraco: {
    label: 'Fraco',
    prompt: 'Fala sobre vendas com IA.',
    resposta:
      'IA pode ajudar vendas em diferentes situações e melhorar alguns processos da empresa.',
  },
  medio: {
    label: 'Médio',
    prompt:
      'Explica como IA pode ajudar uma equipa comercial B2B a melhorar produtividade.',
    resposta:
      'A IA pode apoiar uma equipa comercial B2B ao automatizar tarefas administrativas, priorizar leads e sugerir ações de follow-up. Isso reduz tempo operacional e aumenta foco em negociação e relacionamento com clientes.',
  },
  forte: {
    label: 'Forte',
    prompt:
      'Atua como consultor de enablement comercial. Explica para uma direção comercial B2B, em português de Portugal, 5 formas práticas de usar IA no funil de vendas, com exemplos reais e 2 riscos éticos.',
    resposta:
      'A IA pode reforçar o desempenho comercial em cinco frentes: (1) qualificação automática de leads com base em histórico; (2) previsão de probabilidade de fecho por oportunidade; (3) criação de propostas personalizadas por segmento; (4) preparação de reuniões com resumo de conta e objeções prováveis; (5) follow-up inteligente com sugestão do melhor canal e momento de contacto. Exemplos: alertas de risco de churn e recomendação de cross-sell em clientes ativos. Riscos éticos: enviesamento nos dados (decisões injustas) e uso inadequado de dados pessoais sem governança clara.',
  },
};

const chatbotScenarios = {
  prospeccao: {
    pergunta: 'Sou diretor comercial. Como priorizar leads esta semana?',
    chatbot:
      'Posso ajudar com um ranking simples de leads por potencial e urgência, mas preciso de dados básicos: segmento, ticket médio e fase atual.',
    assistente:
      'Criei um plano de priorização com base no teu CRM: 12 leads quentes, 8 mornos e 5 frios. Também preparei mensagens de follow-up para os 12 quentes e agendei revisão para sexta-feira.',
  },
  objecao: {
    pergunta: 'Cliente disse que o preço está alto. O que responder?',
    chatbot:
      'Uma resposta possível é reforçar benefícios, retorno esperado e diferenciais da solução.',
    assistente:
      'Com base neste cliente, preparei resposta com cálculo de ROI em 6 meses, benchmark de mercado e proposta de piloto de 30 dias para reduzir risco de decisão.',
  },
};

const scorePrompt = (prompt) => {
  const text = prompt.trim();
  if (!text) {
    return {
      score: 0,
      nivel: 'Sem conteúdo',
      feedback: 'Escreva um prompt para avaliarmos em aula.',
      melhoria:
        'Atua como especialista em vendas B2B e explica 4 usos de IA para direção comercial, com exemplos e riscos.',
    };
  }

  let score = 0;
  const lower = text.toLowerCase();

  if (text.length > 30) score += 2;
  if (text.length > 80) score += 1;
  if (lower.includes('direção comercial') || lower.includes('equipa comercial') || lower.includes('b2b')) score += 2;
  if (lower.includes('em ') || lower.includes('lista') || lower.includes('passos') || lower.includes('tabela')) score += 2;
  if (lower.includes('exemplo') || lower.includes('caso real')) score += 2;
  if (lower.includes('ético') || lower.includes('riscos') || lower.includes('limitações')) score += 1;

  const limitedScore = Math.min(score, 10);

  if (limitedScore <= 3) {
    return {
      score: limitedScore,
      nivel: 'Fraco',
      feedback: 'Muito genérico. Falta contexto de negócio, público e formato esperado.',
      melhoria:
        'Explique para direção comercial B2B, em 5 bullets, como usar IA para aumentar conversão com 2 exemplos práticos.',
    };
  }

  if (limitedScore <= 6) {
    return {
      score: limitedScore,
      nivel: 'Razoável',
      feedback: 'Já existe direção, mas pode detalhar objetivo, formato e limites da resposta.',
      melhoria:
        'Atue como consultor comercial e entregue plano de 30 dias de IA para pré-vendas, com métricas e riscos.',
    };
  }

  if (limitedScore <= 8) {
    return {
      score: limitedScore,
      nivel: 'Bom',
      feedback: 'Prompt bem construído e aplicável para demonstração executiva.',
      melhoria:
        'Acrescente restrições (tempo, equipa, orçamento) para tornar a resposta mais acionável.',
    };
  }

  return {
    score: limitedScore,
    nivel: 'Excelente',
    feedback: 'Prompt completo: contexto, audiência, formato e preocupação com riscos.',
    melhoria:
      'Teste variações de tom (board, gestores, operação) para comparar adaptação da IA.',
  };
};

export default function DemoIAAula() {
  const [iteracaoAtiva, setIteracaoAtiva] = React.useState('fundamentos');
  const [selectedExample, setSelectedExample] = React.useState('fraco');
  const [scenario, setScenario] = React.useState('prospeccao');
  const [mode, setMode] = React.useState('chatbot');
  const [studentPrompt, setStudentPrompt] = React.useState('');

  const analysis = scorePrompt(studentPrompt);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Executive Education · Direção Comercial
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
            Aplicação iterativa para ensinar IA, Prompts, Chatbots e Assistentes
          </h1>
          <p className="mt-3 max-w-4xl text-base text-slate-600 md:text-lg">
            Estrutura pronta para aula prática: cada iteração introduz um conceito e termina com
            um resultado aplicável ao contexto comercial.
          </p>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Trilha iterativa da aula</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {learningPath.map((step) => (
              <button
                key={step.id}
                onClick={() => setIteracaoAtiva(step.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  iteracaoAtiva === step.id
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-800'
                }`}
              >
                <p className="text-sm font-semibold">{step.titulo}</p>
                <p className="mt-2 text-sm opacity-90">{step.objetivo}</p>
              </button>
            ))}
          </div>

          {learningPath
            .filter((step) => step.id === iteracaoAtiva)
            .map((step) => (
              <div key={step.id} className="mt-4 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-600">
                  <strong>Dinâmica:</strong> {step.dinamica}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>Entregável:</strong> {step.entregavel}
                </p>
              </div>
            ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">Comparador de prompts</h2>
              <div className="flex rounded-2xl bg-slate-100 p-1 text-sm">
                {Object.entries(promptExamples).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedExample(key)}
                    className={`rounded-xl px-3 py-2 ${selectedExample === key ? 'bg-white shadow-sm' : ''}`}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-500">Prompt</p>
                <p className="mt-2">{promptExamples[selectedExample].prompt}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-500">Resposta simulada</p>
                <p className="mt-2">{promptExamples[selectedExample].resposta}</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">Chatbot vs Assistente</h2>
              <div className="flex rounded-2xl bg-slate-100 p-1 text-sm">
                <button
                  className={`rounded-xl px-3 py-2 ${mode === 'chatbot' ? 'bg-white shadow-sm' : ''}`}
                  onClick={() => setMode('chatbot')}
                >
                  Chatbot
                </button>
                <button
                  className={`rounded-xl px-3 py-2 ${mode === 'assistente' ? 'bg-white shadow-sm' : ''}`}
                  onClick={() => setMode('assistente')}
                >
                  Assistente
                </button>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setScenario('prospeccao')}
                className={`rounded-xl px-3 py-2 text-sm ${scenario === 'prospeccao' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}
              >
                Prospecção
              </button>
              <button
                onClick={() => setScenario('objecao')}
                className={`rounded-xl px-3 py-2 text-sm ${scenario === 'objecao' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}
              >
                Objeção de preço
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 p-4 text-sm">
              <p className="rounded-xl bg-slate-100 p-3">Diretor comercial: {chatbotScenarios[scenario].pergunta}</p>
              <p className="mt-3 rounded-xl bg-slate-900 p-3 text-white">
                {mode === 'chatbot' ? 'Chatbot' : 'Assistente virtual'}: {' '}
                {mode === 'chatbot'
                  ? chatbotScenarios[scenario].chatbot
                  : chatbotScenarios[scenario].assistente}
              </p>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Laboratório de prompt (ao vivo)</h2>
          <p className="mt-1 text-sm text-slate-600">
            Digite um prompt do seu contexto comercial e veja a avaliação instantânea para discutir
            melhorias com a turma.
          </p>

          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <textarea
              value={studentPrompt}
              onChange={(event) => setStudentPrompt(event.target.value)}
              className="min-h-[220px] w-full rounded-2xl border border-slate-300 p-4 text-sm outline-none focus:border-slate-500"
              placeholder="Ex.: Atue como consultor de vendas enterprise e proponha um plano de 30 dias para aumentar taxa de conversão com IA, incluindo métricas e riscos éticos."
            />
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-500">Pontuação</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">{analysis.score}/10</p>
                <p className="text-slate-700">Nível: {analysis.nivel}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-500">Feedback</p>
                <p className="mt-1 text-slate-700">{analysis.feedback}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-500">Sugestão de melhoria</p>
                <p className="mt-1 text-slate-700">{analysis.melhoria}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
