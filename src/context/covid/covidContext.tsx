import { createContext } from "react";
import { CovidActionTypes, IState, initialState } from "../types";
const covidContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<CovidActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});
export default covidContext;
