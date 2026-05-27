import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>

      <h1 style={{
        marginBottom: "30px"
      }}>
        Dashboard
      </h1>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        <div style={cardBlue}>
          <h2>Beneficiarios</h2>
          <p style={numberStyle}>120</p>
        </div>

        <div style={cardGreen}>
          <h2>Proyectos</h2>
          <p style={numberStyle}>15</p>
        </div>

        <div style={cardRed}>
          <h2>Usuarios</h2>
          <p style={numberStyle}>8</p>
        </div>

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

export default Dashboard;