import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slicer/favoritesSlice';
import { useState } from 'react';
import { default as ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { useNavigate } from 'react-router-dom';
import LikeIcon from '../../assets/icons/LikeIcon';
import StarIcon from '../../assets/icons/StarIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import AdultsIcon from '../../assets/icons/AdultsIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import PetrolIcon from '../../assets/icons/PetrolIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import BedIcon from '../../assets/icons/BedIcon';
import ACIcon from '../../assets/icons/ACIcon';

import {
  ButtonWrapper,
  DescriptionText,
  LikeIconSvg,
  CamperImage,
  CamperInfoBox,
  InfoField,
  CamperItemContainer,
  LocationMarker,
  LocationDescription,
  CamperName,
  PriceTag,
  LikeWrapper,
  RatingStar,
  ReviewCounter,
  DetailsLocationRow,
  DispayName,
} from './CampersItem.styled';

export const CampersItem = ({ camper }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    description,
    details,
    gallery,
    reviews,
  } = camper;

  const nav = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

const handleOpenModal = () => {
  setIsModalOpen(true);
  document.body.style.overflow = 'hidden';
  const modalUrl = `/catalog/${_id}`;
  nav(modalUrl);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  document.body.style.overflow = 'visible';
};

const handleLikeClick = () => {
  if (favorites.find(item => item._id === _id)) {
    dispatch(removeFavorite(camper));
  } else {
    dispatch(addFavorite(camper));
  }
};

return (
  <>
    <CamperItemContainer key={_id}>
      <CamperImage src={gallery[0]} alt={name} />
      <div>
        <DispayName>
          <CamperName>{name}</CamperName>
          <LikeWrapper>
            {price && (
              <PriceTag>
                €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
              </PriceTag>
            )}
            <LikeIconSvg onClick={handleLikeClick}>
              <LikeIcon fill={favorites.find(item => item._id === _id) ? "#E44848" : "#FFFFF"} />
            </LikeIconSvg>
          </LikeWrapper>
        </DispayName>
        <DetailsLocationRow>
          <RatingStar>
            <StarIcon fillColor={'#FFC531'} />
          </RatingStar>
          <ReviewCounter>
            {rating} ({reviews.length} Reviews)
          </ReviewCounter>
          <LocationDescription>
            <LocationMarker>
              <LocationIcon />
            </LocationMarker>
            {location.split(', ').reverse().join(', ')}
          </LocationDescription>
        </DetailsLocationRow>
        <DescriptionText>{description}</DescriptionText>
        <CamperInfoBox>
          <InfoField>
            <AdultsIcon />
            <p>{adults} adults</p>
          </InfoField>
          <InfoField>
            <AutomaticIcon />
            <p> {details.transmission} Automatic </p>
          </InfoField>
          <InfoField>
            <PetrolIcon />
            <p>{details.engine} Petrol</p>
          </InfoField>
          {details.kitchen >= 1 && (
            <InfoField>
              <KitchenIcon />
              <p> Kitchen </p>
            </InfoField>
          )}
          {details.beds >= 1 && (
            <InfoField>
              <BedIcon />
              <p>{details.beds} beds</p>
            </InfoField>
          )}

          {details.airConditioner >= 1 && (
            <InfoField>
              <ACIcon />
              <p> AC</p>
            </InfoField>
          )}
        </CamperInfoBox>
        <ButtonWrapper type="submit" onClick={handleOpenModal}>
          Show more
        </ButtonWrapper>
      </div>
    </CamperItemContainer>
    {isModalOpen && (
      <ModalWrapper camperInfo={camper} isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    )}
  </>
);
};