import { type NextPage } from "next";
import Link from "next/link";
import Button from "../../components/Button";
import HabitListItem from "../../components/HabitListItem";

import { trpc } from "../../utils/trpc";

const Habits: NextPage = () => {
  const habits = trpc.habit.getAll.useQuery();

  return (
    <div className="container bg-red-500">
      <h1 className="text-5xl">Your Habits</h1>
      <p>Count: {habits.data?.length}</p>
      <Link href="/habits/new">
        <Button>New Habit</Button>
      </Link>
      <ul>
        {habits.data &&
          habits.data.map((habit) => (
            <HabitListItem key={habit.id} habit={habit} />
          ))}
      </ul>
    </div>
  );
};

export default Habits;
