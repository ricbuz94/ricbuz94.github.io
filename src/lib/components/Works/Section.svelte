<script context="module" lang="ts">
	import type { Section } from "$lib/helpers/interfaces";
	import Icon from "../Icon.svelte";
	import Post from "./Post.svelte";
</script>

<script lang="ts">
	export let section: Section;
</script>

<li>
	<div>
		<Icon name="corner-down-right" size={16} />
		<h5>{section?.title}</h5>
	</div>
	<ul>
		{#each section?.posts as post}
			<Post {post} />
		{/each}
	</ul>
</li>

<style>
	li {
		margin: 0px;
		padding: 0px;
	}

	li:first-child div {
		padding-top: 0px;
	}

	div {
		display: flex;
		justify-content: start;
		align-items: center;
		padding-top: 2rem;
		padding-left: 0.5rem;
		padding-bottom: 1rem;
	}

	h5 {
		font-size: 80%;
		margin-left: 0.5rem;
		margin-top: 3px;
	}

	ul {
		padding: 0px;
		margin: 0px;
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		ul {
			gap: 0px;
			grid-template-columns: auto;
		}
	}

	/* schermo grande */
	@media only screen and (min-width: 1400px) {
		ul {
			grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		}
	}
</style>
