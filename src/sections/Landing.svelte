<script>
    import {scrollRef} from "svelte-scrolling"
    import Button from "../components/Button.svelte";
    import Navbar from "../components/Navbar.svelte";
    export let imageLink;

    let fadeState = 'faddedState'
    let fadeStateBtn = true

    const fadeIn = () => {
      fadeState = 'landing-section-image'
      console.log(fadeState)
    }

    const fadeInBtn = () => {

    }

    setTimeout(() => {
      fadeIn()
    }, 600);
</script>

<main>
    <section use:scrollRef={'home'} id="landing-section" class="section-hero fp-bg">
        <div class="image-container site-container">
          <Navbar />
          <img class={fadeState} src={imageLink} alt="bgimage" />
          <Button btnLink="#/about" btnName="Learn more"/>
        </div>
      </section>
</main>

<style>
  .fp-bg {
    width: 100vw;
    background-color: #2C3F6A;
    color: white;
  }

  .faddedState {
    opacity: 0;
    transform: translateY(-10%);
    transition: all 1s;
  }
  .landing-section-image {
    opacity: 1;
    transform: translateY(0);
    width: 470px;
    transition: all 1s;
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

  @media screen and (max-width: 400px) {
    section {
      height: 100vh;
      width: 100vw !important;
    }

    .landing-section-image {
      margin-top: 10vh;
      width: 70%;
    }
    
  }
</style>