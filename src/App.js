import "./App.css";
import { BooksProvider } from "./BooksContext";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/"></Navigate>}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
