<script context="module">
	import List from "$lib/components/List.svelte";
	import data from "../lib/data/data";
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<title>Home · RiccardoBuzzolo</title>
</svelte:head>

<ul>
	{#each data as item}
		<List {item} />
	{/each}
</ul>

<style>
	::selection {
		color: var(--gray0);
		background-color: var(--accentColor);
	}

	ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}
</style>
