# Tasks & Handoff

Arquivo de controle do progresso deste projeto. Sempre consultar antes de continuar o trabalho, e atualizar ao final de cada etapa (mover itens concluídos, registrar decisões novas).

## Status atual

Base greenfield criada e commitada (Next.js + TypeScript + Tailwind + Supabase). Supabase CLI inicializada localmente. Nenhum projeto Supabase real ainda foi conectado — `.env.local` ainda não existe. Bloqueado esperando o usuário criar o projeto em supabase.com.

Decisão pendente do usuário: quando criar repositório remoto no GitHub (opções apresentadas: eu crio via CLI, ele publica pelo GitHub Desktop, ou deixa para depois — ainda sem resposta).

## Concluído

- [x] Ambiente verificado: Node v24.21.0, npm 11.19.0, Git 2.55, GitHub Desktop instalados — 2026-09-16
- [x] Decisão de stack: app Next.js único (App Router), TypeScript, npm, Tailwind CSS — 2026-09-16
- [x] Scaffold do Next.js criado na raiz do projeto — 2026-09-16
- [x] Dependências Supabase instaladas (`@supabase/supabase-js`, `@supabase/ssr`) — 2026-09-16
- [x] Clients Supabase criados: `src/lib/supabase/client.ts`, `server.ts`, `proxy.ts` — 2026-09-16
- [x] Migração de `middleware.ts` para `proxy.ts` (convenção do Next.js 16) — 2026-09-16
- [x] `.env.example` criado com placeholders (URL, anon key, service role key) — 2026-09-16
- [x] `README.md` escrito com instruções de setup — 2026-09-16
- [x] Build, typecheck e lint validados sem erros — 2026-09-16
- [x] Repositório git inicializado e commit inicial feito (branch `master`) — 2026-09-16
- [x] `CLAUDE.md` e `TASKS.md` criados para documentar decisões e handoff — 2026-09-16
- [x] Supabase CLI inicializada localmente (`supabase/config.toml`) — 2026-09-16

## Próximos passos

- [ ] Criar projeto no Supabase (Postgres, Auth, Storage) — o usuário faz isso manualmente em supabase.com (precisa de login/conta)
- [ ] Preencher `.env.local` com URL/anon key/service role key do projeto criado
- [ ] Rodar `npx supabase link --project-ref <ref>` para conectar a CLI local ao projeto remoto
- [ ] Definir schema inicial do banco (tabelas, RLS policies) via migration em `supabase/migrations/`
- [ ] Implementar fluxo de auth (login/signup/logout) usando Supabase Auth
- [ ] Decidir se haverá repositório remoto no GitHub e criar (usuário mencionou ter o GitHub Desktop instalado)
- [ ] Revisar o arquivo solto `prompt greemfield.txt` na raiz (vazio, não versionado — origem incerta, possivelmente sobra de ação no Explorer/OneDrive)
- [ ] Definir convenção de branches/PRs para os próximos projetos que usarem esta base

## Decisões registradas

- 2026-09-16 — Um único app Next.js em vez de monorepo Turborepo: mais simples de manter, Next já cobre frontend+backend via API routes/Server Actions.
- 2026-09-16 — TypeScript em vez de JavaScript puro: padrão do ecossistema Next.js/Supabase, tipos gerados do schema do banco.
- 2026-09-16 — npm em vez de pnpm: já vem com o Node, sem instalação extra.
- 2026-09-16 — Tailwind CSS escolhido; shadcn/ui não foi incluído no template base (pode ser adicionado por projeto, se necessário).
