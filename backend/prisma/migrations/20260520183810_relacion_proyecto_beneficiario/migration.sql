-- AlterTable
ALTER TABLE "Beneficiario" ADD COLUMN     "proyectoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Beneficiario" ADD CONSTRAINT "Beneficiario_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
