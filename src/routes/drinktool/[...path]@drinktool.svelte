<script context="module">
	/** @type {import('./__types/[...path]@drinktool').Load} */
	export function load({ params }) {
		return {
			status: 404,
			error: new Error(`Il percorso \'/drinktool/${params.path}\' non esiste.`),
		};
	}
</script>