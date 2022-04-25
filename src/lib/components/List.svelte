<script context="module">
	import Post from "./Post.svelte";
</script>

<script lang="ts">
	import type { Section } from "$lib/helpers/interfaces";
	export let item: Section;
</script>

<li>
	<div>
		<svg class="icon">
			<use href="/feather-sprite.svg#corner-down-right" />
		</svg>
		<h5>{item.title}</h5>
	</div>
	<ul>
		{#each item.links as post}
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

	.icon {
		width: 16px;
		height: 16px;
		stroke: var(--textColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition);
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
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		ul {
			gap: 0px;
			grid-template-columns: auto;
		}
	}
</style>
