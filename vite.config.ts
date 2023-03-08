import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	preprocess: vitePreprocess(),
	optimizeDeps: {
		exclude: ["sswr"],
	},
};

export default config;