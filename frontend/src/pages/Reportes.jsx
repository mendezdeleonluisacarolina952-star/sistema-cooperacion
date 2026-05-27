import { useEffect, useState } from "react";

import api from "../api/axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Reportes() {

  const [datos, setDatos] = useState({
    beneficiarios: 0,
    proyectos: 0,
    usuarios: 0,
  });

  const cargarReportes = async () => {

    try {

      const response =
        await api.get("/reportes");

      setDatos(response.data);

    } catch (error) {

      console.error(
        "Error cargando reportes:",
        error
      );

    }

  };

  useEffect(() => {

    cargarReportes();

  }, []);

  const data = [
    {
      nombre: "Beneficiarios",
      total: datos.beneficiarios,
    },
    {
      nombre: "Proyectos",
      total: datos.proyectos,
    },
    {
      nombre: "Usuarios",
      total: datos.usuarios,
    },
  ];

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Reportes
      </h1>

      {/* TARJETAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >

        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
          }}
        >

          <h2>Beneficiarios</h2>

          <h1
            style={{
              fontSize: "40px",
            }}
          >
            {datos.beneficiarios}
          </h1>

        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
          }}
        >

          <h2>Proyectos</h2>

          <h1
            style={{
              fontSize: "40px",
            }}
          >
            {datos.proyectos}
          </h1>

        </div>

        <div
          style={{
            background: "#dc2626",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
          }}
        >

          <h2>Usuarios</h2>

          <h1
            style={{
              fontSize: "40px",
            }}
          >
            {datos.usuarios}
          </h1>

        </div>

      </div>

      {/* GRAFICA */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Estadísticas Generales
        </h2>

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="nombre" />

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