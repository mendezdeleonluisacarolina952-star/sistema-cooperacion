function Login() {
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
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Sistema Cooperación
        </h1>

        <input
          type="email"
          placeholder="Correo"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Iniciar Sesión
        </button>

      </div>

    </div>
  );
}

export default Login;