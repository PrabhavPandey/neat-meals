<script>
    import {scrollRef} from "svelte-scrolling"
    import Button from "../components/Button.svelte";
    import Navbar from "../components/Navbar.svelte";
    export let imageLink;
</script>

<main>
    <section use:scrollRef={'home'} id="landing-section" class="section-hero fp-bg">
        <div class="image-container site-container">
          <Navbar />
          <img class="landing-section-image" src={imageLink} alt="bgimage" />
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