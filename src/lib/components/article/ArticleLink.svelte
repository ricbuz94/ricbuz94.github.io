<script lang="ts">
	let { title = "Home", href = "/" } = $props();
</script>

<span>
	<a {href} target="_blank" rel="noreferrer" draggable="false">{title}</a>
</span>

<style>
	a {
		color: var(--accentColor);
		text-decoration: none;
		text-align: left;
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
