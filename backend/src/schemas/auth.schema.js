import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener mínimo 8 caracteres'),
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  celular: z.string().optional().nullable(),
  rol: z.enum(['CLIENTE', 'TECNICO']).optional().default('CLIENTE')
});

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener mínimo 8 caracteres')
});