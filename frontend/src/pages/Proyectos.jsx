import MainLayout from "../layouts/MainLayout";

function Proyectos() {

  const proyectos = [
    {
      id: 1,
      nombre: "Agua Potable",
      estado: "Activo",
      presupuesto: "Q 150,000"
    },
    {
      id: 2,
      nombre: "Educación Rural",
      estado: "En Proceso",
      presupuesto: "Q 80,000"
    },
    {
      id: 3,
      nombre: "Centro Comunitario",
      estado: "Finalizado",
      presupuesto: "Q 220,000"
    }
  ];

  return (
    <MainLayout>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>

        <h1>Proyectos</h1>

        <button style={newButton}>
          + Nuevo Proyecto
        </button>

      </div>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar proyecto..."
        style={searchStyle}
      />

      {/* TABLA */}
      <table style={tableStyle}>

        <thead style={theadStyle}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Proyecto</th>
            <th style={thStyle}>Estado</th>
            <th style={thStyle}>Presupuesto</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>

              <td style={tdStyle}>
                {proyecto.id}
              </td>

              <td style={tdStyle}>
                {proyecto.nombre}
              </td>

              <td style={tdStyle}>
                {proyecto.estado}
              </td>

              <td style={tdStyle}>
                {proyecto.presupuesto}
              </td>

              <td style={tdStyle}>

                <button style={editButton}>
                  Editar
                </button>

                <button style={deleteButton}>
                  Eliminar
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </MainLayout>
  );
}

const newButton = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer"
};

const searchStyle = {
  width: "300px",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const tableStyle = {
  width: "100%",
  backgroundColor: "white",
  borderCollapse: "collapse",
  borderRadius: "10px",
  overflow: "hidden"
};

const theadStyle = {
  backgroundColor: "#1e293b",
  color: "white"
};

const thStyle = {
  padding: "15px",
  textAlign: "left"
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #ddd"
};

const editButton = {
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer"
};

const deleteButton = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Proyectos;