import sprite from "../sprite.svg";

const MicrowaveIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-microwave`}></use>
    </svg>
  );
};

export default MicrowaveIcon;