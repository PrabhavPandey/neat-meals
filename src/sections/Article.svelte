<script>
    import Articlebox from "../components/Articlebox.svelte";
    let articleData = [
    {
        id:1,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    },
    {
        id:2,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    },
    {
        id:3,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    },
    {
        id:4,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    },
    {
        id:5,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    },
    {
        id:6,
        topic: "This is what exactly Hritikh Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  `www.youtube.com`
    }
    ]

</script>

<main>
    <section class="article-section site-container">
        <h1 class="article-section-header">Recent Articles</h1>
        <p class="article-section-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore 
        </p>
  
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
    margin-bottom: 0;
    color: var(--primary);
    font-weight: 600;
    text-align: center;
  }

  .article-section-para {
    font-size: 14px;
    margin-top: 5px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .article-grid {
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 50px;
    column-gap: 50px;
  }

  @media screen and (max-width: 400px) {

    .article-grid {
      grid-template-columns: 1fr;
      width: 84%;
      margin: 0 auto;
    }

    .article-section-para {
      width: 80%;
      margin-bottom: 4vh;
    }

  }
</style>