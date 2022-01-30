<script lang="ts">
	export let to: string = "/",
		text: string = "Testo",
		shadow = false;

	$: style = shadow ? "box-shadow: var(--cardShadow);" : "box-shadow: none;";
</script>

<a href={to} {style}>
	<p>{text}</p>
	<svg class="icon accent">
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
		box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6) !important;
	}

	p {
		color: var(--gray0);
		margin-right: 5px;
		font-weight: 600;
		font-size: 0.9rem;
		letter-spacing: 1px;
	}

	.icon {
		width: 14px;
		height: 14px;
		stroke: var(--gray0);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition);
	}
</style>
