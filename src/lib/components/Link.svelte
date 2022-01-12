<script lang="ts">
	import type { Link } from "$lib/helpers/interfaces";
	export let link: Link;
</script>

<li>
	<a rel="noreferrer" href={link.url} target="_blank"
		><div class="">
			<h5 class="">{link.title}</h5>
			<p class={`tag ${link.tag}`}>#{link.tag}</p>
		</div>
		<p class="description">{link.description}</p></a
	>
</li>

<style>
	li {
		margin: 0px;
		padding: 0px;
		outline: none;
		list-style: none;
		-webkit-tap-highlight-color: transparent;
		background-color: var(--cardBackgroundColor);
		border-radius: var(--borderRadius);
		transition: all var(--transition);
		box-shadow: var(--cardShadow);
	}

	li:hover {
		box-shadow: var(--cardShadowHover);
		transform: translateY(-2px);
	}

	li:active {
		box-shadow: var(--cardShadowHover);
		transform: scale(1.02);
	}

	li:not(:last-child) {
		margin-bottom: 1.2rem;
	}

	a {
		display: block;
		margin: 0;
		line-height: 1;
		outline: none;
		border-radius: var(--borderRadius);
		-webkit-tap-highlight-color: transparent;
		padding: 1.2rem 1.4rem;
		color: var(--textColor);
	}

	a:hover h5 {
		color: var(--accentColor);
	}

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h5 {
		transition: color var(--transition);
	}

	p {
		transition: color var(--transition);
	}

	.tag {
		font-size: 60%;
		font-weight: bolder;
		margin: 0;
		padding: 0;
	}

	.description {
		font-size: 80%;
		color: var(--subTextColor);
		margin: 0px;
		margin-top: 10px;
		padding: 0px;
	}

	.WEB {
		color: var(--webTag);
	}

	.ANDROID {
		color: var(--androidTag);
	}
</style>
