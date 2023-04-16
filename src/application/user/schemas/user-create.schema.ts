import { z } from 'zod';
import { UserDtoSchema } from './user.schema.js';

export const UserCreateDtoSchema = UserDtoSchema.omit({
	id: true,
});

export type UserCreateDto = z.infer<typeof UserCreateDtoSchema>;
