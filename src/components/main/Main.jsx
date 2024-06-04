import { statusData } from "../../lib/statusData";
import { Container } from "../../shared/Shared.styled";
import Column from "../column/Column";
import * as S from "./Main.styled";

const Main = ({ taskData }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusData.map((status, index) => (
              <Column
                key={index}
                title={status}
                tasks={taskData.filter((task) => status === task.status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};

export default Main;
