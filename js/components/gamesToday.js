async function loadGamesToday() {
    const container = document.getElementById('games-today');
    if (!container) return;

    container.innerHTML = '<p style="color:var(--text-muted)">Loading Games Today...</p>';

    try {
        const gamesHappeningToday = await API.getSchedule();

        container.innerHTML = gamesHappeningToday.map((game, i) => {
            const state = game.status.abstractGameState;
            const status = state === 'Final' ? 'Final'
                : state === 'Live' ? 'Live'
                : new Date(game.gameDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

            const logoUrl = (teamId) => `https://www.mlbstatic.com/team-logos/${teamId}.svg`;

            return `
                <div class="games-today-row">
                    <span class="game-number">${i + 1}</span>
                    <div class="games-today-info">
                        <div class="games-today-team">
                            <img src="${logoUrl(game.teams.away.team.id)}"
                                alt="${game.teams.away.team.name}"
                                class="games-today-logo"
                                onerror="this.style.display='none'">
                            <p class="games-today-team-name-away">${game.teams.away.team.abbreviation}</p>
                            <span class="games-today-record">${game.teams.away.leagueRecord?.wins ?? '-'}-${game.teams.away.leagueRecord?.losses ?? '-'}</span>
                        </div>
                        <div class="games-today-team">
                            <img src="${logoUrl(game.teams.home.team.id)}"
                                alt="${game.teams.home.team.name}"
                                class="games-today-logo"
                                onerror="this.style.display='none'">
                            <p class="games-today-team-name-home">${game.teams.home.team.abbreviation}</p>
                            <span class="games-today-record">${game.teams.home.leagueRecord?.wins ?? '-'}-${game.teams.home.leagueRecord?.losses ?? '-'}</span>
                        </div>
                    </div>
                    <span class="games-today-status">${status}</span>
                </div>
            `;
        }).join('');

    } catch {
        container.innerHTML = '<p style="color:var(--mlb-red)">Could not load Games Today. Please try again.</p>';
    }
}