<script>
	import Icon from "./Icon.svelte";

	export let to = "/";
	export let text = "Testo";
	export let shadow = false;
</script>

<a href={to} class="btn sale" class:shadow>
	<p>{text}</p>
	<Icon name="chevron-right" className="icon xs light" />
</a>

<style>
	/* a {
		width: min-content;
		display: flex;
		justify-content: space-around;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		user-select: none;
		background-color: var(--accentColor);
		border-radius: 25px;
		padding: 0.5rem 1.25rem;
		transition: all 0.2s ease-in-out;
	} */

	/* p {
		color: var(--gray0);
		margin-right: 5px;
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 1px;
		text-transform: uppercase;
	} */

	/* schermo piccolo */
	/* @media only screen and (max-width: 720px) {
		a {
			border-radius: 25px;
			padding: 0.75rem 1.25rem;
		}

		p {
			font-size: 1rem;
		}
	} */
</style>
