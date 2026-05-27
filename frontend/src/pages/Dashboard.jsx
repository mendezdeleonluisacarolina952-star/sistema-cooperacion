function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>

      <h1>Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h2>Beneficiarios</h2>
          <p>120</p>
        </div>

        <div style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h2>Proyectos</h2>
          <p>15</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;