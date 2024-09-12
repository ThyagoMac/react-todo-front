import logo from "../assets/logo.png";
import letsStart from "../assets/lets-start-illustration.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export const EmptyGoals = () => {
  return (
    <div className="h-screen bg-viol flex flex-col items-center justify-center gap-9">
      <img src={logo} alt="logo" height={36} width={115} />
      <img src={letsStart} alt="letsStart" height={320} width={320} />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </div>
  );
};
