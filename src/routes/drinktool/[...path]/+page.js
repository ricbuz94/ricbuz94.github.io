import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	throw error(404, `Il percorso '/drinktool/${params.path}' non esiste.`);
}
