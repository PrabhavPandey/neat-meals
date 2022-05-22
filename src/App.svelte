<script>
import Articlebox from "./components/Articlebox.svelte"
import Button from "./components/Button.svelte";
</script>

<main>
  <div>
    <section class="section-hero fp-bg">
      <nav class="site-container">
        <ul class="navigation-primary">
          <li class="nav-primary-item">Services</li>
          <li class="nav-primary-item">Gallery</li>
          <li class="nav-primary-item">Articles</li>
        </ul>
    
        <ul class="navigation-soc">
          <li class="nav-soc-item"><img src="assets/linkedinLogo.svg" alt=""></li>
          <li class="nav-soc-item"><img src="assets/mailLogo.svg" alt=""></li>
        </ul>
      </nav>
      <div class="image-container site-container">
        <img class="landing-section-image" src="assets/companyLogoHeroSection.jpg" alt="bgimage" />
        <Button>Learn more</Button>
      </div>
    </section>

    <section class="services-section">
      <div class="site-container">
        <div class="content-container">
          <img src="assets/DesginElement1.svg" alt="">
          <h1 class="services-section-h1">Services we offer</h1>
          <p class="services-section-p">The Neat meals company provides its customers with a variety of services ranging from Subscriptions to Vanity kitchens desgined to suit your taste buds</p>
        </div>

        <div class="animation-container">
          temp Placeholder for animation
        </div>
      </div>
    </section>

    <section class="gallery-section site-container">
      <h1>Gallery</h1>
      <div>grid Placeholder</div>
    </section>

    <section class="article-section site-container">
      <h1 class="article-section-header">Recent Articles</h1>
      <p class="article-section-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore 
      </p>

      <div class="article-grid">
        <Articlebox articleTitle="Hi" article="Bye"/>
      </div>
    </section>

    <footer class="footer-section">
      <div class="site-container">
        <Button>Contact us</Button>
          <ul class="footer-nav">
            <li class="footer-nav-item">Home</li>
            <li class="footer-nav-item">Services</li>
            <li class="footer-nav-item">Gallery</li>
            <li class="footer-nav-item">About us</li>
          </ul>

          <ul class="social-nav-2">
            <li class="soc-nav-item">Linkedin</li>
            <li class="soc-nav-item">Gmail</li>
          </ul>
      </div>
    </footer>
  </div>
</main>

<style>
  .fp-bg {
    width: 100vw;
    background-color: #2D3F6B;
    color: white;
  }

  nav {
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation-primary {
    display: flex;
    cursor: pointer;
    list-style: none;
    width: 290px;
    font-size: 14px;
    justify-content: space-between;
  }

  .nav-primary-item {
    color: var(--secondary);
    filter: opacity(23%);
  }

  .nav-primary-item:hover {
    /* color: var(--accent); */
    filter: opacity(100%);
    transition: ease-in-out 0.3s;
    font-weight: 500;
  }

  .navigation-soc{
    display: flex;
    justify-content: space-between;
    width: 80px;
    cursor: pointer;
    list-style: none;
  }

  .navigation-soc img {
    width: 20px;
  }

  .landing-section-image {
    width: 470px;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 50px;
  }

</style>