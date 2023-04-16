import type { UserConfigExport } from 'vitest/config';
import typescript from '@rollup/plugin-typescript';

export default {
	test: {
		silent: true,
		useAtomics: true,
		include: ['src/**/*.{spec,test}.{ts,cts,mts}'],
	},
	plugins: [typescript({ tsconfig: 'tsconfig.test.json' })],
} satisfies UserConfigExport;
