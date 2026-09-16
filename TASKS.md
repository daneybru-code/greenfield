# Tasks & Handoff

Arquivo de controle do progresso deste projeto. Sempre consultar antes de continuar o trabalho, e atualizar ao final de cada etapa (mover itens concluídos, registrar decisões novas).

## Status atual

Base greenfield completa e funcional: Next.js + TypeScript + Tailwind + Supabase (auth, banco, storage) com um projeto Supabase real criado, linkado, com a migration aplicada e o fluxo de auth testado de ponta a ponta (signup → trigger cria profile → login/logout). Falta apenas confirmar visualmente no navegador (não foi possível testar a UI aqui porque o Claude in Chrome deste ambiente não alcança o `localhost` desta máquina) e ajustar o "Site URL" de produção quando o app for deployado.

Repositório remoto criado no GitHub: https://github.com/daneybru-code/greenfield (público, branch `master` com tracking em `origin`).

Projeto Supabase: `greenfield` (ref `ncjqqezzltyetltywbak`, região sa-east-1, org `daneybru@gmail.com's Org`). Credenciais em `.env.local` (não versionado).

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
- [x] Repositório remoto criado no GitHub (público) e push do histórico — 2026-09-16
- [x] Fluxo de auth escrito (login/signup por email+senha, confirmação de email, logout, rota `/protected` de exemplo) — 2026-09-16
- [x] `proxy.ts` atualizado para redirecionar usuários não autenticados de `/protected` para `/login` — 2026-09-16
- [x] Migration inicial `profiles` criada (tabela + RLS + trigger que sincroniza com `auth.users`) — 2026-09-16, ainda não aplicada em nenhum projeto real
- [x] Supabase CLI instalada como devDependency do projeto (`npm run supabase -- <comando>`) — 2026-09-16
- [x] Projeto Supabase real criado via CLI (`greenfield`, ref `ncjqqezzltyetltywbak`, sa-east-1) usando personal access token — 2026-09-16
- [x] `.env.local` preenchido com URL/anon (publishable) key/service role (secret) key do projeto real — 2026-09-16
- [x] CLI linkada ao projeto (`supabase link`) — 2026-09-16
- [x] Migration `create_profiles` aplicada no projeto real via `supabase db push` — 2026-09-16
- [x] Smoke test de ponta a ponta via script Node: signup real criou usuário no Supabase Auth e o trigger populou `public.profiles` corretamente; usuário de teste apagado depois — 2026-09-16

## Próximos passos

- [ ] Testar visualmente `/login` e `/protected` num navegador de verdade (não foi possível pelo Claude in Chrome neste ambiente — ele não alcança `localhost:3000` desta máquina)
- [ ] Em Authentication > URL Configuration no painel do Supabase, confirmar que o "Site URL" e o redirect de confirmação de email apontam para `http://localhost:3000/auth/confirm` em dev, e atualizar para o domínio de produção quando houver deploy
- [ ] Considerar revogar o personal access token "greenfield" usado para criar o projeto (supabase.com/dashboard/account/tokens), se não for reutilizá-lo
- [ ] Revisar o arquivo solto `prompt greemfield.txt` na raiz (vazio, não versionado — origem incerta, possivelmente sobra de ação no Explorer/OneDrive)
- [ ] Definir convenção de branches/PRs para os próximos projetos que usarem esta base

## Decisões registradas

- 2026-09-16 — Um único app Next.js em vez de monorepo Turborepo: mais simples de manter, Next já cobre frontend+backend via API routes/Server Actions.
- 2026-09-16 — TypeScript em vez de JavaScript puro: padrão do ecossistema Next.js/Supabase, tipos gerados do schema do banco.
- 2026-09-16 — npm em vez de pnpm: já vem com o Node, sem instalação extra.
- 2026-09-16 — Tailwind CSS escolhido; shadcn/ui não foi incluído no template base (pode ser adicionado por projeto, se necessário).
