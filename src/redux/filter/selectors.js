import { createSelector } from "@reduxjs/toolkit";
import { selectAllCampers } from "../selectorsRedux/selectors";

export const selectCurrentEquipment = (state) => state.filter.equipment;
export const selectCurrentType = (state) => state.filter.type;
export const selectCurrentLocation = (state) => state.filter.location;

export const selectVisibleCampers = createSelector(
  [selectAllCampers, selectCurrentLocation, selectCurrentEquipment, selectCurrentType],
  (campers, location, equipment, type) => {
    const filterParts = location
      .toLowerCase()
      .trim()
      .split(",")
      .map((part) => part.trim());
    const [cityFilter, countryFilter] = filterParts;
    let filteredCampers = campers;
    if (equipment) {
      filteredCampers = filteredCampers.filter(
        (item) =>
          item.details &&
          (item.details[equipment] || item.details[equipment] === undefined)
      );
    }
    if (type) {
      filteredCampers = filteredCampers.filter((item) => item.form === type);
    }
    const result = filteredCampers.filter((item) => {
      const [country, city] = item.location.toLowerCase().split(", ");
      return (
        (!cityFilter || city.includes(cityFilter)) &&
        (!countryFilter || country.includes(countryFilter))
      );
    });

    return result;
  }
);