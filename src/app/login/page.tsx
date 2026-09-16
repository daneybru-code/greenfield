import { login, signup } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col justify-center gap-4 p-6">
      <h1 className="text-xl font-semibold">Entrar</h1>
      <form className="flex flex-col gap-3">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded border border-black/20 px-3 py-2"
        />
        <label htmlFor="password" className="text-sm">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          className="rounded border border-black/20 px-3 py-2"
        />
        <button
          formAction={login}
          className="rounded bg-black px-3 py-2 text-white"
        >
          Entrar
        </button>
        <button formAction={signup} className="rounded border border-black/20 px-3 py-2">
          Criar conta
        </button>
      </form>
      {message && <p className="text-sm text-red-600">{message}</p>}
    </div>
  );
}
