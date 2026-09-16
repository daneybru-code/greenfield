import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../login/actions";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col justify-center gap-4 p-6">
      <h1 className="text-xl font-semibold">Área protegida</h1>
      <p className="text-sm">Logado como {user.email}</p>
      <form>
        <button
          formAction={logout}
          className="rounded border border-black/20 px-3 py-2"
        >
          Sair
        </button>
      </form>
    </div>
  );
}
