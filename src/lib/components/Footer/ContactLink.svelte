<script lang="ts">
  import feather from "$lib/assets/feather-sprite.svg";

  export let href = "/",
    text = "",
    icon = "";

  $: viewBox = icon === "twitter" ? "0 0 24 24" : undefined;
</script>

<a id="link" {href} target="_blank" rel="noreferrer">
  <svg
    id="icon"
    aria-hidden="true"
    {viewBox}
    class={icon === "twitter" ? "fill" : ""}
  >
    {#if icon === "twitter"}
      <g>
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </g>
    {:else}
      <use href="{feather}#{icon}" />
    {/if}
  </svg>
  <p id="text">{text}</p>
</a>

<style>
  #link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
  }

  #link:hover #icon {
    stroke: var(--accentColor);
  }

  #link:hover #icon.fill {
    stroke: none;
    fill: var(--accentColor);
  }

  #link:hover #text {
    color: var(--accentColor);
  }

  #icon {
    width: 22px;
    height: 22px;
    stroke: var(--textColor);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transition: stroke var(--transition);
  }

  #icon.fill {
    stroke: none;
    fill: var(--textColor);
  }

  #text {
    display: none;
    margin: 0px;
    transition: color var(--transition);
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    #link {
      width: 100%;
      text-align: center;
      justify-content: flex-start;
    }

    #icon {
      width: 26px;
      height: 26px;
      margin: 0px 1.5rem;
    }

    #text {
      display: inline;
      line-height: 2;
      margin-left: 0.5rem;
      font-size: 1rem;
      vertical-align: top;
      color: var(--textColor);
    }
  }

  /* schermo grande */
  @media only screen and (min-width: 1400px) {
    #link {
      padding: 0px 0.5rem;
    }

    #text {
      display: inline;
      line-height: 2;
      margin-left: 0.5rem;
      font-size: 1rem;
      vertical-align: top;
      color: var(--textColor);
    }
  }
</style>
