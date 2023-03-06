<script lang="ts">
  import { browser } from "$app/environment";
  import { fly } from "svelte/transition";
  import Icon from "./Icon.svelte";

  function scrollTop() {
    if (browser) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
</script>

<button
  id="to-top"
  in:fly={{ x: 30, y: 15, duration: 300, delay: 0 }}
  out:fly={{ x: 30, y: 15, duration: 180, delay: 0 }}
  on:click|preventDefault={scrollTop}
>
  <Icon name="arrow-up" size={22} />
</button>

<style>
  #to-top {
    border: none;

    background-color: var(--cardBackgroundColor);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: var(--tocShadow);
    position: fixed;
    bottom: 2.5rem;
    right: 1.5rem;
    z-index: 1000;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: all var(--transition);
  }

  #to-top:active {
    box-shadow: var(--activeInputShadow) !important;
  }
</style>
