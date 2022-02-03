<script context="module">
	import Divider from "$lib/components/Divider.svelte";
	import List from "$lib/components/List.svelte";
	import data from "$lib/data/data";
</script>

<svelte:head>
	<meta
		name="description"
		content="Works page of Riccardo Buzzolo. Browse my old and current projects and works."
	/>
	<title>Works · RiccardoBuzzolo</title>
</svelte:head>

<Divider />
<ul>
	{#each data as item}
		<List {item} />
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

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		ul {
			width: 100%;
		}
	}
</style>
