<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/Icon.svelte";

  function goToHome() {
    goto(`${base}/drinktool/privacy-policy`);
  }
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div id="container">
  {#if $page.status !== 404}
    <Icon name="file" size={80} width={1} color="#000" />
  {/if}
  <h2 id="title">{$page.status} - {$page.error?.message ?? "OK"}</h2>
  <button id="back-button" on:click={goToHome}>
    <Icon name="arrow-left" size={14} color="#000" />
    <p>BACK</p>
  </button>
</div>

<style>
  ::selection {
    color: black;
    background-color: lightcoral;
  }

  #container {
    min-width: 70vw;
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    transform: translateX(-50%) translateY(-60%);
    font-family: "Roboto Mono", monospace;
  }

  #title {
    text-align: center;
    margin: 0px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  #back-button {
    display: flex;
    font-family: inherit;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 600;
    padding: 0.5rem 0.8rem;
    border: none;
    border: 2px solid #6c7983;
    border-radius: 10px;
    user-select: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    transition: border-color var(--transition);
  }

  #back-button:hover {
    border-color: black;
  }

  #back-button p {
    margin-left: 5px;
    text-transform: uppercase;
  }
</style>
