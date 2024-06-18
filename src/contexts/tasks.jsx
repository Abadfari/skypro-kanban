import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { getTasks } from "../API/tasks";
import { Outlet } from "react-router-dom";

export const TasksContext = createContext(null);
export const TasksProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const { user } = useUser();
  useEffect(() => {
    getTasks({ token: user.token })
      .then((data) => {
        setTasks(data.tasks);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user.token]);

  return (
    <TasksContext.Provider value={{ isLoading, tasks, error, setTasks }}>
      <Outlet />
    </TasksContext.Provider>
  );
};
