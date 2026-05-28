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

      <div className="p-8 bg-gray-100 min-h-screen">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-5xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Panel general del sistema de cooperación
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          {/* BENEFICIARIOS */}
          <div className="bg-white border-l-8 border-blue-600 rounded-2xl p-6 shadow-lg">

            <h2 className="text-gray-500 text-lg font-semibold">
              Beneficiarios
            </h2>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              {datos.beneficiarios}
            </p>

            <div className="mt-4 h-2 bg-gray-200 rounded-full">

              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{
                  width: `${datos.beneficiarios * 20}%`,
                }}
              ></div>

            </div>

          </div>

          {/* PROYECTOS */}
          <div className="bg-white border-l-8 border-green-600 rounded-2xl p-6 shadow-lg">

            <h2 className="text-gray-500 text-lg font-semibold">
              Proyectos
            </h2>

            <p className="text-5xl font-bold text-green-600 mt-4">
              {datos.proyectos}
            </p>

            <div className="mt-4 h-2 bg-gray-200 rounded-full">

              <div
                className="h-2 bg-green-600 rounded-full"
                style={{
                  width: `${datos.proyectos * 20}%`,
                }}
              ></div>

            </div>

          </div>

          {/* USUARIOS */}
          <div className="bg-white border-l-8 border-yellow-500 rounded-2xl p-6 shadow-lg">

            <h2 className="text-gray-500 text-lg font-semibold">
              Usuarios
            </h2>

            <p className="text-5xl font-bold text-yellow-500 mt-4">
              {datos.usuarios}
            </p>

            <div className="mt-4 h-2 bg-gray-200 rounded-full">

              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{
                  width: `${datos.usuarios * 20}%`,
                }}
              ></div>

            </div>

          </div>

          {/* REPORTES */}
          <div className="bg-white border-l-8 border-red-600 rounded-2xl p-6 shadow-lg">

            <h2 className="text-gray-500 text-lg font-semibold">
              Reportes
            </h2>

            <p className="text-5xl font-bold text-red-600 mt-4">
              {datos.reportes}
            </p>

            <div className="mt-4 h-2 bg-gray-200 rounded-full">

              <div
                className="h-2 bg-red-600 rounded-full"
                style={{
                  width: `${datos.reportes * 20}%`,
                }}
              ></div>

            </div>

          </div>

        </div>

        {/* SECCION INFERIOR */}
        <div className="grid grid-cols-2 gap-8">

          {/* ACTIVIDAD */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              Actividad Reciente
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between items-center border-b pb-3">

                <div>

                  <p className="font-semibold text-gray-700">
                    Beneficiarios registrados
                  </p>

                  <p className="text-sm text-gray-400">
                    Actualización del sistema
                  </p>

                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-bold">
                  {datos.beneficiarios}
                </span>

              </div>

              <div className="flex justify-between items-center border-b pb-3">

                <div>

                  <p className="font-semibold text-gray-700">
                    Proyectos activos
                  </p>

                  <p className="text-sm text-gray-400">
                    Datos sincronizados
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">
                  {datos.proyectos}
                </span>

              </div>

              <div className="flex justify-between items-center border-b pb-3">

                <div>

                  <p className="font-semibold text-gray-700">
                    Usuarios creados
                  </p>

                  <p className="text-sm text-gray-400">
                    Usuarios registrados
                  </p>

                </div>

                <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-bold">
                  {datos.usuarios}
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <p className="font-semibold text-gray-700">
                    Reportes generados
                  </p>

                  <p className="text-sm text-gray-400">
                    Reportes del sistema
                  </p>

                </div>

                <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full font-bold">
                  {datos.reportes}
                </span>

              </div>

            </div>

          </div>

          {/* RESUMEN */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              Estado General
            </h2>

            <div className="space-y-6">

              {/* BENEFICIARIOS */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold text-gray-700">
                    Beneficiarios
                  </span>

                  <span className="font-bold text-blue-600">
                    {datos.beneficiarios}
                  </span>

                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full">

                  <div
                    className="h-4 bg-blue-600 rounded-full"
                    style={{
                      width: `${datos.beneficiarios * 20}%`,
                    }}
                  ></div>

                </div>

              </div>

              {/* PROYECTOS */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold text-gray-700">
                    Proyectos
                  </span>

                  <span className="font-bold text-green-600">
                    {datos.proyectos}
                  </span>

                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full">

                  <div
                    className="h-4 bg-green-600 rounded-full"
                    style={{
                      width: `${datos.proyectos * 20}%`,
                    }}
                  ></div>

                </div>

              </div>

              {/* USUARIOS */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold text-gray-700">
                    Usuarios
                  </span>

                  <span className="font-bold text-yellow-500">
                    {datos.usuarios}
                  </span>

                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full">

                  <div
                    className="h-4 bg-yellow-500 rounded-full"
                    style={{
                      width: `${datos.usuarios * 20}%`,
                    }}
                  ></div>

                </div>

              </div>

              {/* REPORTES */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold text-gray-700">
                    Reportes
                  </span>

                  <span className="font-bold text-red-600">
                    {datos.reportes}
                  </span>

                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full">

                  <div
                    className="h-4 bg-red-600 rounded-full"
                    style={{
                      width: `${datos.reportes * 20}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Dashboard;