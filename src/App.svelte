<script>
  import Router from 'svelte-spa-router';
  import Home from './Pages/Home.svelte';
  import Aboutus from './Pages/Aboutus.svelte'
</script>

<main>
  <Router routes={{
    '/' : Home,
    '/about' : Aboutus
  }}/>
</main>

<style></style>