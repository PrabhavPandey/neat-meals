<script>
</script>

<main>
    <section class="gallery-section site-container">
        <h1>Gallery</h1>
            <div class="gallery-container">
                <div style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" class="Box card-tall"></div>
                <div style="background-image:url('https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80')" class="Box"></div>
                <div style="background-image:url('https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')" class="Box card-wide"></div>
                <div style="background-image:url('https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')" class="Box card-wide"></div>
                <div style="background-image:url('https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" class="Box card-tall-reverse"></div>
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