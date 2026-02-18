<script lang="ts">
    import "$lib/helpers/counts";
</script>

<div class="container">
    <h1>How Much Can I Drink?</h1>
    <div class="card">
        <h3>Calcola il tasso alcolemico</h3>
        <form>

        </form>
    </div>
    <br>
    <div class="card">
        <h3>Calcola la capacità rimanente</h3>
    </div>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow-y: auto;
        color: white;
        background-color: #0f0f0f;
        font-family: "Roboto Mono", monospace;
        font-size: var(--fontSize, 16px);
    }

    .card {
        width: 70%;
        --white: hsl(0, 0%, 100%);
        --black: hsl(240, 15%, 9%);
        --paragraph: hsl(0, 0%, 83%);
        --line: hsl(240, 9%, 17%);
        --primary: hsl(266, 92%, 58%);

        position: relative;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem;
        background-color: hsla(240, 15%, 9%, 1);
        background-image: radial-gradient(
                at 88% 40%,
                hsla(240, 15%, 9%, 1) 0px,
                transparent 85%
        ),
        radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
        radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
        radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
        radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
        radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

        border-radius: 1rem;
        border: 1px solid hsla(240, 15%, 9%, 1);
        box-shadow: 0 -16px 24px 0 rgba(255, 255, 255, 0.25) inset;
    }
</style>