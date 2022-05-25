<script>
    import Navbar from "../components/Navbar.svelte"
</script>

<main>
    <Navbar />
    <article class="site-container">
      <container>
        <h1>About Us</h1>
        <p>Neat Meals Company is a luxury meal service that provides nutrient-rich and globally inspired meals that are planned by nutritionists and designed by our seasoned chefs. We aspire to provide our clients with a flavorsome way to accomplish their health requirements. <br /><br /> Our chefs are passionate about cooking and are extensively trained to create culinary masterpieces. The process of creating a dish right from the farm to the plate is a journey and thus we handpick our ingredients to ensure optimum quality. We provide delectable menus to our clients WHENEVER and WHEREVER they need . The menu never goes dull with us!</p>
      </container>
      <img class="section-img" src="assets/Chars.svg" />
    </article>
  </main>

<style>
article {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    gap: 10vw;
    width: 74vw;
    margin: 0 auto;
}

h1 {
  color: var(--primary);
  font-size: 80px;
  font-weight: 600;
  margin: 0;
}

p {
    font-size: 14px;
    line-height: 187.5%;
}

.section-img {
    width: 400px;
}

article {
    padding-top: 80px;
}

@media only screen and (max-width: 1024px) {
    .section-img {
        width: 300px;
    }

    p {
        font-size: 12px;
        text-align: center;
    }

    article {
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 30px;
        text-align: center;
    }
}
</style>