<script lang="ts">
  import feather from "$lib/assets/feather-sprite.svg";

  export let href = "/",
    text = "",
    icon = "";
</script>

<a id="link" {href} target="_blank" rel="noreferrer">
  <svg id="icon">
    <use href="{feather}#{icon}" />
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
