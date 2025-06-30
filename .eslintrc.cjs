import eslintPluginSvelte from "eslint-plugin-svelte";

export default {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended"],
    plugins: ["svelte5", "@typescript-eslint"],
    ignorePatterns: ["*.cjs"],
    overrides: [{ files: ["*.svelte"], processor: "svelte5/svelte5" }],
    settings: {
        "svelte5/typescript": () => require("typescript"),
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
    },
    env: {
        browser: true,
        es2024: true,
        node: true,
    },
    ...eslintPluginSvelte.configs["flat/recommended"],
};
