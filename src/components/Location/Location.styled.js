import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';

export const WrapperBox = styled.div`
  width: 360px;
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  color: ${theme.color.text};
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 100%;
  background-color: ${theme.color.inputs};
  border: none;
  line-height: 1.25;

  margin-top: 8px;
`;

export const LocationIconSvg = styled.div`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 86%;
  left: 18px;
  transform: translateY(-50%);

  fill: transparent;
  stroke: ${theme.color.maintext};
`;