import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Grafica = ({
  setDetener,
  detener,
  contador,
  setContador,
  data,
  setData,
}) => {
  const llamadoApi = async () => {
    const response = await fetch("https://voltajes.herokuapp.com");
    const result = await response.json();
    // setContador([...contador, contador[contador.length - 1] + 1]);
    setData([...data, result.voltaje]);
    setContador([...contador, contador[contador.length - 1] + 1]);

    console.log(contador);
  };

  useEffect(() => {
    if (detener === false) {
      const interval = setInterval(() => {
        llamadoApi();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [llamadoApi, detener]);

  const state = {
    labels: [...contador],
    datasets: [
      {
        label: "Voltaje",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#36028a",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [...data],
      },
    ],
  };

  return (
    <Line
      data={state}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          duration: 0,
        },
        title: {
          display: false,
          text: "Average Rainfall per month",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
};

export default Grafica;
