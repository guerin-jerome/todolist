import { useTaskUsecases } from "../../domain/usecases/useTaskUsecases";
import { repo } from "../../infrastructure/repositories/repository";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const taskUsecases = useTaskUsecases(repo);
  return (
    <TaskContext.Provider value={taskUsecases}>{children}</TaskContext.Provider>
  );
};
