<script context="module">
	import Article from "$lib/components/article/Article.svelte";
	import ArticleLink from "$lib/components/article/ArticleLink.svelte";
	import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
	<title>Home · RiccardoBuzzolo</title>
</svelte:head>

<div class="content">
	<Divider />
	<div class="banner">
		<p>Greatings, i'm a full-stack developer based in Italy.</p>
	</div>
	<Divider />
	<div class="me">
		<div class="cell">
			<h2>Riccardo Buzzolo</h2>
			<p>Developer (Web / Mobile / IT)</p>
		</div>
		<div class="cell">
			<img src="/images/me.jpg" alt="author" />
		</div>
	</div>
	<Divider />
	<Article title="Work" link="works">
		<p style="text-align: justify;">
			I actually work as CTO and full-stack web developer at <ArticleLink
				title="Beacharound S.r.l."
				href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
			/> based in San Giovanni in Marignano, Italy. I have also worked at <ArticleLink
				title="Mango Mobile S.r.l."
				href={`${import.meta.env.VITE_APP_MANGO_URL}`}
			/> as mobile developer using React Native, PHP and CentOS Linux server. I have
			built
			<ArticleLink
				title="Drink Tool"
				href={`${import.meta.env.VITE_APP_DRINKTOOL_URL}`}
			/>: a real-time BAC (Blood Alcohol Content) calculator Android application
			using Flutter.
		</p>
	</Article>
	<Divider />
	<Article title="Bio" link="about">
		<div class="row">
			<p class="margin">1994</p>
			<p class="margin">Born in Cattolica (RN), Italy</p>
		</div>
		<div class="row">
			<p class="margin">2011</p>
			<p class="margin">Moved to San Giovanni in Marignano (RN), Italy</p>
		</div>
		<div class="row">
			<p class="margin">2013</p>
			<p class="margin">
				Graduated at <ArticleLink
					title="ITTS O. Belluzzi, RN"
					href={`${import.meta.env.VITE_APP_ITG_URL}`}
				/>
			</p>
		</div>
		<div class="row">
			<p class="margin">2016</p>
			<p class="margin">
				Studied computer sience at <ArticleLink
					title="Unibo Alma Mater Studiorum, Cesena"
					href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
				/>
			</p>
		</div>
		<div class="row">
			<p class="margin">2018</p>
			<p class="margin">
				Worked at <ArticleLink
					title="Teddy S.p.A."
					href={`${import.meta.env.VITE_APP_TEDDY_URL}`}
				/> traveling around the country.
			</p>
		</div>
		<div class="row">
			<p class="margin">2019</p>
			<p class="margin">
				Worked at <ArticleLink
					title="Mango Mobile S.r.l."
					href={`${import.meta.env.VITE_APP_MANGO_URL}`}
				/> as a React Native developer, building a photo/video contest application.
			</p>
		</div>
		<div class="row">
			<p class="margin">2022</p>
			<p>
				Working at <ArticleLink
					title="Beacharound S.r.l."
					href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
				/>, an innovative startup developing a management system for bathing
				establishments and online reservations.
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
