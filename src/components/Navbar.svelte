<script></script>

<main>
    <nav class="site-container">
        <ul class="navigation-primary">
          <li><a class="nav-primary-item" href="#services-section">Services</a></li>
          <!-- <li><a class="nav-primary-item" href="#gallery-section">Gallery</a></li> -->
          <li><a class="nav-primary-item" href="#article-section">Articles</a></li>
          <li><a class="nav-primary-item" href="#">About Us</a></li>
        </ul>
     
        <ul class="navigation-soc">
          <li class="nav-soc-item"><img src="assets/linkedinLogo.svg" alt=""></li>
          <li class="nav-soc-item"><img src="assets/mailLogo.svg" alt=""></li>
        </ul>
      </nav>
</main>

<style>
    nav {
    width: 92vw;
    padding-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation-primary {
    display: flex;
    cursor: pointer;
    list-style: none;
    gap: 70px;
    font-size: 15px;
    justify-content: space-between;
  }

  .nav-primary-item {
    text-decoration: none;
    transition: all 0.3s;
    color: var(--secondary);
    filter: opacity(60%);
  }

  .nav-primary-item:hover {
    /* color: var(--accent); */
    filter: opacity(100%);
    transition: all 0.3s;
    font-weight: 500;
  }

  .navigation-soc{
    margin-right: 3vw;
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
    width: 23px;
  }

</style>
