<script context="module" lang="ts">
  export function load({ error, status }: any) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";

  export let title: string;
  const goToHome = () => goto(`${base}/drinktool/privacy-policy`);
</script>

<svelte:head>
  <title>Not Found · RiccardoBuzzolo</title>
</svelte:head>

<div class="container">
  <svg class="icon">
    <use href="/feather-sprite.svg#file" />
  </svg>
  <h2>{title}</h2>
  <button on:click={goToHome}>
    <svg class="btn-icon">
      <use href="/feather-sprite.svg#arrow-left" />
    </svg>BACK
  </button>
</div>

<style>
  ::selection {
    color: black;
    background-color: lightcoral;
  }

  div.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Roboto Mono", monospace;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 80px;
    height: 80px;
    stroke: black;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    padding-top: 3px;
    transition: stroke var(--transition);
  }

  .icon:hover {
    stroke: lightcoral;
  }

  h2 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
    font-family: "Roboto", monospace;
    font-weight: 600;
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    padding: 0.5rem 0.8rem;
    background-color: var(--cardBackgroundColor);
    border: 2px solid var(--gray3);
    border-radius: 0.4rem;
    -webkit-tap-highlight-color: transparent;
    transition: border-color var(--transition);
  }

  button:hover {
    border-color: black;
  }

  .btn-icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    stroke: black;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>
