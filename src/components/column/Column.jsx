import Card from "../card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

const Column = ({ title, tasks }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            date={task.date}
            topic={task.topic}
          />
        ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
