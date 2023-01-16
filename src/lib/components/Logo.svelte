<a href={"/"}>
	<svg class="icon accent">
		<use href="/feather-sprite.svg#box" />
	</svg>
	<h3 class="short">RB</h3>
	<h3 class="long">RiccardoBuzzolo</h3>
</a>

<style>
	a {
		display: flex;
		align-items: center;
		padding: 5px;
		margin-right: auto;
		color: var(--textColor);
	}

	h3 {
		padding-left: 3px;
		font-size: 20px;
		font-weight: 700;
		user-select: none;
		transition: color var(--transition);
	}

	h3.long {
		display: block;
	}

	h3.short {
		display: none;
	}

	.icon {
		width: 24px;
		height: 24px;
		stroke: var(--accentColor);
		stroke-width: 2.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition);
	}

	/* schermo piccolo */
	@media only screen and (max-width: 400px) {
		h3.long {
			display: none;
		}

		h3.short {
			display: block;
		}

		.icon {
			width: 30px;
			height: 30px;
		}
	}
</style>
