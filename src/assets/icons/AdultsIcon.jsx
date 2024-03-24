import sprite from "../sprite.svg";

const AdultsIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-adults`}></use>
    </svg>
  );
};

export default AdultsIcon;