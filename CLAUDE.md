@AGENTS.md

# Greenfield — contexto do projeto

Base greenfield para novos projetos web fullstack. Ver `README.md` para setup e `TASKS.md` para o estado atual do trabalho e os próximos passos.

## Antes de começar a trabalhar

Sempre leia `TASKS.md` primeiro para saber o que já foi feito e o que vem a seguir. Ao final de cada etapa relevante, atualize `TASKS.md` (mover itens de "Próximos passos" para "Concluído", registrar novas decisões). Esse arquivo é o handoff entre sessões — trate-o como fonte de verdade sobre o progresso, não a conversa.

## Stack e decisões

- **Next.js (App Router)** — um único app cobre frontend e backend (API routes / Server Actions), sem servidor Node separado.
- **TypeScript** — padrão do ecossistema Next.js/Supabase.
- **Tailwind CSS** para estilização.
- **npm** como gerenciador de pacotes.
- **Supabase** para auth, banco de dados (Postgres) e storage, via `@supabase/supabase-js` + `@supabase/ssr`.

## Convenções específicas deste projeto

- Este projeto usa Next.js 16, que descontinuou a convenção `middleware.ts` em favor de `proxy.ts` (a função exportada deve se chamar `proxy`, não `middleware`). Não recriar `middleware.ts`.
- Clients Supabase:
  - `src/lib/supabase/client.ts` — Client Components (browser).
  - `src/lib/supabase/server.ts` — Server Components, Server Actions, Route Handlers.
  - `src/lib/supabase/proxy.ts` + `src/proxy.ts` — refresh de sessão a cada request.
- `SUPABASE_SERVICE_ROLE_KEY` só é usada em código server-side que precise ignorar RLS. Nunca expor no cliente.
- Variáveis de ambiente reais vão em `.env.local` (git-ignorado); `.env.example` documenta as chaves esperadas e deve ser mantido atualizado quando novas variáveis forem adicionadas.
- Migrations SQL ficam em `supabase/migrations/`. Toda tabela nova deve habilitar RLS e ter policies explícitas — não deixar tabela sem RLS em produção.
- Fluxo de auth de referência: `src/app/login/` (páginas + server actions de login/signup/logout), `src/app/auth/confirm/route.ts` (confirmação de email), `src/app/protected/` (exemplo de rota autenticada). `src/proxy.ts` redireciona não-autenticados que tentem acessar `/protected`.
