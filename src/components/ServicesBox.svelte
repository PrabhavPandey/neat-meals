<script>
    export let title;
    export let icon;
    export let information;
</script>

<main>
    <div class="box-container">
        <img class="box-icon" src="{icon}" alt="icon">
        <h1 class="box-title">{title}</h1>
        <p class="box-information">{information}</p>
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
        font-size: 17px;
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
        font-size: 13px;
        line-height: 167.5%;
        font-weight: 500;
        color: white;
    }

    .box-icon {
        width: 38px;
    }
</style>