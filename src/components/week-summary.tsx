import logo from "../assets/logo.png";
import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

const styleProgressIndicator = { width: "10%" };

export const WeekSummary = () => {
  return (
    <div className="py-10 px-5 max-w-[480px] mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" height={24} width={24} />
          <span>5 a 10 Agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar Meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={15} value={2}>
          <ProgressIndicator style={styleProgressIndicator} />
        </Progress>

        <div className="flex itens-center justify-between text-xs text-zinc-400">
          <span className="">
            Você completou
            <span className="text-zinc-100"> 8 </span>
            de <span className="text-zinc-100"> 15 </span>
            metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Alimentar dog
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Comer pequi
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{" "}
            <span className="text-zinc-400 text-xs">(10 de agosto)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Sabado <span className="text-zinc-400 text-xs">(10 de agosto)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou{" "}
                <span className="text-zinc-100">“Acordar cedo”</span> às{" "}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
