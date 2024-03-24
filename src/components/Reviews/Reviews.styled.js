import styled from "styled-components";
import { theme } from "../../assets/styles/vars";

export const ReviewsWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;
export const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`
export const ReviewItem = styled.li`
  list-style: none;
  margin-bottom: 24px;

`;
export const ReviewsUl = styled.ul`
`
export const LeftContent = styled.div`
  width: calc(100% - 430px);
`;

export const RightContent = styled.div`
  width: 430px; 
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${theme.color.button};
  background-color: ${theme.color.features};
`;

export const NameRatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ReviewsP = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    color: ${theme.color.maintext};
`

export const StarsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarIconWrapper = styled.span`
  width: 20px;
  height: 20px;
`;

export const Comment = styled.p`
  font-size: 16px;
  text-align: justify;
  color: ${theme.color.text}
`;
