import Card from "../card/Card";
import * as S from "./Column.styled";

const Column = ({ title, tasks }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            date={task.date}
            topic={task.topic}
            id={task._id}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
