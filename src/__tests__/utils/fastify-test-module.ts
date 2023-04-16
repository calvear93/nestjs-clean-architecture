import { Test, type TestingModule } from '@nestjs/testing';
import {
	FastifyAdapter,
	type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { type ModuleMetadata } from '@nestjs/common';

export const createFastifyTestingModule = async (
	metadata: ModuleMetadata,
	debug = false,
): Promise<[TestingModule, NestFastifyApplication]> => {
	const module = await Test.createTestingModule(metadata).compile();
	const adapter = new FastifyAdapter();

	if (debug) {
		adapter.getInstance().addHook('onRoute', ({ url }: any) => {
			// eslint-disable-next-line no-console
			console.log(`path: ${url}`);
		});
	}

	const app = module.createNestApplication<NestFastifyApplication>(adapter);

	await app.enableVersioning().init();
	await app.getHttpAdapter().getInstance().ready();

	return [module, app];
};
