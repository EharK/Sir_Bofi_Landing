<div class="press-releases-container">
    {#each press_releases as press_release}
        <a class="press-logo"
           href={press_release.link}
           target="_blank">
            <img class="{press_release.add_shadow ? 'shadow' : ''}"
                 src={`logos/${press_release.logo}`} alt="{press_release.alt}">
        </a>
    {/each}
</div>

<script>
    const press_releases = [
        {
            logo: 'yahoo-finance.png',
            link: 'https://finance.yahoo.com/news/sir-bofi-unheard-unfair-advantages-010000566.html',
            alt: 'yahoo finance'
        },
        {
            logo: 'cmc.svg',
            link: 'https://coinmarketcap.com/community/articles/65fb423d0aa1790eda8a24b2',
            alt: 'coinmarketcap'
        },
        {
            logo: 'binance.svg',
            link: 'https://www.binance.com/en/square/post/5670055262505',
            alt: 'binance'
        },
        {
            logo: 'morningstar.svg',
            link: 'https://www.morningstar.com/news/globe-newswire/9066328/sir-bofi-unheard-and-unfair-advantages-launching-april-2024',
            alt: 'morningstar'
        },
        {
            logo: 'benzinga.svg',
            link: 'https://www.benzinga.com/pressreleases/24/03/g37837271/sir-bofi-unheard-and-unfair-advantages-launching-april-2024',
            alt: 'benzinga'
        },
        {
            logo: 'digitaljournal.png',
            link: 'https://www.digitaljournal.com/pr/news/globenewswire/sir-bofi-unheard-unfair-1504252598.html',
            alt: 'digital journal',
            add_shadow: true
        },
    ]
</script>

<style>

    .press-releases-container {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: clamp(12px, 2vw, 40px);
        margin-bottom: 100px;
        max-width: 1200px;
    }

    .press-logo {
        position: relative;
        max-width: 340px;
        min-width: 200px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20vw;
        border-radius: 8px;
        transition: all 0.15s;
        background-color: var(--light);
    }

    .press-logo:hover {
        transform: translateY(-2px);
    }

    .press-logo img {
        max-width: 80%;
        max-height: 40%;
        transition: all 0.15s;
    }

    .press-logo img.shadow {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 1));
    }

    @media screen and (min-width: 900px) {
        .press-logo {
            filter: grayscale(1);
        }

        .press-logo:hover {
            filter: grayscale(0);
        }

        .press-logo img {
            transition: all 0.15s;
            filter: brightness(0);
        }

        .press-logo:hover img {
            filter: brightness(1);
        }

        .press-logo img.shadow {
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 1));
        }
    }
</style>