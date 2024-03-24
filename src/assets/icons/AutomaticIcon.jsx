import sprite from "../sprite.svg";

const AutomaticIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-automatic`}></use>
    </svg>
  );
};

export default AutomaticIcon;
