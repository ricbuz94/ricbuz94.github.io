<script lang="ts">
	import type { Readable } from "svelte/store";
	import { useMediaQuery } from "$lib/hooks/useMediaQuery";
	import Icon from "./Icon.svelte";

	export let pushRight: boolean = false;

	let isMobile: boolean = false;
	const mq: Readable<boolean> = useMediaQuery(
		"only screen and (max-width: 720px)",
	);

	mq.subscribe((value) => (isMobile = value));
	$: text = isMobile ? "RB" : "RiccardoBuzzolo";
</script>

<a href="/" title="Homepage" id="logo" class:push-right={pushRight}>
	<Icon name="box" className="icon themed" />
	<h3>{text}</h3>
</a>
