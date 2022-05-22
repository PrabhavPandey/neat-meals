<script>
import Articlebox from "./components/Articlebox.svelte"
import Button from "./components/Button.svelte";

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
      <div class="site-container section-container">
        <div class="content-container">
          <img class="services-desgin-section" src="assets/DesginElement1.svg" alt="">
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
        {#each articleData as arData (arData.id)}
        <Articlebox articleTitle={arData.topic} articleDescp={arData.subline} articleRedir={arData.redirect}/>
        {/each}
      </div>
    </section>

    <footer class="footer-section">
      <div class="site-container footer-container">
        <Button>Contact us</Button>
          <ul class="footer-nav">
            <li class="footer-nav-item">Home</li>
            <li class="footer-nav-item">Services</li>
            <li class="footer-nav-item">Gallery</li>
            <li class="footer-nav-item">About us</li>
          </ul>

          <ul class="social-nav-2">
            <li class="nav-soc-item"><img src="assets/linkedinLogo.svg" alt=""></li>
            <li class="nav-soc-item"><img src="assets/mailLogo.svg" alt=""></li>
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
    align-items: center;
    width: 80px;
    cursor: pointer;
    list-style: none;
  }

  .navigation-soc img {
    width: 15px;
  }

  .nav-soc-item img {
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

  section {
    height: 100vh;
  }

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

  .gallery-section h1 {
    text-align: center;
    font-weight: 600;
    color: var(--primary);
  }

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

  footer {
    width: 100vw;
    margin-top: 50px;
    padding-bottom: 20px;
    background-color: #2D3F6B;
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .footer-nav {
    display: flex;
    align-items: center;
    gap: 100px;
    list-style: none;
  }

  .footer-nav-item {
    font-size: 15px;
    cursor: pointer;
    color: var(--secondary);
    filter: opacity(23%);
  }

  .footer-nav-item:hover {
    /* color: var(--accent); */
    filter: opacity(100%);
    transition: ease-in-out 0.3s;
    font-weight: 500;
  }

  .social-nav-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    cursor: pointer;
    list-style: none;
  }

</style>