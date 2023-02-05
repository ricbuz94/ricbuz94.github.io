<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Icon from "$lib/components/Icon.svelte";
  import { _ } from "svelte-i18n";

  function goToHome() {
    goto(`${base}/`);
  }
</script>

<svelte:head>
  <title>404 · RiccardoBuzzolo</title>
</svelte:head>

<div id="container">
  <Icon name="file" size={80} width={1} />
  <h2 id="title">404 ~ {$_("generic.notFound")}</h2>
  <button id="back-button" on:click={goToHome}>
    <Icon name="arrow-left" size={14} />
    <p>{$_("generic.back")}</p>
  </button>
</div>

<style>
  #container {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #title {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
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
    font-weight: 700;
    font-size: 0.75rem;
    padding: 0.5rem 0.8rem;
    border: none;
    border: 2px solid #6c7983;
    border-radius: 10px;
    user-select: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  #back-button:hover {
    border-color: var(--textColor);
  }

  #back-button p {
    margin-left: 5px;
    color: var(--textColor);
    text-transform: uppercase;
  }
</style>
