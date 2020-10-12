import React, { useReducer, useContext } from "react";

const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

const GlobalContext = React.createContext(initialState);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
}
