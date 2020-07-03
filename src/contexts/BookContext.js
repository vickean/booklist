import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const intitialBooks = [
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ];

  const [books, setBooks] = useState(intitialBooks);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((el) => el.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
