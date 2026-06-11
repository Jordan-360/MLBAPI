async function loadLeagueLeaders() {
    const container = document.getElementById('leaders-list');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading League Leaders...</p>';

    try {
        const league_leaders = await API.getBattingLeaders();
        const top10 = league_leaders.slice(0, 10);

        container.innerHTML = top10.map((split, i) => `
            <div class="leader-row">
                <span class="leader-rank">#${i + 1}</span>
                 <div class="leader-info">
            <p class="leader-name">${split.player?.fullName || 'Unknown'}</p>
            <p class="leader-team">${split.team?.name || ''}</p>
        </div>
        <span class="leader-avg">${split.stat?.avg || '.000'}</span>
    </div>
`).join('');
    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load League Leaders. Please try again.</p>';
    }
}