<main>
    <div class="relative flex-row roadmap-container">
        <div class="flex-col checkpoints-container left">
            <PadWithArrow direction={"right"}>
                <h2>The Rumors 11.2023</h2>
                <ul>
                    <li>First ever version of Sir Bofi platform available for windows and MacOS natively.</li>
                    <li>Private premium accounts only</li>
                    <li>Acquired <a target="_blank"
                            href="https://signmycode.com/blog/what-is-ev-code-signing-certificate-how-does-it-work"
                            class="inline"> Microsoft EV Code Signing Certificate</a></li>
                    <li><a
                            href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58"
                            target="_blank" class="inline">$BOFI Token</a> Presale</li>
                    <li>Private community & contests</li>
                </ul>
            </PadWithArrow>
            <PadWithArrow direction={"right"}>
                <h2> 01.2023</h2>
                <ul>
                    <li>----</li>
                    <li>First ever version of Sir Bofi platform available for windows and MacOS natively.</li>
                    <li>Acquired Microsoft EV Code Signing Certificate</li>
                    <li>Private community & contests</li>
                </ul>
            </PadWithArrow>
            <div class="coming-soon">
                <PadWithArrow direction={"right"}>
                    <h2>In progress</h2>
                    <ul>
                        <li>First ever version of Sir Bofi platform available for windows and MacOS natively.</li>
                        <li>$BOFI Token launch</li>
                        <li>Community building & contents</li>
                        <li>Acquired Microsoft EV Code Signing Certificate</li>
                    </ul>
                </PadWithArrow>
            </div>
        </div>


        <div class="timeline"></div>


        <div class="flex-col checkpoints-container right">
            <div></div>
            <PadWithArrow direction={"left"}>
                <h2>The launch 12.2023</h2>
                <ul>
                    <li><a
                            href="https://dexscreener.com/ethereum/0x13147616fd3b2369b31a55a3752074b9f3589b58"
                            target="_blank" class="inline">$BOFI token</a> launch</li>
                    <li>Free demo version of the native Sir Bofi platform</li>
                </ul>
            </PadWithArrow>
            <PadWithArrow direction={"left"}>
                <h2>Title 02.2024</h2>
                <ul>
                    <li>Homepage overhaul</li>
                    <li>Online demo application release</li>
                    <li>Hiring additional developing resources</li>
                    <li>New marketing campaign</li>
                </ul>
            </PadWithArrow>
        </div>
    </div>
</main>
<script>
    import PadWithArrow from "./PadWithArrow.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        const checkpoints = document.querySelector('.checkpoints-container');
        if (checkpoints) {
            const timeline = document.querySelector('.timeline');
            const checkpointRect = checkpoints.getBoundingClientRect();
            const checkpointHeight = checkpointRect.height;
            timeline.style.height = `${checkpointHeight+100}px`;
        }

        // 3d stuff
        const fidget = document.querySelector('.roadmap-container');
        let windowWidth = window.innerWidth;
        fidget.parentElement.style.perspective = '2000px';
        fidget.style.transformStyle = 'preserve-3d';
        window.addEventListener('mousemove', (e) => {
            const x = (windowWidth / 2 - e.clientX) / 400;
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

    a.inline {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        color: var(--glow-green);
        transition: all 0.15s;
    }

    a.inline:hover {
        filter: drop-shadow(0 0 4px var(--glow-green));
    }

    .coming-soon {
        opacity: 0.5;
    }

    .coming-soon :global(.pad:hover) {
        background: rgba(128, 202, 255, 0.4);
        outline: 1px solid #009dff;
    }

    h2 {
        font-size: 32px;
    }

    ul {
        margin-left: 20px;
    }

    li {
        margin: 4px 0;
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
        height: 100%;
        background: linear-gradient(to bottom, var(--dark), var(--glow-green), var(--dark));
        z-index: -1;
        margin: 0 8px;
        min-height: 1000px;
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

    .checkpoints-container :global(.pad p) {
        font-size: 16px;
    }

</style>