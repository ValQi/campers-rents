import sprite from "../sprite.svg";

const LocationIcon = ( ) => {
  return (
    <svg>
      <use href={`${sprite}#icon-location`}></use>
    </svg>
  );
};

export default LocationIcon;