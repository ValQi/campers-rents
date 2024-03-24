import sprite from "../sprite.svg";

const LikeIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-like`}></use>
    </svg>
  );
};

export default LikeIcon;