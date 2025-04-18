import { useEffect } from 'react';
import { useTaskContext } from '../../app/context/TaskContext';

export const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useTaskContext();

  useEffect(() => console.debug("tasks ->", tasks), [tasks])

  if (tasks.length === 0) return <p>Aucune tâche.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
          <button onClick={() => removeTask(task.id)} style={{ marginLeft: 'auto' }}>❌</button>
        </li>
      ))}
    </ul>
  );
};