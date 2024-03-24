import sprite from "../sprite.svg";

const GasIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-gas`}></use>
    </svg>
  );
};

export default GasIcon;