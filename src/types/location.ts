export type LocationType = 'city' | 'county' | 'zip';

export interface LocationState {
  type: LocationType;
  value: string;
}