<script>
  import { scrollRef } from 'svelte-scrolling';
  import {imageStore} from "../stores/imageStore"
  import { onDestroy } from 'svelte';
  let imagedata = [];

  const unsubscribe = imageStore.subscribe((storeData) => {
    imagedata = storeData
  })

  onDestroy(unsubscribe());
</script>

<main>
    <section use:scrollRef={'gallery'} id="gallery-section" class="gallery-section site-container">
        <h1>Gallery</h1>
            <div class="gallery-container">
              {#each imagedata as imgData (imgData.id) }
                <img src={imgData.src} alt={imgData.alt}/>
              {/each}
            </div>

    </section>
</main>

<style>
  .gallery-section h1 {
    text-align: center;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 8vh;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    width: 90vw;
    row-gap: 2vw;
    column-gap: 2vw;
    margin: 0 auto;
  }

  img {
    height: 40vh;
    width: 16vw;
    filter: brightness(70%);
    transition: all 0.5s;
    border-radius: 10px;
  }

  img:hover {
    filter: brightness(100%);
    box-shadow: 7px 7px #888888;
    transform: scale(1.2);
  }



  @media screen and (max-width: 800px) {
    .gallery-container {
    grid-template-columns: repeat(2,1fr);
    width: 90vw;
    row-gap: 10vw;
    column-gap: 5vw;
    margin: 0 auto;
    }

    img {
    height: 30vh;
    width: 42vw;
    }
    /*to be done later*/
  }
</style>