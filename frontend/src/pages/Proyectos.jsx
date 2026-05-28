import { useEffect, useState } from "react";

import api from "../api/axios";

import { useNavigate } from "react-router-dom";

function Proyectos() {

  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================
  const [proyectos, setProyectos] =
    useState([]);

  const [nombre, setNombre] =
    useState("");

  const [descripcion, setDescripcion] =
    useState("");

  const [fechaInicio, setFechaInicio] =
    useState("");

  const [fechaFin, setFechaFin] =
    useState("");

  const [estado, setEstado] =
    useState("Activo");

  // =========================
  // EDITAR
  // =========================
  const [editando, setEditando] =
    useState(false);

  const [idEditar, setIdEditar] =
    useState(null);

  // =========================
  // CARGAR PROYECTOS
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

        descripcion,

        fechaInicio,

        fechaFin,

        estado,

      });

      alert("Proyecto creado");

      limpiarFormulario();

      cargarProyectos();

    } catch (error) {

      console.error(
        error.response?.data
      );

      alert(
        error.response?.data?.error ||
        "Error creando proyecto"
      );

    }

  };

  // =========================
  // EDITAR PROYECTO
  // =========================
  const editarProyecto = (p) => {

    setEditando(true);

    setIdEditar(p.id);

    setNombre(
      p.nombre || ""
    );

    setDescripcion(
      p.descripcion || ""
    );

    setFechaInicio(
      p.fechaInicio
        ? new Date(
            p.fechaInicio
          )
            .toISOString()
            .split("T")[0]
        : ""
    );

    setFechaFin(
      p.fechaFin
        ? new Date(
            p.fechaFin
          )
            .toISOString()
            .split("T")[0]
        : ""
    );

    setEstado(
      p.estado || "Activo"
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

            descripcion,

            fechaInicio,

            fechaFin,

            estado,

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
          error.response?.data
        );

        alert(
          error.response?.data?.error ||
          "Error actualizando proyecto"
        );

      }

    };

  // =========================
  // ELIMINAR PROYECTO
  // =========================
  const eliminarProyecto =
    async (id) => {

      try {

        await api.delete(
          `/proyectos/${id}`
        );

        alert(
          "Proyecto eliminado"
        );

        cargarProyectos();

      } catch (error) {

        console.error(error);

        alert(
          "Error eliminando proyecto"
        );

      }

    };

  // =========================
  // LIMPIAR FORMULARIO
  // =========================
  const limpiarFormulario = () => {

    setNombre("");

    setDescripcion("");

    setFechaInicio("");

    setFechaFin("");

    setEstado("Activo");

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
            placeholder="Nombre"
            value={nombre}
            onChange={(e) =>
              setNombre(
                e.target.value
              )
            }
            className="border p-2 rounded"
            required
          />

          <select
            value={estado}
            onChange={(e) =>
              setEstado(
                e.target.value
              )
            }
            className="border p-2 rounded"
          >

            <option value="Activo">
              Activo
            </option>

            <option value="Finalizado">
              Finalizado
            </option>

          </select>

          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) =>
              setDescripcion(
                e.target.value
              )
            }
            className="border p-2 rounded col-span-2"
            rows="3"
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

          {
            editando
              ? "Actualizar Proyecto"
              : "Crear Proyecto"
          }

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

              <tr key={p.id}>

                <td className="p-2 border">
                  {p.nombre}
                </td>

                <td className="p-2 border">
                  {p.estado}
                </td>

                <td className="p-2 border">

                  {
                    p.fechaInicio
                      ? new Date(
                          p.fechaInicio
                        ).toLocaleDateString()
                      : "Sin fecha"
                  }

                </td>

                <td className="p-2 border">

                  {
                    p.fechaFin
                      ? new Date(
                          p.fechaFin
                        ).toLocaleDateString()
                      : "Sin fecha"
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
                        p.id
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