import { useEffect, useContext, useState } from "react";

import { CalculateContext } from "../../context/CalculateContext";

import pruebaChiCuadrado from "../../methods/chiCuadrado";
import { Table } from "../../components/Table/Table";

import "./style.css";

export const ChiCuadrado = () => {
    const {currentMethod, setCurrentMethod} = useContext(CalculateContext)

  const [result, setResult] = useState();

  useEffect(() => {
    setCurrentMethod('chiCuadrado');
  }, []);

  const showTest = () => {
    const cantDatos = 1000;
    const amplitud = 0.1;
    const datos = [0.2, 0.5, 0.7, 0.9, 0.15, 0.25, 0.6, 0.85, 0.42, 0.71];
    const response = pruebaChiCuadrado(cantDatos, amplitud, datos);
    setResult(response);
  };

  return (
    <>
      <button onClick={showTest}>
        {currentMethod ? `Genrate for ${currentMethod}` : null}
      </button>
      {result && (
        <Table
          tableName={result.name}
          configuration={result.results}
          testGenerator={result.generatorTest}
        />
      )}
    </>
  );
};
