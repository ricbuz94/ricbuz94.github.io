<script lang="ts">
    import {firstCount, secondCount} from "$lib/helpers/counts";
    import {Info, SquareArrowOutUpRight} from "lucide-svelte";
    import Icon from "$lib/components/Icon.svelte";
    import type {FirstCountData, SecondCountData, T_Drink} from "$lib/helpers/interfaces";

    async function firstCountSubmit(evt: SubmitEvent): Promise<void> {
        evt.preventDefault();
        const form = evt.currentTarget as HTMLFormElement;

        if (!form.reportValidity()) {
            return;
        }

        const data: FirstCountData = <FirstCountData>Object.fromEntries(
                new FormData(form).entries().map(([k, v]) => {
                    const nv = Number(v);
                    return !isNaN(nv) ? [k, nv] : [k, v];
                })
            )
        ;

        const exists = document.querySelector('#firstForm .result');
        const submitButton = document.querySelector('#firstForm .submit-btn');

        let resNode = document.createElement('span');
        resNode.classList.add('result');
        resNode.innerHTML = firstCount(data);

        clickSubmit(evt);
        if (!!exists?.isConnected) {
            exists?.replaceWith(resNode);
        } else {
            submitButton?.appendChild(resNode);
        }
    }

    async function secondCountSubmit(evt: SubmitEvent): Promise<void> {
        evt.preventDefault();
        const firstForm = document.getElementById('firstForm') as HTMLFormElement;
        const form = evt.currentTarget as HTMLFormElement;

        if (!firstForm.reportValidity() || !form.reportValidity()) {
            return;
        }

        const firstFormData = new FormData(firstForm);
        const formData = new FormData(form);
        formData.set('sex', firstFormData.get('sex') ?? '');
        formData.set('age', firstFormData.get('age') ?? '');
        formData.set('height', firstFormData.get('height') ?? '');
        formData.set('weight', firstFormData.get('weight') ?? '');

        const secondFormData: any = <SecondCountData>Object.fromEntries(
            formData.entries()
                .filter(([k, _]) => !k.includes('drink-'))
                .map(([k, v]) => {
                    const nv = Number(v);
                    return !isNaN(nv) ? [k, nv] : [k, v];
                })
        );

        const grade1 = formData.get('drink-0-grade');
        const volume1 = formData.get('drink-0-volume');
        const grade2 = formData.get('drink-1-grade');
        const volume2 = formData.get('drink-1-volume');
        const grade3 = formData.get('drink-2-grade');
        const volume3 = formData.get('drink-2-volume');

        let drinks: T_Drink[] = [{
            grade: Number(grade1),
            volume: Number(volume1)
        }];

        if (!!grade2 != !!volume2) {
            return alert('I drink devono avere sia volume che grado impostati!')
        }
        drinks.push({
            grade: Number(grade2),
            volume: Number(volume2)
        });

        if (!!grade3 != !!volume3) {
            return alert('I drink devono avere sia volume che grado impostati!')
        }
        drinks.push({
            grade: Number(grade2),
            volume: Number(volume2)
        });

        const data: SecondCountData = {
            ...secondFormData,
            drinks: drinks,
        };

        if (
            (data.drinks?.length === 2 && (typeof data.drinks[1]?.grade === 'undefined' || typeof data.drinks[1]?.volume === 'undefined')) ||
            (data.drinks?.length === 3 && (typeof data.drinks[2]?.grade === 'undefined' || typeof data.drinks[2]?.volume === 'undefined'))
        ) {
            return alert('⚠️ Inserire entrambi "volume" e "grado" nelle bevande.');
        }

        const exists = document.querySelector('#secondForm .result');
        const submitButton = document.querySelector('#secondForm .submit-btn');

        let resNode = document.createElement('span');
        resNode.classList.add('result');
        resNode.innerHTML = secondCount(data);

        clickSubmit(evt);
        if (!!exists?.isConnected) {
            exists?.replaceWith(resNode);
        } else {
            submitButton?.appendChild(resNode);
        }
    }

    function clickSubmit(evt: SubmitEvent) {
        evt.preventDefault();
        evt.submitter?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
            behavior: 'smooth'
        });
    }

    function clickInfo(evt: any) {
        evt.preventDefault();
        document.querySelector('#info')?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
            behavior: 'smooth'
        });
    }
</script>

<svelte:head>
    <title>How Much Can I Drink?</title>
</svelte:head>

<div class="container">
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>

    <div class="container-scroll">
        <div class="card-container">
            <div class="glass-card">
                <div class="header">
                    <h1>How Much Can I Drink?</h1>
                </div>

                <div class="form-grid">
                    <form id="firstForm" class="section" onsubmit={firstCountSubmit}>
                        <h2 class="section-title">
                            Quanto posso bere?<br>
                            <small>Calcolo della quantità di bevanda alcolica che è possibile ingerire prima
                                di superare il limite di legge.
                                <a href="#info"
                                   class="info-link"
                                   onclick={clickInfo}>
                                    <Icon component={Info} size={16} color="var(--accent)"/>
                                </a>
                            </small>
                        </h2>

                        <div class="section-content">
                            <div class="input-group">
                                <label for="sex">Sesso</label>
                                <span class="input-group-inline">
                                <label>
                                    <input type="radio" name="sex" value="0" required>
                                    Maschio
                                </label>
                                <label>
                                    <input type="radio" name="sex" value="1" required>
                                    Femmina
                                </label>
                            </span>
                            </div>

                            <div class="input-row">
                                <div class="input-group">
                                    <label for="age">Età</label>
                                    <input type="number" name="age" placeholder="25" min="18" max="99" required>
                                </div>
                                <div class="input-group">
                                    <label for="height">Altezza(cm)</label>
                                    <input type="number" name="height" placeholder="180" min="100" max="300" required>
                                </div>
                            </div>

                            <div class="input-group">
                                <label for="weight">Peso(kg)</label>
                                <input type="number" name="weight" placeholder="80" min="40" max="200" required>
                            </div>
                            <div class="input-group">
                                <label for="grade">Grado alcolico della bevanda(%)</label>
                                <input type="number" name="alcoholIndex" placeholder="3" min="0.1" max="90" step="0.1"
                                       required>
                            </div>
                        </div>

                        <button id="firstFormSubmit" type="submit" class="submit-btn">
                            <span>✨ CALCOLA</span>

                        </button>
                    </form>

                    <form id="secondForm" class="section" onsubmit={secondCountSubmit}>
                        <h2 class="section-title">
                            Tra quanto sono OK?<br>
                            <small>Calcolo del tempo utile allo smaltimento dell'alcol fino al raggiungimento del limite
                                di legge.
                                <a href="#info"
                                   class="info-link"
                                   onclick={clickInfo}>
                                    <Icon component={Info} size={16} color="var(--accent)"/>
                                </a>
                            </small>
                        </h2>

                        <div class="section-content">
                            <div class="input-group">
                                <label for="driver">Guidatore</label>
                                <select name="driver" required>
                                    <option value="0">🐣 Neopatentato</option>
                                    <option value="1">🏎️️ Ordinario</option>
                                </select>
                            </div>

                            <div class="input-group">
                                <label for="stomach">Stomaco</label>
                                <select name="stomach" required>
                                    <option value="0">🪫️ Vuoto</option>
                                    <option value="1">🔋 Pieno</option>
                                </select>
                            </div>

                            <p class="drink-header colored">Bevanda 1</p>
                            <div class="input-row">
                                <div class="input-group">
                                    <label for="drink-0-volume">Volume(cl)</label>
                                    <input type="number" name="drink-0-volume" placeholder="33" min="1" max="400"
                                           required>
                                </div>
                                <div class="input-group">
                                    <label for="drink-0-grade">Grado(% vol)</label>
                                    <input type="number" name="drink-0-grade" placeholder="3" min="0.1" max="90"
                                           step="0.1" required>
                                </div>
                            </div>

                            <p class="drink-header colored">Bevanda 2 <span class="grayed">(facoltativo)</span></p>
                            <div class="input-row">
                                <div class="input-group">
                                    <label for="drink-1-volume">Volume(cl)</label>
                                    <input type="number" name="drink-1-volume" placeholder="33" min="1" max="400">
                                </div>
                                <div class="input-group">
                                    <label for="drink-1-grade">Grado(% vol)</label>
                                    <input type="number" name="drink-1-grade" placeholder="3" min="0.1" max="90"
                                           step="0.1">
                                </div>
                            </div>

                            <p class="drink-header colored">Bevanda 3 <span class="grayed">(facoltativo)</span></p>
                            <div class="input-row">
                                <div class="input-group">
                                    <label for="drink-2-volume">Volume(cl)</label>
                                    <input type="number" name="drink-2-volume" placeholder="33" min="1" max="400">
                                </div>
                                <div class="input-group">
                                    <label for="drink-2-grade">Grado(% vol)</label>
                                    <input type="number" name="drink-2-grade" placeholder="3" min="0.1" max="90"
                                           step="0.1">
                                </div>
                            </div>
                        </div>

                        <button id="secondFormSubmit" type="submit" class="submit-btn">
                            <span>✨ CALCOLA</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="glass-card text-center">
                <p><small id="info"><span class="info-link"><sup>*</sup></span>Tutti i risultati tengono conto di un
                    margine di sicurezza del 25%.</small></p>

                <a href={import.meta.env.VITE_APP_DRINKTOOL_URL} class="colored-link" target="_blank">Scarica l'app!</a>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
  :root {
    --transition: 150ms cubic-bezier(0.2, 0, 0.2, 1);
  }

  :root {
    --background: linear-gradient(135deg, #0a061f 0%, #1a0f38 45%, #2e1b5e 100%);
    --glass: rgba(255, 255, 255, 0.09);
    --glass-border: rgba(255, 255, 255, 0.22);
    --glass-input-border: 1.5px solid rgba(255, 255, 255, 0.18);
    --glass-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6);
    --accent: #22d3ee;
    --accent2: #f472b6;
    --accent3: #a78bfa;
    --text: #f8fafc;
    --text-light: #cbd5e1;
    --inverse: #0f0f0f;
  }

  :global(html), :global(body) {
    overscroll-behavior: none;
  }

  option {
    color: var(--text) !important;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    background: var(--background);
    font-family: "Poppins", sans-serif;
    font-size: var(--fontSize, 16px);
    user-select: none;
    position: relative;
    overflow: hidden;
    height: 100vh;
  }

  .orb {
    pointer-events: none;
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.18;
    z-index: 0;

    &.orb1 {
      width: 620px;
      height: 620px;
      background: var(--accent);
      top: -20%;
      left: -15%;
    }

    &.orb2 {
      width: 520px;
      height: 520px;
      background: var(--accent2);
      bottom: -25%;
      right: -12%;
    }
  }

  .text-center {
    text-align: center;
  }

  .container-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: transparent;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .card-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1020px;
    padding: 2rem 1.5rem;

    .glass-card {
      background: var(--glass);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-radius: 32px;
      border: 2px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      padding: 52px 60px;
      overflow: hidden;
    }
  }

  a {
    color: var(--accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;

    h1 {
      font-size: 2.75rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .colored {
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .grayed {
    opacity: 0.6;
    background: rgba(125, 125, 125, 0.8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .section {
    display: flex;
    flex-direction: column;

    .section-title {
      font-size: 1.45rem;
      font-weight: 600;
      margin-bottom: 3rem;
      position: relative;
      padding-bottom: 14px;
      color: var(--text-light);

      & > small {
        display: inline-block;
        font-size: 0.6em;
        font-weight: initial;
        line-height: 1.4;
      }
    }

    .section-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 52px;
      height: 4px;
      background: linear-gradient(to right, var(--accent), var(--accent2));
      border-radius: 9999px;
    }

    .section-content {
      margin-bottom: auto;
    }

    .input-group {
      margin-bottom: 1.75rem;
      position: relative;

      label {
        display: block;
        font-size: 0.94rem;
        font-weight: 500;
        margin-bottom: 8px;
        color: var(--text-light);
      }
    }

    .input-group input,
    .input-group select {
      width: 100%;
      padding: 17px 22px;
      background: rgba(255, 255, 255, 0.08);
      border: var(--glass-input-border);
      border-radius: 18px;
      color: var(--text);
      font-size: 1.05rem;
      transition: all var(--transition);
      transition-property: all, width, height;
      transition-duration: 0.3s, 0s, 0s;
    }

    .input-group input:focus,
    .input-group select:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 5px rgba(34, 211, 238, 0.18);
      background: rgba(255, 255, 255, 0.13);
      transform: translateY(-2px);
    }

    input[type="radio"] {
      width: 20px !important;
      height: 20px !important;
    }

    .input-group-inline {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      padding: 17px 0;

      label {
        margin: 0;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;

        & > input {
          margin: 0;
        }
      }
    }

    .input-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .submit-btn {
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.5rem;
      width: 100%;
      padding-left: 1rem;
      font-size: 1.18rem;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(90deg, var(--accent), #a78bfa);
      border: none;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: 0 5px 25px -5px rgba(34, 211, 238, 0.55);
      transition: all var(--transition);
      overflow: hidden;

      &:hover {
        transform: scale(1.02);
        box-shadow: 0 15px 30px -8px rgba(34, 211, 238, 0.45);
      }

      span:first-child {
        z-index: 10;
      }

      :global(.result) {
        color: var(--text);
        background-color: var(--inverse);
        margin-left: auto;
        padding: 14px 1.5rem;
        border-radius: 1rem;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        transition: all var(--transition);
        animation: slideInBounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        transform-origin: left;
        z-index: 5;
      }
    }
  }

  .drink-header {
    margin-bottom: 1rem;
  }

  #info {
    color: var(--accent);
  }

  .info-link {
    color: var(--accent);
    text-decoration: none;
    vertical-align: sub;
    margin: 0 0.25rem;

    &:hover {
      text-decoration: revert;
    }
  }

  .colored-link {
    display: inline-block;
    text-decoration: none;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    padding: 1rem 1.5rem;
    font-size: 1.18rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(90deg, var(--accent), #a78bfa);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 5px 25px -5px rgba(34, 211, 238, 0.55);
    transition: all var(--transition);

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 15px 30px -8px rgba(34, 211, 238, 0.45);
    }
  }

  @media (max-width: 768px) {
    :global(html), :global(body) {
      overscroll-behavior: initial;
    }

    .card-container {
      padding: 1.5rem 1rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
      gap: 4rem;
    }

    .glass-card {
      padding: 2rem 1.5rem !important;
    }

    .submit-btn {
      padding: 0.5rem 0.5rem 0.5rem 0.75rem;
      gap: 1rem;
      margin-top: 0 !important;
      max-height: initial;
      font-size: 1.1em !important;
      -webkit-tap-highlight-color: transparent;

      :global(.result) {
        border-radius: 0.75rem !important;
        padding: 14px 0.75rem !important;
      }
    }

    .header h1 {
      font-size: 2rem;
      line-height: 1.2;
    }

    .section-content {
      margin-bottom: revert;
    }
  }

  @keyframes slideInBounce {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>