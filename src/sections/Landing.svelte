<script>
    import Button from "../components/Button.svelte";
    export let imageLink;
</script>

<main>
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
          <img class="landing-section-image" src={imageLink} alt="bgimage" />
          <Button>Learn more</Button>
        </div>
      </section>
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
    width: 300px;
    font-size: 15px;
    justify-content: space-between;
  }

  .nav-primary-item {
    transition: all 0.3s;
    color: var(--secondary);
    filter: opacity(23%);
  }

  .nav-primary-item:hover {
    /* color: var(--accent); */
    filter: opacity(100%);
    transition: all 0.3s;
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
</style>