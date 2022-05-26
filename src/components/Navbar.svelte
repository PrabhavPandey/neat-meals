<script>
    import { scrollTo } from 'svelte-scrolling'
    let isActive = false;
    const setState = () => { isActive = !isActive }
    export let pageLocation;
    let navBarStyle = 'navigation-primary';
    let navBarStyleSoc = 'navigation-soc';
    let fadeState = 'faddedState'

    const fadeIn = () => { 
      fadeState = 'nav-container'
      console.log(fadeState) 
    }

    setTimeout(() => {
        fadeIn()
    }, 600);


    let iconLinksDark = [
      {
        id:1,
        link: 'assets/linkedinLogo.svg',
        href: 'https://www.linkedin.com/company/neat-meals-company/'
      },
      {
        id:2,
        link: 'assets/mailLogo.svg',
        href: 'mailto:neatmealscompany@gmail.com'
      }
    ]

    let iconLinksLight = [
      {
        id:1,
        link: 'assets/linkedinLogoAlt.svg',
        href: 'https://www.linkedin.com/company/neat-meals-company/'
      },
      {
        id:2,
        link: 'assets/mailLogoAlt.svg',
        href: 'mailto:neatmealscompany@gmail.com'
      }
    ]

    if (pageLocation === true){
      navBarStyle = 'navigation-primary navigation-primary-alt'
      navBarStyleSoc = 'navigation-soc navigation-soc-alt'
    }else {
      navBarStyle = 'navigation-primary'
      navBarStyleSoc = 'navigation-soc'
    }
</script>

<main>
    <header class={fadeState}>
        <nav class="pr-nav site-container">
            <ul class="{navBarStyle}">
              {#if pageLocation}
                <li><a class="nav-primary-item" href="#/">Home</a></li>
                {:else}
                  <li><a class="nav-primary-item" href="#/about">About us</a></li>
              {/if}
                <li><a use:scrollTo={'service'} class="nav-primary-item" href="#services-section">Services</a></li>
                <!-- <li><a class="nav-primary-item" href="#gallery-section">Gallery</a></li> -->
                <li><a use:scrollTo={'article'} class="nav-primary-item" href="#article-section">Articles</a></li>
            </ul>
         
            <ul class={navBarStyleSoc}>
              {#if pageLocation}
                {#each iconLinksLight as iconL (iconL.id)}
                  <li class="nav-soc-item"><a href={iconL.href}><img src={iconL.link} alt=""></a></li>
                {/each}
              {:else}
                {#each iconLinksDark as iconD (iconD.id)}
                  <li class="nav-soc-item"><a href={iconD.href}><img src="{iconD.link}" alt=""></a></li>
                {/each}
              {/if}
            </ul>
        </nav>
        <div class="mobile-Holder">
         <div class="mobBtn-Holder">
            <button on:click={setState} class="hamburger" class:is-active={isActive}>
              <div class="bar"></div>
            </button>
         </div>
         <div class="mobile-navigation" class:is-active={isActive}>
            <a use:scrollTo={'service'} class="mobNav-item" href="#services-section">Services</a>
            <a use:scrollTo={'article'} class="mobNav-item" href="#article-section">Articles</a>
            <a class="mobNav-item" href="#/about">About us</a>
            <a class="mobNav-item" href="mailto:neatmealscompany@gmail.com">Email</a>
            <a class="mobNav-item" href="https://www.linkedin.com/company/neat-meals-company/">Linkedin</a>
        </div>
      </div>
    </header>
</main>

<style>

    .faddedState {
      opacity: 0;
      transform: translateY(-10%);
      transition: all 0.5s;
    }
    .nav-container {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s;
    }
    nav {
    width: 92vw;
    padding-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation-primary {
    display: flex;
    cursor: pointer;
    list-style: none;
    gap: 70px;
    font-size: 15px;
    justify-content: space-between;
  }

  .nav-primary-item {
    text-decoration: none;
    transition: all 0.3s;
    color: var(--secondary);
    filter: opacity(60%);
  }

  .nav-primary-item:hover {
    /* color: var(--accent); */
    filter: opacity(100%);
    transition: all 0.3s;
    font-weight: 500;
  }

  .navigation-soc{
    margin-right: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    cursor: pointer;
    list-style: none;
  }

  .navigation-soc img {
    width: 15px;
  }

  .nav-soc-item img {
    width: 23px;
  }

  
.hamburger {
	position: relative;
	display: block;
	width: 35px;
	cursor: pointer;
	
	appearance: none;
	background: none;
	outline: none;
	border: none;
  background: blue;
}

.hamburger .bar, .hamburger:after, .hamburger:before {
	content: '';
	display: block;
	width: 100%;
	height: 3px;
	background-color: #FFF;
	margin: 6px 0px;
	transition: 0.4s;
}

.hamburger.is-active:before {
	transform: rotate(-45deg) translate(-8px, 6px);
	height: 5px;
}

.hamburger.is-active:after {
	transform: rotate(45deg) translate(-9px, -8px);
	height: 5px;
}

.hamburger.is-active .bar {
	opacity: 0;
}

@media only screen and (max-width: 768px) {
    .navigation-primary {
        display: none;
    }

    .navigation-soc {
        display: none;
    }
}

.mobile-navigation {
  position: absolute;
  z-index: 1;
  top: 0;
  min-height: 100vh;
  left: 100%;
  width: 100%;
  min-height: 100vh;
  display: block;
  z-index: 98;
  transition: 0.4s;
  background: red;
}

.mobile-navigation.is-active {
  left: 0;
}

.mobile-navigation a {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto 16px;
  text-align: center;
  padding: 12px 16px;
  color: #FFF;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {

.mobile-navigation {
  display: none;
}
.hamburger {
  display: none;
      left: 0;
}
}

.mobile-Holder {
  position: relative;
}

.mobBtn-Holder {
  position: absolute;
  z-index: 4;
}

.navigation-primary-alt li a{
  color: black;
  font-weight: 500;
}

.navigation-soc-alt li img {
  color: black;
}

</style>
