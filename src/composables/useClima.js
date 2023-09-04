import axios from "axios";

export default function useClima() {
  const obtenerClima = async ({ ciudad, pais }) => {
    // Importar el Api Key
    const key = import.meta.env.VITE_API_KEY;

    try {
      // Obtener la Lat, Log
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      // Obtener el clima
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: resultado } = await axios(urlClima);
      console.log("resultado", resultado);
    } catch (error) {
      console.log("error", error);
    }
  };
  return {
    obtenerClima,
  };
}
