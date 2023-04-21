<script context="module" lang="ts">
	import { _, json, locale } from "svelte-i18n";
	import Divider from "$lib/components/Divider.svelte";
	import List from "$lib/components/Works/Section.svelte";
	import type { PageData } from "./$types";
	import type { Section } from "$lib/helpers/interfaces";
</script>

<script lang="ts">
	export let data: PageData;

	$: jsonWorks = $json("works", $locale as string | undefined) as Array<{
		header: string;
		list: Array<{ title: string; description: string }>;
	}>;
	$: sections = (data?.sections as Array<Section>).map(({ title, posts }, i) => ({
		key: `${i}-${title}`,
		title: jsonWorks[i].header,
		posts: posts?.map((post, j) => ({
			...post,
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
<ul id="sections">
	{#key data?.language}
		{#each sections as section, i (section?.key)}
			<List {section} />
			{#if i !== sections?.length - 1}
				<div id="marker">
					<p>{"~"}</p>
				</div>
			{/if}
		{/each}
	{/key}
</ul>
<Divider />

<style>
	#sections {
		margin: 0px;
		padding: 0px;
		width: 100%;
		list-style: none;
		box-sizing: border-box;
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

		#sections {
			padding: 0px;
		}

		#marker {
			padding-top: 2rem;
			padding-bottom: 1rem;
		}
	}
</style>
