<script>
	import { _ } from "svelte-i18n";
	import Article from "$lib/components/article/Article.svelte";
	import ArticleLink from "$lib/components/article/ArticleLink.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import me from "$lib/assets/images/me.webp";
</script>

<svelte:head>
	<title>Home · RiccardoBuzzolo</title>
	<meta
		name="description"
		content="Homepage of Riccardo Buzzolo. See my works and bio."
	/>
</svelte:head>

<article>
	<Divider />
	<div class="banner">
		<p>{$_("home.greatings")}</p>
	</div>
	<Divider />
	<div class="me">
		<div class="cell">
			<h1 class="title">Riccardo Buzzolo</h1>
			<p class="subtitle">{$_("home.developer")} (Web / Mobile / IT)</p>
		</div>
		<div class="cell">
			<img src={me} alt="Riccardo Buzzolo" title="Riccardo Buzzolo" />
		</div>
	</div>
	<Divider height={1.5} />
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
	<Divider height={1.5} />
	<Article
		title={$_("home.bio.title")}
		link="about"
		linkText={$_("home.bio.callToAction")}
	>
		<div class="row">
			<p>1994</p>
			<p>{$_("home.bio.content.1")}</p>
		</div>
		<div class="row">
			<p>2011</p>
			<p>{$_("home.bio.content.2")}</p>
		</div>
		<div class="row">
			<p>2013</p>
			<p>
				{$_("home.bio.content.3")}<ArticleLink
					title="ITTS O. Belluzzi, RN"
					href={`${import.meta.env.VITE_APP_ITG_URL}`}
				/>.
			</p>
		</div>
		<div class="row">
			<p>2016</p>
			<p>
				{$_("home.bio.content.4")}<ArticleLink
					title="Unibo Alma Mater Studiorum, Cesena"
					href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
				/>.
			</p>
		</div>
		<div class="row">
			<p>2018</p>
			<p>
				{$_("home.bio.content.5")}<ArticleLink
					title="Teddy S.p.A."
					href={`${import.meta.env.VITE_APP_TEDDY_URL}`}
				/>{$_("home.bio.content.6")}
			</p>
		</div>
		<div class="row">
			<p>2019</p>
			<p>
				{$_("home.bio.content.7")}<ArticleLink
					title="Mango Mobile S.r.l."
					href={`${import.meta.env.VITE_APP_MANGO_URL}`}
				/>{$_("home.bio.content.8")}
			</p>
		</div>
		<div class="row">
			<p>2021</p>
			<p>
				{$_("home.bio.content.9")}<ArticleLink
					title="Beacharound S.r.l."
					href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
				/>{$_("home.bio.content.10")}
			</p>
		</div>
	</Article>
	<Divider height={1.5} />
</article>

<style>
	.banner {
		display: flex;
		justify-content: center;
		user-select: none;
	}

	.banner p {
		width: 100%;
		padding: 1rem 2rem;
		text-align: center;
		border-radius: 0.5rem;
		font-weight: 500;
		background-color: rgba(128, 128, 128, 0.1);
	}

	.me {
		display: grid;
		gap: 3rem;
		font-size: 120%;
		grid-template-columns: auto auto;
		align-items: center;
		justify-items: center;
	}

	h1.title,
	p.subtitle {
		font-weight: 700;
	}

	p.subtitle {
		font-size: 90%;
	}

	article p {
			font-weight: 500;
		}

	img {
		width: 120px;
		height: 120px;
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
		.banner {
			display: block;
		}

		.banner p {
			padding: 1rem 0px;
			text-align: center;
			border-radius: 0.5rem;
			font-weight: 600;
			background-color: rgba(128, 128, 128, 0.1);
		}

		article p {
			font-weight: 600;
		}

		.me {
			gap: 1.5rem;
			grid-template-columns: auto;
		}
	}

	/* schermo grande */
	@media only screen and (min-width: 1400px) {
		img {
			width: 140px;
			height: 140px;
		}
	}
</style>
