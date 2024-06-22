import "react-day-picker/dist/style.css";
import { StyledDayPicker } from "./Calendar.styled";
import { ru } from "date-fns/locale";

export function Calendar({ selected, setSelected }) {
  let footer;
  if (selected) {
    footer = `Срок исполнения: ${selected.toLocaleDateString()}`;
  } else {
    footer = "Выберите срок исполнения.";
  }
  return (
    <StyledDayPicker
      footer={footer}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}

export default Calendar;
