import sprite from "../sprite.svg";

const RadioIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-radio`}></use>
    </svg>
  );
};

export default RadioIcon;