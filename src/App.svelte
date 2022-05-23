<script>
  import Articlebox from "./components/Articlebox.svelte"
  import Button from "./components/Button.svelte";
  import Landing from "./sections/Landing.svelte";
  let landingImage  = "assets/companyLogoHeroSection.jpg"


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
    <Landing imageLink={landingImage}/>
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
      <div class="gallery-container">
        <div style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" class="Box card-tall"><a class="btn-RD">View post</a></div>
        <div style="background-image:url('https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80')" class="Box"><a class="btn-RD">View post</a></div>
        <div style="background-image:url('https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')" class="Box card-wide"><a class="btn-RD">View post</a></div>
        <div style="background-image:url('https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')" class="Box card-wide"><a class="btn-RD">View post</a></div>
        <div style="background-image:url('https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" class="Box card-tall-reverse"><a class="btn-RD">View post</a></div>
      </div>
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

  .gallery-container {
    display: grid;
    margin-top: 50px;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
    grid-auto-rows: 240px;
    grid-auto-columns: 300px;
  }

  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }

  .Box {
    position: relative;
    object-fit: cover;
  }

  .btn-RD {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: var(--accent);
    border: 2px solid var(--accent);
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.3s;
    cursor: pointer;
  }

  .btn-RD:hover {
    color: black;
    font-weight: 500;
    background-color: var(--accent);
    transition: all 0.3s;
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

  /* .navigation-soc img {
    width: 15px;
  } */

  .nav-soc-item img {
    width: 20px;
  }

</style>