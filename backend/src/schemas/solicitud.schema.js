import { z } from 'zod';

export const createSolicitudSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  descripcion: z.string().min(1, 'La descripción es obligatoria'),
  categoria: z.enum([
    'PLOMERIA', 'ELECTRICIDAD', 'GAS', 'CARPINTERIA', 
    'PINTURA', 'CERRAJERIA', 'ALBANILERIA', 'OTRO'
  ]),
  direccion: z.string().min(1, 'La dirección es obligatoria')
});

export const updateSolicitudSchema = createSolicitudSchema.partial();

export const motivoSchema = z.object({
  motivo: z.string().min(1, 'El motivo es obligatorio')
});