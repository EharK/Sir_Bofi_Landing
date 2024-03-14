<main class="pad">
    <slot>
    </slot>
</main>

<style>
    .pad {
        text-align: center;
        min-width: 10px;
        min-height: 10px;
        padding: 20px 60px;
        border-radius: 4px;
        background-color: var(--dark);
        outline: 1px solid rgba(230, 230, 230, 0.2);
        outline-offset: -1px;
        user-select: none;
        font-size: 24px;
        transition: all 0.15s;
    }

    .pad:hover {
        outline: 1px solid var(--glow-green);
        background-color: var(--light-green);
    }
</style>