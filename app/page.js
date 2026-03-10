'use client';
import React from "react";

export default function DemoIAAula() {
  const examples = {
    fraco: {
      prompt: "Fala-me sobre energia.",
      resposta: "A energia é importante e pode vir de várias fontes.",
    },
    bom: {
      prompt:
        "Explica, em português de Portugal, para alunos do 12.º ano, 3 benefícios da IA na eficiência energética, com exemplos práticos e em 120 palavras.",
      resposta:
        "A IA pode melhorar a eficiência energética de três formas principais. Primeiro, prevê consumos e ajuda a ajustar equipamentos em tempo real. Segundo, deteta anomalias, como máquinas a gastar mais eletricidade do que o normal. Terceiro, apoia decisões, sugerindo horários e operações com menor desperdício. Por exemplo, numa factory, sensores e modelos de IA podem reduzir picos de consumo, antecipar falhas e otimizar a produção. O benefício não está apenas na automação, mas também na capacidade de transformar dados em ações concretas, com impacto em custos, sustentabilidade e produtividade.",
    },
  };

  const [mode, setMode] = React.useState("chatbot");

  const cards = [
    {
      title: "Benefícios da IA",
      points: [
        "Automatiza tarefas repetitivas",
        "Apoia decisões com base em dados",
        "Melhora produtividade e personalização",
      ],
    },
    {
      title: "Importância do prompt",
      points: [
        "Quanto mais contexto, melhor a resposta",
        "Objetivo, público e formato fazem diferença",
        "Bom prompt reduz ambiguidade",
      ],
    },
    {
      title: "Assistente virtual",
      points: [
        "Executa tarefas orientadas a objetivo",
        "Mantém contexto e acompanha fluxos",
        "Ajuda em agenda, pesquisa e apoio operacional",
      ],
    },
    {
      title: "Chatbot",
      points: [
        "Responde a perguntas frequentes",
        "É mais conversacional e reativo",
        "Útil para suporte e atendimento inicial",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Demonstração em aula
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
                IA, Prompt, Assistente Virtual e Chatbot
              </h1>
              <p className="mt-3 max-w-3xl text-base text-slate-600 md:text-lg">
                Ferramenta interativa para mostrar diferenças, benefícios e
                impacto da qualidade do prompt.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
              <div>
                <strong>Objetivo:</strong> explicar conceitos de forma visual
              </div>
              <div>
                <strong>Público:</strong> alunos em contexto de aula
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {card.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Demonstração de Prompt
              </h2>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Prompt fraco
                </p>
                <p className="mt-2 text-sm text-slate-800">
                  {examples.fraco.prompt}
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-500">
                  Resposta gerada
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {examples.fraco.resposta}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Prompt forte
                </p>
                <p className="mt-2 text-sm text-slate-800">
                  {examples.bom.prompt}
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-500">
                  Resposta gerada
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  {examples.bom.resposta}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Assistente virtual vs Chatbot
              </h2>
              <div className="flex rounded-2xl bg-slate-100 p-1 text-sm">
                <button
                  className={`rounded-xl px-3 py-2 ${
                    mode === "chatbot" ? "bg-white shadow-sm" : ""
                  }`}
                  onClick={() => setMode("chatbot")}
                >
                  Chatbot
                </button>
                <button
                  className={`rounded-xl px-3 py-2 ${
                    mode === "assistente" ? "bg-white shadow-sm" : ""
                  }`}
                  onClick={() => setMode("assistente")}
                >
                  Assistente
                </button>
              </div>
            </div>

            {mode === "chatbot" ? (
              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Exemplo</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    Aluno: O que é inteligência artificial?
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-3 text-white">
                    Chatbot: É a capacidade de sistemas computacionais
                    realizarem tarefas que normalmente exigem inteligência
                    humana.
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  O chatbot é ideal para perguntas e respostas rápidas, suporte
                  inicial e FAQs.
                </p>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Exemplo</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    Professor: Prepara um quiz de 5 perguntas sobre IA para esta
                    turma, com dificuldade média e correção automática.
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-3 text-white">
                    Assistente virtual: Criei um quiz com 5 perguntas, opções de
                    resposta, solução correta e critérios de correção. Posso
                    também adaptá-lo ao tempo de aula.
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  O assistente virtual vai além da conversa: ajuda a executar
                  tarefas e a manter contexto.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Como usar em aula
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">1. Explicar</p>
              <p className="mt-2 text-sm text-slate-600">
                Apresentar os conceitos e as diferenças entre IA, prompt,
                chatbot e assistente virtual.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">
                2. Demonstrar
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Mostrar ao vivo como a qualidade do prompt altera a utilidade da
                resposta.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">3. Envolver</p>
              <p className="mt-2 text-sm text-slate-600">
                Pedir aos alunos para melhorarem um prompt fraco e discutirem o
                resultado.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
