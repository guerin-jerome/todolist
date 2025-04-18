import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export const HomePage = () => (
  <main style={{ maxWidth: '600px', margin: '2rem auto' }}>
    <h1>Ma TodoList</h1>
    <TaskForm />
    <TaskList />
  </main>
);