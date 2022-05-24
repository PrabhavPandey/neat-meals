<script>
</script>

<main>
    <section class="gallery-section site-container">
        <h1>Gallery</h1>
            <div class="gallery-container">
                <div style="background-image:url('assets/InstaImg1.jpeg')" class="Box card-tall"></div>
                <div style="background-image:url('assets/InstaImg2.jpeg')" class="Box"></div>
                <div style="background-image:url('assets/InstaImg3.jpeg')" class="Box card-wide"></div>
                <div style="background-image:url('assets/InstaImg4.jpeg')" class="Box card-wide"></div>
                <div style="background-image:url('assets/InstaImg5.jpeg')" class="Box card-tall-reverse"></div>
            </div>
    </section>
</main>

<style>
  .gallery-section h1 {
    text-align: center;
    font-weight: 600;
    color: var(--primary);
  }

  .gallery-container {
    display: grid;
    margin-top: 50px;
    gap: 1.8rem;
    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
    height: 80vh;
  }

  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }

  .Box {
    background-size: cover;
    filter: brightness(40%);
    transition: all 0.5s;
  }

  .Box:hover {
    filter: brightness(100%);
    transform: scale(1.1);
  }

  section {
      height: 100vh;
  }

  @media screen and (max-width: 400px) {
    
  }
</style>