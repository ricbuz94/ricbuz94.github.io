<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/Icon.svelte";

  function goToHome() {
    goto(`${base}/`);
  }
</script>

<svelte:head>
  <title>{$page.status} · RiccardoBuzzolo</title>
</svelte:head>

<div class="container">
  <Icon name="file" size={80} width={1} />
  <h2>{$page.error?.message}</h2>
  <button on:click={goToHome}>
    <Icon name="arrow-left" size={20} />
    <p>Home</p>
  </button>
</div>

<style>
  div.container {
    height: 600px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto Mono", monospace;
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  button {
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
    font-size: initial;
    text-decoration: none;
    color: var(--textColor);
    padding: 0.5rem 0.8rem;
    background-color: var(--cardBackgroundColor);
    border: 2px solid var(--gray3);
    border-radius: 0.4rem;
    -webkit-tap-highlight-color: transparent;
    transition: all var(--transition);
  }

  button:hover {
    border-color: var(--textColor);
  }
</style>
