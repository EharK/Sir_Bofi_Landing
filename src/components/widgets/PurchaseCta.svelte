<main>
    <div class="spinner-with-button-wrapper">
        {#if !spinner_order_reverse}
            {#if cfasl}
                <span class="spinner"></span>
            {:else if position_available}
                <span class="text-glow">Available</span>
            {/if}
        {/if}
        {#if !position_available}
            <button class="{!cfasl ? '' : 'disabled'} big-button { colored ? 'colored' : 'transparent'}" on:click={() => gkrlef(1)}>
                <span>Give Me Access</span>
            </button>
        {:else}
            <button class="{!cfasl ? '' : 'disabled'} big-button { colored ? 'colored' : 'transparent'}" on:click={() => purchase()}>
                <span>Purchase Account</span>
            </button>
        {/if}
        {#if spinner_order_reverse}
            {#if cfasl}
                <span class="spinner"></span>
            {:else if position_available}
                <span class="text-glow">Available</span>
            {/if}
        {/if}
    </div>
</main>

<script>
    export let cfasl;
    export let position_available;
    export let gkrlef;
    export let purchase;
    export let spinner_order_reverse = false;
    export let colored = false;
</script>

<style>
    @media screen and (max-width: 600px) {
        .spinner-with-button-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>