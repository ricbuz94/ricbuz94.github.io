<script>
    let { text = "Simple banner", isAnimated = false } = $props();
</script>

<div class="banner" class:animated={isAnimated}>
    <p>{text}</p>
</div>

<style>
    /* The typing effect */
    @keyframes typing {
        0% {
            width: 0;
        }
        5% {
            width: 0;
        }
        40% {
            width: 100%;
        }
        80% {
            width: 100%;
        }
        95% {
            width: 0%;
        }
        100% {
            width: 0;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: var(--accentColor);
        }
    }

    .banner {
        width: 100%;
        display: flex;
        justify-content: center;
        user-select: none;
        background-color: var(--borderColor);
        border-radius: 35px;
        overflow: hidden;
        text-align: center;
        z-index: 1;
    }

    .banner > p {
        overflow: hidden;
        width: fit-content;
        max-width: fit-content;
        text-align: center;
        margin: 1rem auto;
        font-weight: 500;
        transition: width var(--transition);
    }

    .banner.animated > p {
        border-right: 0.15em solid var(--accentColor);
        white-space: nowrap;
        animation:
            typing 14s steps(40, end) infinite,
            blink-caret 1s step-end infinite;
    }
</style>
