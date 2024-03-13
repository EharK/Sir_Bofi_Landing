<main>
    <div class="container">
        <div class="line"></div>
        <div class="head"></div>
    </div>
</main>

<script>

</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .line {
        height: 60px;
        min-height: 20px;
        background: linear-gradient(0deg, var(--glow-green), var(--dark));
        width: 2px;
    }

    .head {
        height: 10px;
        width: 10px;
        background-color: var(--glow-green);
        border-radius: 50%;
        box-shadow: 0 0 30px 5px var(--glow-green);
    }

</style>