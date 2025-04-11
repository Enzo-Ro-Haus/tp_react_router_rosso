import { useNavigate } from "react-router-dom";

/**
 * Componente para mostrar pantalla de error genérica
 * @component
 * @example
 * return (
 *   <ErrorScreem />
 * )
 */
export const ErrorScreen = () => {
  // Hook para manejar navegación entre rutas
  const navigate = useNavigate();

  /**
   * Maneja el evento de clic para volver a la lista de cursos
   * @function handleVolverACursos
   */
  const handleVolverACursos = () => {
    navigate(`/cursos`);
  };

  return (
    <div>
      {/* Encabezado principal del error */}
      <h1>Ups... algo no salió como debería</h1>
      {/* Botón de acción para regresar a cursos */}
      <button onClick={handleVolverACursos}>Ir a cursos</button>
    </div>
  );
};
