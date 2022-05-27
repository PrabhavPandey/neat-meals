<script>
  import { scrollRef } from 'svelte-scrolling';
  import ServicesBox from "../components/ServicesBox.svelte";

  let serviceData = [
    {
      id: 1,
      icon: "assets/subicon.svg",
      title: "Subscription Service",
      info: "Get your neat meals delivered to you straight from our kitchen."
    },
    {
      id: 2,
      icon: "assets/cheficon.svg",
      title: "Chef on Board",
      info: " With our chef around, you won't have to compromise on your palate."
    },
    {
      id: 3,
      icon: "assets/Vanicon.svg",
      title: "Vanity Kitchen",
      info: "Pamper your taste buds even when outdoors as our chefs prepare fresh meals in a vanity kitchen"
    }
  ]
</script>

<main>

    <section use:scrollRef={'service'} style="background-image:url('assets/IllusFr.svg')" id="services-section" class="services-section site-container">
      <div class="services-text-container">
        <p class="text-container-header">Services</p>
        <h1 class="text-container-title">Feel free to select from our wide range of services</h1>
      </div>

      <div class="services-component-container">
        <div class="components">
          {#each serviceData as serDa (serDa.id)}
          <ServicesBox icon={serDa.icon} title={serDa.title} information={serDa.info}/>
          {/each}
        </div>
        <img class="arr-illus" src="assets/arrD.svg" alt="">
      </div>
    </section>
</main>

<style>
.services-section {
    display: flex;
    padding-left: 3vw;
    background-size:  1200px 900px;
    background-position: center;
    align-items: center;
  }

  .text-container-header {
    color: var(--primary);
    font-weight: 600;
    font-size: 1.4em;
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
    margin-top: 40px;
    height: 100vh;
  }

  .components {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .services-component-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media screen and (max-width: 1030px){
    .services-section {
      flex-direction: column;
      justify-content: center;
      gap: 70px;
    }
    
    .text-container-title {
      font-size: 30px;
      max-width: 400px;
      text-align: center;
    }

    .text-container-header {
      text-align: center;
      font-size: 15px;
    }

    .arr-illus {
      display: none;
    }

  }

  @media screen and (min-width: 1030px) {
    .services-section {
      justify-content: space-between;
    }
  }
</style>