import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { taskData } from "../../lib/taskData";
import { Outlet } from "react-router-dom";

const BoardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState(taskData);
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
    const timeOutId = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);
  return (
    <>
      <Header addTask={addTask} />
      {isLoading ? <div>Идет загрузка...</div> : <Main taskData={tasks} />}
      <Outlet />
    </>
  );
};

export default BoardPage;
