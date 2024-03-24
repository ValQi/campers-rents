import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slicer/favoritesSlice';
import { default as ModalWrapper } from '../../components/ModalWrapper/ModalWrapper';
import LikeIcon from '../../assets/icons/LikeIcon';
import StarIcon from '../../assets/icons/StarIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import AdultsIcon from '../../assets/icons/AdultsIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import PetrolIcon from '../../assets/icons/PetrolIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import BedIcon from '../../assets/icons/BedIcon';
import ACIcon from '../../assets/icons/ACIcon';
import { ContainerFavorites, FavoritesUl, FavoritesLi } from './Favorites.styled';

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
} from '../../components/CampersItem/CampersItem.styled';

const Favorites = ({ favorites }) => {
  const dispatch = useDispatch();
  const [selectedCamper, setSelectedCamper] = useState(null);

  const handleLikeClick = (camper) => {
    if (favorites.find(item => item._id === camper._id)) {
      dispatch(removeFavorite(camper)); // Используем функцию удаления избранного из Redux
    } else {
      dispatch(addFavorite(camper)); // Используем функцию добавления в избранное из Redux
    }
  };

  const handleShowMore = (camper) => {
    setSelectedCamper(camper);
  };

  const handleCloseModal = () => {
    setSelectedCamper(null);
  };

  return (
    <ContainerFavorites>
      <FavoritesUl>
        {favorites.map(camper => (
          <FavoritesLi key={camper._id}>
            <CamperItemContainer>
              <CamperImage src={camper.gallery[0]} alt={camper.name} />
              <div>
                <DispayName>
                  <CamperName>{camper.name}</CamperName>
                  <LikeWrapper>
                    {camper.price && (
                      <PriceTag>
                        €{camper.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
                      </PriceTag>
                    )}
                    <LikeIconSvg onClick={() => handleLikeClick(camper)}>
                      <LikeIcon fill={favorites.find(item => item._id === camper._id) ? 'red' : 'black'} />
                    </LikeIconSvg>
                  </LikeWrapper>
                </DispayName>
                <DetailsLocationRow>
                  <RatingStar>
                    <StarIcon fillColor={'#FFC531'} />
                  </RatingStar>
                  <ReviewCounter>
                    {camper.rating} ({camper.reviews.length} Reviews)
                  </ReviewCounter>
                  <LocationDescription>
                    <LocationMarker>
                      <LocationIcon />
                    </LocationMarker>
                    {camper.location.split(', ').reverse().join(', ')}
                  </LocationDescription>
                </DetailsLocationRow>
                <DescriptionText>{camper.description}</DescriptionText>
                <CamperInfoBox>
                  <InfoField>
                    <AdultsIcon />
                    <p>{camper.adults} adults</p>
                  </InfoField>
                  <InfoField>
                    <AutomaticIcon />
                    <p> {camper.details.transmission} Automatic </p>
                  </InfoField>
                  <InfoField>
                    <PetrolIcon />
                    <p>{camper.details.engine} Petrol</p>
                  </InfoField>
                  {camper.details.kitchen >= 1 && (
                    <InfoField>
                      <KitchenIcon />
                      <p> Kitchen </p>
                    </InfoField>
                  )}
                  {camper.details.beds >= 1 && (
                    <InfoField>
                      <BedIcon />
                      <p>{camper.details.beds} beds</p>
                    </InfoField>
                  )}

                  {camper.details.airConditioner >= 1 && (
                    <InfoField>
                      <ACIcon />
                      <p> AC</p>
                    </InfoField>
                  )}
                </CamperInfoBox>
                <ButtonWrapper type="submit" onClick={() => handleShowMore(camper)}>
                  Show more
                </ButtonWrapper>
              </div>
            </CamperItemContainer>
          </FavoritesLi>
        ))}
      </FavoritesUl>
      {selectedCamper && (
        <ModalWrapper isOpen={true} onRequestClose={handleCloseModal} camperInfo={selectedCamper} />
      )}
    </ContainerFavorites>
  );
};

export default Favorites;
