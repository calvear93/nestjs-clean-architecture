import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module.js';
import { DomainModule } from './domain/domain.module.js';
import { ApplicationModule } from './application/application.module.js';

@Module({
	imports: [InfrastructureModule, ApplicationModule, DomainModule],
})
export class AppModule {}
