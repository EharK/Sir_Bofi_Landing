<main>
    <div class="main-container relative {href ? 'clickable' : ''}" aria-hidden="true" on:click={()=>{goTo(href)}}>
        <img src={src} alt={title}/>
        <h2>{title}</h2>
        <p>{text}</p>
        {#if ongoing}
            <div class="tag ongoing">
                <span>Active</span>
            </div>
        {:else}
            <div class="tag ended">
                <span>Ended</span>
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
        max-width: 700px;
        min-width: 200px;
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

    .tag {
        position: absolute;
        top: -15px;
        right: -10px;
        padding: 5px 20px;
        border-radius: 20px;
        color: var(--dark);
        font-size: 20px;
        font-weight: bold;
        transition: transform 0.15s;
    }

    .tag.ongoing {
        background-color: var(--green);
    }

    .tag.ended {
        background-color: var(--sdark);
        color: var(--light);
    }

    main:hover .tag {
        transform: translateY(-6px);
    }

    img {
        border-radius: 20px;
    }

    @media screen and (max-width: 1600px){
        .main-container {
            width: 500px;
        }
    }

    @media screen and (max-width: 1200px){
        .main-container {
            width: 400px;
            padding: 10px 10px 20px;
        }
    }

    @media screen and (max-width: 500px){
        .main-container {
            width: 300px;
        }
    }
</style>