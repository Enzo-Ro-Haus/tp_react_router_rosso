import { useEffect, useState } from "react";
import { getAllCursos } from "../../http/api";
import { CursosCard } from "../ui/CursosCard";
import { ICurso } from "../../types/ICurso";
import styles from "./GeneralScreens.module.css";
import { useNavigate } from "react-router-dom";

/**
 * Componente principal para la visualización de la lista de cursos
 *
 * @component
 * @example
 * return (
 *   <CursosScreen />
 * )
 */
export const CursosScreen = () => {
  // Estado para almacenar la lista de cursos
  const [cursos, setCursos] = useState<ICurso[]>([]);

  // Hook para navegación entre rutas
  const navigate = useNavigate();

  /**
   * Maneja la navegación a la lista de estudiantes de un curso específico
   * @param {number} cursoId - ID del curso seleccionado
   */
  const handleOpenLista = (cursoId: number) => {
    navigate(`/estudiantes?curso=${cursoId}`);
  };

  // Efecto para cargar los cursos al montar el componente
  useEffect(() => {
    /**
     * Función asincrónica para obtener los cursos desde la db,json
     */
    const fetchCursos = async () => {
      const data = await getAllCursos();
      if (data) {
        setCursos(data);
      }
    };
    fetchCursos();
  }, []); // El array vacío asegura que solo se ejecute una vez al montar

  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.containerTitulo}>
        <h2>
          <b>Cursos:</b>
        </h2>
      </div>
      {/* Contenedor de tarjetas de cursos */}
      <div className={styles.containerElementosCard}>
        {cursos.length > 0 ? (
          // Listado de cursos usando componente CursosCard
          cursos.map((el) => (
            <CursosCard
              curso={el}
              key={el.id}
              handleOpenLista={handleOpenLista}
            />
          ))
        ) : (
          // Estado vacío cuando no hay cursos
          <p>No hay cursos</p>
        )}
      </div>
    </div>
  );
};
