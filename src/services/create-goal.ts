import type { CreateGoalFormType } from "../types/CreateGoalFormType";

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalFormType) => {
  await fetch("http://localhost:3333/goals", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  });
};
