async function loadPlayers() {
    const container = document.getElementById('players-list');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading players...</p>';

    try {
        const splits = await API.getBattingLeaders();

        container.innerHTML = splits.map((split, i) => `
            <div class="card">
                <p style="font-size:11px;color:var(--text-muted);margin-bottom:4px">#${i + 1} Batting Average</p>
                <h3 style="font-size:15px;font-weight:600;margin-bottom:4px">${split.player?.fullName || 'Unknown'}</h3>
                <p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">${split.team?.name || ''}</p>
                <div style="display:flex;gap:16px;font-size:13px">
                    <span><strong>${split.stat?.avg || '.000'}</strong> AVG</span>
                    <span><strong>${split.stat?.homeRuns ?? 0}</strong> HR</span>
                    <span><strong>${split.stat?.rbi ?? 0}</strong> RBI</span>
                </div>
            </div>
        `).join('');
    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load player stats. Please try again.</p>';
    }
}
