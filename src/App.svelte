<main>
    <div class="overlay-items-container">
        <TopBar {phoneNavActive} {togglePhoneNavMenu}/>
    </div>
    <Landing/>
    <div class="secondary-container dark">
        <div class="col center" id="demonstration">
            <h1>See How It Works</h1>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ZDBe69n0Usw"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
            <div class="buttons-wrapper">
                <a href="#readme">
                    <button class="big-button transparent">
                        <span>Read More</span>
                    </button>
                </a>
                <a href="https://demo.sirbofi.com/" target="_blank">
                    <button class="big-button colored">
                        <span>Try Free Demo</span>
                    </button>
                </a>
            </div>
        </div>
        <div class="col center">
            <h1>Sir Bofi in Media</h1>
            <PressReleases/>
        </div>
    </div>
    <div class="secondary-container roadmap-and-tokenomics-section">
        <div class="w-full" id="roadmap">
            <h1>Roadmap</h1>
            <Roadmap/>
        </div>
        <div class="buttons-wrapper">
            <a href="#readme">
                <button class="big-button transparent">
                    <span>Read More</span>
                </button>
            </a>
            <a href="https://demo.sirbofi.com/" target="_blank">
                <button class="big-button colored">
                    <span>Try Free Demo</span>
                </button>
            </a>
        </div>
        <hr class="big">
        <div id="tokenomics" class="section tokenomics-section">
            <h1>$BOFI Tokenomics</h1>
            <div class="base-row tokenomics-row">
                <img class="tokenomics-chart" src="tokenomics.svg" alt="">
                <div class="base-col token-utilities-wrapper">
                    <div class="tokenomics-text-container">
                        <div class="utilities-title-wrapper">
                            <h2>Initial Utilities</h2>
                            <img class="arrow-svg" src="./arrow.svg" alt="arrow">
                        </div>
                        <p class="tokenomics-text">Staking - Profit share - Buy Back</p>
                    </div>
                    <div class="tokenomics-text-container">
                        <div class="utilities-title-wrapper">
                            <h2>In Progress</h2>
                            <img class="arrow-svg" src="./arrow.svg" alt="arrow">
                        </div>
                        <p class="tokenomics-text">Token Gated Access</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="buttons-wrapper">
            <a href="https://etherscan.io/token/0xe3374f14be081eae24e39e18360422b7aa769859" target="_blank">
                <button class="big-button transparent">
                    <img src="./icons/etherscan.svg" width="24" height="24" alt="etherscan">
                    <span>Etherscan</span>
                </button>
            </a>
            <a href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58" target="_blank">
                <button class="big-button colored">
                    <img src="./icons/dexscreener.svg" width="24" height="24" alt="" class="invert">
                    <span>Chart</span>
                </button>
            </a>
        </div>
    </div>
    <div class="secondary-container community-section" id="community">
        <div class="col center">
            <div class="flex-col align-center title-and-socials">
                <h1>Community</h1>
                <SocialsList/>
            </div>
            <CommunityEvents/>
        </div>
    </div>
    <div class="secondary-container relative">
        <Readme/>
        <div class="back-up-button-wrapper">
            <a href="#landing" class="back-up-button">
                <p style="margin-top: -4px;">↑</p>
            </a>
        </div>
    </div>
    <div class="base-row footer-container">
        <SocialsList/>
        <p class="xs-text">
            © {current_year} RumVessel. All rights reserved.
        </p>
    </div>
</main>

<script>
    import Director from "./components/Director.svelte";
    import Readme from "./components/Readme.svelte";
    import TopBar from "./components/TopBar.svelte";
    import Roadmap from "./components/Roadmap.svelte";
    import {onMount} from "svelte";
    import CommunityEvents from "./components/CommunityEvents.svelte";
    import SocialsList from "./components/SocialsList.svelte";
    import Landing from "./components/Landing.svelte";
    import PressReleases from "./components/PressReleases.svelte";

    let cfasl = false;
    let position_available = false;
    let ll = false;
    const gkrlef = function (uid) {
        cfasl = true;
        let xhr = new XMLHttpRequest();
        if (ll && cfasl) {
            xhr.open("POST", "https://srbfi.com/cfa", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    if (response.status === "success") {
                        return true;
                    }
                }
            }
            xhr.send(JSON.stringify({uid: uid}));
        }
        setTimeout(() => {
            cfasl = false;
            position_available = true;
        }, Math.floor(Math.random() * 2000) + 500);
        return false;
    }
    const purchase = function () {
        window.open("https://buy.stripe.com/fZedSn9pX97DbXq6oo", "_blank");
        return true;
    }
    let phoneNavActive = false;
    const togglePhoneNavMenu = function () {
        phoneNavActive = !phoneNavActive;
    }
    const current_year = new Date().getFullYear();

    onMount(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                document.querySelector('.back-up-button-wrapper').style.opacity = '1';
            } else {
                document.querySelector('.back-up-button-wrapper').style.opacity = '0';
            }
        });
    });

</script>

<style>

    .buttons-wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;
    }

    .xs-text {
        font-size: 12px;
    }

    .community-section h1 {
        margin-bottom: 0;
    }

    .community-section .title-and-socials {
        margin-bottom: 60px;
    }

    .footer-container {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
        padding: 40px 0;
        height: 200px;
        justify-content: space-around;
    }

    .overlay-items-container {
        position: relative;
    }

    .base-col {
        display: flex;
        flex-direction: column;
        max-width: 960px;
        width: 100%;
    }

    hr.big {
        width: 100%;
        max-width: 560px;
        border: none;
        padding: 4px;
        border-radius: 20px;
        margin: -20px 0 20px 0;
        background: var(--glow-green);
        filter: grayscale(0.6);
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(calc(360deg * 1));
        }
        100% {
            transform: rotate(calc(360deg * 2));
        }
    }

    :global(.logo) {
        width: 64px;
        height: 64px;
    }

    .back-up-button-wrapper {
        position: fixed;
        pointer-events: none;
        bottom: 50px;
        width: 95%;
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        transition: all 0.15s;
        opacity: 0;
    }

    .back-up-button {
        pointer-events: all !important;
        background-color: var(--dark);
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light);
        outline: 1px solid transparent;
        transition: all 0.2s ease;
    }

    .back-up-button:hover {
        background-color: var(--light-green);
        outline: 1px solid var(--glow-green);
        transform: translateY(-2px);
    }

    .back-up-button:active {
        cursor: default;
        opacity: 0.5;
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
    }

    .center {
        align-items: center;
    }

    #demonstration {
        width: 100%;
    }

    .video-container {
        position: relative;
        overflow: hidden;
        transition: all 0.5s ease;
        max-width: 50%;
        min-width: 50%;
        aspect-ratio: 16/9;
    }

    .video-container iframe {
        position: absolute;
        min-width: 100%;
        aspect-ratio: 16/9;
    }


    .secondary-container.dark {
        background: transparent;
        backdrop-filter: brightness(0.4);
        color: var(--light);
    }

    .secondary-container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 140px;
        padding: 100px 50px;
        transition: all 0.5s ease;
        z-index: 20;
        background: linear-gradient(115deg, var(--dark) 0%, #0c0c0c 100%);
        color: var(--light);
    }

    .secondary-container h1 {
        text-align: center;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .roadmap-and-tokenomics-section {
        background: linear-gradient(-45deg, rgb(26, 26, 26) 0%, rgba(13, 13, 13, 0.2) 100%);
        padding-bottom: 200px !important;
    }

    .tokenomics-text-container {
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.15s;
        padding: 40px;
        border-radius: 20px;
        user-select: none;
    }

    .tokenomics-text-container:hover {
        background-color: rgba(255, 255, 255, 0.12);
    }

    .tokenomics-text-container .arrow-svg {
        transition: all 0.15s;
    }

    .tokenomics-text-container:hover .arrow-svg {
        transform: translateX(10px);
    }

    .tokenomics-text {
        text-align: start;
    }

    .tokenomics-row {
        width: 100%;
        justify-content: center;
        gap: 40px;
        max-width: 1500px;
    }

    .tokenomics-row h2 {
        margin-bottom: 0 !important;
    }

    .token-utilities-wrapper {
        gap: 40px;
        flex: 2;
    }

    .tokenomics-row .utilities-title-wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        gap: 20px;
    }

    .tokenomics-row h2 {
        white-space: nowrap;
    }

    .tokenomics-chart {
        margin-right: 24px;
        flex: 3;
        height: 600px;
        min-width: 0;
    }

    @media screen and (max-width: 1280px) {
        .video-container {
            min-width: 80%;
        }
    }

    @media screen and (max-width: 1080px) {

        .secondary-container {
            padding: 40px 20px;
        }

        p {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 960px) {

        .base-row {
            flex-direction: column;
        }

        .tokenomics-chart {
            max-width: 75%;
            margin-left: -2rem;
        }

        .roadmap-and-tokenomics-section .section {
            padding: 40px 5px;
        }

        .tokenomics-row {
            width: 94%;
            gap: 100px;
        }

        .tokenomics-row .utilities-title-wrapper {
            gap: 10px;
        }

        .arrow-svg {
            width: 24px;
        }

        .video-container {
            min-width: 100%;
        }
    }

    @media screen and (max-width: 700px) {

        hr.big {
            display: none;
        }

        .buttons-wrapper {
            justify-content: center;
        }
    }

    @media screen and (max-width: 500px) {

        h1 {
            margin-bottom: 30px;
        }

        .video-container {
            min-width: 100%;
        }

        .secondary-container {
            padding: 60px 0 100px;
        }

        @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            80% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    @media screen and (max-width: 400px) {

        .back-up-button-wrapper {
            padding: 10px 20px;
        }
    }

</style>
