async function loadStats() {
    const container = document.getElementById('stats-table');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading stats...</p>';

    try {
        const splits = await API.getBattingLeaders();

        const rows = splits.map(split => `
            <tr>
                <td>${split.player?.fullName || 'Unknown'}</td>
                <td>${split.team?.name || ''}</td>
                <td>${split.stat?.gamesPlayed ?? 0}</td>
                <td>${split.stat?.atBats ?? 0}</td>
                <td>${split.stat?.hits ?? 0}</td>
                <td>${split.stat?.avg || '.000'}</td>
                <td>${split.stat?.homeRuns ?? 0}</td>
                <td>${split.stat?.rbi ?? 0}</td>
                <td>${split.stat?.stolenBases ?? 0}</td>
                <td>${split.stat?.ops || '.000'}</td>
            </tr>
        `).join('');

        container.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>G</th>
                        <th>AB</th>
                        <th>H</th>
                        <th>AVG</th>
                        <th>HR</th>
                        <th>RBI</th>
                        <th>SB</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        `;
    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load stats. Please try again.</p>';
    }
}
