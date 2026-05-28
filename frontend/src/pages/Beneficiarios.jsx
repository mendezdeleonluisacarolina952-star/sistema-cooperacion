import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

function Proyectos() {

  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================
  const [proyectos, setProyectos] =
    useState([]);

  const [nombre, setNombre] =
    useState("");

  const [estado, setEstado] =
    useState("");

  const [fechaInicio, setFechaInicio] =
    useState("");

  const [fechaFin, setFechaFin] =
    useState("");

  // EDITAR
  const [editando, setEditando] =
    useState(false);

  const [idEditar, setIdEditar] =
    useState(null);

  // =========================
  // OBTENER PROYECTOS
  // =========================
  const cargarProyectos = async () => {

    try {

      const response =
        await api.get("/proyectos");

      setProyectos(response.data);

    } catch (error) {

      console.error(
        "Error cargando proyectos:",
        error
      );
    }
  };

  // =========================
  // CREAR PROYECTO
  // =========================
  const crearProyecto = async (e) => {

    e.preventDefault();

    try {

      await api.post("/proyectos", {
        nombre,
        estado,
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
      });

      alert("Proyecto creado");

      limpiarFormulario();

      cargarProyectos();

    } catch (error) {

      console.error(
        error.response?.data || error
      );

      alert(
        "Error creando proyecto"
      );
    }
  };

  // =========================
  // ELIMINAR PROYECTO
  // =========================
  const eliminarProyecto = async (
    id
  ) => {

    try {

      await api.delete(
        `/proyectos/${id}`
      );

      alert("Proyecto eliminado");

      cargarProyectos();

    } catch (error) {

      console.error(error);

      alert(
        "Error eliminando proyecto"
      );
    }
  };

  // =========================
  // EDITAR PROYECTO
  // =========================
  const editarProyecto = (p) => {

    setEditando(true);

    setIdEditar(p.id_proyecto);

    setNombre(p.nombre);

    setEstado(p.estado);

    setFechaInicio(
      p.fecha_inicio?.split("T")[0]
    );

    setFechaFin(
      p.fecha_fin?.split("T")[0]
    );
  };

  // =========================
  // ACTUALIZAR PROYECTO
  // =========================
  const actualizarProyecto =
    async (e) => {

      e.preventDefault();

      try {

        await api.put(
          `/proyectos/${idEditar}`,
          {
            nombre,
            estado,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
          }
        );

        alert(
          "Proyecto actualizado"
        );

        setEditando(false);

        setIdEditar(null);

        limpiarFormulario();

        cargarProyectos();

      } catch (error) {

        console.error(
          error.response?.data || error
        );

        alert(
          "Error actualizando proyecto"
        );
      }
    };

  // =========================
  // LIMPIAR FORMULARIO
  // =========================
  const limpiarFormulario = () => {

    setNombre("");

    setEstado("");

    setFechaInicio("");

    setFechaFin("");
  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {

    cargarProyectos();

  }, []);

  return (

    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Proyectos
        </h1>

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Regresar
        </button>

      </div>

      {/* FORMULARIO */}
      <form
        onSubmit={
          editando
            ? actualizarProyecto
            : crearProyecto
        }
        className="bg-white p-6 rounded shadow mb-6"
      >

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Nombre Proyecto"
            value={nombre}
            onChange={(e) =>
              setNombre(
                e.target.value
              )
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Estado"
            value={estado}
            onChange={(e) =>
              setEstado(
                e.target.value
              )
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="date"
            value={fechaInicio}
            onChange={(e) =>
              setFechaInicio(
                e.target.value
              )
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="date"
            value={fechaFin}
            onChange={(e) =>
              setFechaFin(
                e.target.value
              )
            }
            className="border p-2 rounded"
            required
          />

        </div>

        <button
          type="submit"
          className={`mt-4 text-white px-4 py-2 rounded ${
            editando
              ? "bg-yellow-500"
              : "bg-blue-600"
          }`}
        >

          {editando
            ? "Actualizar Proyecto"
            : "Crear Proyecto"}

        </button>

      </form>

      {/* TABLA */}
      <div className="bg-white shadow rounded p-4">

        <table className="w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th className="p-2 border">
                Nombre
              </th>

              <th className="p-2 border">
                Estado
              </th>

              <th className="p-2 border">
                Fecha Inicio
              </th>

              <th className="p-2 border">
                Fecha Fin
              </th>

              <th className="p-2 border">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {proyectos.map((p) => (

              <tr key={p.id_proyecto}>

                <td className="p-2 border">
                  {p.nombre}
                </td>

                <td className="p-2 border">
                  {p.estado}
                </td>

                <td className="p-2 border">
                  {
                    p.fecha_inicio?.split("T")[0]
                  }
                </td>

                <td className="p-2 border">
                  {
                    p.fecha_fin?.split("T")[0]
                  }
                </td>

                <td className="p-2 border flex gap-2">

                  <button
                    onClick={() =>
                      editarProyecto(p)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminarProyecto(
                        p.id_proyecto
                      )
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Proyectos;