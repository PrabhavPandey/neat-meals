<script>
        import Button from "../components/Button.svelte";
</script>

<main>
    <footer class="footer-section">
        <div class="site-container footer-container">
          <Button><a href="mailto:neatmealscompany@gmail.com">Contact us</a></Button>
            <ul class="footer-nav">
              <li class="footer-nav-item">Home</li>
              <li class="footer-nav-item">Services</li>
              <!-- <li class="footer-nav-item">Gallery</li> -->
              <li class="footer-nav-item">About us</li>
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

  @media screen and (max-width: 400px) {
    .footer-container {
      flex-direction: column;
    }

    .footer-nav {
      gap: 20px;
      margin-top: 5vh;
      padding: 0;
    }

    .social-nav-2 {
      padding: 0;
    }
  }
</style>