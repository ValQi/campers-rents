import Modal from 'react-modal';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCampersById } from '../../redux/selectorsRedux/actions';
import {
  AdditionalNavigation,
  CloseModalBtn,
  ContentWrapper,
  Description,
  Image,
  ImageWrapper,
  LocationIconSvg,
  LocationText,
  Name,
  NameWrapper,
  Price,
  RatingIcon,
  RatingReviews,
  RationLocationLine,
  StyledLink,
} from './ModalWrapper.styled';
import sprite from '../../assets/sprite.svg';
import StarIcon from '../../assets/icons/StarIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import { Outlet, useParams } from 'react-router-dom';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '40px',
    width: '982px',
    height: '720px',
    overflowY: 'scroll',
  },
};

const ModalWrapper = ({ isOpen, onRequestClose, camperInfo }) => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersById(camperId));
  }, [dispatch, camperId]);

  const { name, price, rating, location, description, gallery, reviews } = camperInfo;

  return (
    <ContentWrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        ariaHideApp={false} // Необходимо для предотвращения ошибки
      >
        <ContentWrapper>
          <div>
            <NameWrapper>
              <Name>{name}</Name>
              <CloseModalBtn onClick={onRequestClose}>
                <use href={`${sprite}#icon-close`}></use>
              </CloseModalBtn>
            </NameWrapper>
            <RationLocationLine>
              <RatingReviews>
                <RatingIcon>
                  <StarIcon fillColor={"#FFC531"} />
                </RatingIcon>
                {rating} ({reviews.length} Reviews)
              </RatingReviews>
              <LocationText>
                <LocationIconSvg>
                  <LocationIcon />
                </LocationIconSvg>
                {location.split(', ').reverse().join(', ')}
              </LocationText>
            </RationLocationLine>
            <Price>
              €{price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '')}
            </Price>
            <ImageWrapper>
              {gallery.slice(0, 3).map((image, index) => (
                <Image key={index} src={image} alt={name} />
              ))}
            </ImageWrapper>
            <Description>{description}</Description>
          </div>
          <AdditionalNavigation>
            <StyledLink to={`/catalog/${camperId}/features`}>Features</StyledLink>
            <StyledLink to={`/catalog/${camperId}/reviews`}>Reviews</StyledLink>
          </AdditionalNavigation>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </Modal>
    </ContentWrapper>
  );
};

Modal.setAppElement('#root');

export default ModalWrapper;
