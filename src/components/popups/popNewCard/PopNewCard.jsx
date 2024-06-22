import { useNavigate } from "react-router-dom";
import Calendar from "../../calendar/Calendar";
import { routes } from "../../../lib/routes";
import { useState } from "react";
import { postTasks } from "../../../API/tasks";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import * as S from "./PopNewCard.styled";
import * as Shared from "../../../shared/Shared.styled";

const PopNewCard = () => {
  const [selected, setSelected] = useState();
  const { user } = useUser();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const { setTasks } = useTasks();
  const [error, setError] = useState("");
  function onChange(event) {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  function onClick(event) {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.topic.trim() ||
      !selected
    ) {
      setError("Нужно заполнить все поля.");
      return;
    }
    postTasks({
      token: user.token,
      title: formValue.title,
      description: formValue.description,
      topic: formValue.topic,
      date: selected,
    })
      .then((data) => {
        setTasks(data.tasks);
        navigate(-1);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.StyledLinkPopCardClose to={routes.BOARD}>
              &#10006;
            </S.StyledLinkPopCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <Shared.Subttl>Название задачи</Shared.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formValue.title}
                    onChange={onChange}
                  ></S.FormNewInput>
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <Shared.Subttl>Описание задачи</Shared.Subttl>
                  <S.FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formValue.description}
                    onChange={onChange}
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <label>
                <S.RadioInput
                  type="radio"
                  name="topic"
                  onChange={onChange}
                  value="Web Design"
                />
                <S.CategoriesTheme
                  $color="_orange"
                  $active={formValue.topic === "Web Design"}
                >
                  <Shared.Orange>Web Design</Shared.Orange>
                </S.CategoriesTheme>
              </label>
              <label>
                <S.RadioInput
                  type="radio"
                  name="topic"
                  onChange={onChange}
                  value="Research"
                />
                <S.CategoriesTheme
                  $color="_green"
                  $active={formValue.topic === "Research"}
                >
                  <Shared.Green>Research</Shared.Green>
                </S.CategoriesTheme>
              </label>
              <label>
                <S.RadioInput
                  type="radio"
                  name="topic"
                  onChange={onChange}
                  value="Copywriting"
                />
                <S.CategoriesTheme
                  $color="_purple"
                  $active={formValue.topic === "Copywriting"}
                >
                  <Shared.Purple>Copywriting</Shared.Purple>
                </S.CategoriesTheme>
              </label>
              {error}
            </S.PopNewCardCategories>
            <S.FormNewCreate id="btnCreate" onClick={onClick}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
