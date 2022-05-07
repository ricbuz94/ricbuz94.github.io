<script context="module">
	import Divider from "$lib/components/Divider.svelte";
	import List from "$lib/components/List.svelte";
	import data from "$lib/data/data";
	import { _, json, locale } from "svelte-i18n";
</script>

<script>
	$: jsonWorks = locale ? $json("works") : $json("works");
</script>

<svelte:head>
	<title>{$_("layout.nav.works")} · RiccardoBuzzolo</title>
	<meta
		name="description"
		content="Works page of Riccardo Buzzolo. Browse my old and current projects and works."
	/>
</svelte:head>

<Divider />
<ul>
	{#each data as item, i}
		<List
			item={{
				title: jsonWorks[i].header,
				links: item.links.map((link, j) => ({
					...link,
					title: jsonWorks[i].list[j].title,
					description: jsonWorks[i].list[j].description,
				})),
			}}
		/>
		{#if i !== data.length - 1}
			<div id="marker">
				<p>-•-</p>
			</div>
		{/if}
	{/each}
</ul>
<Divider />

<style>
	ul {
		width: 80%;
		list-style: none;
		margin: 0px;
		padding: 0px;
	}

	#marker {
		padding-top: 3rem;
		text-align: center;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		ul {
			width: 100%;
		}

		#marker {
			padding-top: 2rem;
			padding-bottom: 1rem;
		}
	}
</style>
