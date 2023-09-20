import { useEffect, useContext } from "react";

import { CalculateContext } from "../../context/CalculateContext";
import pruebaChiCuadrado from "../../methods/chiCuadrado";

import { CHI_CUADRADO } from "../../constants/methods";

export const Calculate = () => {
  const { currentMethod, setCurrentMethod, setCurrentMethodResult } =
    useContext(CalculateContext);

  useEffect(() => {
    if (location.pathname === "/") setCurrentMethod(CHI_CUADRADO);
  }, [setCurrentMethod]);

  const chiCuadradoMethod = () => {
    const cantDatos = 1000;
    const amplitud = 0.1;
    const datos = [0.2, 0.5, 0.7, 0.9, 0.15, 0.25, 0.6, 0.85, 0.42, 0.71];
    const response = pruebaChiCuadrado(cantDatos, amplitud, datos);
    setCurrentMethodResult(response);
  };

  return (
    <>
      <button onClick={
        currentMethod === 'chiCuadrado' ? chiCuadradoMethod : null
      }>
        {currentMethod ? `Genrate for ${currentMethod}` : null}
      </button>
    </>
  );
};
