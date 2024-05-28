import Card from "../card/Card";

const Column = ({ title, tasks }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            date={task.date}
            topic={task.topic}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
