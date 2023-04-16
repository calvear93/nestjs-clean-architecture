import { z } from 'zod';
import { RolDtoSchema } from '../../rol/dto/rol.dto.js';
import { UserSchema } from '../../../domain/user/user.entity.js';

export const UserDtoSchema = UserSchema.omit({
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
}).extend({
	roles: z.array(RolDtoSchema).optional(),
});

export type UserDto = z.infer<typeof UserDtoSchema>;
