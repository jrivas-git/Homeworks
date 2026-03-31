import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import type { Task } from "../hooks/useTasks";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./tasks.scss";

export default function Tasks() {
  const { getTasks, addTask, deleteTask, toggleTask } = useTasks();
  const { logout, user } = useAuthContext();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleAdd = async () => {
    if (!text.trim()) return;
    await addTask({ text, done: false });
    setText("");
    loadTasks();
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="tasks-container">
      <div className="tasks-card">
        <div className="tasks-header">
          <h2>Tasks</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="tasks-input">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nueva tarea..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <div className="tasks-list">
          {tasks.map((t) => (
            <div key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
              <span onClick={() => toggleTask(t)}>
                {t.text}
              </span>
              <button onClick={() => deleteTask(t.id!)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}