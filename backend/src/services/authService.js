const prisma = require("../prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (data) => {
  const existingUser = await prisma.usuario.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.usuario.create({
    data: {
      nombre: data.nombre,
      email: data.email,
      password: hashedPassword,
      rol: data.rol,
    },
  });

  return user;
};

const loginUser = async (email, password) => {
  const user = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Contraseña incorrecta");
  }

  console.log(
  "SIGN SECRET:",
  process.env.JWT_SECRET
);

  const token = jwt.sign(
    {
      id: user.id_usuario,
      rol: user.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

delete user.password;

  return {
    message: "Login exitoso",
    token,
    user,
  };
};

module.exports = {
  registerUser,
  loginUser,
};