<div class="content">
	<img src="/me.jpg" alt="author" />
	<div class="card-wide">
		<h3>Chi sono</h3>
		<p>
			Nato a Cattolica (RN) il 13/12/1994, nel 2013 ho conseguito il diploma
			presso l'allora Istituto Tecnico per Geometri: O. Belluzzi di Rimini (oggi <span
				><a
					href={`${import.meta.env.VITE_APP_ITG_URL}`}
					target="_blank"
					rel="nonreferrer">Istituto Tecnico Tecnologico Statale</a
				></span
			>). Ho studiato presso l'universita di Cesena: Alma Mater, al corso di
			<span
				><a
					href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
					target="_blank"
					rel="nonreferrer">Ingegneria e scienze informatiche</a
				></span
			>. Lavoro attualmente, come tecnico informatico, per una start-up
			innovativa che si occupa di gestionale per le spiagge e prenotazioni
			online degli stabilimenti:
			<span
				><a
					href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
					target="_blank"
					rel="nonreferrer">Beacharound s.r.l.</a
				></span
			>
		</p>
	</div>
</div>

<style>
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
		padding-left: 10%;
		padding-right: 10%;
		font-size: 95%;
		transition: color var(--transition);
	}

	img {
		width: 200px;
		height: 200px;
		padding: 3px;
		border-radius: 50%;
		background-color: var(--subTextColor);
		transition: background-color var(--transition);
		box-shadow: var(--tocShadow);
	}

	img:hover {
		background-color: var(--accentColor);
	}

	h3 {
		margin-bottom: 1rem;
	}

	a {
		color: var(--accentColor);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 800px) {
		.content {
			display: grid !important;
			gap: 2rem !important;
			grid-template-columns: auto !important;
			grid-template-rows: auto auto !important;
		}

		.card-wide {
			grid-column: auto !important;
		}

		img {
			width: 150px;
			height: 150px;
		}
	}
</style>
