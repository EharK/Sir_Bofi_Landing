<script>
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
        }, 1864);
        return false;
    }
    const purchase = function () {
        window.location.href = "https://buy.stripe.com/test_5kAaHH8MCg9Y4U07st";
    }
</script>

<main>
    <div id="landing" class="landing-wrapper">
        <div class="landing-title-wrapper row">
            <img class="logo" src="sir_bofi.svg" alt="">
            <h1 class="xxl">
                Sir Bofi
            </h1>
        </div>
        <div class="pad">
            <div class="col">
                <p class="text">
                    Sir Bofi is a tool for crypto-dedicated individuals looking to advance their markets overview
                    and
                    <span class="hl">lurk in the shadows for opportunities.</span> Demonstration:
                </p>
            </div>
            <div class="col">
                <video controls controlslist="nodownload">
                    <source src="src/assets/sir_bofi_demo.mp4" type="video/mp4">
                </video>
                <div class="buttons-wrapper">
                    {#if !position_available}
                        <button class="{!cfasl || 'disabled'}" on:click={() => gkrlef(1)}>
                            <span>Check for availability</span>
                        </button>
                    {:else}
                        <button class="{!cfasl || 'disabled'}" on:click={() => purchase()}>
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
    <div id="readme" class="secondary-container">
        <a href="#readme" class="hovering-icon-container">
            <span class="hovering-icon-wrapper">
                <button class="bones with-bottom-icon">
                    <span>READ ME FIRST</span>
                    <span>↓</span>
                </button>
            </span>
        </a>
        <div class="readme-text-container">
            <div class="text-section">
                <img class="logo black as-title" src="sir_bofi.svg" alt="">
                <h2>Introduction</h2>
                <p>
                    Chances of you arriving here are very low as the platform is advertised to limited audiences. The
                    platform “Sir Bofi” is <span class="hl">not a money printer!</span> It is merely a co-pilot for
                    knowledgeable crypto-dedicated individuals looking to advance their markets overview and lurk in the
                    shadows for opportunities (<span class="hl"><a class="inline"
                                                                   href="#documentation">Documentation</a></span>).
                    I am willing to provide this software through one time fee thanks to releasing the platform without
                    using hosting, domain names or external recurring fee services. I am also completely aware of
                    possible diminishing of opportunities related to over-populating the platform - for that reason
                    <span
                            class="hl">I am only allowing a specific amount of dedicated users on the platform.</span>
                </p>
            </div>
            <div class="text-section">
                <h2>Before using the platform!</h2>
                <h3>Crucial to know</h3>
                <p>
                    The platform uses tons of raw data including <span class="hl">9000+ different cryptos and 600+ exchanges.</span>
                    Not all of the exchanges like to show legit data. <span class="hl"> Thankfully, I have filtered them for you.</span>
                    I have personally listed exchanges that have 4+ out of 5 rating on apps store together with an
                    appropriate amount of downloads - the ones listed under advanced settings (also include 3-4
                    decentralised exchanges to give more depth to the results). Many of them either modify or
                    strongly
                    delay
                    their market data. For that reason it is important you know what you are doing and apply filters
                    accordingly. It is very easy to stumble upon false positives and <span class="hl">you need to know enough about crypto</span>
                    industry to differentiate or filter out true positives amongst them.
                </p>
                <p>
                    Anyways, more concrete points you should acknowledge:
                </p>
                <ol>
                    <li>
                        <p>
                        <span class="bold">Number of market pairs to check is limited <span
                                class="hl">for a reason</span></span> - it is the amount of pairs checked per every
                            crypto checked and sends out a seperate request every time which might overflow the network.
                            If any of you finds a workaround - it is not recommended to go over the limits in your very
                            own interest as it might harm the entire system robbing you of your own opportunities.
                        </p></li>
                    <li><p>
                        <span class="bold">Be sure to filter trading category (spot / perpetuals)</span> - <span
                            class="hl">I left this open
                for
                you</span> to select whatever combination you like in case I personally just don’t know enough about
                        crypto to understand opportunities going hand in hand with both of these categories.
                    </p></li>
                    <li><p>
                        <span class="bold">Exchange filters under advanced settings are also there for a reason</span> -
                        Feel free to cherry pick amongst those however you like. Disabling that filters automatically
                        includes <span class="hl">all 600+ exchanges</span> (which are not all trustworthy) in your
                        results.
                    </p></li>
                </ol>
            </div>
            <div id="documentation" class="text-section">
                <h2>Documentation</h2>
                <h3>Logic</h3>
                <p>
                    Platform scrapes 9000+ cryptos, 600+ exchanges and hundreds of trading pairs per crypto, goes over
                    <span class="hl">every possible price difference combination</span>, calculates price differences
                    and provides those as
                    arbitrage opportunities <span class="hl">with corresponding market links attached.</span>
                </p>
                <h3>Basic filters</h3>
                <ol>
                    <li>
                        <p>
                            <span class="bold">Start analyzing from </span> - Pulled cryptos are ordered by their
                            market cap. As BTC has the biggest market cap in the market it is the first to be checked.
                            Based on that you can choose from what rank (ordered by market cap) to start checking from.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="bold">Number of cryptos to check</span> - Taking into account the previous
                            filter - how many cryptos to scan from that point on.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="bold">Market pairs check offset</span> - In case there is a crypto with a a lot
                            of trading pairs and exchanges related you might need to execute multiple scans going
                            through different ranges of the market pairs.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="bold">Minimum/maximum profit margin</span> - this is an option to filter out
                            illogical arbitrage opportunities. For example if you do not filter the results to be from
                            trustworthy exchanges and with specifications that make the arbitrage possible it can return
                            results with unrealistically high profit margins.
                        </p>
                    </li>
                </ol>
                <h3>Advanced filters</h3>
                <ol>
                    <li>
                        <p>
                            <span class="bold">Trading categories </span> - You can choose to filter out either spot
                            trading or perpetual trading categories. Not sure why you’d need both but I left it open as
                            an option :D.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="bold">Quote symbols</span> - This filters out what kind of price quote
                            currencies to accept into the arbitrage trading pairs. For example if the algorithm is
                            analysing BTC and only USD quote symbol is selected then it will only compare BTC/USD
                            trading pair prices.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="bold">Exchanges</span> - This is one of the most important filters. If this
                            filter is disabled the all 600+ exchanges are analysed - many of them are not trustworthy.
                            The ones listed in the filters should be trustworthy though as they have minimum 4/5 ratings
                            on their apps and an appropriate amount of downloads.
                        </p>
                    </li>
                </ol>
            </div>
            <div class="text-section">
                <h2><span class="hl">Claiming process</span></h2>
                <p>
                    In case there is a position available you can purchase it from the button “Purchase account”. After
                    that I will manually send you a completely text-based email to make sure the initial reach out does
                    not end up in your spam. Then I will manually create an account for you and send the credentials
                    together with the software to your email (<span class="hl">credential will be sent using a disposable link that shows
                    the data only once</span>). Thats it - you have it :D.
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
                    name Cyrbofi. Cyrbofi is a combination of letters from the phrase “[C]r[y]pto a[rb]itrage
                    [o]pportunity [fi]nder”.
                </p>
            </div>
        </div>
        <div class="back-up-button-wrapper">
            <a href="#landing" class="back-up-button">
                <p>↑</p>
            </a>
        </div>
    </div>
</main>

<style>

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .logo {
        width: 64px;
        height: 64px;
    }

    .logo.black {
        filter: invert(0.9);
    }

    .logo.as-title {
        margin: 0 auto 20px;
        width: 48px;
    }

    .back-up-button-wrapper {
        position: sticky;
        bottom: 50px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 20px;
    }

    .back-up-button {
        background-color: var(--sdark);
        outline: 1px solid var(--sglow-green);
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
        outline: 1px solid var(--glow-green);
        background-color: var(--light-green);
        color: var(--sdark);
        transform: translateY(-5px);
    }

    .back-up-button:active {
        cursor: default;
        opacity: 0.5;
    }

    .landing-wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 12vh 0 100px 0;
        gap: 20px;
        flex-direction: column;
        background: url("./assets/blurred.png");
        background-size: cover;
        z-index: 10;
    }

    .landing-wrapper:hover {

    }

    .landing-wrapper h1,
    .landing-wrapper h2,
    .landing-wrapper h3,
    .landing-wrapper p {
        color: var(--light);
        text-align: start;
    }

    .pad {
        height: max-content;
        width: 60vw;
        min-width: 400px;
        max-width: 500px;
        min-height: 0;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: linear-gradient(-45deg, var(--dark) 0%, #0d0d0d 100%);
        outline: var(--sglow-green) 1px solid;
        border-radius: 8px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease;
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
    }

    video {
        border-radius: 8px;
        filter: brightness(0.5);
        transition: all 0.5s ease;
    }

    video:hover {
        filter: brightness(0.8);
    }

    video:focus {
        filter: brightness(1);
    }

    @media screen and (max-height: 900px) {
        .text {
            font-size: 14px;
        }

        video {
            max-width: 300px;
        }

        .landing-wrapper {
            padding: 5vh 0 100px 0;
        }

        @media screen and (max-height: 700px) {

            .pad {
                overflow-y: auto;
            }

            .pad::-webkit-scrollbar {
                width: 0;
            }

            @media screen and (min-width: 960px) {
                .pad {
                    flex-direction: row;
                    justify-content: space-around;
                    max-width: 800px;
                    padding: 40px;
                }

                .landing-wrapper {
                    padding: 10px 20px 100px 20px;
                }

                video {
                    max-width: 80%;
                }
            }
        }
    }

    .pad:hover {
        outline: var(--glow-green) 1px solid;
        box-shadow: 0 0 40px rgba(33, 255, 35, 0.15);
    }

    .pad .buttons-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }

    .pad .spinner {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--light-green);
        border-top: 2px solid var(--glow-green);
        animation: spin 1s ease-in-out infinite;
    }

    .pad span.hl {
        background-color: var(--ghighlight);
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    .secondary-container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        min-height: 100vh;
        padding: 100px 50px;
        color: var(--dark);
        transition: all 0.5s ease;
    }

    .secondary-container .readme-text-container {
        width: 960px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 0;
        overflow: hidden;
        padding: 60px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        background-color: var(--light);
        scroll-margin-top: 200px;
    }

    .secondary-container .readme-text-container .text-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px 20px;
    }

    .hovering-icon-container {
        position: absolute;
        top: -100px;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
        z-index: 10;
        cursor: pointer;
    }

    .hovering-icon-wrapper {
        width: 200px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }
    }

    p {
        font-size: 20px;
        line-height: 1.5;
        text-align: justify;
    }

    h1 {
        justify-self: center;
        font-size: 40px;
        font-weight: 700;
    }

    h1.xxl {
        font-size: 50px;
        font-weight: 700;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
    }

    h3 {
        font-size: 24px;
        font-weight: 600;
    }

    span.hl {
        background-color: var(--highlight);
        border-radius: 4px;
    }

    .bold {
        font-weight: 600;
    }

    ol {
        list-style-type: decimal;
        padding-left: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .text-glow {
        color: var(--glow-green);
    }

    a.inline {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }

    @media screen and (max-width: 960px) {

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

        @media screen and (max-width: 500px) {

            h1 {
                margin-bottom: 30px;
            }

            .pad {
                min-width: 340px;
                background: transparent;
                box-shadow: none;
                outline: 0;
                padding: 20px;
                width: 100%;
                margin-bottom: 100px;
                align-items: center;
            }

            .pad .col {
                align-items: center;
                justify-content: center;
            }

            .pad:hover {
                outline: 0;
                box-shadow: none;
            }

            .pad p,
            .pad .text {
                text-align: center;
                filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
            }

            .landing-wrapper {
                padding: 20px 0;
            }

            .secondary-container {
                padding: 0;
            }

            .secondary-container .readme-text-container {
                padding: 20px;
                border-radius: 0;
            }

            @media screen and (max-width: 400px) {

                .back-up-button-wrapper {
                    padding: 10px 20px;
                }

                @keyframes bounce {
                    0% {
                        transform: translateY(0);
                    }
                    80% {
                        transform: translateY(-40px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            }
        }
    }
</style>
