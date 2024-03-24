import sprite from "../sprite.svg";

const CloseIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-close`}></use>
    </svg>
  );
};

export default CloseIcon;