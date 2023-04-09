import { Global, Module } from '@nestjs/common';
import { UserController } from './user/user.controller.js';
import { UserSQLiteRepository } from './user/user-sqlite.repository.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UserRepository } from '../application/user/contracts/user.repository.contract.js';

@Global()
@Module({
	imports: [PrismaModule.register({ debug: true })],
	controllers: [UserController],
	providers: [UserSQLiteRepository.register()],
	exports: [PrismaModule, UserRepository],
})
export class InfrastructureModule {}
