import sprite from "../sprite.svg";

const ToiletIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-toilet`}></use>
    </svg>
  );
};

export default ToiletIcon;