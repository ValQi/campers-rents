import sprite from "../sprite.svg";

const CalendarIcon = ( onClick ) => {
  return (
    <svg onClick={onClick}>
      <use href={`${sprite}#icon-calendar`}></use>
    </svg>
  );
};

export default CalendarIcon;