<script lang="ts">
  import Icon from "./Icon.svelte";

  export let label = "";
  export let isOpen = false;
  export let onclick = (e: any) => {};

  $: className = isOpen ? "icon x active" : "icon x";
</script>

<button class="btn menu" title={label} on:click|preventDefault={onclick}>
  <Icon
    custom
    {className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="4" y1="16" x2="20" y2="16" class="middle-down" />
    <line x1="4" y1="8" x2="20" y2="8" class="middle-up" />
  </Icon>
</button>

<style lang="scss">
  .middle-up,
  .middle-down {
    transition: transform 0.18s;
    transform-origin: 8px 12px;
  }
</style>
