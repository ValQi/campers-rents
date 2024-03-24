import { Input, Label, LocationIconSvg, WrapperBox } from './Location.styled';
import { changeLocation } from '../../redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentLocation } from '../../redux/filter/selectors';
import LocationIcon from '../../assets/icons/LocationIcon';

export const Location = () => {
  const destructive = useDispatch();
  const location = useSelector(selectCurrentLocation);

  return (
    <WrapperBox>
      <Label htmlFor="location">
        Location
        <Input
          type="text"
          id="location"
          value={location}
          placeholder="City, country"
          onChange={(e) => destructive(changeLocation(e.target.value))}
        />
        <LocationIconSvg>
          <LocationIcon></LocationIcon>
        </LocationIconSvg>
      </Label>
    </WrapperBox>
  );
};