import { TripType } from 'types/trip-types';
import { CountriesType } from 'types/country-types';

export interface ParsedTripsState {
  countries: Record<string, CountriesType>;
  regions: Record<string, RegionType>;
  subregions: Record<string, SubregionType>;
  tags: Record<string, TagType>;
}

export interface RegionType {
  countries: string[];
  subregions: string[];
}

export interface SubregionType {
  region: string;
  countries: string[];
}

export interface TagType {
  trips: string[];
}

const parseTrips = (
  trips: TripType[],
  countries: CountriesType[]
): ParsedTripsState => {
  const state: ParsedTripsState = {
    countries: {},
    regions: {},
    subregions: {},
    tags: {},
  };

  for (const trip of trips) {
    /* add country to state.countries */
    if (!state.countries[trip.country.code]) {
      const countryDetails = countries.find(
        (country) => country.alpha3Code === trip.country.code
      ) || {
        name: trip.country.name,
        alpha3Code: trip.country.code,
        region: '',
        subregion: '',
        languages: [],
        capital: '',
      };

      state.countries[trip.country.code] = {
        ...countryDetails,
        trips: [trip.id],
      };
    } else {
      state.countries[trip.country.code].trips!.push(trip.id);
    }

    /* add all tags to newState.tags */
    for (const tag of trip.tags) {
      if (!state.tags[tag]) {
        state.tags[tag] = { trips: [trip.id] };
      } else {
        state.tags[tag].trips.push(trip.id);
      }
    }
  }

  for (const countryCode in state.countries) {
    const country = state.countries[countryCode];

    /* add region to newState.regions */
    if (!state.regions[country.region]) {
      state.regions[country.region] = {
        countries: [country.alpha3Code!],
        subregions: [country.subregion],
      };
    } else {
      const region = state.regions[country.region];

      if (!region.countries.includes(country.alpha3Code!)) {
        region.countries.push(country.alpha3Code!);
      }

      if (!region.countries.includes(country.subregion)) {
        region.subregions.push(country.subregion);
      }
    }

    /* add subregion to newState.subregions */
    if (!state.subregions[country.subregion]) {
      state.subregions[country.subregion] = {
        region: country.region,
        countries: [country.alpha3Code!],
      };
    } else {
      const subregion = state.subregions[country.subregion];
      if (!subregion.countries.includes(country.alpha3Code!))
        subregion.countries.push(country.alpha3Code!);
    }
  }

  return state;
};

export default parseTrips;
