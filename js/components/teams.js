async function loadTeams() {
    const container = document.getElementById('teams-list');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading teams...</p>';

    try {
        const teams = await API.getTeams();
        const sorted = teams
            .filter(t => t.active)
            .sort((a, b) => a.name.localeCompare(b.name));

        container.innerHTML = sorted.map(team => `
            <div class="card">
                <h3 style="font-size:15px;font-weight:600;margin-bottom:4px">${team.name}</h3>
                <p style="font-size:13px;color:var(--text-secondary)">${team.venue?.name || ''}</p>
                <p style="font-size:12px;color:var(--text-muted);margin-top:4px">${team.league?.name || ''} &middot; ${team.division?.name || ''}</p>
            </div>
        `).join('');
    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load teams. Please try again.</p>';
    }
}
