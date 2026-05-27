import MainLayout from "../layouts/MainLayout";

function Reportes() {
  return (
    <MainLayout>

      <h1 style={{
        marginBottom: "30px"
      }}>
        Reportes
      </h1>

      {/* TARJETAS */}
      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "30px"
      }}>

        <div style={cardBlue}>
          <h2>Total Beneficiarios</h2>
          <p style={numberStyle}>120</p>
        </div>

        <div style={cardGreen}>
          <h2>Proyectos Activos</h2>
          <p style={numberStyle}>15</p>
        </div>

        <div style={cardRed}>
          <h2>Fondos Ejecutados</h2>
          <p style={numberStyle}>Q 450K</p>
        </div>

      </div>

      {/* TABLA */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px"
      }}>

        <h2 style={{
          marginBottom: "20px"
        }}>
          Resumen de Proyectos
        </h2>

        <table style={{
          width: "100%",
          borderCollapse: "collapse"
        }}>

          <thead style={{
            backgroundColor: "#1e293b",
            color: "white"
          }}>

            <tr>
              <th style={thStyle}>Proyecto</th>
              <th style={thStyle}>Beneficiarios</th>
              <th style={thStyle}>Estado</th>
              <th style={thStyle}>Impacto</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td style={tdStyle}>Agua Potable</td>
              <td style={tdStyle}>45</td>
              <td style={tdStyle}>Activo</td>
              <td style={tdStyle}>Alto</td>
            </tr>

            <tr>
              <td style={tdStyle}>Educación Rural</td>
              <td style={tdStyle}>70</td>
              <td style={tdStyle}>En Proceso</td>
              <td style={tdStyle}>Medio</td>
            </tr>

            <tr>
              <td style={tdStyle}>Centro Comunitario</td>
              <td style={tdStyle}>30</td>
              <td style={tdStyle}>Finalizado</td>
              <td style={tdStyle}>Alto</td>
            </tr>

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
}

const numberStyle = {
  fontSize: "32px",
  fontWeight: "bold"
};

const cardBlue = {
  backgroundColor: "#2563eb",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "220px"
};

const cardGreen = {
  backgroundColor: "#16a34a",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "220px"
};

const cardRed = {
  backgroundColor: "#dc2626",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "220px"
};

const thStyle = {
  padding: "15px",
  textAlign: "left"
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #ddd"
};

export default Reportes;