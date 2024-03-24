import sprite from "../sprite.svg";

const VanIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-van`}></use>
    </svg>
  );
};

export default VanIcon;