<script lang="ts">
  import ContactLink from "./ContactLink.svelte";
  import makeItRain from "$lib/utils/confetti";

  const year: number = new Date().getFullYear();
</script>

<footer>
  <div class="contacts-container">
    <ContactLink
      href={import.meta.env.VITE_APP_MAILTO}
      icon="mail"
      text="riccardo.buzzolo@gmail.com"
    />
    <ContactLink
      href={import.meta.env.VITE_APP_INSTAGRAM_PROFILE_URL}
      icon="instagram"
      text="@riccardo_buzzolo"
    />
    <ContactLink
      href={import.meta.env.VITE_APP_TWITTER_PROFILE_URL}
      icon="twitter"
      text="@riccardobuzzolo"
    />
    <ContactLink
      href={import.meta.env.VITE_APP_GITHUB_PROFILE_URL}
      icon="github"
      text="@ricbuz94"
    />
  </div>
  <p class="bottom-text">
    Made with
    <a
      class="footer-link"
      href={`${import.meta.env.VITE_APP_SVELTEKIT_URL}`}
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >
    and
    <a
      class="footer-link"
      href={`${import.meta.env.VITE_APP_GITHUB_PAGES_URL}`}
      target="_blank"
      rel="noreferrer">GitHub Pages</a
    >
  </p>
  <p class="sub-text bottom-text" on:mousedown={makeItRain}>
    © {year} Riccardo Buzzolo. All Rights Reserved.
  </p>
</footer>

<style>
  footer {
    width: 650px;
    font-size: 80%;
    padding-top: 3rem;
    padding-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;
    transition: opacity 300ms ease;
  }

  .contacts-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 5rem;
  }

  .footer-link {
    color: var(--accentColor);
    font-weight: bold;
    text-decoration: none;
    transition: color var(--transition);
  }

  .footer-link:hover {
    color: var(--accentColorHover);
  }

  p {
    line-height: 1.2;
    text-align: center;
  }

  p.sub-text {
    cursor: pointer;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    color: var(--subTextColor);
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 1rem;
      padding-bottom: 5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    footer a {
      width: 100%;
      text-align: center;
    }

    .contacts-container {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  /* schermo grande */
  @media only screen and (min-width: 1400px) {
    footer {
      width: 850px;
    }

    footer a p {
      display: inline;
      line-height: 2;
      padding-left: 5px;
      font-size: 1rem;
      vertical-align: top;
      color: var(--textColor);
    }

    footer a:hover p {
      color: var(--accentColor);
    }
  }
</style>
