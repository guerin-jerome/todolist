import { createContext } from "react";
import { useTaskUsecases } from "../../domain/usecases/useTaskUsecases";

export const TaskContext = createContext<ReturnType<
  typeof useTaskUsecases
> | null>(null);
