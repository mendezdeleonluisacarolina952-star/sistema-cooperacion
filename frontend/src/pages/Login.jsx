import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6"
    }}>

      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#2563eb"
        }}>
          Sistema Cooperación
        </h1>

        <input
          type="email"
          placeholder="Correo"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Iniciar Sesión
        </button>

      </div>

    </div>
  );
}

export default Login;