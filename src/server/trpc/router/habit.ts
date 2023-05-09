import { habitId, habitSchema, habitUnsavedSchema } from "../../../schemas/habit";
import { router, publicProcedure } from "../trpc";

export const habitRouter = router({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.habit.findMany();
  }),
  create: publicProcedure
    .input(habitUnsavedSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.habit.create({ data: input });
    }),
  read: publicProcedure.input(habitId).query(({ input, ctx }) => {
    return ctx.prisma.habit.findUnique({ where: { id: input } });
  }),
  update: publicProcedure.input(habitSchema).mutation(({ input, ctx }) => {
    return ctx.prisma.habit.update({ where: { id: input.id }, data: input });
  }),
});
