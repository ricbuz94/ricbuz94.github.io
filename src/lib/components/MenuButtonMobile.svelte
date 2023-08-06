<script lang="ts">
  export let label = "";
  export let isOpen = false;
  export let onclick = (e: any) => {};

  $: className = isOpen ? "active" : "";
</script>

<button id="button" title={label} on:click|preventDefault={onclick}>
  <svg
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    width="26px"
    height="26px"
    class={className}
  >
    <line x1="2" y1="16" x2="22" y2="16" id="middle-down" />
    <line x1="2" y1="8" x2="22" y2="8" id="middle-up" />
  </svg>
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
    border-radius: var(--borderRadius);
    margin: 0px;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: all var(--transition);
  }

  #icon {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--textColor);
    stroke-width: 2.5;
    transition: var(--transition);
    -webkit-transition: var(--transition);
  }

  #middle-up,
  #middle-down {
    transition: transform 0.2s;
    transform-origin: 8px 12px;
  }
  .active #middle-up {
    transform: rotate(45deg) translate(-1px, 1px);
  }
  .active #middle-down {
    transform: rotate(-45deg) translate(-1px, -1px);
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    #button {
      border: none;
    }
  }
</style>
