<script>
    // export let title = ''
    // export let information = ''
    // export let icon = ''
</script>

<main>
    <div class="box-container">
        <img class="box-icon" src="assets/subicon.svg" alt="icon">
        <h1 class="box-title">Chef on board</h1>
        <p class="box-information">Get your neat meals delivered to you straight from our kitchen.</p>
    </div>
</main>

<style>
    .box-container {
        position: relative;
        display: flex;
        background: #D6DFF3;
        border-radius: 21px;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        height: 60px;
        width: 300px;
        align-items: center;
        gap: 30px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .box-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary);
    }

    .box-container:hover{
        transform: translateX(-20%);
        transition: 0.3s ease-in-out;
        background-color: #0b183c;
    }

    .box-container:hover .box-title{
        display: none;
    }

    .box-container:hover .box-icon{
        display: none;
    }

    .box-information {
        height: 0px;
        width:  0px;
        visibility: hidden;
    }

    .box-container:hover .box-information{
        visibility: visible;
        height: fit-content;
        width: fit-content;
        text-align: center;
        font-size: 14px;
        line-height: 167.5%;
        font-weight: 500;
        color: white;
    }
</style>