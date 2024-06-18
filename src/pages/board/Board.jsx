import { useCallback, useEffect, useState } from "react";
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
  const handleTasks = useCallback(() => {
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
  }, [user]);
  useEffect(() => {
    handleTasks();
  }, [handleTasks]);
  return (
    <>
      <Header user={user} addTask={addTask} />
      {error ? (
        <div>Не удалось загрузить задачи</div>
      ) : isLoading ? (
        <div style={styles.container}>
          <p style={styles.text}>Идет загрузка...</p>
        </div>
      ) : (
        <Main taskData={tasks} />
      )}
      <Outlet />
    </>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  text: {
    fontSize: "20px",
    marginBottom: "20px",
  },
};

export default BoardPage;
