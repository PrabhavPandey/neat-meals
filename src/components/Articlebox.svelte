<script>
    export let articleTitle;
    export let articleDescp;
    export let articleRedir;
    export let articleImage;
</script>

<main>
    <div class="article-box-container">
        <img src={articleImage} alt="ImageHere">
        <div class="content-container">
            <p class="article-title">{articleTitle}</p>
            <p class="article-descp">{articleDescp}</p>
            <a href={articleRedir}>Read more &rarr;</a>
        </div>
    </div>
</main>

<style>
    .article-box-container {
        background: red;
        width: 350px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>