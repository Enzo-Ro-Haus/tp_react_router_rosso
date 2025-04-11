import { FC } from "react";
import { IEstudiante } from "../../types/IEstudiante";
import styles from "./EstudianteCard.module.css";

// Definición de tipos para las props del componente
type IEstudianteCard = {
  /** Objeto con la información del estudiante a mostrar */
  estudiante: IEstudiante;
};

/**
 * Componente para mostrar tarjetas individuales de estudiantes
 * @component
 * @param {IEstudianteCard} props - Propiedades del componente
 * @example
 * <EstudianteCard estudiante={{ id: 1, nombre: "Ana", edad: 25 }} />
 */
export const EstudianteCard: FC<IEstudianteCard> = ({ estudiante }) => {
  return (
    <div className={styles.containerPrincipalCard}>
      {/* Contenedor de elementos de información */}
      <div className={styles.containerElementosCard}>
        <p>
          <b>ID:</b> {estudiante.id}
        </p>
        <p>
          <b>Nombre:</b> {estudiante.nombre}
        </p>
        <p>
          <b>Edad:</b> {estudiante.edad}
        </p>
      </div>
    </div>
  );
};
