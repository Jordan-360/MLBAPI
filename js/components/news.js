async function loadNews() { 
    const container = document.getElementById('news-list');
    if(!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading News...</p>';

    try { 
        const articles = await API.getNews();

        container.innerHTML = articles.slice(0, 6).map(article => `
            <a href="${article.link}" target="_blank" class="news-card">
                <img src="${article.thumbnail || 'assets/mlb-stadium.jpg'}" 
                     alt="${article.title}"
                     onerror="this.style.display='none'">
                <div class="news-card-body">
                    <p class="news-date">${new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    <h3>${article.title}</h3>
                    <p class="news-excerpt">${article.description?.replace(/<[^>]*>/g, '').slice(0, 100)}</p>
                    <span class="news-link">Read more →</span>
                </div>
            </a>
        `).join('');
    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load news. Please try again.</p>';
    }
}