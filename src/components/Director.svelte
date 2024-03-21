<main>
    <div class="container fidget">
        <div class="absolute bubble markets">
            600+ markets
        </div>
        <div class="absolute bubble cryptos">
            9000+ Crypto-currencies
        </div>
        <div class="absolute bubble fastest">
            Fastest in the industry
        </div>
        <div class="first">
            <PadWithArrow>Apply subscription</PadWithArrow>
        </div>
        <div class="second">
            <PadWithArrow>Connect wallet</PadWithArrow>
        </div>
        <div class="third">
            <Pad>Reap the markets</Pad>
        </div>
    </div>
</main>

<script>
    import Pad from "./widgets/Pad.svelte";
    import PadWithArrow from "./PadWithArrow.svelte";
    import {onMount} from "svelte";

    const getElementCenter = function (el) {
        const rect = el.getBoundingClientRect();
        return {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2 + window.scrollY
        };
    }
    onMount(
        () => {
            // 3d fidget hover code
            const fidget = document.querySelector('.container.fidget');
            if (fidget) {
                let fidgetCenter = getElementCenter(fidget);
                let windowWidth = window.innerWidth;
                let windowHeight = window.innerHeight;
                window.addEventListener('resize', () => {
                    windowWidth = window.innerWidth;
                    windowHeight = window.innerHeight;
                    fidgetCenter = getElementCenter(fidget);
                });
                document.body.addEventListener('mousemove', (e) => {
                    const x = (e.clientX - fidgetCenter.x) / windowWidth;
                    const y = (e.clientY - fidgetCenter.y) / windowHeight * -1;
                    fidget.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
                });
            }
        }
    );
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        perspective: 1000px;
        transform-style: preserve-3d;
        cursor: default;
    }

    .first {
        transform: translateZ(-50px);
    }

    .second {
        transform: translateZ(0px);
    }

    .third {
        transform: translateZ(50px);
        backdrop-filter: blur(2px) brightness(0.8);
    }

    .bubble {
        padding: 20px 40px;
        background-color: var(--light-green);
        border-radius: 40px;
        text-align: center;
        backdrop-filter: blur(2px) brightness(0.8);
    }

    .bubble.markets {
        transform: translateX(-200px) translateY(250px) translateZ(80px);
    }

    .bubble.cryptos {
        transform: translateX(200px) translateY(250px) translateZ(20px);
    }

    .bubble.fastest {
        transform: translateX(100px) translateY(320px) translateZ(80px);
    }

</style>