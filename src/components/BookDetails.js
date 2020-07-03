import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookDetails(props) {
  const { book } = props;
  const { dispatch } = useContext(BookContext);

  return (
    <li
      onClick={() =>
        dispatch({ type: "REMOVE_BOOK", payload: { id: book.id } })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;
