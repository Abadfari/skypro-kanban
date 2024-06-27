import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../lib/routes";
import Calendar from "../../calendar/Calendar";
import { deleteTasks, editTasks } from "../../../API/tasks";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useEffect, useState } from "react";
import { statusData } from "../../../lib/statusData";
import * as S from "./PopBrowse.styled";
import * as Shared from "../../../shared/Shared.styled.js";
import { topicData } from "../../../lib/cardData.js";

const PopBrowse = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { tasks, setTasks } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    topic: "",
    status: "",
  });

  useEffect(() => {
    if (tasks.length) {
      const task = tasks.find((t) => t._id === id);
      if (!task) {
        navigate(routes.BOARD);
        return;
      }
      setFormValue({
        title: task.title,
        description: task.description,
        topic: task.topic,
        status: task.status,
      });
      setSelected(new Date(task.date));
    }
  }, [id, navigate, tasks]);

  const editMode = () => {
    setIsEdit((changeState) => !changeState);
  };

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
      !formValue.status.trim() ||
      !selected
    ) {
      setError("Нужно заполнить все поля.");
      return;
    }
    editTasks({
      token: user.token,
      title: formValue.title,
      description: formValue.description,
      topic: formValue.topic,
      status: formValue.status,
      date: selected,
      id,
    })
      .then((data) => {
        setTasks(data.tasks);
        setIsEdit(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function onDelete(event) {
    event.preventDefault();
    deleteTasks({
      token: user.token,
      id,
    })
      .then((data) => {
        setTasks(data.tasks);
        navigate(routes.BOARD);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{formValue.title}</S.PopBrowseTitle>
              <S.CategoriesTheme
                $isActive={true}
                $color={topicData[formValue.topic]}
              >
                <p>{formValue.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <S.StatusTittle>Статус</S.StatusTittle>
              {isEdit ? (
                <S.StatusThemes>
                  {statusData.map((status, index) => (
                    <S.StatusLabel key={index}>
                      <S.RadioInput
                        type="radio"
                        name="status"
                        onChange={onChange}
                        value={status}
                      />
                      <S.StatusTheme $active={formValue.status === status}>
                        <p>{status}</p>
                      </S.StatusTheme>
                    </S.StatusLabel>
                  ))}
                </S.StatusThemes>
              ) : (
                <S.StatusLabel>
                  <S.StatusTheme $active={true}>
                    <p>{formValue.status}</p>
                  </S.StatusTheme>
                </S.StatusLabel>
              )}
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <Shared.Subttl htmlFor="textArea01">
                    Описание задачи
                  </Shared.Subttl>
                  <S.FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isEdit}
                    placeholder="Введите описание задачи..."
                    onChange={onChange}
                    value={formValue.description}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selected={selected}
                setSelected={setSelected}
                disabled={!isEdit}
              />
            </S.PopBrowseWrap>
            {!isEdit ? (
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  <S.ButtonBorder onClick={editMode}>
                    Редактировать задачу
                  </S.ButtonBorder>
                  <S.ButtonBorder onClick={onDelete}>
                    Удалить задачу
                  </S.ButtonBorder>
                </S.ButtonGroup>
                <S.ButtonClose>
                  <S.StyledLink to={routes.BOARD}>Закрыть</S.StyledLink>
                </S.ButtonClose>
              </S.PopBrowseButtonBrowse>
            ) : (
              <S.PopBrowseButtonEdit>
                <S.ButtonGroup>
                  <S.ButtonClose onClick={onClick}>Сохранить</S.ButtonClose>
                  <S.ButtonBorder onClick={editMode}>Отменить</S.ButtonBorder>
                  <S.ButtonBorder id="btnDelete" onClick={onDelete}>
                    Удалить задачу
                  </S.ButtonBorder>
                </S.ButtonGroup>

                <S.ButtonClose>
                  <S.StyledLink to={routes.BOARD}>Закрыть</S.StyledLink>
                </S.ButtonClose>
              </S.PopBrowseButtonEdit>
            )}
            {error}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
