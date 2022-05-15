<script context="module" lang="ts">
	import { base } from "$app/paths";
	import ButtonLink from "../ButtonLink.svelte";
</script>

<script lang="ts">
	export let style: string = "";
	export let title: string;
	export let text: string =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident vitae accusamus, amet, dolores est quaerat expedita repellat nobis numquam voluptate iure necessitatibus qui odit. Nobis eveniet blanditiis delectus repellendus.";
	export let link: string = "";
	export let linkText: string = "Testo";
</script>

<article {style}>
	<h3>{title}</h3>
	<slot>
		<p>{text}</p>
	</slot>
	<hr />
	{#if !!link}
		<ButtonLink to={`${base}/${link}`} text={linkText} shadow />
	{/if}
</article>

<style>
	article {
		padding: 10px;
	}

	h3 {
		margin-bottom: 1rem;
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 3px;
		text-decoration-color: var(--accentColor);
	}

	p {
		text-align: justify;
	}

	hr {
		height: 1rem;
		background: none;
	}
</style>
