import React, { createContext, useEffect, useReducer } from "react";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return [
          ...state,
          {
            title: action.payload.title,
            author: action.payload.author,
            id: uuid(),
          },
        ];
      case "REMOVE_BOOK":
        return state.filter((el) => el.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [books, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
