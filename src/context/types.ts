export enum Types {
  Statistics = "GET_STATISTICS",
  Countries = "GET_COUNTRIES",
  History = "GET_HISTORY",
  Filter = "FILTER_COVIDS",
  SetFilter = "SET_FILTER",
}
export const initialState: IState = {
  id: 0,
  country: null,
  statistics: null,
  history: null,
  filtered: null,
  filter: "",
};
export interface IState {
  id: number | any;
  country: Object[] | any;
  statistics: Array<Object> | any;
  history: Array<Object> | any;
  filtered: Array<Object> | any;
  filter: string | any;
}
export interface IDeath {
  M_pop: string | any;
  new: string | any;
  total: number | any;
}
export interface ICase {
  M_pop: string | any;
  active: number | any;
  critical: number | any;
  new: string | any;
  recovered: number | any;
  total: number | any;
}
export interface IStatistics {
  continent: string | any;
  country: string | any;
  day: string | any;
  population: number | any;
  time: string | any;
  deaths: IDeath | any;
  cases: ICase | any;
  key: number | any;
  tests: Object | any;
}
interface GetStatisticsAction {
  type: typeof Types.Statistics;
  statistics: Object;
}
interface GetCountriesAction {
  type: typeof Types.Countries;
  countries: Object | any;
}
interface GetHistoryAction {
  type: typeof Types.History;
  history: Object;
}

interface SetFilterCovidAction {
  type: typeof Types.SetFilter;
  filter: string | any;
}
interface FilterCovidAction {
  type: typeof Types.Filter;
}

export type CovidActionTypes =
  | GetStatisticsAction
  | GetCountriesAction
  | GetHistoryAction
  | SetFilterCovidAction
  | FilterCovidAction;
