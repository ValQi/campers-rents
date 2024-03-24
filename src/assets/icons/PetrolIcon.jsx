import sprite from "../sprite.svg";

const PetrolIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-petrol`}></use>
    </svg>
  );
};

export default PetrolIcon;