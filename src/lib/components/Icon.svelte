<script lang="ts">
    import { Circle } from "lucide-svelte";

    let {
        component: IconComponent = Circle,
        color = "var(--textColor, currentColor)",
        size = 20,
        strokeWidth = 2,
    } = $props();
</script>

{#if typeof IconComponent === "string" && IconComponent === "Twitter"}
    <svg
        class="lucide lucide-twitter"
        width={size}
        height={size}
        stroke-width={strokeWidth}
        fill={color}
        aria-hidden="true"
        viewBox="0 0 24 24"
    >
        <g>
            <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
        </g>
    </svg>
{:else}
    <IconComponent {color} {size} {strokeWidth} />
{/if}
