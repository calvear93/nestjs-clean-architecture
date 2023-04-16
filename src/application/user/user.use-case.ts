import { Injectable } from '@nestjs/common';
import { UserDto } from './schemas/user.schema.js';
import { UserUpdateDto } from './schemas/user-update.schema.js';
import { UserCreateDto } from './schemas/user-create.schema.js';
import { UserRepository } from './contracts/user.repository.contract.js';
import { UserId } from '../../domain/user/user.entity.js';

@Injectable()
export class UserUseCase {
	constructor(private readonly _repository: UserRepository) {}

	get(id?: UserId): Promise<UserDto | UserDto[] | null> {
		return this._repository.select(id);
	}

	create(user: UserCreateDto): Promise<UserId> {
		return this._repository.insert(user);
	}

	update(id: UserId, user: UserUpdateDto): Promise<void> {
		return this._repository.update(id, user);
	}

	delete(id: UserId): Promise<void> {
		return this._repository.delete(id);
	}
}
