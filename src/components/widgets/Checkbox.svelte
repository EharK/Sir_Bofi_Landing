<main class="checkbox-wrapper" style="--size: {iconSize}px">
    <img src="icons/checkbox{checked ? '-checked' : ''}.svg" alt="checkbox">
</main>

<script>
    import {onMount} from "svelte";

    const iconSize = 18;
    export let checked = false;
    export let reactive = false;

    if (reactive) {
        onMount(() => {
            let checkbox = document.querySelector('.checkbox-wrapper');
            checkbox.addEventListener('click', () => {
                checked = !checked;
            });
        });
    }
</script>

<style>
    .checkbox-wrapper {
        width: var(--size);
        height: var(--size);
        aspect-ratio: 1/1;
        min-width: var(--size);
        min-height: var(--size);
    }
</style>