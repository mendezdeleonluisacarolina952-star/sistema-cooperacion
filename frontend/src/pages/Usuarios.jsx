import { useEffect, useState } from "react";

import api from "../api/axios";

function Usuarios() {

  // =========================
  // STATES
  // =========================
  const [usuarios, setUsuarios] =
    useState([]);

  const [nombre, setNombre] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [rol, setRol] =
    useState("");

  // EDITAR
  const [editando, setEditando] =
    useState(false);

  const [idEditar, setIdEditar] =
    useState(null);

  // =========================
  // OBTENER USUARIOS
  // =========================
  const cargarUsuarios = async () => {

    try {

      const response =
        await api.get("/usuarios");

      setUsuarios(response.data);

    } catch (error) {

      console.error(
        "Error cargando usuarios:",
        error
      );
    }
  };

  // =========================
  // CREAR USUARIO
  // =========================
  const crearUsuario = async (e) => {

    e.preventDefault();

    try {

      await api.post("/usuarios", {
        nombre,
        email,
        password,
        rol,
      });

      alert("Usuario creado");

      limpiarFormulario();

      cargarUsuarios();

    } catch (error) {

      console.error(error);

      alert(
        "Error creando usuario"
      );
    }
  };

  // =========================
  // ELIMINAR
  // =========================
  const eliminarUsuario =
    async (id) => {

      try {

        await api.delete(
          `/usuarios/${id}`
        );

        alert("Usuario eliminado");

        cargarUsuarios();

      } catch (error) {

        console.error(error);

        alert(
          "Error eliminando usuario"
        );
      }
    };

  // =========================
  // EDITAR
  // =========================
  const editarUsuario = (u) => {

    setEditando(true);

    setIdEditar(u.id_usuario);

    setNombre(u.nombre);

    setEmail(u.email);

    setRol(u.rol);

    setPassword("");
  };

  // =========================
  // ACTUALIZAR
  // =========================
  const actualizarUsuario =
    async (e) => {

      e.preventDefault();

      try {

        await api.put(
          `/usuarios/${idEditar}`,
          {
            nombre,
            email,
            password,
            rol,
          }
        );

        alert(
          "Usuario actualizado"
        );

        setEditando(false);

        setIdEditar(null);

        limpiarFormulario();

        cargarUsuarios();

      } catch (error) {

        console.error(error);

        alert(
          "Error actualizando usuario"
        );
      }
    };

  // =========================
  // LIMPIAR FORMULARIO
  // =========================
  const limpiarFormulario = () => {

    setNombre("");

    setEmail("");

    setPassword("");

    setRol("");
  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {

    cargarUsuarios();

  }, []);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Usuarios
      </h1>

      {/* FORMULARIO */}
      <form
        onSubmit={
          editando
            ? actualizarUsuario
            : crearUsuario
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
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="border p-2 rounded"
            required={!editando}
          />

          <select
            value={rol}
            onChange={(e) =>
              setRol(e.target.value)
            }
            className="border p-2 rounded"
            required
          >

            <option value="">
              Seleccione Rol
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="usuario">
              Usuario
            </option>

          </select>

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
            ? "Actualizar Usuario"
            : "Crear Usuario"}

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
                Correo
              </th>

              <th className="p-2 border">
                Rol
              </th>

              <th className="p-2 border">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {usuarios.map((u) => (

              <tr key={u.id_usuario}>

                <td className="p-2 border">
                  {u.nombre}
                </td>

                <td className="p-2 border">
                  {u.email}
                </td>

                <td className="p-2 border">
                  {u.rol}
                </td>

                <td className="p-2 border flex gap-2">

                  <button
                    onClick={() =>
                      editarUsuario(u)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminarUsuario(
                        u.id_usuario
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

export default Usuarios;