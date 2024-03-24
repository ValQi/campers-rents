import sprite from "../sprite.svg";

const ShowerIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-shower`}></use>
    </svg>
  );
};

export default ShowerIcon;