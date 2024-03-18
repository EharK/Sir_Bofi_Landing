<main>
    <div class="banners-container">
        {#each events as event}
            <EventBanner
                    src={event.src}
                    title={event.title}
                    text={event.text}
                    ongoing={!!event.ongoing}
                    href={event.href}
            />
        {/each}
    </div>
</main>

<script>
    import EventBanner from "./EventBanner.svelte";

    const events = [
        {
            src: "banners/reddit-post-contest.png",
            title: "Reddit Post Contest",
            text: "Post a link to your post on our Telegram group and win a prize!",
            ongoing: true,
            href: "https://t.me/SirBofiportal"
        },
        {
            src: "banners/tg-invite-contest.png",
            title: "Telegram Invite Contest",
            text: "Invite your friends to our Telegram group and win a prize!",
            href: "https://t.me/SirBofiportal"
        }
    ]
</script>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banners-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin-bottom: 80px;
    }
</style>