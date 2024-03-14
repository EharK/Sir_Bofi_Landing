<main>
    <div class="container {direction}">
        <div class="line {direction}"></div>
        <div class="head"></div>
    </div>
</main>

<script>
    export let direction = 'down';
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container.right {
        flex-direction: row;
        height: 100%;
    }

    .container.up {
        transform: rotate(180deg);
    }

    .line {
        height: 60px;
        background: linear-gradient(0deg, var(--glow-green), var(--dark));
        width: 2px;
    }

    .line.right {
        width: 60px;
        height: 2px;
        background: linear-gradient(-90deg, var(--glow-green), var(--dark));
    }

    .head {
        height: 10px;
        width: 10px;
        background-color: var(--glow-green);
        border-radius: 50%;
        box-shadow: 0 0 30px 5px var(--glow-green);
    }

</style>