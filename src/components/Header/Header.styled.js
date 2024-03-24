import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';
import { NavLink } from 'react-router-dom';

export const Field = styled.header`
  margin-bottom: 50px;
  background-color: ${theme.color.button};

`;

export const Link = styled(NavLink)`
  position: relative;
  gap: 25px;
  color: ${theme.color.maintext};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  &.active {
    &:after {
      position: absolute;
      content: '';
      background-color: ${theme.color.maintext};
      width: 100%;
      height: 5px;
      bottom: -20px;
    }
  }
`;
export const Li = styled.li`
`
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 20px;
  font-weight: 700;
  font-size: 20px;
  font-weight: 700;
`;