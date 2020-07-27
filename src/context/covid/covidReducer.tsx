import { Types, IState, CovidActionTypes, IStatistics } from "../types";
export default (state: IState, action: CovidActionTypes): IState => {
  switch (action.type) {
    case Types.Statistics:
      return {
        ...state,
        statistics: action.statistics,
      };
    case Types.Countries:
      return {
        ...state,
        country: action.countries,
      };
    case Types.History:
      return {
        ...state,
        history: action.history,
      };
    case Types.SetFilter:
      return {
        ...state,
        filter: action.filter,
      };
    case Types.Filter:
      return {
        ...state,
        filtered: state.statistics.filter((statistic: IStatistics) => {
          const regex = new RegExp(`${state.filter}`, "gi");
          return (
            regex.test(statistic.country) || regex.test(statistic.continent)
          );
        }),
      };
    default:
      return state;
  }
};
