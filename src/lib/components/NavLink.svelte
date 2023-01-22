<script context="module" lang="ts">
	import { page } from "$app/stores";
</script>

<script lang="ts">
	export let href: string = "/";
	$: isActive = $page.url.pathname === href;
</script>

<a {...$$props} class:active={isActive} {href}><slot /></a>

<style>
	a {
		/* border: 1px solid red; */

		color: var(--textColor);
		padding-left: 5px;
		padding-right: 5px;
		font-size: 0.9rem;
		letter-spacing: 1px;
		font-weight: 700;
		transition: color var(--transition);
	}

	a:hover {
		color: var(--accentColor);
	}

	a.active {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		a {
			text-align: center;
			padding: 0.75rem 0px;
			border-radius: var(--borderRadius);
		}
		
		a:hover {
			color: var(--accentColor);
		}
	}
</style>
