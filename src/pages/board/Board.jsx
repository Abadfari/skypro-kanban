import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { Outlet } from "react-router-dom";

import { useTasks } from "../../hooks/useTasks";

const BoardPage = () => {
  const { tasks, isLoading, error } = useTasks();
  return (
    <>
      <Header />
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
