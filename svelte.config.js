import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		ssr: false,
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		appDir: 'app',
		paths: {
			base: dev ? '' : '/me'
		}
	}
};

export default config;