<script context="module" lang="ts">
	import { base } from "$app/paths";
	import ButtonLink from "../ButtonLink.svelte";
</script>

<script lang="ts">
	export let title: string;
	export let text: string =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit.";
	export let link: string = "";
	export let linkText: string = "Testo";
</script>

<article>
	<h3>{title}</h3>
	<slot>
		<p>{text}</p>
	</slot>
	{#if !!link}
		<hr />
		<ButtonLink to={`${base}/${link}`} text={linkText} shadow />
	{/if}
</article>

<style>
	article {
		padding: 2rem 0px;
	}

	h3 {
		margin-bottom: 1rem;
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 3px;
		text-decoration-color: var(--accentColor);
	}

	p {
		text-align: justify;
	}

	hr {
		height: 1.5rem;
		background: none;
	}

	/* schermo piccolo */
	/* @media only screen and (max-width: 720px) {
		article {
			font-size: 120%;
		}
	} */
</style>
