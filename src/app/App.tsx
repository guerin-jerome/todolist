import { HomePage } from "../ui/pages/HomePage";
import { TaskProvider } from "./context/TaskProvider";

export const App = () => (
  <TaskProvider>
    <HomePage />
  </TaskProvider>
);
