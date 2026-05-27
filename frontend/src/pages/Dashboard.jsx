import { useEffect, useState } from "react";

import api from "../api/axios";

import MainLayout from "../layouts/MainLayout";

function Dashboard() {

  // =========================
  // STATES
  // =========================
  const [datos, setDatos] = useState({
    beneficiarios: 0,
    proyectos: 0,
    usuarios: 0,
    reportes: 0,
  });

  // =========================
  // CARGAR DASHBOARD
  // =========================
  const cargarDashboard = async () => {

    try {

      const response =
        await api.get("/dashboard");

      setDatos(response.data);

    } catch (error) {

      console.error(
        "Error cargando dashboard:",
        error
      );

    }

  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {

    cargarDashboard();

  }, []);

  return (

    <MainLayout>

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6">

          {/* BENEFICIARIOS */}
          <div className="bg-blue-600 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Beneficiarios
            </h2>

            <p className="text-4xl font-bold mt-2">
              {
                datos.beneficiarios
              }
            </p>

          </div>

          {/* PROYECTOS */}
          <div className="bg-green-600 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Proyectos
            </h2>

            <p className="text-4xl font-bold mt-2">
              {
                datos.proyectos
              }
            </p>

          </div>

          {/* USUARIOS */}
          <div className="bg-yellow-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Usuarios
            </h2>

            <p className="text-4xl font-bold mt-2">
              {
                datos.usuarios
              }
            </p>

          </div>

          {/* REPORTES */}
          <div className="bg-red-600 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Reportes
            </h2>

            <p className="text-4xl font-bold mt-2">
              {
                datos.reportes
              }
            </p>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Dashboard;