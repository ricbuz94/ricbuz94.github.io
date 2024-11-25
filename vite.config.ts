import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import fs from "fs";

const config: UserConfig = {
	server: {
		https: process.env.HTTPS ? {
			key: fs.readFileSync('localhost-key.pem'),
			cert: fs.readFileSync('localhost.pem'),
		} : undefined
	},
	plugins: [sveltekit()]
};

export default config;
