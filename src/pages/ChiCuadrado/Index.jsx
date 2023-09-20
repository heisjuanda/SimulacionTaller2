import { useEffect, useContext } from "react";

import { CalculateContext } from "../../context/CalculateContext";

import { Table } from "../../components/Table/Table";

import "./style.css";

export const ChiCuadrado = () => {
  const { setCurrentMethod, currentMethodResult } =
    useContext(CalculateContext);

  useEffect(() => {
    setCurrentMethod("chiCuadrado");
  }, [setCurrentMethod]);

  return (
    <>
      {currentMethodResult && (
        <Table
          tableName={currentMethodResult.name}
          configuration={currentMethodResult.results}
          testGenerator={currentMethodResult.generatorTest}
        />
      )}
    </>
  );
};
