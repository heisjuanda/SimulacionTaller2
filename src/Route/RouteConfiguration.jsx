import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Calculate } from "../components/Calculate/Index";
import { ChiCuadrado } from "../pages/ChiCuadrado/Index";

export const RoutesConfiguration = () => {
  return (
    <Router>
      <Calculate />
      <Routes>
        <Route
          path="/"
          element={
            <ChiCuadrado />
          }
        />
      </Routes>
    </Router>
  );
};
