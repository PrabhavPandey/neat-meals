<script>
    export let imageLinkSer;
</script>

<main>

    <section id="services-section" class="services-section">
        <div class="site-container section-container">
          <div class="content-container">
            <img class="services-desgin-section" src={imageLinkSer} alt="">
            <h1 class="services-section-h1">Services we offer</h1>
            <p class="services-section-p">Feel free to select from our range of services.</p>
          </div>
  
          <div class="animation-container">
            Placeholder for animation
          </div>
        </div>
      </section>
</main>

<style>
    .section-container {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .services-desgin-section {
    width: 90px;
  }

  .services-section-h1 {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 5px;
    color: var(--primary);
  }

  .services-section-p {
    font-size: 16px;
    max-width: 500px;
    line-height: 167.5%;
    margin-top: 5px;
  }

  section {
      height: 100vh;

  }

  @media screen and (max-width: 400px) {
    .section-container {
      margin-top: 10vh;
      flex-direction: column;
      width: 70vw;
    }

  }
</style>