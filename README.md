# demo-ia-aula-next-v2

Aplicação interativa v2 para aula sobre **IA, prompts, chatbot e assistente virtual**, pronta para partilhar com alunos por link público.

## O que os alunos precisam?

**Apenas do link final da aplicação.**

- ✅ Alunos **não** precisam de conta Vercel
- ✅ Alunos **não** precisam de conta GitHub
- ✅ Alunos **não** precisam de login na app
- ✅ Alunos só abrem o URL e testam

> Quem precisa de conta na Vercel/GitHub é apenas quem publica (normalmente o professor).

## Funcionalidades

- Comparador de prompts (fraco, médio e forte)
- Simulador de chatbot vs assistente virtual
- Laboratório de prompts com pontuação e feedback instantâneo
- Roteiro rápido para condução da aula

## Executar localmente

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Build

```bash
npm run build
```

## Publicar para os alunos (fluxo simples)

1. Criar um novo repositório público no GitHub (ex.: `demo-ia-aula-next-v2`)
2. Fazer push do projeto
3. Fazer deploy na Vercel
4. Partilhar o link da Vercel com os alunos

### Comandos Git (repositório novo)

```bash
git init
git add .
git commit -m "Release v2: demo de IA para aula sem login"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/demo-ia-aula-next-v2.git
git push -u origin main
```

## Alternativa sem Vercel para teste em sala

Se não quiseres publicar já, podes abrir localmente no teu computador e mostrar em aula pelo teu ecrã:

```bash
npm run dev
```

Depois abre `http://localhost:3000` no browser.
