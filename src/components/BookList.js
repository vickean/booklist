import React, { useContext, Fragment } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);

  return (
    <Fragment>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map((el) => {
              return <BookDetails book={el} key={el.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time :)</div>
      )}
    </Fragment>
  );
}

export default BookList;
