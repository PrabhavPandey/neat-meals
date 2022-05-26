<script>
    export let btnName
    export let btnLink

    let fadeState = 'faddedState'

    const fadeIn = () => { 
        fadeState = 'btn-style'
        console.log(fadeState) 
    }

    setTimeout(() => {
        fadeIn()
    }, 600);
</script>

<main>
    <a class={fadeState} href={btnLink}>{btnName}</a>
</main>

<style>

   .faddedState {
        opacity: 0;
        transform: translateY(-10%);
        transition: all 1s;
    }

    .btn-style {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 0.6rem;
        padding-bottom: 0.6rem;
        font-family: 'poppins';
        font-size: 14px;
        font-weight: 600;
        background: none;
        border-radius: 9px;
        width: fit-content;
        border: solid white 2px;
        color: white;
        text-decoration: none;
        transition: all 0.3s;
    }

    .btn-style:hover {
        color: var(--primary);
        background: white;
        cursor: pointer;
        transition: all 0.3s;
    }

    @media only screen and (max-width: 800px){
        .btn-style {
            font-size: 12px;
        }
    }

</style>