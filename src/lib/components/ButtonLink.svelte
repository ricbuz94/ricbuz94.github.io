<script>
    import { ChevronRight } from "lucide-svelte";
    import Icon from "./Icon.svelte";

    let { to = "/", text = "Testo", shadow = false } = $props();
</script>

<a href={to} class:shadow draggable="false">
    <p>{text}</p>
    <Icon component={ChevronRight} size={14} strokeWidth={3} color="var(--gray0)" />
</a>

<style>
    a {
        width: min-content;
        display: flex;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        user-select: none;
        background-color: var(--accentColor);
        border-radius: 25px;
        padding: 0.5rem 1.25rem;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        background-color: var(--accentColorHover);
        transform: translateY(-3px);
    }

    a:active {
        box-shadow: var(--activeInputShadow) !important;
    }

    a.shadow {
        box-shadow: var(--cardShadow);
    }

    p {
        color: var(--gray0);
        margin-right: 5px;
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        a {
            border-radius: 25px;
            padding: 0.75rem 1.25rem;
        }

        p {
            font-size: 1rem;
        }
    }
</style>
