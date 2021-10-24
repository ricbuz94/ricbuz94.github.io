export function getTheme() {
	return localStorage.getItem('theme') || "light";
}

export function storeTheme(theme: string) {
	localStorage.setItem('theme', theme);
}