<script lang="ts">
	import type { Post } from "../../helpers/interfaces";
	export let post: Post;
</script>

<li>
	<a
		rel="noreferrer"
		href={post.url}
		target={post.noBlank ? "_self" : "_blank"}
	>
		<div class="image-container">
			<div
				class="image"
				style="background-image: linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.1)),url('{post.image}');"
			/>
		</div>
		<div class="container">
			<h4>{post.title}</h4>
			<p class="description">{post.description}</p>
			<div class="row">
				{#each post.tags as tag}
					<p class={`tag ${tag}`}>#{tag}</p>
				{/each}
			</div>
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

	/* li:hover {
		border-radius: calc(var(--borderRadius) - 8px);
		outline: 3px solid var(--accentColor);
		outline-offset: 8px;
	} */

	li:hover div.image {
		transform: scale(1.05);
	}

	li:not(:last-child) {
		margin-bottom: 1.2rem;
	}

	a {
		display: block;
		margin: 0px;
		line-height: 1;
		outline: none;
		/* border-radius: var(--borderRadius); */
		border-radius: 0px;
		-webkit-tap-highlight-color: transparent;
		color: var(--textColor);
	}

	a:hover h4 {
		color: var(--accentColor);
		text-decoration: underline;
	}

	.image-container {
		height: 200px;
		max-height: 200px;
		overflow: hidden;
		/* border-radius: var(--borderRadius); */
		border-radius: 25px;
	}

	.image {
		height: inherit;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
		transition: transform 3s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.container {
		padding: 1rem 3px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding-top: 1.5rem;
	}

	h4 {
		margin-right: auto;
		transition: color var(--transition);
	}

	p {
		transition: color var(--transition);
	}

	.tag {
		line-height: 1.2;
		letter-spacing: 1px;
		font-size: 45%;
		font-weight: 600;
		margin: 0;
		padding: 6px 10px;
		border-radius: 25px;
	}

	.description {
		font-size: 14px;
		font-weight: 500;
		color: var(--subTextColor);
		margin: 0px;
		margin-top: 10px;
		padding: 0px;
	}

	.WEB {
		color: #fff;
		background-color: var(--webTag);
	}

	.ANDROID {
		color: #fff;
		background-color: var(--androidTag);
	}

	.iOS {
		background-color: var(--textColor);
		color: var(--backgroundColor);
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		h4 {
			font-size: 140%;
		}

		.description {
			font-size: 16px;
		}

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
			height: 250px;
			max-height: 250px;
		}
	}
</style>
