import { Navigate, Route, Routes } from "react-router-dom";
import { CursosScreen } from "../components/screens/CursosScreen";
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen";
import { ErrorScreen } from "../components/screens/ErrorScreen";

/**
 * Componente principal de rutas de la aplicación
 * @component
 * @example
 * <AppRoutes />
 */
export const AppRoutes = () => {
  return (
    // Configuración de las rutas de la aplicación
    <Routes>
       {/*
        Redirección automática desde la raíz (/)
        a la pantalla de cursos (/cursos)
        replace evita que la ruta / quede en el historial
      */}
      <Route path="/" element={<Navigate to="/cursos" replace />} />

       {/* Ruta principal para la pantalla de listado de cursos */}
      <Route path="/cursos" element={<CursosScreen />} />

      {/*
        Ruta para la pantalla de estudiantes
        Se espera un parámetro de búsqueda: ?curso=id
        Ejemplo: /estudiantes?curso=1
      */}
      <Route path="/estudiantes" element={<EstudiantesScreen />} />
      
      {/* Ruta para pantalla de error genérica */}
      <Route path="/Error" element={<ErrorScreen />} />

      {/*
        Ruta comodín: cualquier ruta no definida redirige a Error
        replace evita que la ruta inválida quede en el historial
      */}
      <Route path="*" element={<Navigate to="/Error" replace />} />
    </Routes>
  );
};
