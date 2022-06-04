<script>
    import { scrollTo } from 'svelte-scrolling';
    import Button from "../components/Button.svelte";
</script>

<main>
    <footer class="footer-section">
        <div class="site-container footer-container">
          <Button btnLink="mailto:neatmealscompany@gmail.com" btnName="Contact us"/>
            <ul class="footer-nav">
              <li use:scrollTo={'home'} class="footer-nav-item"><a href="#landing-section">Home</a></li>
              <li use:scrollTo={'service'} class="footer-nav-item"><a href="#services-section">Services</a></li>
              <!-- <li class="footer-nav-item">Gallery</li> -->
              <li class="footer-nav-item"><a href="#/about">About us</a></li>
            </ul>
  
            <ul class="social-nav-2">
              <li class="nav-soc-item"><a href="https://www.linkedin.com/company/neat-meals-company/"><img src="assets/linkedinLogo.svg" alt=""></a></li>
              <li class="nav-soc-item"><a href="mailto:neatmealscompany@gmail.com"><img src="assets/mailLogo.svg" alt=""></a></li>
              <li class="nav-soc-item"><a href="https://goo.gl/maps/TqWKi9kXLnKB5Pt28" target="_blank"><img class="location-img"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADwklEQVR4nO2by2tdVRSHvxX6oGii1CpoIvgItgFbwZn9I0SHtSgiKJSqAx2qSFHsqNMWLc4UnJg2Ijh0oiCmPqA1PtpqwfhAO2hJm9IS/Ryce1FvQ3L33uee09D7TbPW2uu3zj47a+99LgwZMmTIdUw0OZg6DuwE7gPuBEY7f1oAfgZ+AD6NiF+bzGugqBPqK+qc/fON+nKnYGuTjvC31csJwnu5rB5W72hbT9+ooT6nLhQI7+W8uldt9JVNRh1VZ2oU3su0emPbOpdF3aLODlB8l8/VLW3r/R9WT/5YA+K7zHqtzASrd/5og+K7THstrAnq8y2I7/Jsaf5FFVRvB74DxkoTyWQBmIqIX3IDjBQm8DrtiYeqk3y1JED2DFAngNPAhpIEauAKcG9EzOc4rysY+Enyxc8BM1S9P1R7g0eAqYxYG4AngDcyc8nDtN6+yzl1l8us3lb/TR6z6vpSOd60+PFM8ff3EXt7RhH+tlqQk8ldBB/K8NkTESdWM4qI48DexNiRmVN2AbYl2s8B7yXYvwt8mzhGak5AfgEmEu2PRoT9GndsZxLHSM0JyC9Aah9+MmOMVJ/R1U2uJrcAS4n2Of1Gqk9qTkB+Ac4m2k9mjJHqk5oTkF+A3xPtHzVh56aOUDVGKfyWaA/kF+CrRPspYFeC/W7SV/XUnPJRx9S/EpuV8+r2PmLvyGiEltSsRTAb9YvEJLtF2O3yrfCI+niGeNXZXB0lm6EjwIOJPmPAO8BL6gdUZwlQvSIPk9nMANOZfkXb4a38K6BttkXE9zmO2QcinQG/zPWvkdlc8VB+InSo0L8ODpY4l54JbgLmgc0lcQo4B4xHxGJugKIZEBGXgLdKYhRysEQ81HA9bnVL8xPpG6RSLgJ3R8SfJUFK1wAi4ixwuDROBodKxUNNH0iotwKnaO6IfAGYjIg/SgMVzwCAzpM4UEesPtlfh3io8RMZ9QaqY+5Bf8wwD2wtXfy61DIDACLiIvBiXfFW4IW6xA8E9cOMzUy/fNS2vlVR71IvDED8onpP3fnW9gp0iYgzDOaaal9E/DiAuPWjrlO/rvHpn1DXt60rCXWn1UlNKUtq1q1P66iv1VCAfW3ryMbqVfisQPwx19rU70WdNO+jyQtWp05rH3VPRgGeaTvv2rD6+OFIgvj32865dtSb1VN9iD+p3tR2vgPB6tJjcQXxl9TUo/a1hfr0CgV4qu38GsHqNwC9vNl2Xo2hrlc//o/4T9SNbefVKOot6mn1jHpb2/m0gvqAuqPtPIYMGTLkuuUfwei71vQFjTAAAAAASUVORK5CYII=" alt="location"></a></li>
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
    width: 84vw;
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
    filter: opacity(63%);
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

  .location-img {
    position: relative;
    right: 7px;
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