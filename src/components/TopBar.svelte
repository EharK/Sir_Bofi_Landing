<main>
    <div class="top-bar">
        <div class="relative">
            <a href="/" class="absolute logo navbar">
                <img class="" src="sir_bofi.svg" alt="Sir Bofi logo">
                Sir Bofi
            </a>
        </div>
        <div class="nav">
            <div class={"nav-items" + (phoneNavActive ? ' open' : '')}>
                <a href="http://demo.sirbofi.com" target="_blank">
                    <button class="bones">Demo</button>
                </a>
                <a href="#roadmap">
                    <button class="bones">Roadmap</button>
                </a>
                <a href="#tokenomics">
                    <button class="bones">Tokenomics</button>
                </a>
                <a href="#readme">
                    <button class="bones">About</button>
                </a>
                <a href="">
                    <button class="bones">Chart</button>
                </a>
            </div>
        </div>
        <div class="burger"
             on:click={togglePhoneNavMenu} on:keydown={()=>{}}
             role="button" tabindex="0">
            <img src="burger.svg" alt="">
        </div>
        <button class="colored cta">
            Try demo
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
                    if (currentScroll > lastScroll) {
                        topBar.style.top = '-100px';
                    } else {
                        if (window.innerWidth > 780) {
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
                    if (window.innerWidth < 780) {
                        topBar.style.top = '0';
                    } else {
                        topBar.style.top = '20px';
                    }
                }
            )
        }
    );
</script>

<style>

    a, button {
        height: 100%;
    }

    button.cta {
        position: absolute;
        right: 40px;
        height: 40px;
    }

    main {
        display: flex;
        justify-content: center;
    }

    .top-bar {
        position: fixed;
        background-color: hsla(0, 0%, 9%, 0);
        backdrop-filter: blur(14px) brightness(0.5);
        transition: top 0.3s;
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
        overflow: hidden;
        top: 20px;
    }

    .top-bar .nav .nav-items {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 60px;
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

    @media screen and (max-width: 1300px) {
        .top-bar {
            width: 90vw;
        }
    }

    @media screen and (max-width: 1080px) {

        .top-bar .nav .nav-items { /* Do net delete - is actually used */
            gap: 20px;
        }
    }

    @media screen and (max-width: 780px) {
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