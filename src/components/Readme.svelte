<main class="readme-text-container">
    <div class="text-section" id="readme">
        <img class="logo as-title" src="sir_bofi.svg" alt="">
        <h2>Introduction</h2>
        <p>
            Sir Bofi platform as the fastest in the industry arbitrage platform pours opportunities for
            its users. The platforms covers over 600 exchanges both CEX & DEX, gets trading information of over
            9000 cryptocurrencies and is capable of calculating thousands of price differences amongst every combination
            of trading pairs while applying advanced user-defined filters. (<a class="inline" target="_blank"
                              href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a>)
        </p>
    </div>
    <div class="text-section">
        <h2>Confirmed Safety</h2>
        <h3>Microsoft EV Code Signing Certificate</h3>
        <p>
            During our endavours Sir Bofi Platform acquired the Microsoft Windows EV Code Signing Certificate. This - being
            <a class="inline" href="https://signmycode.com/blog/what-is-ev-code-signing-certificate-how-does-it-work
            #:~:text=one%20of%20the%20most%20advanced%20and%20integrity%2Dassuring%20mechanisms" target="_blank">
                "one of the most advanced and integrity-assuring mechanisms"</a> -
            proves that the application is safe and from a <span class="hl">known/trusted publisher!</span>
        </p>
    </div>
    <div class="text-section">
        <h2>Availability</h2>
        <p>
            Lifetime Premium Accounts to the native application are not available anymore. We have now turned our focus
            entirely onto building a web platform with WalletConnect Authentication and Subscription / Token Gated access.
            In the meantime you can <a class="inline" href="https://demo.sirbofi.com" target="_blank">Try Free Demo</a>.
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
        <a href="https://app.sirbofi.com/" target="_blank">
            <button class="big-button colored">
                <span>Launch App</span>
            </button>
        </a>
    </div>
</main>

<script>
</script>

<style>

    p, h2, h3 {
        color: var(--slight);
    }

    p {
        font-size: clamp(12px, 1.8vw, 18px);
    }

    .big-button.colored {
        margin-top: 60px;
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