import { Prisma } from '@prisma/client';
import { UserUpdateDto } from '../dto/user-update.js';
import { RolType } from '../../../domain/rol/rol.entity.js';
import { UserCreateDto } from '../../../application/user/schemas/user-create.schema.js';

export const userRolesMapper = (
	user: UserCreateDto | UserUpdateDto,
): Prisma.RolCreateOrConnectWithoutUserInput[] | undefined => {
	return user.roles?.map(({ name, descriptor, type }) => ({
		where: { name },
		create: {
			name,
			descriptor: descriptor ?? '',
			type: type ?? RolType.Unknown,
		},
	}));
};
