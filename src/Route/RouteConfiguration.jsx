import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ChiCuadrado } from "../pages/ChiCuadrado/Index";

export const RoutesConfiguration = () => {
  return (
    <Router>
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
