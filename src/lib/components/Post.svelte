<script lang="ts">
	import type { Link } from "$lib/helpers/interfaces";
	export let post: Link;
</script>

<li>
	<a rel="noreferrer" href={post.url} target="_blank">
		<div
			class="image"
			style="background-image: linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.1)),url('{post.image}');"
		/>
		<div class="container">
			<div class="row">
				<h5>{post.title}</h5>
				{#each post.tags as tag}
					<p class={`tag ${tag}`}>#{tag}</p>
				{/each}
			</div>
			<p class="description">{post.description}</p>
		</div>
	</a>
</li>

<style>
	li {
		height: min-content;
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
		margin: 0px;
		line-height: 1;
		outline: none;
		border-radius: var(--borderRadius);
		-webkit-tap-highlight-color: transparent;
		color: var(--textColor);
	}

	a:hover h5 {
		color: var(--accentColor);
	}

	.image {
		width: 100%;
		height: 250px;
		max-height: 250px;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
		border-radius: 0.5rem 0.5rem 0px 0px;
	}

	.container {
		padding: 1.2rem 1.4rem;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	h5 {
		margin-right: auto;
		transition: color var(--transition);
	}

	p {
		transition: color var(--transition);
	}

	.tag {
		letter-spacing: 1px;
		font-size: 60%;
		font-weight: bolder;
		margin: 0;
		margin-left: 5px;
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

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		li {
			border-radius: 1rem;
			background-color: transparent;
			box-shadow: none;
		}

		li:hover {
			box-shadow: none;
			transform: none;
		}

		li:active {
			box-shadow: none;
			transform: none;
		}

		.image {
			height: 150px;
			border-radius: 1rem;
		}
	}
</style>
