<script>
    import {articleStore} from '../stores/articleStore'
    import { scrollRef } from 'svelte-scrolling';
    import Articlebox from "../components/Articlebox.svelte";
    import { onDestroy } from 'svelte';
    let articleData = []

    const unsubscribe = articleStore.subscribe((storeData) => {
      articleData = storeData
    })
    
    onDestroy(unsubscribe()) // to prevent leaks

</script>

<main>
    <section use:scrollRef={'article'} id="article-section" class="article-section site-container">
        <h1 class="article-section-header">News and Stories</h1>
  
        <div class="article-grid">
          {#each articleData as arData (arData.id)}
          <Articlebox articleTitle={arData.topic} articleDescp={arData.subline} articleRedir={arData.redirect}/>
          {/each}
        </div>
      </section>
</main>

<style>
  .article-section-header {
    font-size: 28px;
    margin-bottom: 50px;
    color: var(--primary);
    font-weight: 600;
    text-align: center;

  }


  .article-grid {
    width: 86vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 50px;
    column-gap: 50px;
  }

  section {
    padding-bottom: 70px;
    padding-top: 70px;
  }

  @media screen and (max-width: 800px) {

    .article-grid {
      grid-template-columns: 1fr;
      width: 84%;
      margin: 0 auto;
    }


    .article-section-header {
      font-size: 25px;
      margin-bottom: 40px;
    }

  }

</style>