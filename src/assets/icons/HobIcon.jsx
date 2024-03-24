import sprite from "../sprite.svg";

const HobIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-hob`}></use>
    </svg>
  );
};

export default HobIcon;