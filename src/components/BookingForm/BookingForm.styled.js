import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextWrapper = styled.div`
  flex: 1;
  margin-right: 24px; 
`;

export const FormWrapper = styled.div`
  width: 450px;
  border-radius: 10px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const Information = styled.p`
  color: ${theme.color.text};
  margin-bottom: 24px;
`;

export const InputArea = styled(Field)`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  color: ${theme.color.text};
  background-color: ${theme.color.inputs};
  border: none;
`;

export const StyledMessage = styled.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${theme.color.button};
`;

export const BookingLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const CustomTextArea = styled.textarea`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;
  color: ${theme.color.text};
  background-color: ${theme.color.inputs};

  border: none;
  resize: none;
`;

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  margin-top: 24px;

  background-color: ${theme.color.button};
  border-radius: 200px;
  padding: 16px 60px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${theme.color.buttonHover};
  }
`;