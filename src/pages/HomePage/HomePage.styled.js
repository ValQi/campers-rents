import styled from "styled-components";
import { theme } from '../../assets/styles/vars';

export const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 150px;
text-align: center;
`;
export const Title = styled.div`
 font-size: 100px;
 color: ${theme.color.maintext};
`;
export const DivPage = styled.div`
  font-size: 50px;
  margin-top: 25px;
  color: ${theme.color.maintext}
`;