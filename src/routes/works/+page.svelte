<script lang="ts">
	import { _, json, locale } from "svelte-i18n";
	import Divider from "$lib/components/Divider.svelte";
	import List from "$lib/components/List.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: jsonWorks = $json("works", $locale);
	$: posts = data?.posts?.map(({ title, links }, i) => ({
		title: jsonWorks[i].header,
		links: links?.map((link, j) => ({
			...link,
			title: jsonWorks[i].list[j].title,
			description: jsonWorks[i].list[j].description,
		})),
	}));
</script>

<svelte:head>
	<title>{$_("layout.nav.works")} · RiccardoBuzzolo</title>
	<meta
		name="description"
		content="Works page of Riccardo Buzzolo. Browse my old and current projects and works."
	/>
</svelte:head>

<Divider />
<ul id="posts">
	{#key data?.language}
		{#each posts as post, i (post?.title)}
			<List item={post} />
			{#if i !== data?.posts?.length - 1}
				<div id="marker">
					<p>{"~"}</p>
				</div>
			{/if}
		{/each}
	{/key}
</ul>
<Divider />

<style>
	#posts {
		margin: 0px;
		padding: 0px;
		width: 100%;
		list-style: none;
	}

	#marker {
		padding-top: 3rem;
		text-align: center;
	}

	#marker p {
		font-size: 2rem;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		#marker {
			padding-top: 2rem;
			padding-bottom: 1rem;
		}
	}
</style>
