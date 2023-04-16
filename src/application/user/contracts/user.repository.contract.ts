import { UserDto } from '../schemas/user.schema.js';
import { UserUpdateDto } from '../schemas/user-update.schema.js';
import { UserCreateDto } from '../schemas/user-create.schema.js';
import { UserId } from '../../../domain/user/user.entity.js';

export abstract class UserRepository {
	abstract select(id?: UserId): Promise<UserDto | UserDto[] | null>;

	abstract insert(user: UserCreateDto): Promise<UserId>;

	abstract update(id: UserId, user: UserUpdateDto): Promise<void>;

	abstract delete(id: UserId): Promise<void>;
}
