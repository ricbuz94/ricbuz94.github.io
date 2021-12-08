<script>
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  const goToHome = () => goto(`${base}/`);
</script>

<svelte:head>
  <title>Not Found · RiccardoBuzzolo</title>
</svelte:head>

<div />
<div class="container">
  <svg class="icon">
    <use href="/feather-sprite.svg#file" />
  </svg>
  <h2>Pagina non trovata</h2>
  <button on:click={goToHome}>
    <svg class="btn-icon">
      <use href="/feather-sprite.svg#arrow-left" />
    </svg>Home
  </button>
</div>
<div />

<style>
  div.container {
    display: flex;
    flex-direction: column;
    font-family: "Roboto Mono", monospace;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    width: 80px;
    height: 80px;
    stroke: var(--textColor);
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    padding-top: 3px;
    transition: stroke var(--transition);
  }

  .icon:hover {
    stroke: var(--accentColor);
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
    text-decoration: none;
    color: var(--textColor);
    padding: 0.5rem 0.8rem;
    background-color: var(--cardBackgroundColor);
    border: 1px solid var(--gray3);
    border-radius: 0.4rem;
    -webkit-tap-highlight-color: transparent;
    transition: border-color var(--transition);
  }

  button:hover {
    border-color: var(--textColor);
  }

  .btn-icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    stroke: var(--textColor);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>
