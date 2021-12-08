<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export const load = ({ error, status }) => ({
    props: {
      message: error.message,
      status,
    },
  });
</script>

<script>
  export let message, status;
</script>

<h1>{`${status}: ${message}`}</h1>
