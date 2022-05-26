<script lang="ts">
  import Router from 'svelte-spa-router';
  import Aboutus from './Pages/Aboutus.svelte';
  import Home from './Pages/Home.svelte';
  //Route defination (single page mapping only)
  const Pages = {
    "/": Home,
    "/about": Aboutus
  }
</script>

<main>
  <Router routes={Pages}/>
</main>

<style>
  main {
    background-color: white;
  }
</style>