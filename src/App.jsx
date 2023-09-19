import CalculateProvider from "./context/CalculateContext";
import { RoutesConfiguration } from "./Route/RouteConfiguration";

import "./App.css";

function App() {
  return (
    <CalculateProvider>
      <RoutesConfiguration />
    </CalculateProvider>
  );
}

export default App;
