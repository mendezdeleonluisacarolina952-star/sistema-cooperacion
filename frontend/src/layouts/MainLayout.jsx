import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh"
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: "250px",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px"
      }}>

        <h2 style={{
          marginBottom: "30px"
        }}>
          Sistema Cooperación
        </h2>

        <nav style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <Link
            to="/dashboard"
            style={linkStyle}
          >
            Dashboard
          </Link>

          <Link
            to="/beneficiarios"
            style={linkStyle}
          >
            Beneficiarios
          </Link>

          <Link
            to="/proyectos"
            style={linkStyle}
          >
            Proyectos
          </Link>

          <Link
            to="/reportes"
            style={linkStyle}
          >
            Reportes
          </Link>

          <Link
            to="/usuarios"
            style={linkStyle}
          >
            Usuarios
          </Link>

        </nav>

      </div>

      {/* CONTENIDO */}
      <div style={{
        flex: 1,
        backgroundColor: "#f1f5f9",
        padding: "30px"
      }}>
        {children}
      </div>

    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#334155"
};

export default MainLayout;