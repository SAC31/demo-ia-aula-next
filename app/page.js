'use client';

import React from 'react';

const quickActivities = [
  'Peça aos alunos para transformar um prompt fraco em prompt forte.',
  'Compare uma resposta de chatbot com uma de assistente virtual.',
  'Discuta 2 riscos éticos antes de implementar IA comercial.',
];

const promptExamples = {
  fraco: {
    label: 'Fraco',
    prompt: 'Fala de IA em vendas.',
    resposta: 'IA pode ajudar em vendas.',
  },
  medio: {
    label: 'Médio',
    prompt: 'Explica como IA ajuda uma equipa comercial a ser mais produtiva.',
    resposta:
      'A IA ajuda a automatizar tarefas, priorizar leads e apoiar follow-up, libertando tempo da equipa para vender melhor.',
  },
  forte: {
    label: 'Forte',
    prompt:
      'Atua como consultor comercial B2B. Explica, em 5 pontos, como IA pode melhorar conversão, com 2 exemplos práticos e 2 riscos éticos.',
    resposta:
      'A IA melhora conversão ao priorizar leads por probabilidade de fecho, sugerir próximos passos, personalizar mensagens, prever risco de churn e otimizar timing de contacto. Exemplos: alertas automáticos para contas em risco e recomendação de cross-sell. Riscos: enviesamento e uso inadequado de dados.',
  },
};

const scenarios = {
  prospeccao: {
    pergunta: 'Como priorizar leads para esta semana?',
    chatbot:
      'Posso sugerir critérios de priorização, mas preciso de mais dados para analisar cada lead.',
    assistente:
      'Analisei o pipeline e montei ranking de leads quentes, mensagens de follow-up e agenda de contactos para 5 dias.',
  },
  objecao: {
    pergunta: 'O cliente diz que o preço está alto. O que fazemos?',
    chatbot: 'Reforce benefícios, diferenciais e retorno esperado.',
    assistente:
      'Preparei resposta com cálculo de ROI, benchmark de mercado e proposta de piloto de 30 dias.',
  },
};

const scorePrompt = (value) => {
  const text = value.trim();

  if (!text) {
    return {
      score: 0,
      nivel: 'Sem conteúdo',
      feedback: 'Escreva um prompt e veja a avaliação em tempo real.',
    };
  }

  const lower = text.toLowerCase();
  let score = 0;

  if (text.length > 25) score += 2;
  if (text.length > 80) score += 1;
  if (lower.includes('equipa') || lower.includes('direção') || lower.includes('b2b')) score += 2;
  if (lower.includes('pontos') || lower.includes('lista') || lower.includes('tabela')) score += 2;
  if (lower.includes('exemplo')) score += 2;
  if (lower.includes('risco') || lower.includes('ético')) score += 1;

  const limited = Math.min(score, 10);

  if (limited <= 3) return { score: limited, nivel: 'Fraco', feedback: 'Falta contexto e formato de resposta.' };
  if (limited <= 6) return { score: limited, nivel: 'Razoável', feedback: 'Já orienta a IA, mas ainda pode ser mais específico.' };
  if (limited <= 8) return { score: limited, nivel: 'Bom', feedback: 'Prompt claro e útil para demonstração em aula.' };

  return { score: limited, nivel: 'Excelente', feedback: 'Prompt completo, prático e pronto para contexto executivo.' };
};

export default function DemoIAAulaSimples() {
  const [selectedExample, setSelectedExample] = React.useState('fraco');
  const [scenario, setScenario] = React.useState('prospeccao');
  const [mode, setMode] = React.useState('chatbot');
  const [studentPrompt, setStudentPrompt] = React.useState('');

  const analysis = scorePrompt(studentPrompt);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            demo-ia-aula-next-v2
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
            Demo de IA para aula — sem registo e sem login
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Esta página é autoexplicativa e pronta para partilhar por link público. O aluno só abre,
            testa e aprende.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            V2 focada em direção comercial e executive education.
          </p>
          <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
            <strong>Importante:</strong> os alunos não precisam de conta Vercel, GitHub ou login; apenas abrir o link público.
          </div>
        </header>


        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-900">Partilha sem contas para alunos</h2>
          <ul className="mt-3 space-y-2 text-sm text-blue-900">
            <li>• Só o professor/publicador precisa de conta para fazer o deploy.</li>
            <li>• Os alunos recebem o URL final e usam no browser sem autenticação.</li>
            <li>• Não é necessário acesso ao código nem ao repositório.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Roteiro rápido de aula (30 minutos)</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {quickActivities.map((activity) => (
              <li key={activity} className="flex gap-2">
                <span>•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
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

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-500">Prompt</p>
                <p className="mt-2 text-slate-700">{promptExamples[selectedExample].prompt}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-500">Resposta simulada</p>
                <p className="mt-2 text-slate-700">{promptExamples[selectedExample].resposta}</p>
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

            <div className="mt-4 flex gap-2 text-sm">
              <button
                onClick={() => setScenario('prospeccao')}
                className={`rounded-xl px-3 py-2 ${scenario === 'prospeccao' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}
              >
                Prospecção
              </button>
              <button
                onClick={() => setScenario('objecao')}
                className={`rounded-xl px-3 py-2 ${scenario === 'objecao' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}
              >
                Objeção
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <p className="rounded-2xl bg-slate-100 p-3">Aluno: {scenarios[scenario].pergunta}</p>
              <p className="rounded-2xl bg-slate-900 p-3 text-white">
                {mode === 'chatbot' ? 'Chatbot' : 'Assistente'}:{' '}
                {mode === 'chatbot' ? scenarios[scenario].chatbot : scenarios[scenario].assistente}
              </p>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Laboratório ao vivo</h2>
          <p className="mt-1 text-sm text-slate-600">
            Cada aluno pode testar o seu próprio prompt sem conta. O feedback aparece na hora.
          </p>

          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <textarea
              value={studentPrompt}
              onChange={(event) => setStudentPrompt(event.target.value)}
              className="min-h-[220px] w-full rounded-2xl border border-slate-300 p-4 text-sm outline-none focus:border-slate-500"
              placeholder="Ex.: Atue como consultor de vendas e proponha 4 ações de IA para melhorar conversão, com exemplos e riscos."
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
