import { z } from 'zod';
import { UserCreateDtoSchema } from './user-create.schema.js';

export const UserUpdateDtoSchema = UserCreateDtoSchema.partial();

export type UserUpdateDto = z.infer<typeof UserUpdateDtoSchema>;
