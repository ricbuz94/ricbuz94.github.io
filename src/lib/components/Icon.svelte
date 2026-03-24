<script lang="ts">
    import {Circle} from "lucide-svelte";

    let {
        component: IconComponent = Circle,
        color = "var(--textColor, currentColor)",
        size = 20,
        strokeWidth = 2,
    } = $props();
</script>

<IconComponent {color} {size} {strokeWidth}/>