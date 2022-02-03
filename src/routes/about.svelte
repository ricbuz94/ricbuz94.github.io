<script context="module">
	import Article from "$lib/components/article/Article.svelte";
	import ArticleLink from "$lib/components/article/ArticleLink.svelte";
	import Divider from "$lib/components/Divider.svelte";
</script>

<svelte:head>
	<meta
		name="description"
		content="About page for Riccardo Buzzolo. Know something about me."
	/>
	<title>About · RiccardoBuzzolo</title>
</svelte:head>

<div class="container">
	<Divider />
	<div class="content">
		<img src="/images/me.jpg" alt="Riccardo Buzzolo" />
		<div class="card-wide">
			<Article title="About me">
				<p>
					Born in Cattolica (RN) on 12/13/1994, in 2013 I graduated from the
					then Technical Institute for Surveyors: Odone Belluzzi of Rimini
					(today <ArticleLink
						title="State
				Technical Technological Institute"
						href={`${import.meta.env.VITE_APP_ITG_URL}`}
					/>). I studied at the University of Cesena, Alma Mater Studiorum, in
					the course of <ArticleLink
						title="Engineering and Computer Science"
						href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
					/>. I currently work as a CTO and full-stack web developer for an
					innovative startup that deals with beach management and online booking
					of establishments:
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
			<Article title="About my work">
				<p>
					As mentioned above, i currently work for an innovative startup that
					sells a management system for bath establishments and online bookings:
					<ArticleLink
						title="Beacharound S.r.l."
						href={`${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}`}
					/> During my winter working days I take care of testing new management
					software functions, reporting bugs to developers (sometimes developing
					some functions myself) and providing technical assistance to business customers.
					During the summer, the company concentrates its resources on the management
					of online bookings (business side and customer side). In that case, my
					work also aligns with these needs and I spend my time providing technical
					assistance by reporting bugs to the developers.
				</p>
			</Article>
		</div>
		<img
			src="/images/beacharound_business_info.png"
			alt="Beacharound Business"
		/>
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
