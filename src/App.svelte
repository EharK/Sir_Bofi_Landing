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
    <div class="secondary-container main-points-section">
        <div class="section">
            <h1>Sir Bofi 101</h1>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="114" viewBox="0 0 84 114" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M43.3702 0.180037C45.6598 0.791021 47.25 2.84124 47.25 5.18227V41.4547L78.75 41.4547C80.63 41.4547 82.3662 42.4467 83.3022 44.0557C84.2388 45.6645 84.232 47.6445 83.2849 49.2472L46.5349 111.429C45.3395 113.451 42.9193 114.431 40.6297 113.82C38.3402 113.209 36.75 111.159 36.75 108.818V72.5455H5.25C3.37013 72.5455 1.6338 71.5532 0.697519 69.9443C-0.238766 68.3353 -0.232047 66.3554 0.715157 64.7527L37.465 2.57132C38.6605 0.549187 41.0807 -0.430899 43.3702 0.180037ZM14.3905 62.182H42C44.8996 62.182 47.25 64.5019 47.25 67.3638V89.6506L69.6097 51.8184L42 51.8184C39.1004 51.8184 36.75 49.4985 36.75 46.6365V24.3493L14.3905 62.182Z"
                              fill="#00FF00"/>
                    </svg>
                    <h3>Prompt</h3>
                    <p>
                        Opportunities found in seconds between 9000+ currencies.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
                        <path d="M73.0044 81.0065L93.0175 101.019C95.2404 103.242 98.7881 103.236 101.012 101.012C103.24 98.7835 103.237 95.235 101.02 93.0173L81.0066 73.0043L73.0044 81.0065ZM63.5323 87.5388C58.0281 89.8953 51.9664 91.2 45.6 91.2C20.4158 91.2 0 70.7842 0 45.6C0 20.4158 20.4158 0 45.6 0C70.7842 0 91.2 20.4158 91.2 45.6C91.2 51.9664 89.8953 58.028 87.5388 63.5322L109.022 85.0151C115.656 91.6493 115.665 102.363 109.014 109.014C102.377 115.651 91.6643 115.671 85.0153 109.022L63.5323 87.5388ZM45.6 79.8C64.4881 79.8 79.8 64.4881 79.8 45.6C79.8 26.7119 64.4881 11.4 45.6 11.4C26.7119 11.4 11.4 26.7119 11.4 45.6C11.4 64.4881 26.7119 79.8 45.6 79.8Z"
                              fill="#00FF00"/>
                    </svg>
                    <h3>Extensive</h3>
                    <p>
                        Trading pairs data from 600+ exchanges at your fingertips.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
                        <path d="M74.3505 56.9999C74.3505 66.5826 66.5827 74.3504 57 74.3504C47.4173 74.3504 39.6495 66.5826 39.6495 56.9999C39.6495 47.4172 47.4173 39.6494 57 39.6494C66.5827 39.6494 74.3505 47.4172 74.3505 56.9999Z"
                              stroke="#00FF00" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M62.1261 6.34028C60.9599 6 59.6401 6 57 6C54.3599 6 53.0401 6 51.8739 6.34028C50.1671 6.83833 48.6592 7.85912 47.5627 9.25896C46.8136 10.2153 46.3234 11.4409 45.3432 13.8921C43.9337 17.4156 40.0223 19.23 36.4219 18.0303L33.1875 16.9526C30.8931 16.1878 29.7459 15.8054 28.6211 15.7399C26.9689 15.6436 25.3245 16.0318 23.8897 16.8568C22.913 17.4184 22.058 18.2735 20.3478 19.9836C18.5302 21.8012 17.6214 22.71 17.0441 23.7474C16.1959 25.2714 15.837 27.0196 16.0163 28.7546C16.1383 29.9354 16.6157 31.1288 17.5703 33.5154C19.0653 37.253 17.6271 41.5231 14.1754 43.5945L12.6029 44.5383C10.1951 45.9829 8.99121 46.7054 8.11673 47.6999C7.34289 48.5799 6.75939 49.6107 6.40284 50.727C6 51.9884 6 53.4062 6 56.2424C6 59.6004 6 61.2789 6.53618 62.7165C7.00997 63.9864 7.78058 65.1243 8.78369 66.0361C9.91895 67.0674 11.4624 67.6851 14.5491 68.9198C17.7036 70.1812 19.3278 73.6832 18.2534 76.9064L17.0342 80.5643C16.1897 83.0973 15.7675 84.3643 15.7291 85.6087C15.6829 87.1053 16.0328 88.5871 16.7433 89.9046C17.3342 91.0011 18.2784 91.9452 20.1667 93.8333C22.055 95.7215 22.9992 96.6655 24.0951 97.2566C25.4129 97.9672 26.8949 98.3174 28.3913 98.2709C29.6358 98.2324 30.9025 97.8102 33.436 96.9659L36.4222 95.9702C40.0223 94.7706 43.9338 96.5845 45.3432 100.108C46.3234 102.559 46.8136 103.785 47.5627 104.741C48.6592 106.141 50.1671 107.162 51.8739 107.66C53.0401 108 54.3599 108 57 108C59.6401 108 60.9599 108 62.1261 107.66C63.8329 107.162 65.3408 106.141 66.4373 104.741C67.1864 103.785 67.6766 102.559 68.6569 100.108C70.0662 96.5845 73.9779 94.7706 77.5774 95.9714L80.5614 96.9664C83.095 97.8108 84.3621 98.2329 85.6065 98.2715C87.103 98.3174 88.5849 97.9677 89.9024 97.2571C90.9983 96.6661 91.9429 95.722 93.8311 93.8339C95.7192 91.9458 96.6633 91.0011 97.2543 89.9052C97.9649 88.5877 98.3145 87.1053 98.2686 85.6093C98.2301 84.3649 97.8079 83.0978 96.9636 80.5643L95.7453 76.9093C94.6703 73.6849 96.2949 70.1818 99.4507 68.9198C102.537 67.6851 104.081 67.0674 105.217 66.0361C106.22 65.1243 106.99 63.9864 107.464 62.7165C108 61.2789 108 59.6004 108 56.2424C108 53.4062 108 51.9884 107.597 50.727C107.241 49.6107 106.657 48.5799 105.883 47.6999C105.009 46.7054 103.805 45.9829 101.397 44.5383L99.8224 43.5936C96.3709 41.5225 94.9321 37.2525 96.4275 33.515C97.3818 31.1284 97.8595 29.935 97.9813 28.7541C98.1604 27.0191 97.8017 25.271 96.9534 23.7469C96.376 22.7096 95.4676 21.8008 93.6497 19.9832C91.9395 18.2731 91.0844 17.418 90.1081 16.8564C88.6733 16.0314 87.0288 15.6432 85.3764 15.7394C84.2516 15.805 83.1046 16.1874 80.8102 16.9521L77.5779 18.0296C73.9779 19.2296 70.0662 17.4155 68.6569 13.8921C67.6766 11.4409 67.1864 10.2153 66.4373 9.25896C65.3408 7.85912 63.8329 6.83833 62.1261 6.34028Z"
                              stroke="#00FF00" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3>Seamless</h3>
                    <p>
                        Authenticate, filter and trigger the analysis with ease.
                    </p>
                </div>
            </div>
        </div>
        <hr class="big">
        <div class="section">
            <h2>Simple to use</h2>
            <div class="base-row main-points-row">
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="114" viewBox="0 0 130 114" fill="none">
                        <path d="M97.1462 83.3239L97.0001 83.4703V83.6771V97.7143C97.0001 106.434 89.9478 113.5 81.2501 113.5H27.0834C12.4028 113.5 0.5 101.572 0.5 86.8571V38C0.5 26.2826 9.97768 16.7857 21.6667 16.7857H62.7565H62.9639L63.1104 16.6389L77.7739 1.94314C79.6938 0.0189553 82.8064 0.0189553 84.7263 1.94313L128.06 45.3717C129.98 47.2966 129.98 50.4178 128.06 52.3425L97.1462 83.3239ZM52.277 27.496L53.1283 26.6429H51.9231H21.6667C15.4064 26.6429 10.3333 31.7287 10.3333 38V86.8571C10.3333 96.1269 17.8316 103.643 27.0834 103.643H81.2501C84.5189 103.643 87.1668 100.988 87.1668 97.7143V81.4324V81.4248V54.2857C87.1668 51.0124 84.5189 48.3571 81.2501 48.3571H43.3371H43.3296H27.0834C21.3774 48.3571 16.75 43.7211 16.75 38V35.2857C16.75 32.5627 18.9523 30.3571 21.6667 30.3571C24.381 30.3571 26.5834 32.5627 26.5834 35.2857V38V38.5H27.0834H41.0897H41.2972L41.4437 38.3532L52.277 27.496ZM56.0564 37.6468L55.2051 38.5H56.4103H81.2501C89.9478 38.5 97.0001 45.5665 97.0001 54.2857V68.3229V69.5319L97.854 68.6761L117.277 49.2103L117.63 48.8571L117.277 48.504L81.604 12.7526L81.2501 12.3978L80.8961 12.7526L68.4762 25.1997L56.0564 37.6468Z"
                              fill="#00FF00" stroke="black"/>
                    </svg>
                    <h3>Purchase</h3>
                    <p>
                        Purchase private access,
                        receive software and credentials.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg width="117" height="118" viewBox="0 0 117 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4702 8.23263C55.224 8.23263 68.7771 21.8701 68.7771 38.6574C68.7771 42.4602 67.9137 45.7809 67.0337 48.1674C66.5963 49.3535 66.163 50.2867 65.8496 50.906C65.6932 51.2149 65.5677 51.4436 65.488 51.5843C65.4482 51.6545 65.4199 51.7027 65.405 51.7276C65.3995 51.7369 65.3959 51.7429 65.3942 51.7458C64.3908 53.3725 64.6328 55.4836 65.9798 56.8365L107.566 98.6067L110.446 95.6901L107.566 98.6067C108.037 99.0795 108.639 100.016 108.797 100.993C108.914 101.712 108.862 102.717 107.566 104.019L107.566 104.019L102.901 108.705C102.398 109.106 101.505 109.596 100.592 109.732C99.8211 109.847 99.0286 109.74 98.1313 108.839L96.9799 107.683C93.9874 104.677 92.7715 103.456 92.5338 103.217C90.9414 101.617 88.3659 101.616 86.7731 103.216C84.9319 105.066 83.299 105.248 82.0237 105.002C80.523 104.712 79.1984 103.742 78.5456 102.889C77.5528 101.467 77.6175 100.144 78.0287 98.9044C78.2469 98.2469 78.5541 97.6723 78.8155 97.2573C78.9428 97.055 79.0504 96.9049 79.1159 96.8175C79.1476 96.7751 79.1687 96.7485 79.1762 96.7392C80.5454 95.1042 80.4443 92.6801 78.9377 91.1669L77.3382 89.5604C75.7456 87.9609 73.1706 87.961 71.5781 89.5605C68.529 92.6231 66.2441 92.7977 64.8424 92.5295C63.1666 92.2089 61.7173 91.0442 60.952 90.038C59.8396 88.449 59.8364 86.9573 60.1338 85.7028C60.2907 85.0408 60.5313 84.4734 60.7339 84.0747C60.833 83.8795 60.9168 83.7369 60.966 83.6571C60.9866 83.6236 61.0007 83.6021 61.0066 83.5931C61.1204 83.4291 61.2223 83.257 61.3114 83.078C61.4631 82.7732 61.6709 82.4969 62.0503 82.0746C62.0756 82.0465 62.1122 82.0072 62.1579 81.9582C62.4786 81.6141 63.2488 80.7877 63.7271 79.923C64.5338 78.4644 64.7587 76.7072 64.0537 74.8806C63.4968 73.438 62.4415 72.188 61.3438 71.0854L56.5451 66.2655C55.0539 64.7677 52.6781 64.659 51.0586 66.0145C49.9277 66.961 47.8047 67.7997 45.1003 68.3643C42.5163 68.9038 39.9568 69.0822 38.4702 69.0822C21.7159 69.0822 8.16281 55.4446 8.16281 38.6574C8.16281 32.8174 9.79781 27.3726 12.6325 22.7451C13.8172 20.8111 13.2231 18.2746 11.3055 17.0797C9.38785 15.8848 6.87286 16.484 5.68812 18.4181C2.08072 24.3069 0 31.2439 0 38.6574C0 60.023 17.2392 77.3148 38.4702 77.3148C40.4491 77.3148 43.5677 77.0915 46.755 76.426C48.7283 76.014 50.9809 75.3829 53.0578 74.3816L55.5836 76.9187C55.6001 76.9353 55.6164 76.9517 55.6324 76.9679C55.1745 77.5072 54.6295 78.2217 54.1466 79.1309C54.1121 79.1847 54.0742 79.2447 54.0334 79.3109C53.8795 79.5605 53.6822 79.9011 53.4689 80.321C53.0467 81.1523 52.5376 82.342 52.1947 83.7886C51.4949 86.7407 51.4891 90.8573 54.3472 94.8762C54.3657 94.9022 54.3845 94.928 54.4035 94.9536C56.0452 97.152 59.1395 99.8179 63.3211 100.618C65.3436 101.005 67.4551 100.925 69.5892 100.292C69.546 102.594 70.1293 105.18 71.9414 107.728C71.9598 107.754 71.9785 107.78 71.9975 107.805C73.7541 110.158 76.8119 112.377 80.4882 113.088C83.3228 113.635 86.3882 113.253 89.2882 111.576C89.959 112.25 90.783 113.077 91.7845 114.083L92.3712 114.672L94.9405 112.071L92.3713 114.672C95.3127 117.627 98.7855 118.323 101.786 117.876C104.584 117.459 106.912 116.08 108.297 114.887C108.377 114.818 108.454 114.747 108.528 114.672L113.326 109.853C116.509 106.656 117.39 102.976 116.853 99.6649C116.358 96.6123 114.722 94.175 113.326 92.7734C113.326 92.7734 113.326 92.7734 113.326 92.7734L73.844 53.1166C74.1136 52.5059 74.3996 51.8098 74.6846 51.0369C75.804 48.0011 76.9399 43.6906 76.9399 38.6574C76.9399 17.2917 59.7007 0 38.4702 0C33.4954 0 28.731 0.950974 24.3555 2.68597C22.2577 3.5178 21.2257 5.90726 22.0505 8.02299C22.8753 10.1387 25.2445 11.1795 27.3423 10.3477C30.7813 8.98406 34.5335 8.23263 38.4702 8.23263ZM79.1534 96.7661C79.1557 96.7635 79.158 96.7608 79.1602 96.7581L79.1597 96.7587L79.1556 96.7635L79.1534 96.7661Z" fill="#00FF00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 31.1484C43.3655 31.1484 46.8765 34.6795 46.8765 39.0001C46.8765 43.3206 43.3656 46.8516 39 46.8516C34.634 46.8516 31.1235 43.3207 31.1235 39.0001C31.1235 34.6793 34.634 31.1484 39 31.1484ZM55 39.0001C55 30.1477 47.8205 23 39 23C30.1788 23 23 30.1478 23 39.0001C23 47.8524 30.1789 55 39 55C47.8204 55 55 47.8525 55 39.0001Z" fill="#00FF00"/>
</svg>
                    <h3>Set up</h3>
                    <p>
                        Download the software,
                        log in with the credentials provided.
                    </p>
                </div>
                <div class="base-col point-pad">
                    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M113.335 2.00002L113.789 2.00005C117.219 2.00005 120 4.78059 120 8.21057L120 8.66527C120.001 17.6394 120.001 26.1961 117.409 34.8372C114.932 43.095 110.24 51.0326 101.888 59.8803L104.199 71.4328C106.643 83.65 102.819 96.28 94.0083 105.09L86.7396 112.359C80.9044 118.194 71.1065 116.822 67.099 109.608L55.9935 89.6185L32.3815 66.0065L12.3923 54.9012C5.17819 50.8937 3.80612 41.0952 9.64105 35.2603L16.9099 27.9914C25.7198 19.1815 38.3497 15.3575 50.5668 17.8009L62.1197 20.1115C70.9674 11.7595 78.905 7.06824 87.1628 4.59091C95.8039 1.99858 104.361 1.99929 113.335 2.00002ZM52.7561 30.9058L48.1308 29.9807C39.9861 28.3518 31.5662 30.9011 25.6929 36.7744L18.4242 44.0431L34.6375 53.0507L52.7561 30.9058ZM44.5237 60.5827L61.5163 77.5753C61.5218 77.5709 61.5274 77.5666 61.533 77.5622C64.1788 75.4963 67.7764 72.6712 71.5883 69.6313C79.3558 63.4368 87.5774 56.6922 90.7664 53.5032C99.5671 44.7025 103.554 37.7952 105.512 31.2681C107.062 26.1015 107.45 20.8836 107.547 14.453C101.116 14.5498 95.8985 14.9381 90.7319 16.4881C84.2584 18.4302 77.4109 22.3676 68.7132 31.0178L44.5237 60.5827ZM69.0144 87.4796L77.9569 103.576L85.2253 96.3074C91.0991 90.4336 93.6483 82.0136 92.0192 73.869L91.1852 69.6987C87.4709 72.8084 83.2304 76.2341 79.3327 79.3424C75.478 82.4165 71.8453 85.269 69.1775 87.3522C69.1227 87.395 69.0683 87.4374 69.0144 87.4796ZM90.2336 31.7694C92.659 34.1948 92.659 38.1271 90.2336 40.5524L84.0231 46.763C81.5977 49.1883 77.6654 49.1883 75.2401 46.763C72.8147 44.3376 72.8147 40.4053 75.2401 37.98L81.4506 31.7694C83.8759 29.3441 87.8082 29.3441 90.2336 31.7694ZM6.33424 91.5041C8.07602 82.7949 15.7227 76.5263 24.604 76.5263H26.8422C37.132 76.5263 45.4737 84.8677 45.4737 95.1578V97.3961C45.4737 106.278 39.2049 113.924 30.4963 115.666L9.42852 119.879C7.39235 120.287 5.28738 119.649 3.81908 118.181C2.35079 116.713 1.71347 114.608 2.12071 112.571L6.33424 91.5041ZM24.604 88.9473C21.6435 88.9473 19.0947 91.0368 18.5141 93.94L16.1275 105.873L28.06 103.486C30.963 102.905 33.0527 100.357 33.0527 97.3961V95.1578C33.0527 91.7277 30.2722 88.9473 26.8422 88.9473H24.604Z"
                              fill="#00FF00" stroke="#0C0C0C" stroke-width="4" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <h3>Launch</h3>
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
                    The process of requiring code-signing certificates from Microsoft and Apple is ongoing and dependent
                    on their slow behaviour.
                    For that reason you might receive a warning from your operating system that the application
                    is suspicious. <span class="hl">I completely understand this sounds concerning :D BUT </span> - it is
                    what Apple and Microsoft do to applications that are simply not signed by their (not easily
                    acquirable) certificates.
                    Feel free to run the application through any antivirus software or test it any other
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

    .main-points-section {
        background: linear-gradient(-45deg, #0f1a0f 0%, #0d0d0d 100%);
        color: var(--slight) !important;
        padding-bottom: 200px !important;
    }

    .base-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (max-width: 960px) {
        .base-row {
            padding: 0 20px;
            flex-direction: column;
        }

        h1, h2, h3 {
            text-align: center !important;
        }

        .base-row.main-points-row {
            max-width: 500px;
        }

        .main-points-section .section {
            padding: 40px 5px;
        }
    }

    @media screen and (max-width: 600px) {
        .base-row.main-points-row {
            width: 100%;
        }

        .main-points-section .section {
            padding: 80px 5px 0 5px;
        }

        .main-points-section h3 {
            margin-bottom: 16px;
        }

        hr.big {
            display: none;
        }
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
        filter: grayscale(0.6);
        outline: hsla(0deg, 0%, 90%, 0) 1px solid;
        border-radius: 8px;
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
