import { useState } from "react";
import { useTaskContext } from "../../app/context/useTaskContext";

export const TaskForm = () => {
  const [input, setInput] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nouvelle tâche"
        style={{ flexGrow: 1 }}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};
