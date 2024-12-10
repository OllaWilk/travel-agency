export interface TripSummaryType {
  id: string;
  image: string;
  name: string;
  cost: string;
  days: number;
  tags: string[];
}

export interface Trip extends TripSummaryType {
  country: {
    name: string;
    code: string;
  };
  address: string;
  intro: string;
  description: string;
}

export interface TripsType {
  trips: Trip[];
}
