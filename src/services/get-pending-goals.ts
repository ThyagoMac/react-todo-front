import { PendingGoalsType } from "../types/PendingGoalsType";

export const getPendingGoals = async (): Promise<PendingGoalsType> => {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
};
