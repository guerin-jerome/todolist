import { Task } from '../models/Task';

export interface TaskRepository {
  getAll(): Task[];
  add(task: Task): void;
  toggle(id: string): void;
  remove(id: string): void;
}
