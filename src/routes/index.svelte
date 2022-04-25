<script context="module">
	import Article from "$lib/components/article/Article.svelte";
	import ArticleLink from "$lib/components/article/ArticleLink.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>Home · RiccardoBuzzolo</title>
	<meta
		name="description"
		content="Homepage of Riccardo Buzzolo. See my works and bio."
	/>
</svelte:head>

<div class="content">
	<Divider />
	<div class="banner">
		<p>{$_("home.greatings")}</p>
	</div>
	<Divider />
	<div class="me">
		<div class="cell">
			<h2>Riccardo Buzzolo</h2>
			<p>{$_("home.developer")} (Web / Mobile / IT)</p>
		</div>
		<div class="cell">
			<img src="/images/me.png" alt="Riccardo Buzzolo" />
		</div>
	</div>
	<Divider />
	<Article
		title={$_("home.works.title")}
		link="works"
		linkText={$_("home.works.callToAction")}
	>
		<p style="text-align: justify;">
			{$_("home.works.content.1")}
			<ArticleLink
				title="Beacharound S.r.l."
				href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
			/>{$_("home.works.content.2")}
			<ArticleLink
				title="Mango Mobile S.r.l."
				href={`${import.meta.env.VITE_APP_MANGO_URL}`}
			/>{$_("home.works.content.3")}
			<ArticleLink
				title="Drink Tool"
				href={`${import.meta.env.VITE_APP_DRINKTOOL_URL}`}
			/>{$_("home.works.content.4")}
		</p>
	</Article>
	<Divider />
	<Article
		title={$_("home.bio.title")}
		link="about"
		linkText={$_("home.bio.callToAction")}
	>
		<div class="row">
			<p class="margin">1994</p>
			<p class="margin">{$_("home.bio.content.1")}</p>
		</div>
		<div class="row">
			<p class="margin">2011</p>
			<p class="margin">{$_("home.bio.content.2")}</p>
		</div>
		<div class="row">
			<p class="margin">2013</p>
			<p class="margin">
				{$_("home.bio.content.3")}<ArticleLink
					title="ITTS O. Belluzzi, RN"
					href={`${import.meta.env.VITE_APP_ITG_URL}`}
				/>.
			</p>
		</div>
		<div class="row">
			<p class="margin">2016</p>
			<p class="margin">
				{$_("home.bio.content.4")}<ArticleLink
					title="Unibo Alma Mater Studiorum, Cesena"
					href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
				/>.
			</p>
		</div>
		<div class="row">
			<p class="margin">2018</p>
			<p class="margin">
				{$_("home.bio.content.5")}<ArticleLink
					title="Teddy S.p.A."
					href={`${import.meta.env.VITE_APP_TEDDY_URL}`}
				/>{$_("home.bio.content.6")}
			</p>
		</div>
		<div class="row">
			<p class="margin">2019</p>
			<p class="margin">
				{$_("home.bio.content.7")}<ArticleLink
					title="Mango Mobile S.r.l."
					href={`${import.meta.env.VITE_APP_MANGO_URL}`}
				/>{$_("home.bio.content.8")}
			</p>
		</div>
		<div class="row">
			<p class="margin">2021</p>
			<p>
				{$_("home.bio.content.9")}<ArticleLink
					title="Beacharound S.r.l."
					href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
				/>{$_("home.bio.content.10")}
			</p>
		</div>
	</Article>
	<Divider />
</div>

<style>
	.content {
		width: 80%;
	}

	.banner {
		padding: 1rem 2rem;
		text-align: center;
		border-radius: 0.5rem;
		background-color: rgba(128, 128, 128, 0.1);
	}

	.me {
		max-width: 600px;
		display: grid;
		gap: 3rem;
		grid-template-columns: auto auto;
		align-items: center;
		justify-items: center;
	}

	img {
		width: 100px;
		height: 100px;
		padding: 3px;
		border-radius: 50%;
		background-color: var(--subTextColor);
		transition: background-color var(--transition);
		box-shadow: var(--tocShadow);
	}

	img:hover {
		background-color: var(--accentColor);
	}

	.row {
		display: flex;
		column-gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		.content {
			width: 100%;
		}

		.me {
			gap: 1.5rem;
			grid-template-columns: auto;
		}

		h2 {
			letter-spacing: 1px;
		}
	}
</style>
