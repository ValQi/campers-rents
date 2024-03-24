import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/selectorsRedux/selectors';
import {
  FeaturesWrapper,
  LeftContent,
  RightContent,
  InfoBoxField,
  InfoBox,
  Table,
  TableItem,
  TableLine,
  Title,
} from './Features.styled';
import AdultsIcon from '../../assets/icons/AdultsIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import PetrolIcon from '../../assets/icons/PetrolIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import BedIcon from '../../assets/icons/BedIcon';
import ACIcon from '../../assets/icons/ACIcon';
import ConditionerIcon from '../../assets/icons/ConditionerIcon';
import CDIcon from '../../assets/icons/CDIcon';
import RadioIcon from '../../assets/icons/RadioIcon';
import HobIcon from '../../assets/icons/HobIcon';
import { BookingForm } from '../BookingForm/BookingForm';

const Features = () => {
  const camper = useSelector(selectCampersById);
  const {
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
  } = camper;

  return (
    <FeaturesWrapper>
      <LeftContent>
        <InfoBoxField>
          {adults && (
            <InfoBox>
              <AdultsIcon />
              <p> {adults} adults</p>
            </InfoBox>
          )}
          {transmission && (
            <InfoBox>
              <AutomaticIcon />
              <p> {details.transmission} Automatic</p>
            </InfoBox>
          )}
          {details.airConditioner >= 1 && (
            <InfoBox>
              <ACIcon />
              <p> AC</p>
            </InfoBox>
          )}
          {engine && (
            <InfoBox>
              <PetrolIcon />
              <p> {details.engine} Petrol</p>
            </InfoBox>
          )}
          {details.kitchen >= 1 && (
            <InfoBox>
              <KitchenIcon />
              <p> Kitchen </p>
            </InfoBox>
          )}
          {details.beds >= 1 && (
            <InfoBox>
              <BedIcon />
              <p> {details.beds} beds</p>
            </InfoBox>
          )}
          {details.airConditioner >= 1 && (
            <InfoBox>
              <ConditionerIcon />
              <p> {details.airConditioner} air conditioner</p>
            </InfoBox>
          )}
          {details.CD >= 1 && (
            <InfoBox>
              <CDIcon />
              <p> CD</p>
            </InfoBox>
          )}
          {details.radio >= 1 && (
            <InfoBox>
              <RadioIcon />
              <p> Radio</p>
            </InfoBox>
          )}
          {details.hob >= 1 && (
            <InfoBox>
              <HobIcon />
              <p>{details.hob} hob</p>
            </InfoBox>
          )}
        </InfoBoxField>

        <div>
          <Title>Vehicle details</Title>
          <Table>
            <tbody>
              <TableLine>
                <TableItem>Form</TableItem>
                <TableItem>{form}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Length</TableItem>
                <TableItem>{length}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Width</TableItem>
                <TableItem>{width}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Height</TableItem>
                <TableItem>{height}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Tank</TableItem>
                <TableItem>{tank}</TableItem>
              </TableLine>
              <TableLine>
                <TableItem>Consumption</TableItem>
                <TableItem>{consumption}</TableItem>
              </TableLine>
            </tbody>
          </Table>
        </div>
      </LeftContent>
      <RightContent>
        <BookingForm />
      </RightContent>
    </FeaturesWrapper>
  );
};

export default Features;

