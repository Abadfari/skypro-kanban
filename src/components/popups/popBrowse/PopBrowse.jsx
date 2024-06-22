import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../lib/routes";
import Calendar from "../../calendar/Calendar";
import { deleteTasks, editTasks } from "../../../API/tasks";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useEffect, useState } from "react";
import { statusData } from "../../../lib/statusData";
import * as S from "./PopBrowse.styled";

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
              <S.CategoriesTheme $isActive={true}>
                <p>{formValue.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {isEdit ? (
                <div className="status__themes">
                  {statusData.map((status, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="status"
                        onChange={onChange}
                        value={status}
                      />
                      <div className="status__theme">
                        <p>{status}</p>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <label>
                  <div className="status__theme">
                    <p>{formValue.status}</p>
                  </div>
                </label>
              )}
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    readOnly={!isEdit}
                    placeholder="Введите описание задачи..."
                    onChange={onChange}
                    value={formValue.description}
                  ></textarea>
                </div>
              </form>
              <Calendar
                selected={selected}
                setSelected={setSelected}
                disabled={!isEdit}
              />
            </div>
            {!isEdit ? (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={editMode}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={onDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to={routes.BOARD}>Закрыть</Link>
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={onClick}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={editMode}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={onDelete}
                  >
                    Удалить задачу
                  </button>
                </div>

                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to={routes.BOARD}>Закрыть</Link>
                </button>
              </div>
            )}
            {error}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
