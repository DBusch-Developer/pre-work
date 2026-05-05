import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import { day6 } from "./day6";
import { day7 } from "./day7";
import { day8 } from "./day8";
import { day9 } from "./day9";
import { week2day1 } from "./week2day1";
import { week2day2 } from "./week2day2";

export const weeks = [
  {
    label: "Pre-Work",
    days: [day1, day2, day3, day4, day5],
  },
  {
    label: "Week 1",
    days: [day6, day7, day8, day9],
  },
  {
    label: "Week 2",
    days: [week2day1, week2day2],
  },
];

export const days = weeks.flatMap((w) => w.days);
