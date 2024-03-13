<main class="readme-text-container">
    <div class="text-section" id="readme">
        <img class="logo as-title" src="sir_bofi.svg" alt="">
        <h2>Introduction</h2>
        <p>
            This platform is advertised to hand-picked communities. The platform “Sir Bofi” finds price
            differences (potential arbitrage trading opportunities) over 600+ exchanges and 9000+
            cryptocurrencies in <span class="hl">matter of seconds!</span> It is a co-pilot for knowledgeable
            crypto-dedicated individuals looking to advance their markets overview and lurk in the shadows for
            opportunities (<a class="inline" target="_blank"
                              href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a>).
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
                    download</span> - You can try out
            <a class="inline" href="https://demo.sirbofi.com" target="_blank">free demo
                application online</a> and the premium version after purchasing an
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
        <PurchaseCta {position_available} {cfasl} {gkrlef} {purchase} colored={true}/>
    </div>
</main>

<script>
    import PurchaseCta from "./widgets/PurchaseCta.svelte";

    export let position_available = false;
    export let cfasl = false;
    export let gkrlef = (uid) => {
    };
    export let purchase = () => {
    };
</script>

<style>

    p {
        font-size: 20px;
    }

    a.inline {
        color: var(--glow-green);
    }

    .readme-text-container .spinner-with-button-wrapper {
        align-self: flex-end;
    }

    .readme-text-container {
        max-width: 960px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 0;
        overflow: hidden;
        padding: 60px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
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

    .logo.as-title {
        margin: 0 auto 20px;
        width: 48px;
    }

    h2 + h3 {
        margin-top: 0;
    }

    a.inline {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }

    @media screen and (max-width: 1080px) {
        .readme-text-container {
            width: 100%;
            padding: 40px;
            box-shadow: unset;
        }
    }

    @media screen and (max-width: 500px) {

        .spinner-with-button-wrapper {
            flex-direction: column;
            justify-content: center;
            max-height: min-content;
        }

        .readme-text-container {
            padding: 20px;
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


</style>