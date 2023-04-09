<script lang="ts">
	import type { Readable } from "svelte/store";
	import { useMediaQuery } from "$lib/hooks/useMediaQuery";
	import Icon from "./Icon.svelte";

	let isMobile: boolean = false;
	const mq: Readable<boolean> = useMediaQuery(
		"only screen and (max-width: 420px)"
	);

	mq.subscribe((value) => (isMobile = value));
	$: text = isMobile ? "RB" : "RiccardoBuzzolo";
	$: size = isMobile ? 34 : 24;
</script>

<a href={"/"}>
	<Icon name="box" {size} isThemed />
	<h3>{text}</h3>
</a>

<style>
	a {
		display: flex;
		align-items: center;
		margin-right: auto;
		color: var(--textColor);
	}

	h3 {
		padding-left: 3px;
		font-size: 20px;
		font-weight: 700;
		user-select: none;
		transition: color var(--transition);
	}

	@media only screen and (max-width: 420px) {
		h3 {
			font-size: 24px;
			content: "RBBBB";
		}
	}
</style>
