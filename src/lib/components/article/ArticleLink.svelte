<script lang="ts">
    let {title = "Link", href = "/", target = "_blank"} = $props();
</script>

<a {href} target={target} rel="noreferrer" draggable="false">{title}</a>

<style>
    a {
        display: inline;
        color: var(--accentColor);
        text-decoration: none;
        text-align: left;
        font-weight: 600;
    }

    a:hover {
        color: var(--accentColorHover);
        text-decoration: underline;
    }
</style>
