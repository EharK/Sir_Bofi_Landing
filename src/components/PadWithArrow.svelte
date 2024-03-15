<main>
    <div class="container {direction}">
        <Pad>
            <slot></slot>
        </Pad>
        <Arrow {direction}/>
    </div>
</main>

<script>
import Arrow from "./widgets/Arrow.svelte";
import Pad from "./widgets/Pad.svelte";
export let direction = "down";
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
    }

    .container.right {
        flex-direction: row;
    }

    .container.left {
        flex-direction: row-reverse;
    }
</style>