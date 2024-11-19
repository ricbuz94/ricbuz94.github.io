<script lang="ts">
	let { small = false } = $props();
</script>

<span class="loader" class:small></span>

<style>
	/* Safari */
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.loader {
		width: 4rem;
		height: 4rem;
		margin: 0px;
		border-radius: 50%;
		border: 0.25rem solid var(--borderColor);
		border-top: 0.25rem solid var(--accentColor);
		-webkit-animation: spin 700ms linear infinite; /* Safari */
		animation: spin 700ms linear infinite;
	}

	.small {
		width: 18px;
		height: 18px;
		border: 2px solid var(--borderColor);
		border-top: 2px solid var(--accentColor);
	}
</style>
