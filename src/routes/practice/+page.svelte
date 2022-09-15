<script lang="ts">
  import { browser } from "$app/environment"
  import Practice from "$lib/Practice.svelte"
</script>

<main>
  {#if browser}
    <Practice />
  {/if}
</main>

<style>
  @import "bootstrap/dist/css/bootstrap.min.css";
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
