import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useLocation } from "react-router-dom";
//useLocation gives us access to(returns the) the current URL including all the parameters

export default function Books() {
  //we create a new object of URLSearchParams to read the query of the current URL
  const query = new URLSearchParams(useLocation().search);
  //Here we get the parameter from the query and assign it to a variable.
  //the search in the bracket is the one we use for search in the query parameter.
  const search = query.get("search") || "";

  const books = useContext(BooksContext);

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1> All Books </h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
