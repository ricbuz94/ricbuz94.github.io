<script lang="ts">
  import feather from "$lib/assets/feather-sprite.svg";

  export let name: string = "circle";
  export let color: string = "";
  export let size: number = 24;
  export let width: number = 2;
  export let isThemed: boolean = false;

  $: themed = isThemed ? "themed" : "";
</script>

<svg
  id="icon"
  class={themed}
  width="{size}px"
  height="{size}px"
  stroke-width={width}
  style="stroke: {color};"
  aria-hidden="true"
  focusable="false"
>
  <use href="{feather}#{name}" />
</svg>

<style>
  #icon {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--textColor);
    transition: stroke var(--transition) opacity var(--transition);
  }

  #icon.themed {
    stroke: var(--accentColor);
  }
</style>
