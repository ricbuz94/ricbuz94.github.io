<script>
	export let to = "/",
		text = "Testo",
		shadow = false;

	$: style = shadow ? "box-shadow: var(--cardShadow);" : "box-shadow: none;";
</script>

<a href={to} {style}>
	<p>{text}</p>
	<svg class="icon">
		<use href="/feather-sprite.svg#chevron-right" />
	</svg>
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

	p {
		color: var(--gray0);
		margin-right: 5px;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 1px;
	}

	.icon {
		width: 14px;
		height: 14px;
		stroke: var(--gray0);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition), opacity var(--transition);
	}
</style>
