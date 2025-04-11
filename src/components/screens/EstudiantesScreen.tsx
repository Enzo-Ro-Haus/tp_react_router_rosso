import { useEffect, useState } from "react";
import { IEstudiante } from "../../types/IEstudiante";
import { getEstudiantesByCurso } from "../../http/api";
import { EstudianteCard } from "../ui/EstudianteCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./GeneralScreens.module.css";

/**
 * Componente para mostrar la lista de estudiantes de un curso específico
 * @component
 * @example
 * return (
 *   <EstudiantesScreen />
 * )
 */
export const EstudiantesScreen = () => {
  // Estado para almacenar la lista de estudiantes
  const [lista, setLista] = useState<IEstudiante[]>([]);

  // Obtención de parámetros de búsqueda de la URL
  const [searchParams] = useSearchParams();
  const cursoParam = searchParams.get("curso");

  // Hook para manejar navegación entre rutas
  const navigate = useNavigate();

  /**
   * Maneja el evento de clic para volver a la vista de cursos
   * @function handleVolverACursos
   */
  const handleVolverACursos = () => {
    navigate(`/cursos`);
  };

  // Efecto principal para cargar estudiantes según parámetro de curso
  useEffect(() => {
    // Validación de parámetro de curso
    if (
      !cursoParam ||
      isNaN(Number(cursoParam)) ||
      Number(cursoParam) <= 0
    ) {
      navigate("/Error");
      return;
    }

    const cursoId = Number(cursoParam);

    /**
     * Función asincrónica para obtener estudiantes desde la API
     * @async
     * @function fetchEstudiantes
     */
    const fetchEstudiantes = async () => {
      try {
        const estudiantes = await getEstudiantesByCurso(cursoId);
        if (estudiantes) {
          setLista(estudiantes);
        }
      } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        navigate("/Error");
        return;
      }
    };

    fetchEstudiantes();
  }, [cursoParam, navigate]);

  return (
    <div className={styles.containerPrincipal}>
       {/* Encabezado con título y botón de retorno */}
      <div className={styles.containerTitulo}>
        <h2>
          <b>Estudiantes:</b>
        </h2>
        <div>
          <button onClick={handleVolverACursos}>Volver</button>
        </div>
      </div>
      {/* Contenedor principal de tarjetas de estudiantes */}
      <div className={styles.containerElementosCard}>
        {lista.length > 0  ? (
          lista.map((el) => <EstudianteCard key={el.id} estudiante={el} />)
        ) : (
          <p>No hay estudiantes</p>
        )}
      </div>
    </div>
  );
};
