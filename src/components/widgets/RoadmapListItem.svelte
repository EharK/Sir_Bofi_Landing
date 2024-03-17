<li>
    <div class="checkbox-wrapper"><Checkbox checked="{checked}"/></div>
    <span>
        <slot/>
    </span>
</li>

<script>
    import Checkbox from "./Checkbox.svelte";
    export let checked = false;
</script>

<style>
    li {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin: 8px 0;
        font-size: 16px;
    }

    .checkbox-wrapper {
        margin-top: 4px;
    }
</style>