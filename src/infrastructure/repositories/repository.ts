import { TaskRepository } from "../../domain/ports/TaskRepository";
import { InMemoryTaskRepository } from "./InMemoryTaskRepository";

export const repo: TaskRepository = new InMemoryTaskRepository();
