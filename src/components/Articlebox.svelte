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
        width: 280px;
        padding-right: 4rem;
        padding-left: 4rem;
        padding-top: 2rem;
        padding-bottom: 1.5rem;
        border-radius: 15px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        box-shadow: 10px 10px 18px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
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
</style>