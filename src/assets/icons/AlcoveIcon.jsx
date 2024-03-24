import sprite from "../sprite.svg";

const AlcoveIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-alcove`}></use>
    </svg>
  );
};

export default AlcoveIcon;