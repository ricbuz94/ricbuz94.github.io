<script lang="ts">
  import isMobile from "$lib/helpers/isMobile";
  import NavLink from "./NavLink.svelte";

  export let isOpen = false;
  export let navList:
    | Array<{
        title: string;
        icon: string;
        href: string;
      }>
    | [] = [];
</script>

<ul class="menu" class:mobile={isMobile()} class:active={isOpen}>
  {#each navList as navItem (navItem.title)}
    <li>
      <NavLink href={navItem.href} mobileIcon={navItem.icon}>
        {navItem.title}
      </NavLink>
    </li>
  {/each}
</ul>

<style lang="scss">
  .menu {
    @apply p-0;

    li {
      @apply inline;
    }

    &.mobile {
      @apply px-0 py-2 w-44 absolute top-12 right-2 flex flex-col origin-top-right scale-90 bg-cardBackground dark:bg-cardBackgroundDark backdrop:saturate-150 backdrop-blur-sm rounded-lg shadow-md border border-lightHoverlay dark:border-darkHoverlay opacity-0 list-none transition-all invisible z-50;

      li {
        @apply contents;
      }

      &.active {
        @apply opacity-100 visible scale-100;
      }
    }
  }
</style>
