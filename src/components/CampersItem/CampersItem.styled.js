import styled from 'styled-components';
import { theme } from '../../assets/styles/vars';

export const CamperItemContainer = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const CamperImage = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`;

export const CamperName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PriceTag = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;

export const LikeIconSvg = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
    stroke: ${theme.color.maintext};
    stroke-width: 2.3px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const DispayName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px; 
  height: 44px;
`
export const InfoField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 8px;
  border-radius: 100px; 
  padding: 12px 18px;
  height: 44px;
  background-color: ${theme.color.features};

  & p {
    font-weight: 500;
    line-height: 1.25;
    margin: 0; 
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: #101828;

  }
`;

export const RatingStar = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  margin-right: 4px;
  margin-top: 4px;
`;

export const ReviewCounter = styled.span`
  display: flex;
  align-items: center;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin-right: 16px;
`;

export const LocationMarker = styled.div`
  width: 16px;
  height: 16px;
  stroke-width
  : 1.3px;
  fill: transparent;
  stroke: ${theme.color.maintext};
`;

export const LocationDescription = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DetailsLocationRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const DescriptionText = styled.p`
  color: ${theme.color.text};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`;

export const CamperInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${theme.color.button};
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${theme.color.buttonHover};
  }
`;