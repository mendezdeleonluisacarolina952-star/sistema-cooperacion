function Dashboard() {
  return (
    <div style={{
      padding: "30px",
      backgroundColor: "#f3f4f6",
      minHeight: "100vh"
    }}>

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

        <div style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px"
        }}>
          <h2>Beneficiarios</h2>
          <p style={{ fontSize: "30px" }}>120</p>
        </div>

        <div style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px"
        }}>
          <h2>Proyectos</h2>
          <p style={{ fontSize: "30px" }}>15</p>
        </div>

        <div style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "220px"
        }}>
          <h2>Usuarios</h2>
          <p style={{ fontSize: "30px" }}>8</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;