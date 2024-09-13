import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { WeekSummary } from "./components/week-summary";
import { EmptyGoals } from "./components/empty-goals";
import { SummaryType } from "./types/SummaryType";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./services/get-summary";

export const App = () => {
  const { data } = useQuery<SummaryType>({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <WeekSummary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
};
