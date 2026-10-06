import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import prisma from '../src/config/prisma.js'; // Importa la instancia configurada

async function main() {
  const passwordHash = await bcrypt.hash('MinimoOchoCaracteres', 10);

  const cliente = await prisma.usuario.upsert({
    where: { email: 'juan@mail.coms' },
    update: {},
    create: {
      id: 'a1111111-1111-1111-1111-111111111111',
      email: 'juan@mail.com',
      nombre: 'Juan Pérez',
      celular: '3884123456',
      rol: 'CLIENTE',
      passwordHash,
    },
  });

  const tecnico = await prisma.usuario.upsert({
    where: { email: 'carlos@mail.com' },
    update: {},
    create: {
      id: 'b2222222-2222-2222-2222-222222222222',
      email: 'carlos@mail.com',
      nombre: 'Carlos Gómez',
      celular: '3884987654',
      rol: 'TECNICO',
      passwordHash,
    },
  });

  await prisma.solicitud.upsert({
    where: { id: '11111111-aaaa-bbbb-cccc-111111111111' },
    update: {},
    create: {
      id: '11111111-aaaa-bbbb-cccc-111111111111',
      titulo: 'Pérdida en la cocina',
      descripcion: 'Se pierde agua debajo de la mesada',
      categoria: 'PLOMERIA',
      direccion: 'Av. Siempre Viva 742',
      estado: 'PENDIENTE',
      clienteId: cliente.id,
      historial: {
        create: {
          estadoAnterior: null,
          estadoNuevo: 'PENDIENTE',
          cambiadoPorId: cliente.id
        }
      }
    }
  });

  console.log('Seed ejecutado correctamente.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });