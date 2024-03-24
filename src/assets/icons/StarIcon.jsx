import sprite from "../sprite.svg";

const StarIcon = ({fillColor}) => {
  return (
    <svg fill={fillColor} stroke={fillColor}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};

export default StarIcon;