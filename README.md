# Greenfield

Template base para novos projetos web fullstack: Next.js (App Router) + TypeScript + Tailwind CSS + Supabase (auth, banco de dados e storage).

## Stack

- **Next.js** — frontend e backend (API routes / Server Actions) em um único app
- **TypeScript**
- **Tailwind CSS**
- **Supabase** — Postgres, Auth e Storage via `@supabase/supabase-js` e `@supabase/ssr`

## Configuração inicial de um novo projeto

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Copie `.env.example` para `.env.local` e preencha com a URL e as chaves do projeto (Project Settings > API).
3. Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Integração com Supabase

- `src/lib/supabase/client.ts` — client para uso em Client Components (browser).
- `src/lib/supabase/server.ts` — client para uso em Server Components, Server Actions e Route Handlers.
- `src/lib/supabase/middleware.ts` + `src/middleware.ts` — mantém a sessão de auth atualizada a cada request.

A `SUPABASE_SERVICE_ROLE_KEY` (em `.env.example`) só deve ser usada em código server-side que precise ignorar as políticas de RLS — nunca no cliente.

## Supabase CLI (opcional, para dev local)

A CLI está instalada como devDependency (`npm run supabase -- <comando>`, ou `npx supabase <comando>`). O projeto já tem `supabase/config.toml` (`npx supabase init`). Para rodar Supabase localmente (Postgres, Auth, Storage em containers) é necessário Docker Desktop instalado:

```bash
npx supabase login   # requer TTY interativo, ou --token/SUPABASE_ACCESS_TOKEN
npx supabase start   # sobe os containers locais
npx supabase link --project-ref <ref>   # conecta ao projeto remoto, quando criado
```

## Scripts

```bash
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # eslint
```

## Deploy

Recomendado: [Vercel](https://vercel.com/new) (integração nativa com Next.js).
