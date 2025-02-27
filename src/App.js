import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbhar from "./components/Navbhar";
import Cards from "./components/Cards";

function App() {
  const pageSize = 12;
  return (
    <BrowserRouter>
      <Navbhar />
      <Routes>
        <Route
          path="/"
          element={
            <Cards
              key="General"
              category="general"
              country="us"
              heading="Generals"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <Cards
              key="Technology"
              category="technology"
              country="us"
              heading="Technology"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/science"
          element={
            <Cards
              key="Science"
              category="science"
              country="us"
              heading="Science"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/sport"
          element={
            <Cards
              key="Sport"
              category="sport"
              country="us"
              heading="Sports"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/business"
          element={
            <Cards
              key="Business"
              category="business"
              country="us"
              heading="Business"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/health"
          element={
            <Cards
              key="Health"
              category="health"
              country="us"
              heading="Health"
              pagesize={pageSize}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <Cards
              key="Entertainment"
              category="entertainment"
              country="us"
              heading="Entertainment"
              pagesize={pageSize}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
