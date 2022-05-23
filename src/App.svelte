<script>
  import Landing from "./sections/Landing.svelte"
  import Services from "./sections/Services.svelte"
  import Gallery from "./sections/Gallery.svelte"
  import Footer from "./sections/Footer.svelte"
  import Article from "./sections/Article.svelte"

  let landingImage  = "assets/companyLogoHeroSection.jpg"
  let serviceImage = "assets/DesginElement1.svg"
</script>

<main>
  <Landing imageLink={landingImage}/>
  <Services imageLinkSer={serviceImage}/>
  <Gallery />
  <Article />
  <Footer />
</main>
