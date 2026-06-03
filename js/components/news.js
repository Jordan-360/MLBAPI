async function loadNews() { 
    const container = document.getElementById('news-list');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading News...</p>';

    try { 
        const articles = await API.getNews();

        // filter to last 7 days
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const toShow = articles.filter(article => {
            return new Date(article.publishedAt) >= oneWeekAgo;
        }).slice(0, 6);

        container.innerHTML = toShow.map(article => {
            const image = article.urlToImage || null;

            return `
                <a href="${article.url}" target="_blank" class="news-card">
                    ${image ? `
                        <div class="news-card-img">
                            <img src="${image}" 
                                 alt="${article.title}"
                                 onerror="this.parentElement.style.display='none'">
                        </div>
                    ` : `
                        <div class="news-card-img news-card-img--placeholder">
                            ⚾
                        </div>
                    `}
                    <div class="news-card-body">
                        <p class="news-date">${new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        <h3>${article.title}</h3>
                        <p class="news-excerpt">${article.description?.slice(0, 120) || ''}...</p>
                        <span class="news-link">Read more →</span>
                    </div>
                </a>
            `;
        }).join('');

    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load news. Please try again.</p>';
    }
}