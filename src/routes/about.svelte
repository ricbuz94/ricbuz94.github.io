<script context="module">
	import Article from "$lib/components/article/Article.svelte";
	import ArticleLink from "$lib/components/article/ArticleLink.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>{$_("layout.nav.about")} · RiccardoBuzzolo</title>
	<meta
		name="description"
		content="About page for Riccardo Buzzolo. Know something about me."
	/>
</svelte:head>

<div class="container">
	<Divider />
	<div class="content">
		<img src="/images/me.png" alt="Riccardo Buzzolo" />
		<div class="card-wide">
			<Article title={$_("about.aboutMe")}>
				<p>
					{$_("about.aboutMeContent1")}
					<ArticleLink
						title={$_("about.aboutMeLink1")}
						href={`${import.meta.env.VITE_APP_ITG_URL}`}
					/>{$_("about.aboutMeContent2")}
					<ArticleLink
						title={$_("about.aboutMeLink2")}
						href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
					/>{$_("about.aboutMeContent3")}
					<ArticleLink
						title="Beacharound S.r.l."
						href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
					/>
				</p>
			</Article>
		</div>
	</div>
	<Divider />
	<div class="content dense">
		<div class="card-wide">
			<Article title={$_("about.aboutMyWork")}>
				<p>
					{$_("about.aboutMyWorkContent1")}
					<ArticleLink
						title="Beacharound S.r.l."
						href={`${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}`}
					/>{$_("about.aboutMyWorkContent2")}
				</p>
			</Article>
		</div>
		<img src="/images/beach.jpg" alt="Beacharound" />
	</div>
	<Divider />
</div>

<style>
	.container {
		width: 80%;
	}

	.card-wide {
		max-width: 600px;
		grid-column: span 2 / auto;
	}

	div.content {
		display: grid;
		gap: 3rem;
		grid-template-columns: auto auto auto;
		grid-template-rows: auto;
		align-items: center;
		justify-items: center;
		font-size: 95%;
	}

	img {
		width: 200px;
		height: 200px;
		padding: 3px;
		border-radius: 50%;
		background-color: var(--subTextColor);
		transition: all var(--transition);
		box-shadow: var(--tocShadow);
	}

	img:hover {
		background-color: var(--accentColor);
	}

	/* schermo piccolo */
	@media only screen and (max-width: 1200px) {
		.container {
			width: 100%;
		}

		.content {
			display: grid !important;
			gap: 2rem !important;
			grid-template-columns: auto !important;
			grid-template-rows: auto auto !important;
		}

		.dense {
			grid-auto-flow: dense;
		}

		.dense img {
			grid-row: 1;
		}

		.card-wide {
			grid-column: auto !important;
		}

		img {
			width: 150px;
			height: 150px;
		}

		p {
			text-align: justify;
		}
	}
</style>
