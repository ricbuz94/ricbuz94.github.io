<script>
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/drinktool.ico" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
