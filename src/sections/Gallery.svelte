<script>
    let HoverStyleBtn
    let HoverStyleImage
    const hoverOn = () => {
        HoverStyleBtn ='on-hover-viewBtn-display'
        HoverStyleImage = 'on-hover-image-display'
    }
    const hoverOff = () => {
        HoverStyleBtn ='off-hover-viewBtn-display'
        HoverStyleImage = 'off-hover-image-display'
    }

</script>

<main>
    <section class="gallery-section site-container">
        <h1>Gallery</h1>
            <div class="gallery-container">
                <div on:mouseover={hoverOn} on:mouseleave={hoverOff} style="background-image:url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" class="Box card-tall {HoverStyleImage}"><a class="btn-RD {HoverStyleBtn}">View post</a></div>
                <div on:mouseover={hoverOn} on:mouseleave={hoverOff} style="background-image:url('https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80')" class="Box {HoverStyleImage}"><a class="btn-RD {HoverStyleBtn}">View post</a></div>
                <div on:mouseover={hoverOn} on:mouseleave={hoverOff} style="background-image:url('https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')" class="Box card-wide {HoverStyleImage}"><a class="btn-RD {HoverStyleBtn}">View post</a></div>
                <div on:mouseover={hoverOn} on:mouseleave={hoverOff} style="background-image:url('https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')" class="Box card-wide {HoverStyleImage}"><a class="btn-RD {HoverStyleBtn}">View post</a></div>
                <div on:mouseover={hoverOn} on:mouseleave={hoverOff} style="background-image:url('https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" class="Box card-tall-reverse {HoverStyleImage}"><a class="btn-RD {HoverStyleBtn}">View post</a></div>
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
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
    grid-auto-rows: 240px;
    grid-auto-columns: 300px;
  }

  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }

  .Box {
    position: relative;
  }

  .off-hover-image-display {
    position: relative;
  }

  .on-hover-image-display {
      position: relative;
      filter: grayscale(20%);
      filter: blur(10%);
  }

  .off-hover-viewBtn-display {
      display: none;
  }

  .on-hover-viewBtn-display {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: var(--accent);
    border: 2px solid var(--accent);
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.3s;
    cursor: pointer;
  }

  .on-hover-viewBtn-display:hover {
    color: black;
    font-weight: 500;
    background-color: var(--accent);
    transition: all 0.3s;
  }

  section {
      height: 100vh;
  }
</style>