import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { WeekSummary } from "./components/week-summary";
/* import { EmptyGoals } from "./components/empty-goals"; */

export const App = () => {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <WeekSummary />
      <CreateGoal />
    </Dialog>
  );
};
