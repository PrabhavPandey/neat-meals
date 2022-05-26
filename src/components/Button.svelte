<script>
    export let type = 'button'
    export let btnName
    export let btnLink
</script>

<main>
    <a class="btn-style" href={btnLink}>{btnName}</a>
</main>

<style>
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

</style>