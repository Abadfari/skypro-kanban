import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Такой страницы не существует...</p>
      <Link to="/" style={styles.link}>
        На главную
      </Link>
    </div>
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
  link: {
    color: "blue",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default NotFoundPage;