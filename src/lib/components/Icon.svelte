<script lang="ts">
  import feather from "$lib/assets/feather-sprite.svg";

  export let name: string = "circle";
  export let custom = false;
  export let className = "icon";
</script>

<svg class={className} {...$$props}>
  {#if custom}
    <slot />
  {:else}
    <use href="{feather}#{name}" />
  {/if}
</svg>
