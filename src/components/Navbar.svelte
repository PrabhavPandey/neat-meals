<script>
    let isActive = false;
    const setState = () => { isActive = !isActive}
</script>

<main>
    <header>
        <nav class="pr-nav site-container">
            <ul class="navigation-primary">
              <li><a class="nav-primary-item" href="#services-section">Services</a></li>
              <!-- <li><a class="nav-primary-item" href="#gallery-section">Gallery</a></li> -->
              <li><a class="nav-primary-item" href="#article-section">Articles</a></li>
              <li><a class="nav-primary-item" href="#">About Us</a></li>
            </ul>
         
            <ul class="navigation-soc">
              <li class="nav-soc-item"><img src="assets/linkedinLogo.svg" alt=""></li>
              <li class="nav-soc-item"><img src="assets/mailLogo.svg" alt=""></li>
            </ul>
        </nav>
        <div class="mobile-navHolder">
            <button on:click={setState} class="hamburger" class:is-active={isActive}>
                <div class="bar"></div>
            </button>
        </div>
    </header>
</main>

<style>
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

@media only screen and (min-width: 768px) {
	.hamburger {
		display: none;
        left: 0;
	}
}

.mobile-navHolder {
    display: flex;
    justify-content: flex-end;
}

</style>
