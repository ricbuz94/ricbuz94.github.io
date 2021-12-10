import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		ssr: false,
		adapter: static_adapter(),
		paths: {
			// base: dev ? '' : '/me'
			base: ''
		}
	}
};

export default config;