<script lang="ts">
  import feather from "$lib/assets/feather-sprite.svg";

  let {
    name = "circle",
    color = "",
    size = 24,
    width = 2,
    isThemed = false,
  } = $props();
</script>

<svg
  id="icon"
  class:themed={isThemed}
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
