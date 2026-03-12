# demo-ia-aula-next-v2

Aplicação interativa v2 para aula sobre **IA, prompts, chatbot e assistente virtual**, pronta para partilhar com alunos por link público.

## Objetivo desta versão

- Sem registo
- Sem login
- Sem acesso ao repositório para os alunos
- Apenas abrir o link e testar

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

## Publicar em novo repositório GitHub (sem dar acesso aos alunos)

1. Criar um novo repositório público no GitHub (ex.: `demo-ia-aula-next-v2`)
2. No projeto local:

```bash
git init
git add .
git commit -m "Release v2: demo de IA para aula sem login"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/demo-ia-aula-next-v2.git
git push -u origin main
```

3. Fazer deploy na Vercel (importando o repositório)
4. Partilhar o link gerado pela Vercel com os alunos

Assim os alunos testam sem conta e sem acesso ao código.
