document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    loadNews();
    loadLeagueLeaders();

    //SEARCH
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const navSearch = document.getElementById('nav-search');

    let searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    navSearch.appendChild(searchResults);

    let teamsCache = [];

    //preload for team search
    API.getTeams().then(teams => {
        teamsCache = teams.filter(t => t.active);
    });

    searchToggle.addEventListener('click', () => {
        searchInput.classList.toggle('open');
        if (searchInput.classList.contains('open')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            searchResults.classList.remove('open');
        }
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('open');
            return;
        }

        const matchedTeams = teamsCache.filter(t => t.name.toLowerCase().includes(query));

        if (matchedTeams.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No Results Found</div>';
        } else {
            searchResults.innerHTML = `
            <div class="search-result-label">Teams</div>
            ${matchedTeams.slice(0, 6).map(t => `
                <div class="search-result-item">
                    🧢 ${t.name}
                    <span style="font-size:11px;color:var(--text-muted);float:right">${t.league?.name || ''}</span>
                </div>
            `).join('')}
        `;
        }
        searchResults.classList.add('open');
    });

    //close search on outside click
    document.addEventListener('click', (e) => {
        if (!navSearch.contains(e.target)) {
            searchInput.classList.remove('open');
            searchInput.value = '';
            searchInput.classList.remove('open');
        }
    });
});