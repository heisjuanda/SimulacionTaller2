import { createContext, useMemo, useState } from "react";

export const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [currentMethod, setCurrentMethod] = useState();

  window.scrollTo(0, 0);

  const values = useMemo(
    () => ({
      currentMethod,
      setCurrentMethod,
    }),
    [currentMethod, setCurrentMethod]
  );

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateProvider;
