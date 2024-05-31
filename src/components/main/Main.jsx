import { statusData } from "../../lib/statusData";
import { taskData } from "../../lib/taskData";
import Column from "../column/Column";

const Main = ({ taskData }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusData.map((status, index) => (
              <Column
                key={index}
                title={status}
                tasks={taskData.filter((task) => status === task.status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
