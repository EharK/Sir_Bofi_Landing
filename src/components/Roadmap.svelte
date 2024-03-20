<main>
    <div class="relative flex-row roadmap-container">
        <div class="flex-col checkpoints-container left">
            <PadWithArrow direction={"right"}>
                <h2>The Rumors Q4 2023</h2>
                <ul>
                    <RoadmapListItem checked={true}>First ever version of Sir Bofi platform available for windows and
                        MacOS natively.
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>Private premium accounts only</RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        Acquired <a target="_blank"
                                    href="https://signmycode.com/blog/what-is-ev-code-signing-certificate-how-does-it-work"
                                    class="inline"> Microsoft EV Code Signing Certificate</a>
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        <a
                                href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58"
                                target="_blank" class="inline">$BOFI Token</a> Presale
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>Private community & contests</RoadmapListItem>
                </ul>
            </PadWithArrow>
            <PadWithArrow direction={"right"}>
                <h2>Moving Online Q1 2024</h2>
                <ul>
                    <RoadmapListItem checked={true}>Infrastructure planning</RoadmapListItem>
                    <RoadmapListItem checked={true}>Business model development</RoadmapListItem>
                    <RoadmapListItem checked={true}>Main product UX overhaul</RoadmapListItem>
                    <RoadmapListItem checked={true}>Homepage additions</RoadmapListItem>
                    <RoadmapListItem checked={true}>Sir Bofi private <a href="https://www.ibm.com/topics/api"
                                                                        class="inline" target="_blank">
                        API </a> release
                    </RoadmapListItem>
                </ul>
            </PadWithArrow>
            <div>
                <PadWithArrow direction={"right"}>
                    <h2>Product Launch Q2 2024</h2>
                    <ul>
                        <RoadmapListItem checked={true}>DEXScreener project info listing</RoadmapListItem>
                        <RoadmapListItem checked={true}>Homepage overhaul</RoadmapListItem>
                        <RoadmapListItem>WalletConnectV2 integration</RoadmapListItem>
                        <RoadmapListItem>Bofi Platform Token Gating feature</RoadmapListItem>
                        <RoadmapListItem>Subscription feature</RoadmapListItem>
                        <RoadmapListItem>Sir Bofi Web Platform launch</RoadmapListItem>
                        <RoadmapListItem>Massive marketing campaign</RoadmapListItem>
                        <RoadmapListItem>Press releases</RoadmapListItem>
                        <RoadmapListItem>DEXTools Validation And Score</RoadmapListItem>
                    </ul>
                </PadWithArrow>
            </div>
        </div>


        <div class="timeline"></div>


        <div class="flex-col checkpoints-container right">
            <div></div>
            <PadWithArrow direction={"left"}>
                <h2>Token Launch Q4 2023</h2>
                <ul>
                    <RoadmapListItem checked={true}>
                        <a
                                href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58"
                                target="_blank" class="inline">$BOFI token</a> launch
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        Crypto industry partnerships
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        Sir Bofi web platform development started
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        Web platform demo version development
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        Potential $BOFI <a
                            href="https://www.coingecko.com/learn/token-gating" target="_blank"
                            class="inline">Token Gating</a> feature announced
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>
                        <a href="https://www.ibm.com/topics/api" class="inline" target="_blank">
                            API</a> development
                    </RoadmapListItem>
                </ul>
            </PadWithArrow>
            <PadWithArrow direction={"left"}>
                <h2>Demo Launch Q1 2024</h2>
                <ul>
                    <RoadmapListItem checked={true}>
                        <a href="https://demo.sirbofi.com" target="_blank" class="inline">
                            Web platform demo</a> release
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>Preparations for the marketing campaign</RoadmapListItem>
                    <RoadmapListItem checked={true}>Hiring additional engineering & marketing resources
                    </RoadmapListItem>
                    <RoadmapListItem checked={true}>Community building</RoadmapListItem>
                </ul>
            </PadWithArrow>
        </div>
    </div>
</main>
<script>
    import PadWithArrow from "./PadWithArrow.svelte";
    import {onMount} from "svelte";
    import Checkbox from "./widgets/Checkbox.svelte";
    import RoadmapListItem from "./widgets/RoadmapListItem.svelte";

    onMount(() => {
        const checkpoints = document.querySelector('.checkpoints-container');
        if (checkpoints) {
            const timeline = document.querySelector('.timeline');
            const checkpointRect = checkpoints.getBoundingClientRect();
            const checkpointHeight = checkpointRect.height;
            timeline.style.height = `${checkpointHeight + 200}px`;
        }

        // 3d stuff
        const fidget = document.querySelector('.roadmap-container');
        let windowWidth = window.innerWidth;
        fidget.parentElement.style.perspective = '2000px';
        fidget.style.transformStyle = 'preserve-3d';
        window.addEventListener('mousemove', (e) => {
            const x = (windowWidth / 2 - e.clientX) / 200;
            fidget.style.transform = `rotateY(${x}deg)`;
        });
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth;
        });
        window.addEventListener('mouseout', () => {
            fidget.style.transform = `rotateY(0deg)`;
        });
    });
</script>
<style>

    h2 {
        font-size: 32px;
        white-space: nowrap;
    }

    ul {
        list-style: none;
        position: relative;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .roadmap-container {
        width: 100%;
        display: flex;
        justify-content: center;
        transform-style: preserve-3d;
    }

    .timeline {
        width: 2px;
        background: linear-gradient(to bottom, var(--dark), var(--glow-green), var(--dark));
        z-index: -1;
        margin: 0 8px;
    }

    .checkpoints-container {
        position: absolute;
        gap: 200px;
        transform: translateX(52%);
        align-items: flex-start;
    }

    .checkpoints-container.left {
        transform: translateX(-52%);
        align-items: flex-end;
    }

    .checkpoints-container :global(.pad) {
        text-align: left;
        max-width: 500px;
    }

    @media screen and (max-width: 1280px) {
        h2 {
            font-size: clamp(18px, 3vw, 20px);
        }

        .checkpoints-container :global(.pad) {
            text-align: left;
            max-width: 360px;
        }

        .checkpoints-container :global(.pad li) {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 900px) {
        .checkpoints-container {
            transform: translateX(0);
            align-items: center;
            gap: 300px;
            pointer-events: none;
        }

        .checkpoints-container :global(.pad) {
            text-align: left;
            width: 95vw;
            padding: 20px;
        }

        .checkpoints-container :global(.pad li) {
            font-size: 12px;
        }

        .checkpoints-container.left {
            transform: translateX(0);
            align-items: center;
            gap: 360px;
        }

        .checkpoints-container :global(.arrow-container) {
            display: none;
        }
    }

</style>