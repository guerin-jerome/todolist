import { TaskRepository } from "./domain/ports/TaskRepository";
import { InMemoryTaskRepository } from "./infrastructure/repositories/InMemoryTaskRepository";
import { legacyRules } from "./ui/components/TaskList";

const repo: TaskRepository = new InMemoryTaskRepository();

export const aFunc = (id: string) => {
  if (legacyRules.includes(id)) {
    repo.toggle(id);
  }
};
