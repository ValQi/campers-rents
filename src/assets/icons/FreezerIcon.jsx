import sprite from "../sprite.svg";

const FreezerIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-freezer`}></use>
    </svg>
  );
};

export default FreezerIcon;