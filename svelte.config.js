import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		ssr: false,
		adapter: static_adapter()
	}
};

export default config;