import { Task } from "../../domain/models/Task";
import { TaskRepository } from "../../domain/ports/TaskRepository";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  getAll(): Task[] {
    return [...this.tasks];
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  toggle(id: string): void {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
