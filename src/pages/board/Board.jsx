import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../API/tasks";

const BoardPage = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const addTask = () => {
    const newTask = {
      _id: tasks.length + 1,
      title: "Новая задача 1!",
      topic: "Research",
      date: new Date().toDateString(),
      description: "Подробное описание задачи",
      status: "Без статуса",
    };
    setTasks([...tasks, newTask]);
  };
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
  }, []);
  return (
    <>
      <Header user={user} addTask={addTask} />
      {error ? (
        <div>Не удалось загрузить задачи</div>
      ) : isLoading ? (
        <div>Идет загрузка...</div>
      ) : (
        <Main taskData={tasks} />
      )}
      <Outlet />
    </>
  );
};

export default BoardPage;