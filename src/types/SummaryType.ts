export type GoalsPerDayType = Record<
  string,
  {
    id: string;
    title: string;
    completedAt: string;
  }[]
>;
export type SummaryType = {
  completed: number;
  total: number;
  goalsPerDay: GoalsPerDayType;
};
