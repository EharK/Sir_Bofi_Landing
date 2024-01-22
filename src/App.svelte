<script>
    import {onMount} from 'svelte';

    let gtmId = 'GTM-T38BF9D4';
    function setUpScript() {
        let gtmScript = document.createElement("script");
        gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
        document.head.append(gtmScript);
    }
    function setUpGTM() {
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            // @ts-ignore
            window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', gtmId);
    }
    onMount(() => {
        setUpScript();
        setUpGTM();
    });

    let cfasl = false;
    let position_available = false;
    let ll = false;
    let caveman_title = "Private market overview tool to uncover "
    let caveman_title_iterable_part = "opportunities";
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

    let downloadStarted = false;
    const showLoadingUntilDownloadStarted = function () {
        if (!downloadStarted) {
            downloadStarted = true;
            setTimeout(() => {
                downloadStarted = false;
            }, 2000);
        }
    }
</script>

<main>
    <div class="overlay-items-container">
        <div class="top-bar">
            <div class="relative">
                <a href="/" class="absolute logo navbar">
                    <img class="" src="sir_bofi.svg" alt="Sir Bofi logo">
                    Sir Bofi
                </a>
            </div>
            <div class="nav">
                <div class={"nav-items" + (phoneNavActive ? ' open' : '')}>
                    <a href="#landing">
                        <button class="bones">Home</button>
                    </a>
                    <a href="#demonstration">
                        <button class="bones">Demo</button>
                    </a>
                    <a href="#101">
                        <button class="bones">About</button>
                    </a>
                    <a href="#tokenomics">
                        <button class="bones">Tokenomics</button>
                    </a>
                    <a href="#readme">
                        <button class="bones">Overview</button>
                    </a>
                </div>
            </div>
            <div class="burger"
                 on:click={togglePhoneNavMenu} on:keydown={()=>{}}
                 role="button" tabindex="0">
                <img src="burger.svg" alt="">
            </div>
        </div>
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
                    <div class="spinner-with-button-wrapper">
                        {#if !position_available}
                            <button class="{!cfasl ? '' : 'disabled'} big-button colored" on:click={() => gkrlef(1)}>
                                <span>Give me access</span>
                            </button>
                        {:else}
                            <button class="{!cfasl ? '' : 'disabled'} big-button colored" on:click={() => purchase()}>
                                <span>Purchase account</span>
                            </button>
                        {/if}
                        {#if cfasl}
                            <span class="spinner"></span>
                        {:else if position_available}
                            <span class="text-glow">Available</span>
                        {/if}
                    </div>
                </div>
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
                <a href="Sir_Bofi0.6.0.exe" download on:click={showLoadingUntilDownloadStarted}>
                    <button class="big-button transparent">
                        {#if downloadStarted}
                            <span class="spinner"></span>
                        {:else}
                            <img class="windows_download_button_logo" src="windows_logo.svg" alt="">
                        {/if}
                        <span>Download free demo version</span>
                    </button>
                </a>
                <div class="spinner-with-button-wrapper">
                    {#if !position_available}
                        <button class="{!cfasl ? '' : 'disabled'}  colored big-button" on:click={() => gkrlef(1)}>
                            <span>Give me access</span>
                        </button>
                    {:else}
                        <button class="{!cfasl ? '' : 'disabled'} colored big-button" on:click={() => purchase()}>
                            <span>Purchase account</span>
                        </button>
                    {/if}
                    {#if cfasl}
                        <span class="spinner"></span>
                    {:else if position_available}
                        <span class="text-glow">Available</span>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="secondary-container main-points-section">
        <div id="101" class="section">
            <h1>Simple to use</h1>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <img src="wallet.svg" alt="">
                    <h3>Purchase</h3>
                    <p>
                        Purchase private access,
                        receive software and credentials.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <img src="key.svg" alt="">
                    <h3>Set up</h3>
                    <p>
                        Download the software,
                        log in with the credentials provided.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <img src="rocket.svg" alt="">
                    <h3>Launch</h3>
                    <p>
                        Apply needed filters,
                        trigger the analysis,
                        find results in seconds.
                    </p>
                </div>
            </div>
        </div>
        <hr class="big">
        <div class="section">
            <h2 class="xxl">Sir Bofi 101</h2>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <img src="lightning.svg" alt="">
                    <h3>Prompt</h3>
                    <p>
                        Opportunities found in seconds between 9000+ currencies.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <img src="search.svg" alt="">
                    <h3>Extensive</h3>
                    <p>
                        Trading pairs data from 600+ exchanges at your fingertips.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <img src="cog.svg" alt="">
                    <h3>Seamless</h3>
                    <p>
                        Authenticate, filter and trigger the analysis with ease.
                    </p>
                </div>
            </div>
        </div>
        <div class="buttons-wrapper">
            <a href="Sir_Bofi0.6.0.exe" download on:click={showLoadingUntilDownloadStarted}>
                <button class="big-button transparent">
                        <img class="windows_download_button_logo" src="windows_logo.svg" alt="">
                    <span>Download free demo version</span>
                </button>
            </a>
            <div class="spinner-with-button-wrapper">
                {#if !position_available}
                    <button class="{!cfasl ? '' : 'disabled'} colored big-button" on:click={() => gkrlef(1)}>
                        <span>Give me access</span>
                    </button>
                {:else}
                    <button class="{!cfasl ? '' : 'disabled'} colored big-button" on:click={() => purchase()}>
                        <span>Purchase account</span>
                    </button>
                {/if}
                {#if cfasl}
                    <span class="spinner"></span>
                {:else if position_available}
                    <span class="text-glow">Available</span>
                {/if}
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
                            <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="37"
                                 viewBox="0 0 44 37"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z"
                                      fill="#02FF00"/>
                            </svg>
                        </div>
                        <p class="tokenomics-text">Staking | Profit share | Buy Back</p>
                    </div>
                    <div class="tokenomics-text-container">
                        <div class="utilities-title-wrapper">
                            <h2>Planned Utilities</h2>
                            <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="37"
                                 viewBox="0 0 44 37"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z"
                                      fill="#02FF00"/>
                            </svg>
                        </div>
                        <p class="tokenomics-text">Platform token-gating</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="secondary-container relative">
        <div class="readme-text-container">
            <div class="text-section" id="readme">
                <img class="logo as-title" src="sir_bofi.svg" alt="">
                <h2>Introduction</h2>
                <p>
                    This platform is advertised to hand-picked communities. The platform “Sir Bofi” finds price
                    differences (potential arbitrage trading opportunities) over 600+ exchanges and 9000+
                    cryptocurrencies in <span class="hl">matter of seconds!</span> It is a co-pilot for knowledgeable
                    crypto-dedicated individuals looking to advance their markets overview and lurk in the shadows for
                    opportunities (<a class="inline" target="_blank" href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a>).
                    I am willing to provide the native version of the software through one time fee thanks to releasing
                    the platform without using hosting, domain names or external recurring fee services.
                </p>
            </div>
            <div class="text-section">
                <h2>Confirmed safety</h2>
                <h3>Microsoft EV Code signing certificate</h3>
                <p>
                    We have successfully acquired the Microsoft Windows EV Code Signing Certificate and we have
                    signed the application with it. This proves that the application is from a <span class="hl">known
                    and trusted publisher!</span>
                </p>
                <h3>Availability</h3>
                <p>
                    Windows portable executable version of the application is <span class="hl">signed and available for
                    download</span> - Demo version on this very webpage and the premium version after purchasing an
                    account. MacOS version is currently not available due to the inexistent collaboration from
                    Apple’s side on even successfully beginning the validation process of applying for the Code
                    Signing certificate for their operating systems.
                </p>
            </div>
            <div class="text-section">
                <h2><span class="hl">Claiming process</span></h2>
                <p>
                    In case there is a position available you can purchase it from the button “Purchase account”. After
                    that you'll receive an email with your personal account setup details and the download link to the
                    full version of Sir Bofi. Thats it - you have it :D.
                </p>
            </div>
            <div class="text-section">
                <h2>Inspiration</h2>
                <p>
                    Sir Bofi was inspired from many cases of people like SBF
                    <span class="hl">
                    <a class="inline"
                       target="_blank"
                       href="https://www.forbes.com/sites/stevenehrlich/2021/10/06/the-richest-under-30-in-the-world-all-thanks-to-crypto">
                        getting rich from abnormal opportunities
                    </a></span> of
                    trading price aribtrage. In most of those types of cases they discovered the opportunities
                    accidentally and thanks to working closely with markets daily. The name Sir Bofi comes from initial
                    name Cyrbofi which is a combination of letters from the phrase “[C]r[y]pto a[rb]itrage
                    [o]pportunity [fi]nder”.
                </p>
            </div>

            <div class="spinner-with-button-wrapper">
                {#if !position_available}
                    <button class="{!cfasl ? '' : 'disabled'} big-button colored" on:click={() => gkrlef(1)}>
                        <span>Give me access</span>
                    </button>
                {:else}
                    <button class="{!cfasl ? '' : 'disabled'} big-button colored" on:click={() => purchase()}>
                        <span>Purchase account</span>
                    </button>
                {/if}
                {#if cfasl}
                    <span class="spinner"></span>
                {/if}
            </div>
        </div>
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
            © 2023 RumVessel. All rights reserved.
        </p>
    </div>
</main>

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
        font-size: clamp(24px, 5vw, 80px) !important;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 20px;
    }

    h2 {
        font-size: 60px;
        font-weight: 600;
    }

    h2.xxl {
        font-size: clamp(26px, 4vw, 80px) !important;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    h2 + h3 {
        margin-top: 0;
    }

    h3 {
        margin-top: 25px;
        font-size: 24px;
        font-weight: 600;
    }

    .text-glow {
        color: var(--glow-green);
    }

    a.inline {
        text-decoration: underline;
        text-decoration-thickness: 1px;
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

    .top-bar {
        position: fixed;
        background-color: hsla(0, 0%, 9%, 0.6);
        backdrop-filter: blur(10px);
        min-height: 80px;
        width: 100vw;
        z-index: 99;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--slight);
        padding: 0 40px;
    }

    .top-bar .nav .nav-items {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 60px;
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

    *::selection {
        background-color: var(--light-green);
    }

    .logo {
        width: 64px;
        height: 64px;
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

    .logo.as-title {
        margin: 0 auto 20px;
        width: 48px;
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

    .spinner {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--light-green);
        border-top: 2px solid var(--glow-green);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    .primary-container {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        background: url("/blurred.png") fixed;
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

    .secondary-container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 140px;
        padding: 100px 50px;
        transition: all 0.5s ease;
        z-index: 20;
    }

    .secondary-container.dark {
        background-color: var(--dark);
        color: var(--light);
    }

    .secondary-container {
        background: linear-gradient(115deg, var(--dark) 0%, #0c0c0c 100%);
        color: var(--light);
    }

    .readme-text-container {
        width: 960px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 0;
        overflow: hidden;
        padding: 60px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        background-color: var(--sdark);
        scroll-margin-top: 200px;
    }

    .readme-text-container .text-section h2 {
        font-size: 30px;
    }

    .readme-text-container .text-section h3 {
        font-size: 22px;
    }

    .readme-text-container .text-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px 20px;
    }

    .landing-title-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 60vw;
        margin: 0 0 100px 5vw;
        flex: 6;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .windows_download_button_logo {
        aspect-ratio: 1/1;
        height: 12px;
    }

    .spinner-with-button-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }

    .readme-text-container .spinner-with-button-wrapper {
        align-self: flex-end;
    }

    .main-points-section {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
        padding-bottom: 200px !important;
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
        min-width: 0;
    }

    @media screen and (max-width: 1280px) {
        video {
            max-width: 80%;
        }
    }

    @media screen and (max-width: 1080px) {

        .secondary-container {
            padding: 40px 20px;
        }

        .secondary-container .readme-text-container {
            width: 100%;
            padding: 40px;
            box-shadow: unset;
        }

        p {
            font-size: 16px;
        }
    }

    .burger {
        visibility: hidden;
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {

        .top-bar .nav .nav-items { /* Do net delete - is actually used */
            gap: 20px;
        }

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
        .burger {
            visibility: visible;
            margin-right: 20px;
        }

        .top-bar {
            padding: 0 20px;
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
        }

        .top-bar .nav .nav-items a button {
            padding: 20px;
        }

        .main-points-section h3 {
            margin-bottom: 16px;
        }

        hr.big {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {

        button {
            padding: 12px;
        }

        h1 {
            margin-bottom: 30px;
        }

        video {
            max-width: 100%;
        }

        .buttons-wrapper {
            justify-content: center;
        }

        .primary-container-content-wrapper {
            justify-content: center;
            text-align: center;
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

        .secondary-container .readme-text-container {
            padding: 20px;
            border-radius: 0;
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
