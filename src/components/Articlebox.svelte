<script>
    export let articleTitle;
    export let articleDescp;
    export let articleRedir;
</script>

<main>
    <div class="article-box-container">
            <p class="article-title">{articleTitle}</p>
            <p class="article-descp">{articleDescp}</p>
            <a class="article-link" href={articleRedir}>Read more &rarr;</a>
    </div>
</main>

<style>
    .article-box-container {
        padding: 2rem 4rem 1.5rem 4rem;
        border-radius: 15px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        box-shadow: 10px 10px 18px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        transition: 0.3s ease-in-out;
    }

    .article-box-container:hover {
        transform:  translateY(-10px);
        transition: 0.3s ease-in-out;
    }

    .article-title {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0;
    }

    .article-descp {
        margin-top: 9px;
        font-size: 8px;
    }

    .article-link {
        text-decoration: none;
        color: var(--primary);
        font-size: 11px;
        font-weight: 600;
    }

    @media screen and (max-width: 400px) {
        .article-box-container {
            width: 90%;
            padding: 14px 20px;
        }

    }
</style>