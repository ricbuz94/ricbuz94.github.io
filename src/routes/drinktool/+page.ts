import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = (() => {

	throw redirect(302, `/drinktool/privacy-policy`);

}) satisfies PageLoad;
