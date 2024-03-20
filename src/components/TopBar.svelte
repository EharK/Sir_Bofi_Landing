<main class="relative">
    <div class="top-bar">
        <div class="relative">
            <a href="/" class="absolute logo navbar">
                <img class="" src="sir_bofi.svg" alt="Sir Bofi logo">
                Sir Bofi
            </a>
        </div>
        <div class="nav">
            <div class={"nav-items" + (phoneNavActive ? ' open' : '')}>
                <a href="#roadmap">
                    <button class="bones">
                        <img class="icon" src="icons/map.svg" alt="roadmap">
                        Roadmap
                    </button>
                </a>
                <a href="#tokenomics">
                    <button class="bones">
                        <img class="icon" src="icons/piechart.svg" alt="tokenomics">
                        Tokenomics
                    </button>
                </a>
                <a href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58"
                   target="_blank">
                    <button class="bones">
                        <img class="icon dexscreener-icon" src="icons/dexscreener.svg"
                             alt="dexscreener">
                        Token
                    </button>
                </a>
                <!--                <a href="https://rumvessel.gitbook.io/sir-bofi"-->
                <!--                   target="_blank">-->
                <!--                    <button class="bones">-->
                <!--                        <img src="icons/gitbook.png" alt="gitbook" class="gitbook-icon">-->
                <!--                        Documentation-->
                <!--                    </button>-->
                <!--                </a>-->
                <a href="#community">
                    <button class="bones relative">
                        <img class="icon" src="icons/telegram.svg" alt="community">
                        Community
                    </button>
                </a>
            </div>
        </div>
        <div class="burger"
             on:click={togglePhoneNavMenu} on:keydown={()=>{}}
             role="button" tabindex="0">
            <img src="burger.svg" alt="">
        </div>
        <button class="big-button colored cta">
            Try Free Demo
        </button>
    </div>
</main>

<script>
    import {onMount} from "svelte";

    export let phoneNavActive;
    export let togglePhoneNavMenu;

    let lastScroll = 0;
    onMount(
        () => {
            const topBar = document.querySelector('.top-bar');
            window.addEventListener(
                'scroll',
                () => {
                    const currentScroll = window.scrollY;
                    if (currentScroll - lastScroll > 0 && currentScroll > 700 && window.innerWidth > 900) {
                        topBar.style.top = '-100px';
                    } else {
                        if (window.innerWidth > 900) {
                            topBar.style.top = '20px';
                        } else {
                            topBar.style.top = '0';
                        }
                    }
                    lastScroll = currentScroll;
                }
            );
            window.addEventListener(
                'resize',
                () => {
                    if (window.innerWidth < 900) {
                        topBar.style.top = '0';
                    } else {
                        topBar.style.top = '20px';
                    }
                }
            )
            if (window.innerWidth < 900) {
                topBar.style.top = '0';
            }
        }
    );
</script>

<style>

    .icon {
        width: 16px;
        height: 16px;
    }

    .gitbook-icon {
        filter: invert(1);
    }

    a button {
        display: flex;
        align-items: center;
        font-size: clamp(12px, 1.2vw, 16px);
    }

    .dexscreener-icon {
        transform: translateY(1px);
    }

    button.cta {
        position: absolute;
        right: 20px;
    }

    main {
        display: flex;
        justify-content: center;
    }

    .top-bar {
        position: fixed;
        background-color: hsla(0, 0%, 9%, 0);
        backdrop-filter: blur(14px) brightness(0.6);
        transition: top 0.5s;
        height: 80px;
        width: 80vw;
        z-index: 99;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--slight);
        padding: 0 40px;
        border-radius: 8px;
        outline: 1px solid black;
        box-shadow: 5px 4px 20px 0 rgba(0, 0, 0, 0.2);
        top: 20px;
    }

    .top-bar .nav .nav-items {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 60px;
    }

    @media screen and (min-width: 900px) {
        .nav, .nav-items, .nav-items button,
        .nav-items a {
            height: 100%;
        }
    }

    .logo.navbar {
        transform: translateY(-50%);
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        align-items: center;
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 1px;
        color: var(--light);
    }

    .logo.navbar img {
        max-width: 32px;
        max-height: 32px;
    }

    .burger {
        visibility: hidden;
        cursor: pointer;
    }

    @media screen and (max-width: 1360px) {
        .top-bar {
            width: 90vw;
        }
    }

    @media screen and (max-width: 1180px) {

        .top-bar .nav .nav-items { /* Do net delete - is actually used */
            gap: 20px;
        }
    }

    @media screen and (max-width: 900px) {
        .burger {
            visibility: visible;
            margin-right: 20px;
        }

        button.cta {
            display: none;
        }

        .top-bar {
            padding: 0 20px;
            width: 100%;
            overflow: visible;
            border-radius: 0;
        }

        .top-bar .nav .nav-items { /* dont delete */
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            gap: 0;
            position: fixed;
            right: 0;
            top: 80px;
            width: 100%;
            align-items: flex-end;
            backdrop-filter: blur(10px);
            background-color: hsla(0, 0%, 9%, 0.6);
            transform: translateY(calc(-100% - 80px));
        }

        .top-bar .nav .nav-items.open { /* dont delete */
            transform: translateY(0);
        }

        .top-bar .nav .nav-items a,
        .top-bar .nav .nav-items a button {
            width: 100%;
            justify-content: center;
            backdrop-filter: brightness(0.4);
        }

        .top-bar .nav .nav-items a button {
            padding: 20px;
        }
    }
</style>