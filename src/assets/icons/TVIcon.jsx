import sprite from "../sprite.svg";

const TVIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-tv`}></use>
    </svg>
  );
};

export default TVIcon;