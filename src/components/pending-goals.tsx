import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PendingGoalsType } from "../types/PendingGoalsType";
import { getPendingGoals } from "../services/get-pending-goals";
import { createGoalCompletion } from "../services/create-goal-completion";

export const PendingGoals = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<PendingGoalsType>({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, //60 seconds
  });

  if (!data) {
    return null;
  }

  const handleCompleteGoal = async (goalId: string) => {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
  };

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((pendingGoal) => {
        const isCompleted =
          pendingGoal.desiredWeeklyFrequency <= pendingGoal.completionCount;

        return (
          <OutlineButton
            key={pendingGoal.id}
            disabled={isCompleted}
            onClick={() => handleCompleteGoal(pendingGoal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {pendingGoal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
};
