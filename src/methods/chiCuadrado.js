const pruebaChiCuadrado = (cantDatos, amplitud, datos) => {
  const c = 10;
  const gl = c - 1;

  const tabla = [
    3.841, 5.991, 7.815, 9.488, 11.07, 12.592, 14.067, 15.507, 16.919, 18.307,
    19.675, 21.026, 22.362, 23.685, 24.996, 26.296, 27.587, 28.869, 30.144,
    31.41,
  ];

  const fO = [];
  const fE = [];
  const calculado = [];
  let limiteInf = 0;
  let limiteSup = amplitud;

  limiteInf = [0];
  limiteSup = [];
  for (let i = 0; i < 10; i++) {
    limiteSup.push(limiteInf[i] + amplitud);
    limiteInf.push(limiteSup[i]);
  }
  limiteInf = limiteInf.slice(0, -1);

  for (let item = 0; item < 10; item++) {
    let contFO = 0;
    for (let i = 0; i < datos.length; i++) {
      if (datos[i] >= limiteInf[item] && datos[i] < limiteSup[item]) {
        contFO++;
      }
    }
    fO.push(contFO);
    fE.push(Math.floor(cantDatos / c));
  }

  for (let i = 0; i < fO.length; i++) {
    calculado.push(Math.pow(fE[i] - fO[i], 2) / fE[i]);
  }

  const suma = calculado.reduce((acc, val) => acc + val, 0);

  console.log("PRUEBA DE CHI-CUADRADO-------------------------------------");
  console.log("FO =", fO);
  console.log("FE =", fE);
  console.log("X^2 =", calculado);
  console.log("Suma chi-calculado = ", suma);
  console.log("chi-critico = ", tabla[gl - 1]);

  let generatorTest = null;

  if (suma <= tabla[gl - 1]) {
    console.log("El generador en bueno en cuanto a uniformidad");
    generatorTest = "El generador en bueno en cuanto a uniformidad";
  } else {
    console.log(
      "El generador no es bueno porque el chi-cuadrado es mayor al chi-critico"
    );
    generatorTest =
      "El generador no es bueno porque el chi-cuadrado es mayor al chi-critico";
  }

  return {
    name: "PRUEBA DE CHI-CUADRADO",
    results: [
      {
        name: "FO",
        values: fO,
      },
      {
        name: "FR",
        values: fE,
      },
      {
        name: "X^2",
        values: [calculado],
      },
      {
        name: "Suma chi-calculado",
        values: [suma],
      },
      {
        name: "chi-critico",
        values: [tabla[gl - 1]],
      },
    ],
    generatorTest: generatorTest,
  };
};

export default pruebaChiCuadrado;
