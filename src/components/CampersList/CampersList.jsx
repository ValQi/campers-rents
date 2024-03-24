import { useSelector } from 'react-redux';
import { CampersItem } from '../CampersItem/CampersItem';
import { LoadMoreButton, CampersListWrapper, StyledList } from './CampersList.styled';
import { selectVisibleCampers } from '../../redux/filter/selectors';
import { useState as useLoadedCampersState } from 'react';

export const CampersList = () => {
  const campersByFilter = useSelector(selectVisibleCampers);

  const [loadedCampersCount, setLoadedCampersCount] = useLoadedCampersState(4);
  const campersPerPage = 4;

  const currentCampersList = campersByFilter.slice(0, loadedCampersCount);

  const loadMoreCampers = () => {
    setLoadedCampersCount(loadedCampersCount + campersPerPage);
  };

  return (
    <CampersListWrapper>
      <StyledList>
        {currentCampersList.map((camper) => (
          <CampersItem key={camper._id} camper={camper} />
        ))}
      </StyledList>
      {loadedCampersCount < campersByFilter.length && (
        <LoadMoreButton onClick={loadMoreCampers}>Load more</LoadMoreButton>
      )}
    </CampersListWrapper>
  );
};
