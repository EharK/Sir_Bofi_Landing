<script>
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
        }, Math.floor(Math.random() * 3000) + 500);
        return false;
    }
    const purchase = function () {
        // private_cache
        return true;
    }

    const typeWriterIterator = function (str) {
        let i = 0;
        const speed = 50;
        const str_length = str.length;

        const typeWriterInterval = setInterval(() => {
            if (i < str.length) {
                caveman_title_iterable_part += str.charAt(i);
                i++;
            } else {
                clearInterval(typeWriterInterval);
            }
        }, speed);
    }

    const caveman_title_last_word_variants = ["opportunities", "changes", "potential"]

    const wordIterator = function (i) {
        const speed = 4000;
        const list_len = caveman_title_last_word_variants.length;
        let word = caveman_title_last_word_variants[i];
        caveman_title_iterable_part = word.charAt(0);
        typeWriterIterator(word.slice(1));
        setTimeout(() => {
            i === list_len - 1 ? wordIterator(0) : wordIterator(i + 1);
        }, speed);
    }

    wordIterator(0);
</script>

<main>
    <div id="landing" class="primary-container">
        <div class="landing-title-container">
            <div class="landing-title-wrapper row">
                <img class="logo" src="sir_bofi_new.svg" alt="">
                <h1 class="xxl">
                    Sir Bofi
                </h1>
            </div>
            <div class="row caveman-title">
                <h2>{ caveman_title } </h2>
                <h2 class="hl">{caveman_title_iterable_part}</h2>
            </div>
        </div>
        <div class="row landing-pads">
            <div class="pad">
                <div class="col">
                    <h3>Private account</h3>
                    <p class="text">
                        Opportunities from 9000+ currencies and 600+ exchanges
                        at your fingertips.
                        <span class="hl">Limited accounts available.</span>
                    </p>
                </div>
                <div class="buttons-wrapper">
                    {#if cfasl}
                        <span class="spinner"></span>
                    {:else if position_available}
                        <span class="text-glow">Available</span>
                    {/if}
                    {#if !position_available}
                        <button class="{!cfasl ? '' : 'disabled'} coming-soon" on:click={() => gkrlef(1)}>
                            <span>Coming soon</span>
                        </button>
                    {:else}
                        <button class="{!cfasl ? '' : 'disabled'}" on:click={() => purchase()}>
                            <span>Purchase account</span>
                        </button>
                    {/if}
                </div>
            </div>
            <!--div class="pad">
                <div class="col">
                    <h3>Tailored software</h3>
                    <p class="text">
                        Reach out to me in case you have a tailored version of this software in mind!
                    </p>
                    <p class="text">
                        <span class="hl">Starting from 2499€.</span>
                    </p>
                </div>
                <div class="col">
                    <div class="buttons-wrapper">
                        <button>
                            <a href="mailto:sirbofi@gmail.com">Contact</a>
                        </button>
                    </div>
                </div>
            </div-->
        </div>
        <div class="col center">
            <h2>Demonstration</h2>
            <video controls controlslist="nodownload">
                <source src="src/assets/sir_bofi_demo.mp4" type="video/mp4">
                <track kind="captions" default src="">
            </video>
            <div class="spinner-with-button-wrapper">
                {#if cfasl}
                    <span class="spinner"></span>
                {:else if position_available}
                    <span class="text-glow">Available</span>
                {/if}
                {#if !position_available}
                    <button class="{!cfasl ? '' : 'disabled'} big-button coming-soon" on:click={() => gkrlef(1)}>
                        <span>Coming soon</span>
                    </button>
                {:else}
                    <button class="{!cfasl ? '' : 'disabled'} big-button" on:click={() => purchase()}>
                        <span>Purchase account</span>
                    </button>
                {/if}
            </div>
        </div>
        <a href="#readme" class="hovering-icon-container">
        <span class="hovering-icon-wrapper">
            <span class="col">
                <span>READ ME FIRST</span>
                <span>↓</span>
            </span>
        </span>
        </a>
        <div class="ambient-wrapper">
            <div class="ambient">
                @
            </div>
        </div>
    </div>
    <div class="secondary-container main-points-section benefits">
        <div class="section">
            <h1>What is Sir Bofi</h1>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <path d="M177 177H64.0667C49.692 177 42.5046 177 37.0143 174.202C32.1847 171.742 28.2582 167.816 25.7975 162.986C23 157.495 23 150.308 23 135.933V23M125.667 82.8889V142.778M57.2222 108.556V142.778M159.889 40.1111V142.778M91.4444 57.2222V142.778"
                              stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>Arbitrage</h2>
                    <p>
                        Opportunities found in seconds between 9000+ currencies.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <path d="M183.333 70.8334C183.333 100.75 159.083 125 129.167 125C127.75 125 126.25 124.917 124.833 124.833C122.75 98.4167 101.583 77.2499 75.1666 75.1666C75.0832 73.7499 75 72.25 75 70.8334C75 40.9167 99.25 16.6667 129.167 16.6667C159.083 16.6667 183.333 40.9167 183.333 70.8334Z"
                              stroke="#292D32" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M125 129.167C125 159.083 100.75 183.333 70.8333 183.333C40.9166 183.333 16.6666 159.083 16.6666 129.167C16.6666 99.25 40.9166 75 70.8333 75C72.25 75 73.7499 75.0832 75.1665 75.1666C101.583 77.2499 122.75 98.4167 124.833 124.833C124.917 126.25 125 127.75 125 129.167Z"
                              stroke="#292D32" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M63.5 121.833L70.8333 108.333L78.1667 121.833L91.6667 129.167L78.1667 136.5L70.8333 150L63.5 136.5L50 129.167L63.5 121.833Z"
                              stroke="#292D32" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>Massive data</h2>
                    <p>
                        Trading pairs data from 600+ exchanges at your fingertips.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <path d="M175 100C175 141.422 141.422 175 100 175C58.5787 175 25 141.422 25 100C25 58.5787 58.5787 25 100 25C141.422 25 175 58.5787 175 100Z"
                              stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>Easy to use</h2>
                    <p>
                        Authenticate, filter and trigger the analysis.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="secondary-container main-points-section how-to-use">
        <div class="section">
            <h1>Simple to use</h1>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <path d="M34 70.6666C34 58.5164 43.8498 48.6666 56 48.6666H144C156.151 48.6666 166 58.5164 166 70.6666V129.333C166 141.484 156.151 151.333 144 151.333H56C43.8498 151.333 34 141.484 34 129.333V70.6666Z"
                              stroke="#e6e6e6" stroke-width="10"/>
                        <path d="M34 85.3333H166" stroke="#e6e6e6" stroke-width="10"/>
                        <path d="M114.667 122H136.667" stroke="#e6e6e6" stroke-width="10" stroke-linecap="round"/>
                    </svg>
                    <h2>Purchase</h2>
                    <p>
                        Purchase private access,
                        receive software and credentials.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <path d="M75.0585 149.187C87.2308 156.396 93.3172 160 100 160C106.683 160 112.769 156.396 124.941 149.187L129.059 146.749C141.231 139.541 147.317 135.936 150.659 130C154 124.064 154 116.855 154 102.438M152.888 76C152.396 73.7655 151.685 71.8228 150.659 70C147.317 64.0634 141.231 60.4592 129.059 53.2508L124.941 50.8127C112.769 43.6042 106.683 40 100 40C93.3172 40 87.2308 43.6042 75.0585 50.8127L70.9415 53.2508C58.7692 60.4592 52.683 64.0634 49.3415 70C46 75.9366 46 83.145 46 97.5622V102.438C46 116.855 46 124.064 49.3415 130C50.6996 132.413 52.511 134.44 55 136.481"
                              stroke="#e6e6e6" stroke-width="10" stroke-linecap="round"/>
                        <path d="M100 118C109.941 118 118 109.941 118 100C118 90.0589 109.941 82 100 82C90.0589 82 82 90.0589 82 100C82 109.941 90.0589 118 100 118Z"
                              stroke="#e6e6e6" stroke-width="10"/>
                    </svg>
                    <h2>Set up</h2>
                    <p>
                        Download the software,
                        log in with the credentials.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <g clip-path="url(#clip0_1_5)">
                            <mask id="mask0_1_5" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                  width="200" height="200">
                                <path d="M200 0H0V200H200V0Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_1_5)">
                                <path d="M132.397 96.9412C125.8 103.538 100.125 123.346 100.125 123.346M132.397 96.9412C150 79.3382 150 67.6029 150 50C132.397 50 120.662 50 103.059 67.6029M132.397 96.9412L135.185 110.883C137.109 120.502 134.099 130.445 127.162 137.382L120.294 144.25C117.538 147.006 112.909 146.358 111.017 142.95L100.125 123.346M100.125 123.346L76.6544 99.875M103.059 67.6029L76.6544 99.875M103.059 67.6029L89.117 64.8146C79.4982 62.8908 69.5543 65.9016 62.6181 72.8378L55.7505 79.7054C52.994 82.4619 53.6423 87.0906 57.05 88.9835L76.6544 99.875M123.596 76.4073L117.728 82.2749M50.25 149.75L70.1544 145.769C75.6398 144.672 79.5882 139.856 79.5882 134.262V132.147C79.5882 125.666 74.3342 120.412 67.8529 120.412H65.7383C60.1443 120.412 55.328 124.36 54.2309 129.846L50.25 149.75Z"
                                      stroke="#e6e6e6" stroke-width="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5">
                                <rect width="200" height="200" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h2>Launch</h2>
                    <p>
                        Apply needed filters,
                        trigger the analysis,
                        find results in seconds.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="readme" class="secondary-container">
        <div class="readme-text-container">
            <div class="text-section">
                <img class="logo black as-title" src="sir_bofi_new.svg" alt="">
                <h2>Introduction</h2>
                <p>
                    Chances of you arriving here are very low as the platform is advertised to hand-picked communities.
                    The platform “Sir Bofi” is <span class="hl">not a money printer!</span> It is a co-pilot for
                    knowledgeable crypto-dedicated individuals looking to advance their markets overview and lurk in the
                    shadows for opportunities (<span class="hl"><a class="inline" target="_blank"
                                                                   href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a></span>).
                    I am willing to provide this software through one time fee thanks to releasing the platform without
                    using hosting, domain names or external recurring fee services. I am also aware of
                    possible diminishing of opportunities related to over-populating the platform - for that reason
                    <span
                            class="hl">I am only allowing a specific amount of dedicated users on the platform and will
                        increase the price in relation to the amount of users added.
                    </span>
                </p>
            </div>
            <div class="text-section">
                <h2>Before using the platform!</h2>
                <h3>Your safety</h3>
                <p>
                    As I am not a big tech company I have not gone through the process of signing the application
                    with special certifications or buying them from Apple or Microsoft. For that reason you might
                    receive a warning from your operating system that the application is suspicious. <span
                        class="hl">I completely understand this sounds concerning :D BUT </span> - it is
                    what Apple and Microsoft do to applications that are simply not signed by their (not easily
                    acquirable)
                    certificates. Feel free to run the application through any antivirus software or test it any other
                    way you like. What I can do is provide you with the results from <span class="hl">VirusTotal</span>
                    - a platform that checks the application with 50+ antivirus software.

                    <span class="hl">You can
                    check the results <a
                                href="https://www.virustotal.com/gui/file/38afa7d0826366889091850ac31d7f10350304533d374be6c179b0b340924d82/detection"
                                class="inline" target="_blank">here.</a></span>
                </p>
                <h3>Crucial to know</h3>
                <p>
                    The platform uses tons of raw data including <span class="hl">9000+ different cryptos and 600+ exchanges.</span>
                    Not all of the exchanges like to show legit data. <span class="hl"> Thankfully, I have filtered them for you.</span>
                    I have personally listed exchanges that have 4+ out of 5 rating on apps store together with an
                    appropriate amount of downloads - the ones listed under advanced settings (also include 3-4
                    decentralised exchanges to give more depth to the results). Many of others either modify or
                    strongly
                    delay
                    their market data. For that reason it is important you know what you are doing and apply filters
                    accordingly. It is very easy to stumble upon false positives and <span class="hl">you need to know enough about crypto</span>
                    to differentiate or filter out true positives amongst them.
                </p>
                <p>
                    Anyways, more concrete points you should acknowledge:
                </p>
                <ol>
                    <li>
                        <p>
                        <span class="bold">Number of market pairs to check is limited <span
                                class="hl">for a reason</span> (up to 1000)</span> - it is the amount of trading pairs
                            checked per every
                            crypto. Cryptos are fetched with one request yet every crypto can have thousands of trading
                            pairs
                            and trading pairs are fetched separately per every crypto. In case any of you finds a
                            workaround
                            - it is not recommended to go over the limits in your very own interest as it might harm
                            the entire system robbing you of your own opportunities.
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
                <h3>Availability</h3>
                <p>
                    I am working on building this application for macOS and Linux but for now it is only available for
                    Windows. The tech stack of the application is Nuxt, Electron and a classic Node back-end API server.
                </p>
            </div>
            <!--div id="documentation" class="text-section">
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
            </div-->
            <div class="text-section">
                <h2><span class="hl">Claiming process</span></h2>
                <p>
                    In case there is a position available you can purchase it from the button “Purchase account”. After
                    that I will manually send you a completely text-based email to make sure the initial reach out does
                    not end up in your spam. Then I will manually create an account for you and send the credentials
                    together with the software download link to your email (<span class="hl">credential will be sent
                    using a disposable link that shows the data only once</span>). Thats it - you have it :D.
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
                {#if cfasl}
                    <span class="spinner"></span>
                {/if}
                {#if !position_available}
                    <button class="{!cfasl ? '' : 'disabled'} big-button dark coming-soon" on:click={() => gkrlef(1)}>
                        <span>Coming soon</span>
                    </button>
                {:else}
                    <button class="{!cfasl ? '' : 'disabled'} big-button dark" on:click={() => purchase()}>
                        <span>Purchase account</span>
                    </button>
                {/if}
            </div>
        </div>
        <div class="back-up-button-wrapper">
            <a href="#landing" class="back-up-button">
                <p style="margin-top: -4px;">↑</p>
            </a>
        </div>
    </div>
    <div class="base-row footer-container">
        <a href="https://t.me/SirBofiportal" target="_blank" class="base-row link-and-icon">
            <svg width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle>
                    <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                          fill="white"></path>
                    <defs>
                        <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37BBFE"></stop>
                            <stop offset="1" stop-color="#007DBB"></stop>
                        </linearGradient>
                    </defs>
                </g>
            </svg>
            Telegram
        </a>
        <p class="xs-text">
            © 2023 RumVessel. All rights reserved.
        </p>
    </div>
</main>

<style>

    .xs-text {
        font-size: 12px;
    }

    .main-points-section.how-to-use {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
    }

    .base-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        max-width: 1920px;
    }

    .link-and-icon {
        gap: 8px;
        cursor: pointer;
    }

    .footer-container {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
        padding: 40px 0;
    }

    .base-col {
        display: flex;
        flex-direction: column;
        max-width: 960px;
        width: 100%;
    }

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .how-to-use h1,
    .benefits h1 {
        padding-bottom: 40px;
    }

    .main-points-row {
        width: 80%;
        padding: 20px;
        gap: 40px;
        color: var(--slight);
    }

    .point-pad {
        align-items: center;
        padding: 20px 40px 80px 40px;
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        filter: grayscale(0.6);
        outline: hsla(0deg, 0%, 90%, 0.25) 1px solid;
        border-radius: 8px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease;
    }

    .point-pad:hover {
        filter: grayscale(0);
        outline: #99ff99 1px solid;
        box-shadow: 0 0 40px rgba(33, 255, 35, 0.15);
    }

    .point-pad svg {
        margin-bottom: 20px;
    }

    .point-pad path {
        stroke: var(--slight);
        transition: all 0.3s ease;
    }

    .point-pad:hover path {
        stroke: var(--glow-green);
        filter: drop-shadow(0 0 10px var(--sglow-green));
    }

    .point-pad p {
        text-align: center;
    }

    .spinner-with-button-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }

    #readme .spinner-with-button-wrapper {
        align-self: flex-end;
    }

    h2.hl {
        background-color: var(--ghighlight);
        padding: 0 5px;
        margin-left: -5px;
        border-radius: 4px;
    }

    h3 {
        font-size: 28px !important;
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

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .landing-pads {
        gap: 40px;
    }

    .landing-title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .landing-title-container h2 {
        color: var(--slight);
        text-align: center !important;
        font-size: 36px;
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
        pointer-events: none;
        bottom: 50px;
        width: 100%;
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
        color: var(--sdark);
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
        filter: brightness(0.7);
        transition: all 0.5s ease;
        max-width: 50%;
    }

    video:hover {
        filter: brightness(0.8);
    }

    video:focus {
        filter: brightness(1);
    }

    .pad {
        height: max-content;
        width: 60vw;
        min-width: 400px;
        max-width: 500px;
        min-height: 400px;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        gap: 20px;
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        filter: grayscale(0.6);
        outline: hsla(0deg, 0%, 90%, 0.25) 1px solid;
        border-radius: 8px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease;
    }

    .pad:hover {
        filter: grayscale(0);
        outline: #99ff99 1px solid;
        box-shadow: 0 0 40px rgba(33, 255, 35, 0.15);
    }

    .pad .buttons-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }

    .spinner {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--light-green);
        border-top: 2px solid var(--glow-green);
        animation: spin 1s ease-in-out infinite;
    }

    .pad span.hl {
        background-color: var(--ghighlight);
        padding: 0 4px;
        margin-left: -4px;
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
        padding: 12vh 0 0 0;
        gap: 100px;
        flex-direction: column;
        justify-content: space-between;
        background: url("./assets/blurred.png") fixed;
        background-size: cover;
        z-index: 10;
    }

    .primary-container :not(.ambient-wrapper) {
        z-index: 10;
    }

    .primary-container h1,
    .primary-container h2,
    .primary-container h3,
    .primary-container p {
        color: var(--light);
        text-align: start;
    }

    .secondary-container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 140px;
        min-height: 100vh;
        padding: 100px 50px;
        color: var(--dark);
        transition: all 0.5s ease;
        background-color: var(--slight);
        z-index: 20;
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
        padding: 30px 20px;
    }

    .hovering-icon-container {
        position: sticky;
        bottom: 0;
        width: 120px;
        height: 60px;
        padding-top: 10px;
        display: flex;
        align-self: flex-end;
        margin-right: 50px;
        align-items: center;
        justify-content: center;
        background-color: var(--dark);
        border-radius: 8px 8px 0 0;
        z-index: 10;
        cursor: pointer;
        transition: all 0.5s ease;
    }

    .hovering-icon-container:active {
        cursor: default;
    }

    .hovering-icon-container:hover .col {
        color: var(--glow-green);
    }

    .hovering-icon-wrapper {
        width: 200px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: bounce 2s infinite;
    }

    .hovering-icon-wrapper .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 10px;
        font-size: 14px;
        color: var(--slight);
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

    h2 + h3 {
        margin-top: 0;
    }

    h3 {
        margin-top: 25px;
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

    @media screen and (max-height: 900px) {
        .text {
            font-size: 14px;
        }

        video {
            max-width: 80%;
        }

        .primary-container {
            padding: 5vh 0 0 0;
        }

        @media screen and (max-height: 700px) {

            .pad {
                overflow-y: auto;
            }

            .pad::-webkit-scrollbar {
                width: 0;
            }

            @media screen and (min-width: 960px) {

                .primary-container {
                    padding: 5vh 20px 0 20px;
                }

                video {
                    max-width: 80%;
                }
            }
        }
    }

    @media screen and (max-width: 1080px) {

        .row {
            flex-direction: column;
        }

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

            .row {
                flex-direction: column;
            }

            .pad {
                min-width: 340px;
                background: transparent;
                box-shadow: none;
                outline: 0;
                padding: 20px 20%;
                width: 100%;
                min-height: max-content;
                margin-bottom: 100px;
                align-items: center;
                filter: unset;
            }

            button:not(.bones) {
                background-color: var(--dark);
            }

            button:not(.bones):hover {
                background-color: var(--light-green);
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

            video {
                max-width: 100%;
            }

            .primary-container {
                padding: 5vh 0 0;
                background-attachment: scroll;
            }

            .secondary-container {
                padding: 0;
            }

            .secondary-container .readme-text-container {
                padding: 20px;
                border-radius: 0;
            }

            .hovering-icon-container {
                position: relative;
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

            @media screen and (max-width: 400px) {

                .back-up-button-wrapper {
                    padding: 10px 20px;
                }
            }
        }
    }
</style>
