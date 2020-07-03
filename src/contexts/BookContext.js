import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const intitialBooks = [
    // { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    // { title: "the final empire", author: "brandon sanderson", id: 2 },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return intitialBooks;
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

  const [books, dispatch] = useReducer(reducer, intitialBooks);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
