import { TaskProvider } from './context/TaskContext';
import { HomePage } from '../ui/pages/HomePage';

export const App = () => (
  <TaskProvider>
    <HomePage />
  </TaskProvider>
);