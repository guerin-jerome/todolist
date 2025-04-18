import { createContext, useContext } from 'react';
import { TaskRepository } from '../../domain/ports/TaskRepository';
import { InMemoryTaskRepository } from '../../infrastructure/repositories/InMemoryTaskRepository';
import { useTaskUsecases } from '../../domain/usecases/useTaskUsecases';

const repo: TaskRepository = new InMemoryTaskRepository();

const TaskContext = createContext<ReturnType<typeof useTaskUsecases> | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const taskUsecases = useTaskUsecases(repo);
  return <TaskContext.Provider value={taskUsecases}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within TaskProvider');
  return context;
};