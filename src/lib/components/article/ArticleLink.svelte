<script lang="ts">
	export let title: string = "Home";
	export let href: string = "/";
</script>

<span>
	<a {href} target="_blank" rel="nonreferrer">{title}</a>
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
