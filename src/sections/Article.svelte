<script>
    import Articlebox from "../components/Articlebox.svelte";
    let articleData = [
    {
        id:1,
        topic: "This is Vicky Kaushal’s real-life diet and tips on catering to a lean body",
        subline: "Are you an ectomorph? We bring you some valuable nutritional insights",
        redirect:  'https://www.gqindia.com/fitness/content/vicky-kaushal-real-life-diet'
    },
    {
        id:2,
        topic: "This is what exactly Hrithik Roshan eats to stay in shape",
        subline: "Secrete recipe to the actors Greek God bod",
        redirect:  'https://www.gqindia.com/live-well/content/exclusive-this-is-exactly-what-hrithik-roshan-eats-daily-to-stay-in-top-shape'
    },
    {
        id:3,
        topic: "This is Arjun Kapoor’s real-life dietand the foods he avoids",
        subline: "The actor’s story will inspire you to develop a healthy relationship with food",
        redirect:  'https://www.gqindia.com/look-good/content/this-is-arjun-kapoors-real-life-diet-his-cheat-day-meals-and-foods-he-avoids'
    },
    {
        id:4,
        topic: "Arjun Kapoor Is Quite The Passionate Foodie, And We Have Proof",
        subline: "Arjun Kapoor, a die-hard foodie, is back with another food story.",
        redirect:  'https://food.ndtv.com/news/arjun-kapoor-gobbled-up-greens-for-dinner-2493710'
    },
    {
        id:5,
        topic: "Vicky Kaushal's High Protein Breakfast Was Made With 10 Eggs",
        subline: "Vicky Kaushal's upcoming projects require him to be in his best shape.",
        redirect:  'https://food.ndtv.com/news/vicky-kaushals-high-protein-breakfast-was-made-with-10-eggs-see-pic-2379802'
    },
    {
        id:6,
        topic: "Arjun Kapoor’s “Pancake Day” makes it hard to control our cravings",
        subline: "The actor a video that sent us all craving for some flat pancakes",
        redirect:  'https://food.ndtv.com/food-drinks/arjun-kapoor-s-pancake-day-is-making-it-hard-for-us-to-control-our-cravings-2540293'
    }
    ]

</script>

<main>
    <section id="article-section" class="article-section site-container">
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
    display: none;
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

    .article-section-para {
      width: 80%;
      margin-bottom: 4vh;
    }

  }

</style>