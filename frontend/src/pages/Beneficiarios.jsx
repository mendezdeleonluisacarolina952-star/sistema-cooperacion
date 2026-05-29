import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

function Beneficiarios() {

  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================
  const [beneficiarios, setBeneficiarios] =
    useState([]);

  const [nombre, setNombre] = useState("");
  const [dpi, setDpi] = useState("");
  const [edad, setEdad] = useState("");
  const [ubicacion, setUbicacion] =
    useState("");

  // EDITAR
  const [editando, setEditando] =
    useState(false);

  const [idEditar, setIdEditar] =
    useState(null);

  // =========================
  // OBTENER BENEFICIARIOS
  // =========================
  const cargarBeneficiarios = async () => {

    try {

      const response = await api.get(
        "/beneficiarios"
      );

      setBeneficiarios(response.data);

    } catch (error) {

      console.error(
        "Error cargando beneficiarios:",
        error
      );
    }
  };

  // =========================
  // CREAR BENEFICIARIO
  // =========================
  const crearBeneficiario = async (e) => {

    e.preventDefault();

    try {

      await api.post("/beneficiarios", {
        nombre,
        dpi,
        edad: Number(edad),
        ubicacion,
      });

      alert("Beneficiario creado");

      limpiarFormulario();

      cargarBeneficiarios();

    } catch (error) {

      console.error(error);

      alert(
        "Error creando beneficiario"
      );
    }
  };

  // =========================
  // ELIMINAR BENEFICIARIO
  // =========================
  const eliminarBeneficiario = async (
    id
  ) => {

    try {

      await api.delete(
        `/beneficiarios/${id}`
      );

      alert("Beneficiario eliminado");

      cargarBeneficiarios();

    } catch (error) {

      console.error(error);

      alert(
        "Error eliminando beneficiario"
      );
    }
  };

  // =========================
  // EDITAR BENEFICIARIO
  // =========================
  const editarBeneficiario = (b) => {

    setEditando(true);

    setIdEditar(b.id);

    setNombre(b.nombre);

    setDpi(b.dpi);

    setEdad(b.edad);

    setUbicacion(b.ubicacion);
  };

  // =========================
  // ACTUALIZAR BENEFICIARIO
  // =========================
  const actualizarBeneficiario =
    async (e) => {

      e.preventDefault();

      try {

        await api.put(
          `/beneficiarios/${idEditar}`,
          {
            nombre,
            dpi,
            edad: Number(edad),
            ubicacion,
          }
        );

        alert(
          "Beneficiario actualizado"
        );

        setEditando(false);

        setIdEditar(null);

        limpiarFormulario();

        cargarBeneficiarios();

      } catch (error) {

        console.error(error);

        alert(
          "Error actualizando beneficiario"
        );
      }
    };

  // =========================
  // LIMPIAR FORMULARIO
  // =========================
  const limpiarFormulario = () => {

    setNombre("");

    setDpi("");

    setEdad("");

    setUbicacion("");
  };

  // =========================
  // CARGAR AL INICIAR
  // =========================
  useEffect(() => {

    cargarBeneficiarios();

  }, []);

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Beneficiarios
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
            ? actualizarBeneficiario
            : crearBeneficiario
        }
        className="bg-white p-6 rounded shadow mb-6"
      >

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="DPI"
            value={dpi}
            onChange={(e) =>
              setDpi(e.target.value)
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) =>
              setEdad(e.target.value)
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Ubicación"
            value={ubicacion}
            onChange={(e) =>
              setUbicacion(e.target.value)
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
            ? "Actualizar Beneficiario"
            : "Crear Beneficiario"}

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
                DPI
              </th>

              <th className="p-2 border">
                Edad
              </th>

              <th className="p-2 border">
                Ubicación
              </th>

              <th className="p-2 border">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {beneficiarios.map((b) => (

              <tr key={b.id}>

                <td className="p-2 border">
                  {b.nombre}
                </td>

                <td className="p-2 border">
                  {b.dpi}
                </td>

                <td className="p-2 border">
                  {b.edad}
                </td>

                <td className="p-2 border">
                  {b.ubicacion}
                </td>

                <td className="p-2 border flex gap-2">

                  <button
                    onClick={() =>
                      editarBeneficiario(b)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminarBeneficiario(
                        b.id
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

export default Beneficiarios;