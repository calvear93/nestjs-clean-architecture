import { RolSchema } from '../../../domain/rol/rol.entity.js';

export const RolDtoSchema = RolSchema.omit({
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
}).partial({
	descriptor: true,
	type: true,
});
