import { sveltekit } from "@sveltejs/kit/vite";
import type { PluginOption, ServerOptions, UserConfig } from "vite";

import fs from "fs";

let server: ServerOptions | undefined = {};

if (process.env.HTTPS) {
    server.https = {
        key: fs.readFileSync("localhost-key.pem"),
        cert: fs.readFileSync("localhost.pem"),
    };
}

let plugins: PluginOption[] | undefined = [sveltekit()];

const config: UserConfig = {
    server,
    plugins,
};

export default config;
