import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";

function App() {
  return (
    <BooksProvider>
      <div className="App"></div>
      <Books></Books>
    </BooksProvider>
  );
}

export default App;
