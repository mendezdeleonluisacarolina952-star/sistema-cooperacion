import { useEffect, useState } from "react";

import api from "../api/axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";

function Reportes() {

  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================
  const [datos, setDatos] =
    useState({

      beneficiarios: 0,

      proyectos: 0,

      usuarios: 0,

    });

  // =========================
  // CARGAR REPORTES
  // =========================
  const cargarReportes =
    async () => {

      try {

        const response =
          await api.get(
            "/dashboard"
          );

        setDatos(
          response.data
        );

      } catch (error) {

        console.error(
          "Error cargando reportes:",
          error
        );

      }

    };

  // =========================
  // DESCARGAR PDF
  // =========================
  const descargarPDF = () => {

    try {

      const ventana =
        window.open(
          "",
          "",
          "width=900,height=700"
        );

      ventana.document.write(`
        <html>

          <head>

            <title>
              Reporte del Sistema
            </title>

            <style>

              body {

                font-family: Arial;

                padding: 30px;

                background: #f3f4f6;

              }

              h1 {

                color: #111827;

                margin-bottom: 30px;

              }

              .contenedor {

                display: flex;

                gap: 20px;

                margin-bottom: 30px;

              }

              .card {

                flex: 1;

                color: white;

                padding: 25px;

                border-radius: 10px;

              }

              .blue {

                background: #2563eb;

              }

              .green {

                background: #16a34a;

              }

              .red {

                background: #dc2626;

              }

              .numero {

                font-size: 40px;

                font-weight: bold;

                margin-top: 10px;

              }

              table {

                width: 100%;

                border-collapse: collapse;

                background: white;

              }

              th, td {

                border: 1px solid #ccc;

                padding: 12px;

                text-align: left;

              }

              th {

                background: #e5e7eb;

              }

            </style>

          </head>

          <body>

            <h1>
              Reporte General del Sistema
            </h1>

            <div class="contenedor">

              <div class="card blue">

                <h2>
                  Beneficiarios
                </h2>

                <div class="numero">
                  ${datos.beneficiarios}
                </div>

              </div>

              <div class="card green">

                <h2>
                  Proyectos
                </h2>

                <div class="numero">
                  ${datos.proyectos}
                </div>

              </div>

              <div class="card red">

                <h2>
                  Usuarios
                </h2>

                <div class="numero">
                  ${datos.usuarios}
                </div>

              </div>

            </div>

            <table>

              <thead>

                <tr>

                  <th>
                    Módulo
                  </th>

                  <th>
                    Total
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    Beneficiarios
                  </td>

                  <td>
                    ${datos.beneficiarios}
                  </td>

                </tr>

                <tr>

                  <td>
                    Proyectos
                  </td>

                  <td>
                    ${datos.proyectos}
                  </td>

                </tr>

                <tr>

                  <td>
                    Usuarios
                  </td>

                  <td>
                    ${datos.usuarios}
                  </td>

                </tr>

              </tbody>

            </table>

          </body>

        </html>
      `);

      ventana.document.close();

      ventana.print();

    } catch (error) {

      console.error(error);

      alert(
        "Error generando PDF"
      );

    }

  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {

    cargarReportes();

  }, []);

  // =========================
  // DATOS GRAFICA
  // =========================
  const data = [

    {
      name: "Beneficiarios",
      total:
        datos.beneficiarios,
    },

    {
      name: "Proyectos",
      total:
        datos.proyectos,
    },

    {
      name: "Usuarios",
      total:
        datos.usuarios,
    },

  ];

  return (

    <div className="p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold">
          Reportes
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() =>
              navigate(
                "/dashboard"
              )
            }
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Regresar
          </button>

          <button
            onClick={
              descargarPDF
            }
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Descargar PDF
          </button>

        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-blue-600 text-white p-6 rounded shadow">

          <h2 className="text-lg">
            Beneficiarios
          </h2>

          <p className="text-5xl font-bold mt-2">
            {
              datos.beneficiarios
            }
          </p>

        </div>

        <div className="bg-green-600 text-white p-6 rounded shadow">

          <h2 className="text-lg">
            Proyectos
          </h2>

          <p className="text-5xl font-bold mt-2">
            {
              datos.proyectos
            }
          </p>

        </div>

        <div className="bg-red-600 text-white p-6 rounded shadow">

          <h2 className="text-lg">
            Usuarios
          </h2>

          <p className="text-5xl font-bold mt-2">
            {
              datos.usuarios
            }
          </p>

        </div>

      </div>

      {/* GRAFICA */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          Estadísticas Generales
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Reportes;