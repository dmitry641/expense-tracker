import React, { useReducer, useContext } from "react";

const ACTIONS = {
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  ADD_TRANSACTION: "ADD_TRANSACTION",
};

const initialState = {
  transactions: [
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
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (elem) => elem.id !== action.payload
        ),
      };
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
