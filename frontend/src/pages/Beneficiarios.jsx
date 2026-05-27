import MainLayout from "../layouts/MainLayout";

function Beneficiarios() {

  const beneficiarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      dpi: "1234567890101",
      comunidad: "Guatemala"
    },
    {
      id: 2,
      nombre: "María López",
      dpi: "9876543210101",
      comunidad: "Mixco"
    },
    {
      id: 3,
      nombre: "Carlos Gómez",
      dpi: "4567891230101",
      comunidad: "Villa Nueva"
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

        <h1>Beneficiarios</h1>

        <button style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          + Nuevo Beneficiario
        </button>

      </div>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar beneficiario..."
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* TABLA */}
      <table style={{
        width: "100%",
        backgroundColor: "white",
        borderCollapse: "collapse",
        borderRadius: "10px",
        overflow: "hidden"
      }}>

        <thead style={{
          backgroundColor: "#1e293b",
          color: "white"
        }}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>DPI</th>
            <th style={thStyle}>Comunidad</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {beneficiarios.map((beneficiario) => (
            <tr key={beneficiario.id}>

              <td style={tdStyle}>
                {beneficiario.id}
              </td>

              <td style={tdStyle}>
                {beneficiario.nombre}
              </td>

              <td style={tdStyle}>
                {beneficiario.dpi}
              </td>

              <td style={tdStyle}>
                {beneficiario.comunidad}
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

export default Beneficiarios;