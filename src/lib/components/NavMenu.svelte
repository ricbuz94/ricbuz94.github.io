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

<ul class={isMobile() ? "menu-mobile" : "menu"} class:active={isOpen}>
  {#each navList as navItem (navItem.title)}
    <li>
      <NavLink href={navItem.href} mobileIcon={navItem.icon}>
        {navItem.title}
      </NavLink>
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0px;
  }

  .menu li {
    display: inline;
  }

  .menu-mobile.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  .menu-mobile {
    height: max-content;
    width: 180px;
    -webkit-touch-callout: none;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    background-color: var(--menuBackgroundColor);
    border-radius: var(--borderRadius);
    box-shadow: var(--cardShadow);
    border: var(--navBorder);
    opacity: 0;
    margin: 0px;
    padding: 0.5rem 0rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    transform-origin: top right;
    transform: scale(0.8);
    transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      background-color var(--transition);
    visibility: hidden;
    z-index: 1000;
  }

  .menu-mobile li {
    display: contents;
  }
</style>
