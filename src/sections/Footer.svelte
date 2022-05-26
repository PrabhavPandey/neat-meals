<script>
    import {scrollTo, scrollTop} from 'svelte-scrolling'
    import Button from "../components/Button.svelte";
</script>

<main>
    <footer class="footer-section">
        <div class="site-container footer-container">
          <Button><a href="mailto:neatmealscompany@gmail.com">Contact us</a></Button>
            <ul class="footer-nav">
              <li use:scrollTo={'home'} class="footer-nav-item"><a href="#landing-section">Home</a></li>
              <li use:scrollTo={'service'} class="footer-nav-item"><a href="#services-section">Services</a></li>
              <!-- <li class="footer-nav-item">Gallery</li> -->
              <li class="footer-nav-item"><a href="#/about">About us</a></li>
            </ul>
  
            <ul class="social-nav-2">
              <li class="nav-soc-item"><img src="assets/linkedinLogo.svg" alt=""></li>
              <li class="nav-soc-item"><img src="assets/mailLogo.svg" alt=""></li>
            </ul>
        </div>
      </footer>
</main>

<style>
    footer {
    width: 100vw;
    margin-top: 50px;
    padding-bottom: 20px;
    background-color: #2D3F6B;
  }

  a {
    text-decoration: none;
    color: white;
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

  .nav-soc-item img {
    width: 20px;
  }

  @media screen and (max-width: 750px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }

    .footer-nav-item {
      font-size: 13px;
    }

    .footer-nav {
      gap: 40px;
      margin-top: 5vh;
      padding: 0;
    }

    .social-nav-2 {
      padding: 0;
    }
  }
</style>