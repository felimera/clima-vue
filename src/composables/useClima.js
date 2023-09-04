export default function useClima() {
  const obtenerClima = ({ ciudad, pais }) => {
    console.log("Consultando...", ciudad);
    console.log("Consultando...", pais);
  };
  return {
    obtenerClima,
  };
}
