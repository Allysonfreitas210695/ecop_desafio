import React, { createContext, useState } from 'react';
import api from '../config/Api';

export const AppContext = createContext({});

export const AppProvider = (props) => {
  const [appState, setAppState] = useState({
    user: null,
    featured: {},
    trending: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
  });

  const loadDataFromCategory = async (categoryName = 'topRated') => {
    const { data } = await api[categoryName]();
    setAppState((state) => ({ ...state, [categoryName]: data.results }));
  };

  return (
    <AppContext.Provider value={{ appState, loadDataFromCategory }}>
      {props.children}
    </AppContext.Provider>
  );
};