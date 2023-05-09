import { type NextPage } from "next";
import Link from "next/link";
import Button from "../../components/Button";

import { trpc } from "../../utils/trpc";
import HabitForm, { NewHabit } from "../../components/HabitForm";
import { useCallback } from "react";

const FORM_ID = "new-habit-form";

const NewHabit: NextPage = () => {
  const onSubmit = useCallback((habit: NewHabit) => {
    console.log("new habit", habit);
  }, []);

  return (
    <>
      <h1 className="text-5xl">New Habit</h1>
      <HabitForm id={FORM_ID} onSubmit={onSubmit} />
      <Link href="/habits">
        <Button type="button">Cancel</Button>
      </Link>
      <Button primary type="submit" form={FORM_ID}>Create</Button>
    </>
  );
};

export default NewHabit;
