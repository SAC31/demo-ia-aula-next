# demo-ia-aula-next-v2

Aplicação interativa para aula de **IA, prompts, chatbot e assistentes virtuais** (foco em direção comercial / executive education), pensada para uso simples em sala.

## O que os alunos precisam?

**Só do link final da aplicação**.

- ✅ Sem conta Vercel
- ✅ Sem conta GitHub
- ✅ Sem login na app
- ✅ Abrir e testar no browser

> Apenas o professor (ou quem publica) precisa de conta na plataforma de deploy.

## Como executar localmente (passo a passo)

> Corre estes comandos no **Terminal**, dentro da pasta do projeto.

### 1) Abrir o terminal na pasta correta

```bash
cd /caminho/para/demo-ia-aula-next
```

Exemplo:

```bash
cd ~/Desktop/demo-ia-aula-next
```

### 2) Instalar dependências

```bash
npm install
```

### 3) Iniciar a aplicação

```bash
npm run dev
```

### 4) Abrir no browser

```text
http://localhost:3000
```

## Se `localhost:3000` não abrir

1. Mantém o terminal com `npm run dev` aberto.
2. Tenta `http://127.0.0.1:3000`.
3. Se a porta estiver ocupada, usa:

```bash
npm run dev -- -p 3001
```

Depois abre:

```text
http://localhost:3001
```

## Verificação rápida (diagnóstico)

```bash
pwd
node -v
npm -v
npm run dev -- -p 3001
```

Se o terminal mostrar `Ready`/`Local: http://localhost:3001`, a app está a correr corretamente.

## Build de produção

```bash
npm run build
```

## Publicar e partilhar com alunos

Fluxo mais simples:

1. Criar repositório público no GitHub (ex.: `demo-ia-aula-next-v2`)
2. Fazer push do projeto
3. Fazer deploy (Vercel ou outra plataforma)
4. Partilhar o link público com os alunos

### Comandos Git (repo novo)

```bash
git init
git add .
git commit -m "Release v2: demo de IA para aula sem login"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/demo-ia-aula-next-v2.git
git push -u origin main
```

## Funcionalidades da demo

- Comparador de prompts (fraco, médio e forte)
- Simulador chatbot vs assistente virtual
- Laboratório de prompts com pontuação e feedback
- Roteiro rápido para condução da aula
