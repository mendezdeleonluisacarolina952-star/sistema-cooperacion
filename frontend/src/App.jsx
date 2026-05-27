import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beneficiarios from "./pages/Beneficiarios";
import Login from "./pages/Login";
import Proyectos from "./pages/Proyectos";
import Dashboard from "./pages/Dashboard";
import Reportes from "./pages/Reportes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/beneficiarios" element={<Beneficiarios />} />
  <Route path="/proyectos" element={<Proyectos />} />
  <Route path="/reportes" element={<Reportes />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;