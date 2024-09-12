import logo from "./assets/logo.png";
import letsStart from "./assets/lets-start-illustration.svg";
import { Plus } from "lucide-react";

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo" height={36} width={115} />
      <img src={letsStart} alt="letsStart" height={320} width={320} />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600">
        <Plus className="size-4" /> Cadastrar Meta
      </button>
    </div>
  );
};
