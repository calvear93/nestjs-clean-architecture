import { ApiBody, ApiParam } from '@nestjs/swagger';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Logger,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto.js';
import { UserUpdateDto } from './dto/user-update.js';
import { UserCreateDto } from './dto/user-create.js';
import { ParseOptionalIntPipe } from '../transformers/parse-optional-int.pipe.js';
import type { UserId } from '../../domain/user/user.entity.js';
import { UserUseCase } from '../../application/user/user.use-case.js';

@Controller({
	path: 'user',
	version: '1',
})
export class UserController {
	constructor(private readonly _useCase: UserUseCase) {}

	@Get(':id?')
	@ApiParam({ name: 'id', required: false })
	get(
		@Param('id', ParseOptionalIntPipe) id?: UserId,
	): Promise<UserDto | UserDto[] | null> {
		this._logger.verbose(`searching for ${id ? id : 'all'}`);

		return this._useCase.get(id);
	}

	@Post()
	@ApiBody({ schema: UserCreateDto.jsonSchema })
	@HttpCode(HttpStatus.CREATED)
	create(@Body() user: UserCreateDto): Promise<UserId> {
		this._logger.verbose(`creating user ${user.email}`);

		return this._useCase.create(user);
	}

	@Patch(':id')
	@ApiParam({ name: 'id' })
	@ApiBody({ schema: UserUpdateDto.jsonSchema })
	update(
		@Param('id', ParseIntPipe) id: UserId,
		@Body() user: UserUpdateDto,
	): Promise<void> {
		this._logger.verbose(`updating user ${id}`);

		return this._useCase.update(id, user);
	}

	@Delete(':id')
	@ApiParam({ name: 'id' })
	delete(@Param('id', ParseIntPipe) id: UserId): Promise<void> {
		this._logger.verbose(`deleting user ${id}`);

		return this._useCase.delete(id);
	}

	private readonly _logger = new Logger(UserController.name);
}
