import sprite from "../sprite.svg";

const WaterIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-water`}></use>
    </svg>
  );
};

export default WaterIcon;