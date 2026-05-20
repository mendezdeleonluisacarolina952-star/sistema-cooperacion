const prisma = require("../prisma");
const bcrypt = require("bcryptjs");

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

module.exports = {
  registerUser,
};