import sprite from "../sprite.svg";

const BedIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-bed`}></use>
    </svg>
  );
};

export default BedIcon;