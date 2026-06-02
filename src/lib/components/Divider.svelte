<script lang="ts">
    let {height = 0, text = null}: { height?: Number, text?: stirng } = $props();
</script>

{#if !!text}
    <div class="marker">
        <span>{text}</span>
    </div>
{:else }
    <hr style:height="{height}rem"/>
{/if}

<style>
    hr {
        width: 100%;
        margin-block-start: 2rem;
        margin-block-end: 2rem;
        background-color: transparent !important;
    }

    .marker {
        padding-top: 3rem;
        text-align: center;
    }

    .marker span {
        font-size: 2rem;
        user-select: none;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        hr {
            margin-block-start: 1rem;
            margin-block-end: 1rem;
        }
    }
</style>
