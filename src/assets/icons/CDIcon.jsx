import sprite from "../sprite.svg";

const CDIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-cd`}></use>
    </svg>
  );
};

export default CDIcon;