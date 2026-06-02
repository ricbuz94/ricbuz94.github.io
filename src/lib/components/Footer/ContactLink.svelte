<script lang="ts">
    import Icon from "../Icon.svelte";
    import type {LucideIcon} from "@lucide/svelte";


    let {title = "Icon", href = "/", icon = null, text}: {
        title: string,
        href: string,
        icon?: null | LucideIcon | 'github' | 'linkedin' | 'instagram'
        text?: string,
    } = $props();
</script>

<a class="contact-link" title={title + " | " + text} {href} target="_blank" rel="noreferrer">
    <Icon component={icon}/>
    <p class="contact-link-text">{text}</p>
</a>

<style>
    .contact-link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.5rem;
    }

    :global(.contact-link:hover .lucide) {
        stroke: var(--accentColor);
    }

    :global(.contact-link:hover .lucide-fill) {
        stroke: none;
        fill: var(--accentColor);
    }

    .contact-link:hover .contact-link-text {
        color: var(--accentColor);
    }

    .contact-link-text {
        display: none;
        margin: 0px;
        transition: color var(--transition);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        .contact-link {
            width: 100%;
            text-align: center;
            justify-content: flex-start;
        }

        .contact-link-text {
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
        .contact-link {
            padding: 0px 0.5rem;
        }

        .contact-link-text {
            display: inline;
            line-height: 2;
            margin-left: 0.5rem;
            font-size: 1rem;
            vertical-align: top;
            color: var(--textColor);
        }
    }
</style>
