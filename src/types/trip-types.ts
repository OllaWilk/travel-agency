export interface TripSummaryType {
  id: string;
  image: string;
  name: string;
  cost: string;
  days: number;
  tags: string[];
}

export interface TripType extends TripSummaryType {
  country: {
    name: string;
    code: string;
  };
  address: string;
  intro: string;
  description: string;
}
