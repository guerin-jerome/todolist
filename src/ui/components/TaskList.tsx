import { useTaskContext } from "../../app/context/useTaskContext";
import { aFunc } from "../../bidule";

const styles = {
  list: { listStyle: "none", padding: 0 },
  task: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
};

export const legacyRules: Array<string> = [];

export const TaskList = () => {
  const { tasks, removeTask } = useTaskContext();

  if (tasks.length === 0) return <p>Aucune tâche.</p>;

  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} style={styles.task}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => aFunc(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            style={{ marginLeft: "auto" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
