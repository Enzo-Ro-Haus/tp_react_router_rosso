import { FC } from "react";
import { ICurso } from "../../types/ICurso";
import styles from "./CursosCard.module.css";

// Definición de tipos para las props del componente
type ICursoCard = {
  /*Objeto */
  curso: ICurso;
  /** Función manejadora para abrir la lista de estudiantes del curso */
  handleOpenLista: (cursoId: number) => void;
};

/**
 * Componente para mostrar tarjetas de cursos individuales
 * @component
 * @param {ICursoCard} props - Propiedades del componente
 * @example
 * <CursosCard
 *   curso={cursoData}
 *   handleOpenLista={(id) => navigateToStudents(id)}
 * />
 */
export const CursosCard: FC<ICursoCard> = ({ curso, handleOpenLista }) => {
  return (
    <div className={styles.containerPrincipalCursosCard}>
      {/* Contenedor de información del curso */}
      <div className={styles.containerElementosCard}>
        {/* Nombre del curso */}
        <p>
          <b>Nombre:</b> {curso.nombre}
        </p>
        {/* Cantidad de estudiantes con validación implícita */}
        <p>
          <b>Cantidad de estudiantes:</b> {curso.estudiantes?.length || 0}
        </p>
      </div>
      {/* Botón para ver alumnos */}
      <button onClick={() => handleOpenLista(curso.id)}>Ver alumnos</button>
    </div>
  );
};
