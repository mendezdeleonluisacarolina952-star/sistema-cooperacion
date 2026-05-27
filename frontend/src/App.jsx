import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Beneficiarios from "./pages/Beneficiarios";
import Proyectos from "./pages/Proyectos";
import Reportes from "./pages/Reportes";
import Usuarios from "./pages/Usuarios";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* BENEFICIARIOS */}
        <Route
          path="/beneficiarios"
          element={
            <ProtectedRoute>
              <Beneficiarios />
            </ProtectedRoute>
          }
        />

        {/* PROYECTOS */}
        <Route
          path="/proyectos"
          element={
            <ProtectedRoute>
              <Proyectos />
            </ProtectedRoute>
          }
        />

        {/* REPORTES */}
        <Route
          path="/reportes"
          element={
            <ProtectedRoute>
              <Reportes />
            </ProtectedRoute>
          }
        />

        {/* USUARIOS */}
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;