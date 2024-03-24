import sprite from "../sprite.svg";

const ACIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-ac`}></use>
    </svg>
  );
};

export default ACIcon;