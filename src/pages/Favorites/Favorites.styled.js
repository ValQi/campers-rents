import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';
import { NavLink } from 'react-router-dom';

export const ContainerFavorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
`;
export const FavoritesUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const FavoritesLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`
export const AdditionalNavigation = styled.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${theme.color.maintext};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${theme.color.button};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`;