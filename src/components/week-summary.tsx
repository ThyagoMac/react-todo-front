import logo from "../assets/logo.png";
import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import { SummaryType } from "../types/SummaryType";
import { getSummary } from "../services/get-summary";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { PendingGoals } from "./pending-goals";

dayjs.locale("pt-br");

export const WeekSummary = () => {
  const { data } = useQuery<SummaryType>({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 seconds
  });

  const calcProgress = () => {
    if (!data) {
      return 0;
    }
    return ((data?.completed * 100) / data?.total).toFixed(0);
  };

  const progress = calcProgress();
  const firstDayOfWeek = dayjs().startOf("week").format("DD MMM");
  const lastDayOfWeek = dayjs().endOf("week").format("DD MMM");

  return (
    <div className="py-10 px-5 max-w-[480px] mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" height={24} width={24} />
          <span className="capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
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
          <ProgressIndicator style={{ width: `${progress}%` }} />
        </Progress>

        <div className="flex itens-center justify-between text-xs text-zinc-400">
          <span className="">
            Você completou
            <span className="text-zinc-100"> {data?.completed} </span>
            de <span className="text-zinc-100"> {data?.total} </span>
            metas nessa semana.
          </span>
          <span>{progress}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {data &&
          Object.entries(data?.goalsPerDay).map(([date, goals], index) => {
            const weekDay = dayjs(date).format("dddd");
            const formatedDate = dayjs(date).format("D[ de ]MMMM");

            return (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="font-medium">
                  <span className="capitalize">{weekDay} </span>
                  <span className="text-zinc-400 text-xs">
                    ({formatedDate})
                  </span>
                </h3>

                <ul className="flex flex-col gap-3">
                  {goals.map((goal) => {
                    const completedAt = dayjs(goal.completedAt).format("HH:mm");

                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou{" "}
                          <span className="text-zinc-100">“{goal.title}”</span>{" "}
                          às{" "}
                          <span className="text-zinc-100">{completedAt}h</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};
