<main>
    <div class="overlay-items-container">
        <TopBar {phoneNavActive} {togglePhoneNavMenu}/>
    </div>
    <div id="landing" class="primary-container">
        <div class="primary-container-content-wrapper">
            <div class="landing-title-container">
                <h1 class="xxl">
                    Find crypto arbitrage possibilities in <span class="hl green">seconds</span>
                </h1>
                <div class="buttons-wrapper">
                    <a href="#demonstration">
                        <button class="big-button transparent">
                            What is it?
                        </button>
                    </a>
                    <a href="https://demo.sirbofi.com/" target="_blank">
                        <button class="big-button colored">
                            <span>TRY DEMO NOW</span>
                        </button>
                    </a>
                </div>
            </div>
            <div class="landing-fidget-container">
                <Director/>
            </div>
        </div>
        <div class="ambient-wrapper">
            <div class="ambient">
                @
            </div>
        </div>
    </div>
    <div class="secondary-container dark">
        <div class="col center" id="demonstration">
            <h1>Demonstration</h1>
            <video controls controlslist="nodownload">
                <source src="sir_bofi_demo.mp4" type="video/mp4">
                <track kind="captions" default src="">
            </video>
            <div class="buttons-wrapper">
                <PurchaseCta {position_available} {cfasl} {gkrlef} {purchase}/>
                <a href="https://demo.sirbofi.com/" target="_blank">
                    <button class="big-button colored">
                        <span>Try free demo app online</span>
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div class="secondary-container main-points-section">
        <Roadmap/>
        <div class="buttons-wrapper">
            <a href="https://demo.sirbofi.com/" target="_blank">
                <button class="big-button colored">
                    <span>Try free demo app online</span>
                </button>
            </a>
            <div class="spinner-with-button-wrapper">
                <PurchaseCta {position_available} {cfasl} {gkrlef} {purchase}
                             colored={true}
                             spinner_order_reverse={true}
                />
            </div>
        </div>
        <div>-100€ coupon code: <span class="text-glow">IKnowWhatImDoing</span></div>
        <hr class="big">
        <div id="tokenomics" class="section tokenomics-section">
            <h1>$BOFI Tokenomics</h1>
            <div class="base-row tokenomics-row">
                <img class="tokenomics-chart" src="tokenomics.svg" alt="">
                <div class="base-col token-utilities-wrapper">
                    <div class="tokenomics-text-container">
                        <div class="utilities-title-wrapper">
                            <h2>Initial Utilities</h2>
                            <img class="arrow-svg" src="/arrow.svg" alt="arrow">
                        </div>
                        <p class="tokenomics-text">Staking - Profit share - Buy Back</p>
                    </div>
                    <div class="tokenomics-text-container">
                        <div class="utilities-title-wrapper">
                            <h2>In progress</h2>
                            <img class="arrow-svg" src="/arrow.svg" alt="arrow">
                        </div>
                        <p class="tokenomics-text">Token-gate</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="secondary-container relative">
        <Readme {position_available} {cfasl} {gkrlef} {purchase}/>
        <div class="back-up-button-wrapper">
            <a href="#landing" class="back-up-button">
                <p style="margin-top: -4px;">↑</p>
            </a>
        </div>
    </div>
    <div class="base-row strict footer-container">
        <a href="https://t.me/SirBofiportal" target="_blank" class="base-row strict link-and-icon">
            <img src="telegram.svg" alt="">
            Telegram
        </a>
        <p class="xs-text">
            © {current_year} RumVessel. All rights reserved.
        </p>
    </div>
</main>

<script>
    import Director from "./components/Director.svelte";
    import Readme from "./components/Readme.svelte";
    import TopBar from "./components/TopBar.svelte";
    import PurchaseCta from "./components/widgets/PurchaseCta.svelte";
    import Roadmap from "./components/Roadmap.svelte";

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
</script>

<style>
    .buttons-wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;
    }

    .buttons-wrapper div {
        margin: 0;
    }

    .hl {
        background-color: var(--highlight);
        border-radius: 4px;
        padding: 0 5px;
        margin-left: -5px;
    }

    .hl.green {
        background-color: var(--ghighlight);
    }

    p {
        font-size: 20px;
        line-height: 1.5;
        text-align: justify;
    }

    h1 {
        justify-self: center;
        font-size: clamp(40px, 4vw, 80px) !important;
        font-weight: 700;
        margin-bottom: 60px;
    }

    h1.xxl {
        font-size: clamp(24px, 4vw, 80px) !important;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 20px;
    }

    h2 {
        font-size: 64px;
        font-weight: 600;
    }

    h2.xxl {
        font-size: clamp(26px, 4vw, 80px) !important;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    h3 {
        margin-top: 25px;
        font-size: 28px;
        font-weight: 400;
    }

    .text-glow {
        color: var(--glow-green);
    }

    .xs-text {
        font-size: 12px;
    }

    .link-and-icon {
        gap: 8px;
        cursor: pointer;
    }

    .footer-container {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
        padding: 40px 0;
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

    .ambient-wrapper {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: inherit;
        top: 0;
        overflow: hidden;
        box-sizing: border-box;
        z-index: 0;
    }

    .ambient {
        user-select: none;
        font-size: 4080px;
        margin-top: -1200px;
        animation: rotate 50s linear infinite;
        line-height: 1.2;
        filter: blur(40px);
        opacity: 0.25;
        font-weight: bold;
        color: black;
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
    }

    .back-up-button {
        pointer-events: all !important;
        background-color: var(--sdark);
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light);
        transition: all 0.2s ease;
    }

    .back-up-button:hover {
        background-color: var(--light-green);
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

    video {
        border-radius: 8px;
        transition: all 0.5s ease;
        max-width: 50%;
    }

    .primary-container {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        background-size: cover;
        z-index: 10;
    }

    .primary-container :not(.ambient-wrapper) {
        z-index: 10;
    }

    .primary-container-content-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        max-width: 1720px;
        width: 100%;
    }

    .primary-container h1 {
        color: var(--light);
    }

    .landing-fidget-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 3;
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

    .landing-title-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 50vw;
        margin: 0 0 100px 5vw;
        flex: 6;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-points-section {
        background: linear-gradient(-45deg, rgba(15, 26, 15, 1) 0%, rgba(13, 13, 13, 0.2) 100%);
        color: var(--slight) !important;
        padding-bottom: 200px !important;
    }

    .main-points-section h1 {
        font-size: clamp(48px, 5vw, 75px) !important;
        margin-bottom: 100px;
    }

    .main-points-section h2 {
        font-size: 48px;
        margin-bottom: 60px;
    }

    .main-points-section h3 {
        text-transform: uppercase;
        font-size: clamp(34px, 3vw, 48px) !important;
        font-weight: bold;
    }

    .main-points-row {
        width: 100%;
        padding: 20px;
        gap: 40px;
        color: var(--slight);
        max-width: 1500px;
    }

    .point-pad {
        align-items: center;
        padding: 70px 50px 70px 50px;
        border-radius: 8px;
        transition: all 0.5s ease;
    }

    .point-pad:hover {
        outline: #99ff99 1px solid;
        box-shadow: 0 0 40px rgba(33, 255, 35, 0.15);
    }

    .point-pad img {
        margin-bottom: 20px;
    }

    .point-pad p {
        text-align: center;
    }

    .base-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .base-row.strict {
        flex-direction: row !important;
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
        gap: 80px;
        flex: 2;
    }

    .tokenomics-row .utilities-title-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        gap: 20px;
    }

    .tokenomics-row h2 {
        font-size: clamp(36px, 3vw, 48px) !important;
        white-space: nowrap;
    }

    .tokenomics-chart {
        margin-right: 24px;
        flex: 3;
        height: 600px;
        min-width: 0;
    }

    @media screen and (max-width: 1280px) {
        video {
            max-width: 80%;
        }

        .primary-container-content-wrapper {
            flex-direction: column;
            gap: 100px;
            padding: 30vh 0 20vh;
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

        .primary-container {
            padding: 5vh 20px 0 20px;
        }

        .base-row {
            flex-direction: column;
        }

        .base-row.main-points-row {
            width: 100%;
        }

        .main-points-section h1, h2, h3 {
            text-align: center !important;
        }

        .main-points-section .section {
            padding: 80px 5px 0 5px;
        }

        .tokenomics-chart {
            max-width: calc(100% - 24px);
            margin: 0;
        }

        .base-row.main-points-row {
            max-width: 500px;
            justify-content: space-around;
        }

        .main-points-section .section {
            padding: 40px 5px;
        }

        .tokenomics-row {
            width: 100%;
            justify-content: center;
            gap: 100px;
        }

        .tokenomics-row .utilities-title-wrapper {
            flex-direction: column;
        }

        .arrow-svg {
            transform: rotate(90deg);
            margin-top: -20px;
            width: 24px;
        }

        p.tokenomics-text {
            text-align: center !important;
        }

        .tokenomics-section {
            margin-top: -100px;
        }

        video {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 700px) {

        .main-points-section h3 {
            margin-bottom: 16px;
        }

        hr.big {
            display: none;
        }

        .buttons-wrapper {
            justify-content: center;
        }

        .primary-container-content-wrapper {
            justify-content: center;
            text-align: center;
        }

        .landing-fidget-container {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {

        h1 {
            margin-bottom: 30px;
        }

        video {
            max-width: 100%;
        }

        .landing-title-container {
            margin: 0 0 100px 0;
        }

        .spinner-with-button-wrapper {
            flex-direction: column;
            justify-content: center;
            max-height: min-content;
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

    @media screen and (max-height: 900px) {

        .primary-container {
            padding: 5vh 0 0 0;
        }
    }

</style>
