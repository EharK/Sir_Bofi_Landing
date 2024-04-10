<div id="landing" class="primary-container">
    <div class="primary-container-content-wrapper">
        <div class="landing-title-container">
            <h1 class="xxl">
                Find crypto arbitrage possibilities in <span class="hl green">seconds</span>
            </h1>
            <div class="buttons-wrapper">
                <a href="#demonstration">
                    <button class="big-button transparent">
                        Tell Me More
                    </button>
                </a>
                <a href="https://app.sirbofi.com/" target="_blank">
                    <button class="big-button colored">
                        <span>Launch App</span>
                    </button>
                </a>
            </div>
        </div>
        <div class="landing-fidget-container">
            <Director/>
        </div>
    </div>
</div>

<script>
    import Director from "./Director.svelte";
</script>

<style>

    .buttons-wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;
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

    .primary-container {
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


    .landing-title-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 50vw;
        margin: 0 0 100px 5vw;
        flex: 6;
    }

    h1.xxl {
        font-size: clamp(24px, 4vw, 80px) !important;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 20px;
    }

    @media screen and (max-width: 1280px) {

        .primary-container-content-wrapper {
            flex-direction: column;
            gap: 100px;
            padding: 30vh 0 20vh;
            width: 100%;
        }

        .landing-title-container {
            max-width: 80%;
        }

        h1.xxl {
            font-size: clamp(24px, 6vw, 80px) !important;
        }
    }

    @media screen and (max-width: 700px) {

        .primary-container {
            min-height: 0;
        }

        .primary-container-content-wrapper {
            padding: 25vh 0 30vh;
        }

        .landing-fidget-container {
            display: none;
        }

        .landing-title-container {
            margin: 0;
            padding: 0;
            width: 100%;
        }

        h1.xxl {
            font-size: clamp(24px, 6vw, 80px) !important;
        }
    }

    @media screen and (max-width: 500px) {

        h1 {
            margin-bottom: 30px;
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

    @media screen and (max-height: 900px) {

        .primary-container {
            padding: 5vh 0 0 0;
        }

    }
</style>