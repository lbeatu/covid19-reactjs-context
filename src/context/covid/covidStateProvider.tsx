import React, { useReducer } from "react";
import axios from "axios";
import CovidContext from "./covidContext";
import covidReducer from "./covidReducer";
import { initialState, Types, CovidActionTypes } from "../types";

type CountProviderProps = { children: React.ReactNode };

const CovidStateProvider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(covidReducer, initialState);
  return (
    <CovidContext.Provider value={{ state, dispatch }}>
      {children}
    </CovidContext.Provider>
  );
};

const GetStatistics = async (dispatch: React.Dispatch<CovidActionTypes>) => {
  const instance = axios.create({
    baseURL: "https://covid-193.p.rapidapi.com",
    timeout: 2000,
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "1d44c92e7dmsh6acba81f6a50633p153ab1jsnf6d66d18205e",
      useQueryString: true,
    },
  });

  try {
    const res = await instance.get(`/statistics`);

    dispatch({ type: Types.Statistics, statistics: res.data.response });
  } catch (error) {
    console.log("onClick -> error", error);
  }
};
const filterStatistics = (
  dispatch: React.Dispatch<CovidActionTypes>,
  text: string
) => {
  dispatch({ type: Types.SetFilter, filter: text });
  dispatch({ type: Types.Filter });
};
export { CovidStateProvider, GetStatistics, filterStatistics };
