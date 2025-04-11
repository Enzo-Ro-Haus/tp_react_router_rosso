import axios from "axios";
import { ICurso } from "../types/ICurso";
import { IEstudiante } from "../types/IEstudiante";

// Ruta base de la API
const URL_PATH = "http://localhost:3000";

/**
 * Obtiene todos los cursos disponibles desde la API
 * @returns {Promise<ICurso[] | undefined>} Lista de cursos o undefined en caso de error
 * @example
 * const cursos = await getAllCursos();
 * if (cursos) {
 *   // Trabajar con la lista
 * }
 */
export const getAllCursos = async (): Promise<ICurso[] | undefined> => {
  try {
    const response = await axios.get<ICurso[]>(`${URL_PATH}/cursos`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Obtiene los estudiantes de un curso específico desde la API
 * @param {number} cursoId - ID del curso a consultar
 * @returns {Promise<IEstudiante[] | undefined>} Lista de estudiantes o undefined en caso de error
 * @example
 * const estudiantes = await getEstudiantesByCurso(1);
 * if (estudiantes) {
 *   // Mostrar estudiantes
 * }
 */
export const getEstudiantesByCurso = async (
  cursoId: number
): Promise<IEstudiante[] | undefined> => {
  try {
    const response = await axios.get<ICurso>(`${URL_PATH}/cursos/${cursoId}`);
    return response.data!.estudiantes;
  } catch (err) {
    console.log(err);
  }
};
