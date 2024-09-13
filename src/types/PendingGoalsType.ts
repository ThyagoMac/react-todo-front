export type PendingGoalsType = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  createdAt: Date;
  completionCount: number;
}[];
