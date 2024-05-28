import "./App.css";
import PopExit from "./components/popups/popExit/PopExit";
import PopNewCard from "./components/popups/popNewCard/PopNewCard";
import PopBrowse from "./components/popups/popBrowse/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* <!-- pop-up end--> */}

        <Header />

        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
