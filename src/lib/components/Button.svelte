<script lang="ts">
  import Icon from "./Icon.svelte";
  import Loader from "./Loader.svelte";

  export let label = "";
  export let icon: string = "";
  export let isLoading = false;
  export let text: string = "TXT";
  export let onclick: (event: Event) => void;
</script>

<button class="btn menu" title={label} on:click|preventDefault={onclick}>
  {#if isLoading}
    <Loader small />
  {:else if !!icon}
    <Icon name={icon} className="icon sm" />
  {:else}
    <p>{text}</p>
  {/if}
</button>

<style>
  /* schermo piccolo */
  /* @media only screen and (max-width: 720px) {
    #button {
      transform: scale(1.4);
    }

    #button:hover {
      background-color: transparent;
    }
  } */
</style>
