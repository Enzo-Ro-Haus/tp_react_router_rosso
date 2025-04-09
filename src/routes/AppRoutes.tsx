
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CursosScreen } from '/workspaces/tp_react_router_rosso/src/components/screens/CursosScreen.tsx'
import { EstudiantesScreen } from '/workspaces/tp_react_router_rosso/src/components/screens/EstudiantesScreen.tsx'

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/cursos" element={<CursosScreen/>}/>
        <Route path='/estudiantes?curso=ID' element={<EstudiantesScreen/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}