<script lang="ts">
	import type { Post } from "../../helpers/interfaces";
	export let post: Post;
</script>

<li>
	<a rel="noreferrer" href={post.url} target="_blank">
		<div class="image-container">
			<div
				class="image"
				style="background-image: linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.1)),url('{post.image}');"
			/>
		</div>
		<div class="container">
			<div class="row">
				<h4>{post.title}</h4>
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
		margin: 0;
		padding: 0;
		outline: none;
		list-style: none;
		-webkit-tap-highlight-color: transparent;
		transition: all var(--transition);
	}

	li:hover div.image {
		transform: scale(1.1);
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

	a:hover h4 {
		color: var(--accentColor);
		text-decoration: underline;
	}

	.image-container {
		height: 180px;
		max-height: 180px;
		overflow: hidden;
		border-radius: var(--borderRadius);
	}

	.image {
		height: inherit;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
		transition: transform 4s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.container {
		padding: 1rem 3px;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	h4 {
		margin-right: auto;
		transition: color var(--transition);
	}

	p {
		transition: color var(--transition);
	}

	.tag {
		top: 0.5rem;
		left: 0.5rem;
		letter-spacing: 1px;
		font-size: 60%;
		font-weight: bold;
		margin: 0;
		margin-left: 5px;
		padding: 0;
	}

	.description {
		font-size: 14px;
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

		.image-container {
			height: 200px;
			max-height: 200px;
		}
	}

	/* schermo grande */
	@media only screen and (min-width: 1400px) {
		.image-container {
			height: 220px;
			max-height: 220px;
		}
	}
</style>
