<script>
    import Article from "./sections/Article.svelte";
    import Footer from "./sections/Footer.svelte";
    import Gallery from "./sections/Gallery.svelte";
    import Landing from "./sections/Landing.svelte";
    import Services from "./sections/Services.svelte";
  
    let landingImage  = "assets/companyLogoHeroSection.jpg"
    let serviceImage = "assets/DesginElement1.svg"
  </script>
  
  
  <main>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <Landing imageLink={landingImage}/>
    <Services />
    <Gallery />
    <Article />
    <Footer />
  </main>
  