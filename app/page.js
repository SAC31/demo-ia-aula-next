'use client';
import React from "react";

export default function DemoIAAula() {
  const [mode, setMode] = React.useState("chatbot");
  const [studentPrompt, setStudentPrompt] = React.useState("");
  const [selectedExample, setSelectedExample] = React.useState("fraco");

  const examples = {
    fraco: {
      label: "Fraco",
      prompt: "Explica inteligência artificial.",
      resposta:
        "A inteligência artificial é uma área da tecnologia que permite aos sistemas realizar tarefas que normalmente exigem inteligência humana.",
    },
    medio: {
      label: "Médio",
      prompt:
        "Explica inteligência artificial para alunos universitários, de forma simples.",
      resposta:
        "A inteligência artificial consiste no desenvolvimento de sistemas capazes de aprender, reconhecer padrões e apoiar decisões. Em contexto universitário, pode ser usada para automatizar tarefas, analisar dados e personalizar a aprendizagem.",
    },
    forte: {
      label: "Forte",
      prompt:
        "Explica, em português de Portugal, para alunos do 12.º ano, o que é inteligência artificial, indicando 3 aplicações práticas e 2 cuidados éticos, em cerca de 120 palavras.",
      resposta:
        "A inteligência artificial é a capacidade de sistemas computacionais realizarem tarefas como reconhecer padrões, prever resultados e apoiar decisões. No dia-a-dia, pode ser usada em assistentes virtuais, recomendações de conteúdos e deteção de fraude. Nas empresas, ajuda a automatizar processos e a analisar grandes volumes de dados. No entanto, o seu uso exige cuidados éticos. Primeiro, é importante evitar enviesamentos nos dados, que podem gerar decisões injustas. Segundo, deve proteger-se a privacidade das pessoas. Assim, a IA não é apenas uma tecnologia poderosa: é também uma responsabilidade.",
    },
  };

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
        "Mais contexto gera respostas mais úteis",
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

  const evaluatePrompt = (prompt) => {
    const text = prompt.trim();
    if (!text) {
      return {
        score: 0,
        level: "Sem conteúdo",
        feedback: "Escreve primeiro um prompt para a ferramenta o avaliar.",
        suggestion:
          "Explica inteligência artificial para alunos do 12.º ano, em 3 pontos, com exemplos.",
      };
    }

    let score = 0;
    const lower = text.toLowerCase();

    if (text.length > 20) score += 2;
    if (text.length > 60) score += 1;
    if (
      lower.includes("para") ||
      lower.includes("alunos") ||
      lower.includes("equipa") ||
      lower.includes("gestores")
    )
      score += 2;
    if (
      lower.includes("em ") ||
      lower.includes("lista") ||
      lower.includes("pontos") ||
      lower.includes("tabela") ||
      lower.includes("120 palavras") ||
      lower.includes("resumo")
    )
      score += 2;
    if (
      lower.includes("exemplo") ||
      lower.includes("exemplos") ||
      lower.includes("aplicações")
    )
      score += 2;
    if (
      lower.includes("português") ||
      lower.includes("tom") ||
      lower.includes("simples") ||
      lower.includes("formal")
    )
      score += 1;

    if (score > 10) score = 10;

    let level = "Fraco";
    let feedback = "O prompt está demasiado genérico. Falta contexto para orientar bem a resposta.";

    if (score >= 4 && score <= 6) {
      level = "Razoável";
      feedback = "O prompt já tem algum contexto, mas ainda pode ser mais específico no objetivo e no formato.";
    }

    if (score >= 7 && score <= 8) {
      level = "Bom";
      feedback = "O prompt está bem construído. Já orienta a resposta de forma clara e útil.";
    }

    if (score >= 9) {
      level = "Excelente";
      feedback = "O prompt está muito bem definido, com contexto, público e formato. É um ótimo exemplo para aula.";
    }

    return {
      score,
      level,
      feedback,
      suggestion:
        "Explica inteligência artificial para executivos da direção de compras e estratégia, com o objetivo de aumentarem a produtividade das vendas, em português de Portugal, em 4 pontos, com 2 exemplos do dia-a-dia e um cuidado ético.",
    };
  };

  const promptAnalysis = evaluatePrompt(studentPrompt);

  const improvePrompt = () => {
    setStudentPrompt(
      "Explica inteligência artificial para alunos do 12.º ano, em português de Portugal, em 4 pontos simples, com exemplos do dia-a-dia e um cuidado ético."
    );
  };

  const selectedResponse = examples[selectedExample];

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
                Ferramenta interativa para mostrar diferenças, benefícios e o impacto da qualidade do prompt.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
              <div><strong>Objetivo:</strong> explicar conceitos de forma visual</div>
              <div><strong>Público:</strong> alunos em contexto de aula</div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
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
                Comparador de Prompts
              </h2>
              <div className="flex rounded-2xl bg-slate-100 p-1 text-sm">
                {Object.entries(examples).map(([key, value]) => (
                  <button
                    key={key}
                    className={`rounded-xl px-3 py-2 ${
                      selectedExample === key ? "bg-white shadow-sm" : ""
                    }`}
                    onClick={() => setSelectedExample(key)}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Prompt selecionado</p>
                <p className="mt-2 text-sm text-slate-800">{selectedResponse.prompt}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Resposta gerada</p>
                <p className="mt-2 text-sm text-slate-700">{selectedResponse.resposta}</p>
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
                  className={`rounded-xl px-3 py-2 ${mode === "chatbot" ? "bg-white shadow-sm" : ""}`}
                  onClick={() => setMode("chatbot")}
                >
                  Chatbot
                </button>
                <button
                  className={`rounded-xl px-3 py-2 ${mode === "assistente" ? "bg-white shadow-sm" : ""}`}
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
                    Chatbot: É a capacidade de sistemas computacionais realizarem tarefas que normalmente exigem inteligência humana.
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  O chatbot é ideal para perguntas e respostas rápidas, suporte inicial e FAQs.
                </p>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Exemplo</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    Professor: Prepara um quiz de 5 perguntas sobre IA para esta turma, com dificuldade média e correção automática.
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-3 text-white">
                    Assistente virtual: Criei um quiz com 5 perguntas, opções de resposta, solução correta e critérios de correção. Posso também adaptá-lo ao tempo de aula.
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  O assistente virtual vai além da conversa: ajuda a executar tarefas e a manter contexto.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Mini laboratório de prompts</h2>
              <p className="mt-1 text-sm text-slate-600">
                Escreve um prompt, avalia a sua qualidade e melhora-o em tempo real.
              </p>
            </div>
            <button
              onClick={improvePrompt}
              className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white"
            >
              Melhorar prompt automaticamente
            </button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Escreve aqui o teu prompt
              </label>
              <textarea
                value={studentPrompt}
                onChange={(e) => setStudentPrompt(e.target.value)}
                placeholder="Ex.: Explica inteligência artificial para executivos da direção de compras e estratégia, em 4 pontos e com exemplos."
                className="mt-3 min-h-[220px] w-full rounded-2xl border border-slate-300 p-4 text-sm text-slate-800 outline-none focus:border-slate-500"
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Pontuação</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{promptAnalysis.score}/10</p>
                <p className="mt-1 text-sm text-slate-700">Nível: {promptAnalysis.level}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Feedback</p>
                <p className="mt-2 text-sm text-slate-700">{promptAnalysis.feedback}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Sugestão de melhoria</p>
                <p className="mt-2 text-sm text-slate-700">{promptAnalysis.suggestion}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Como usar em aula</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">1. Comparar</p>
              <p className="mt-2 text-sm text-slate-600">
                Mostrar em aula a diferença entre prompts fracos, médios e fortes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">2. Experimentar</p>
              <p className="mt-2 text-sm text-slate-600">
                Pedir aos alunos que escrevam um prompt e observem a pontuação e o feedback.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">3. Melhorar</p>
              <p className="mt-2 text-sm text-slate-600">
                Usar a sugestão automática para discutir o que torna um prompt mais útil.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
