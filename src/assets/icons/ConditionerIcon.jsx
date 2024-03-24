import sprite from "../sprite.svg";

const ConditionerIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-conditioner`}></use>
    </svg>
  );
};

export default ConditionerIcon;