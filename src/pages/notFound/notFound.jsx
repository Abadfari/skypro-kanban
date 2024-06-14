import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Такой страницы не существует...
      <Link to="/">На главную</Link>
    </div>
  );
};

export default NotFoundPage;
