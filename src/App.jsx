import "./App.css";
import * as Shared from "./shared/Shared.styled";
import { GlobalStyles } from "./shared/Global.styled";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Shared.Wrapper>
        <AppRoutes />
      </Shared.Wrapper>
    </>
  );
}

export default App;
