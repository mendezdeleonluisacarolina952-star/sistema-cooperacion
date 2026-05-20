-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Beneficiario" (
    "id_beneficiario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "dpi" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Beneficiario_pkey" PRIMARY KEY ("id_beneficiario")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "id_proyecto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3),

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id_proyecto")
);

-- CreateTable
CREATE TABLE "Asignacion" (
    "id_asignacion" SERIAL NOT NULL,
    "id_beneficiario" INTEGER NOT NULL,
    "id_proyecto" INTEGER NOT NULL,

    CONSTRAINT "Asignacion_pkey" PRIMARY KEY ("id_asignacion")
);

-- CreateTable
CREATE TABLE "Avance" (
    "id_avance" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "id_proyecto" INTEGER NOT NULL,

    CONSTRAINT "Avance_pkey" PRIMARY KEY ("id_avance")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Beneficiario_dpi_key" ON "Beneficiario"("dpi");

-- AddForeignKey
ALTER TABLE "Asignacion" ADD CONSTRAINT "Asignacion_id_beneficiario_fkey" FOREIGN KEY ("id_beneficiario") REFERENCES "Beneficiario"("id_beneficiario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asignacion" ADD CONSTRAINT "Asignacion_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "Proyecto"("id_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avance" ADD CONSTRAINT "Avance_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "Proyecto"("id_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;
