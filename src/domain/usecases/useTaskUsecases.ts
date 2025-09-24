import { useState } from "react";
import { TaskRepository } from "../ports/TaskRepository";
import { Task } from "../models/Task";
import { v4 as uuidv4 } from "uuid";

export const useTaskUsecases = (repo: TaskRepository) => {
  const [tasks, setTasks] = useState<Task[]>(repo.getAll());

  const addTask = (name: string) => {
    const newTask = { id: uuidv4(), name, completed: false };
    repo.add(newTask);
    setTasks(repo.getAll());
  };

  const removeTask = (id: string) => {
    repo.remove(id);
    setTasks(repo.getAll());
  };

  return { tasks, addTask, removeTask };
};
