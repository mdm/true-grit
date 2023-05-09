import { Prisma } from "@prisma/client";
import { prisma } from "../server/db/client";

import type { RouterOutputs } from "../utils/trpc";

interface Props {
  // habit: {
  //   id: string;
  //   title: string;
  //   recurrenceRule: string;
  //   windowDays: number;
  //   lastWeekPercent: number;
  //   lastMonthPercent: number;
  //   lastYearPercent: number;
  // };
  habit: RouterOutputs["habit"]["index"][number];
}

const HabitListItem = ({ habit }: Props): JSX.Element => {
  return <li>{habit.title}</li>;
};

export default HabitListItem;
