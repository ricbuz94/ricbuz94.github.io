<script lang="ts">
	import type { Readable } from "svelte/store";
	import { useMediaQuery } from "$lib/hooks/useMediaQuery";

	import Icon from "./Icon.svelte";

	const mq: Readable<boolean> = useMediaQuery(
		"only screen and (max-width: 720px)",
	);

	let isShort: boolean = $state(false);
	mq.subscribe((value) => (isShort = value));
	const text = $derived(isShort ? "RB" : "RiccardoBuzzolo");
	const size = $derived(isShort ? 34 : 24);
</script>

<a href="/" title="Homepage" draggable="false">
	<Icon name="box" {size} isThemed />
	<h3>{text}</h3>
</a>

<style>
	a {
		display: flex;
		align-items: center;
		margin-right: auto;
		color: var(--textColor);
		user-select: none;
	}

	h3 {
		padding-left: 3px;
		font-size: 20px;
		font-weight: 700;
		user-select: none;
		transition: color var(--transition);
	}

	@media only screen and (max-width: 720px) {
		h3 {
			font-size: 24px;
		}
	}
</style>
