import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
