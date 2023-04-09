import { Global, Module } from '@nestjs/common';
import { UserUseCase } from './user/user.use-case.js';
import { DomainModule } from '../domain/domain.module.js';

@Global()
@Module({
	imports: [DomainModule],
	providers: [UserUseCase],
	exports: [UserUseCase],
})
export class ApplicationModule {}
