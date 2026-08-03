<script lang="ts">
    import type {SVGAttributes} from 'svelte/elements';
    import type {LucideIcon} from "@lucide/svelte";
    import Circle from "@lucide/svelte/icons/circle";

    let {
        component: IconComponent = Circle,
        color = "var(--textColor, currentColor)",
        size = 20,
        strokeWidth = 2,
        strokeLinecap = "round",
        strokeLinejoin = "round",
        fill = "none",
    }: {
        component: null | LucideIcon | 'github' | 'linkedin' | 'instagram' | 'shrinkpic';
        color?: string;
        size?: number;
        strokeWidth?: number;
        strokeLinecap?: 'butt' | 'square' | 'round' | 'inherit';
        strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit',
        fill?: string;
    } & SVGAttributes<SVGSVGElement> = $props();
</script>

{#if typeof IconComponent === 'string'}
    <svg
            class="lucide"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke={color}
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
    >
        {#if IconComponent === 'github'}
            <title>GitHub</title>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        {:else if IconComponent === 'linkedin'}
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        {:else if IconComponent === 'instagram'}
            <title>Instagram</title>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        {:else if IconComponent === 'shrinkpic'}
            <title>shrinkpic</title>
            <path d="M21.6 10.2L19.8 10.2L19.8 5.4L4.2 5.4L4.2 18.6L10.2 18.6L10.2 20.4L2.4 20.4L2.4 3.6L21.6 3.6L21.6 10.2zM21.6 20.4L12 20.4L12 12L21.6 12L21.6 20.4zM13.8 18.6L19.8 18.6L19.8 13.8L13.8 13.8L13.8 18.6z"></path>

        {/if}
    </svg>
{:else}
    <IconComponent {color} {size} {strokeWidth}/>
{/if}
