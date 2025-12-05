import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../BooksContext";
//We use the useParams to get the id value dynamically from the URL

export default function BookDetails() {
  //create a variable and assign useParams
  var { bookId } = useParams(); //Inorder to fetch the id dynamically from the URL
  var books = useContext(BooksContext); //to fetch the books from the context we created.

  //To filter the book by book ID
  var book = books.find((b) => b.id === parseInt(bookId));

  //Here bookId is an object with a string value in it.
  //So we are destructuring the object using {} and then parsing
  //the string to int using parseInt() funtion. So that we can
  //compare the int values.

  //We can useEffect to check if the above logic is working fine
  //   useEffect(()=>{
  //     console.log(bookId);
  //     console.log(book);
  //   })

  //This is prevent calling the book not found 1st.
  if (books.length === 0) {
    return <div> Loading ....</div>;
  }

  //if(book == null)
  if (!book) {
    return <h1> Book not found</h1>;
  }

  return (
    <div>
      <h1> {book.title}</h1>
      <h2> by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
