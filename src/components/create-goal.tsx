import { XIcon } from "lucide-react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./ui/radio-group";
import { Button } from "./ui/button";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateGoalFormType } from "../types/CreateGoalFormType";
import { createGoal } from "../services/create-goal";
import { useQueryClient } from "@tanstack/react-query";

const createGoalForm = z.object({
  title: z.string().min(1, "Informe a atividade que deseja cadastrar"),
  desiredWeeklyFrequency: z.coerce
    .number()
    .min(1, "Informe a atividade que deseja cadastrar")
    .max(7, "Informe a atividade que deseja cadastrar"),
});

export const CreateGoal = () => {
  const queryClient = useQueryClient();

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalFormType>({
      resolver: zodResolver(createGoalForm),
    });

  const handleCreateGoal = async ({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalFormType) => {
    await createGoal({
      title,
      desiredWeeklyFrequency,
    });

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });

    reset();
  };

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar Meta</DialogTitle>
            <DialogClose>
              <XIcon className="size-5 text-zinc-500" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual Atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Estudar, correr..."
                {...register("title")}
              />

              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="week">Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          1x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          2x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          3x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          4x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          5x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">🤨</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          6x na semana
                        </span>{" "}
                        <span className="text-lg leading-none">🤯</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />{" "}
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Todos os dias da semana
                        </span>{" "}
                        <span className="text-lg leading-none">🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  );
                }}
              />
              {formState.errors.desiredWeeklyFrequency && (
                <p className="text-red-400 text-sm">
                  {formState.errors.desiredWeeklyFrequency.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
};
