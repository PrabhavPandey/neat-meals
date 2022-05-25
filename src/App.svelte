<script lang="ts">
  import Home from './Pages/Home.svelte';
  import Aboutus from './Pages/Aboutus.svelte';
  import Router from 'svelte-spa-router'
  //Route defination (single page mapping only)
  const Pages = {
    "/": Home,
    "/about": Aboutus
  }
</script>

<main>
  <Router routes={Pages}/>
</main>

<style></style>