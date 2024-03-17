<main>
    <div class="main-container relative {href ? 'clickable' : ''}" aria-hidden="true" on:click={()=>{goTo(href)}}>
        <img src={src} alt={title}/>
        <h2>{title}</h2>
        <p>{text}</p>
        {#if ongoing}
            <div class="ongoing-tag">
                <span>Active</span>
            </div>
        {/if}
    </div>
</main>

<script>
    export let src = '';
    export let title = '';
    export let text = '';
    export let ongoing = false;
    export let href = '';
    const goTo = (href) => {
        if (href) {
            window.open(href, '_blank'); // Open in a new tab
        }
    }
</script>

<style>

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 20px 20px 40px;
        gap: 8px;
        background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.15s;
        border-radius: 20px;
    }

    .main-container:hover {
        background-color: rgba(255, 255, 255, 0.12);
    }

    .ongoing-tag {
        position: absolute;
        top: -15px;
        right: -10px;
        background-color: var(--green);
        padding: 5px 20px;
        border-radius: 20px;
        color: var(--dark);
        font-size: 20px;
        font-weight: bold;
        transition: transform 0.15s;
    }

    main:hover .ongoing-tag {
        transform: translateY(-6px);
    }

    img {
        max-width: 600px;
        border-radius: 20px;
    }
</style>