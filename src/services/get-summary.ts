import { SummaryType } from "../types/SummaryType";

export const getSummary = async (): Promise<SummaryType> => {
  const response = await fetch("http://localhost:3333/week-summary");
  const data = await response.json();

  return data.summary;
};
