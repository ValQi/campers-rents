import sprite from "../sprite.svg";

const KitchenIcon = ( ) => {
  return (
    <svg style={{ stroke: '#101828', fill: 'transparent' }}>
      <use href={`${sprite}#icon-kitchen`}></use>
    </svg>
  );
};

export default KitchenIcon;