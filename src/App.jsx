import "./App.css";
import PopExit from "./components/popups/popExit/PopExit";
import PopNewCard from "./components/popups/popNewCard/PopNewCard";
import PopBrowse from "./components/popups/popBrowse/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { taskData } from "./lib/taskData";

function App() {
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
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header addTask={addTask} />
        {isLoading ? <div>Идет загрузка...</div> : <Main taskData={tasks} />}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
