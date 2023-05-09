import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RouterInputs, RouterOutputs } from "../utils/trpc";
import { habitSchema, habitUnsavedSchema } from "../schemas/habit";

export type OldHabit = RouterOutputs["habit"]["read"];
export type NewHabit =
  | RouterInputs["habit"]["create"]
  | RouterInputs["habit"]["update"];

interface Props {
  id: string;
  habit?: OldHabit;
  onSubmit: (habit: NewHabit) => void;
}

const HabitForm = ({ id: formId, habit, onSubmit }: Props): JSX.Element => {
  const schema = habit ? habitSchema : habitUnsavedSchema;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewHabit>({
    defaultValues: {
      id: habit?.id,
      title: habit?.title,
      recurrenceRule: habit?.recurrenceRule,
      windowDays: habit?.windowDays,
    },
    resolver: zodResolver(schema),
  });

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col"
    >
      {habit && (
        <>
          <input type="hidden" {...register("id")} />
          {errors.id && <p role="alert">{errors.id?.message}</p>}
        </>
      )}
      <input type="text" {...register("title")} />
      {errors.title && <p role="alert">{errors.title?.message}</p>}
      <input type="text" {...register("recurrenceRule")} />
      {errors.recurrenceRule && (
        <p role="alert">{errors.recurrenceRule?.message}</p>
      )}
      <input type="number" {...register("windowDays", { valueAsNumber: true })} />
      {errors.windowDays && <p role="alert">{errors.windowDays?.message}</p>}
    </form>
  );
};

export default HabitForm;
