<script lang="ts">
  import { browser } from "$app/environment";
  import { fly } from "svelte/transition";
  import Icon from "./Icon.svelte";

  let isHover: boolean = false;

  function onHover() {
    isHover = !isHover;
  }

  function scrollTop() {
    if (browser) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
</script>

<button
  id="to-top"
  on:mouseenter={onHover}
  on:mouseleave={onHover}
  on:mousedown|preventDefault={scrollTop}
  on:touchstart|preventDefault={scrollTop}
  in:fly={{ x: 0, y: 60, duration: 300, delay: 0 }}
  out:fly={{ x: 0, y: 60, duration: 300, delay: 0 }}
>
  <Icon name="arrow-up" size={20} isThemed={isHover} />
</button>

<style>
  #to-top {
    border: var(--navBorder);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--cardShadow);
    background-color: var(--navBackgroundColor);
    -webkit-backdrop-filter: saturate(180%) blur(15px);
    backdrop-filter: saturate(180%) blur(15px);
    -webkit-tap-highlight-color: transparent;
    transition: all var(--transition);
  }

  #to-top:active {
    box-shadow: var(--activeInputShadow) !important;
  }

  @media only screen and (max-width: 720px) {
    #to-top {
      bottom: 1.5rem;
      right: 1rem;
    }
  }
</style>
