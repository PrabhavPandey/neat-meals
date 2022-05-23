<script>
    export let imageLinkSer;
</script>

<main>
    <section class="services-section">
        <div class="site-container section-container">
          <div class="content-container">
            <img class="services-desgin-section" src={imageLinkSer} alt="">
            <h1 class="services-section-h1">Services we offer</h1>
            <p class="services-section-p">The Neat meals company provides its customers with a variety of services ranging from Subscriptions to Vanity kitchens desgined to suit your taste buds</p>
          </div>
  
          <div class="animation-container">
            temp Placeholder for animation
          </div>
        </div>
      </section>
</main>

<style>
    .section-container {
    /* background: red; */
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
</style>