<script lang="ts">
  import Icon from "./Icon.svelte";
  import Loader from "./Loader.svelte";

  export let icon: string = "";
  export let isLoading = false;
  export let text: string = "TXT";
  export let onclick = (e: any) => {};
</script>

<button id="button" on:click|preventDefault={onclick}>
  {#if isLoading}
    <Loader small />
  {:else if !!icon}
    <Icon name={icon} size={18} />
  {:else}
    <p id="text">{text}</p>
  {/if}
</button>

<style>
  #button {
    background-color: transparent !important;
    width: 40px;
    height: 40px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--backgroundColor);
    border: 1px solid var(--borderColor);
    border-radius: var(--borderRadius);
    margin: 0px;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: all var(--transition);
  }

  #button:active {
    box-shadow: var(--activeInputShadow) !important;
  }

  #text {
    font-family: "Nunito", monospace;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 14px;
    user-select: none;
    padding-top: 1px;
    color: var(--textColor);
    transition: color var(--transition);
  }
</style>
