<script>
	import Icon from "./Icon.svelte";

	export let to = "/",
		text = "Testo",
		shadow = false;

	$: style = shadow ? "shadow" : "";
</script>

<a href={to} class={style}>
	<p>{text}</p>
	<Icon name="chevron-right" size={14} width={3} color="#f6f9fc" />
</a>

<style>
	a {
		width: min-content;
		display: flex;
		justify-content: space-around;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		background-color: var(--accentColor);
		border-radius: var(--borderRadius);
		padding: 0.5rem 1rem 0.5rem 1rem;
		transition: all var(--transition);
	}

	a:hover {
		background-color: var(--accentColorHover);
	}

	a:active {
		box-shadow: var(--activeInputShadow) !important;
	}

	a.shadow {
		box-shadow: var(--cardShadow);
	}

	p {
		color: var(--gray0);
		margin-right: 5px;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 1px;
	}
</style>
