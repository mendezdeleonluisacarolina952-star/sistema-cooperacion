-- CreateTable
CREATE TABLE "Beneficiario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "dpi" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Beneficiario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Beneficiario_dpi_key" ON "Beneficiario"("dpi");
