<script>
  import ServicesBox from "../components/ServicesBox.svelte";
</script>

<main>

    <section id="services-section" class="services-section site-container">
      <div class="services-text-container">
        <p class="text-container-header">Services</p>
        <h1 class="text-container-title">Feel free to select from our wide range of services</h1>
      </div>

      <div class="services-component-container">
        <div class="components">
          <ServicesBox />
        </div>
        <!-- <img src="" alt="some-img"> -->
      </div>
    </section>
</main>

<style>
.services-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text-container-header {
    color: var(--primary);
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 7px;
  }
  .text-container-title {
    margin: 0;
    font-size: 40px;
    max-width: 600px;
    font-weight: 600;
    line-height: 132.5%;
  }
  section {
    height: 100vh;
  }

  @media screen and (max-width: 1030px){
        .services-section {
            flex-direction: column;
        }
    }
</style>