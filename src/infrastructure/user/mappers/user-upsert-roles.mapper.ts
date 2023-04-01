import { Prisma } from '@prisma/client';
import { RolType } from '../../../domain/rol/rol.entity.js';
import { UserUpdateDto } from '../../../application/user/dto/user-update.js';
import { UserCreateDto } from '../../../application/user/dto/user-create.js';

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
