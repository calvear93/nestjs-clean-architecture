import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/user/user.controller.js';
import { UserSQLiteRepository } from './infrastructure/user/user-sqlite.repository.js';
import { PrismaModule } from './infrastructure/prisma/prisma.module.js';
import { UserUseCase } from './application/user/user.use-case.js';

@Module({
	imports: [PrismaModule.register({ debug: true })],
	controllers: [UserController],
	providers: [UserUseCase, UserSQLiteRepository.register()],
})
export class AppModule {}
