const BASE_URL = 'https://statsapi.mlb.com/api/v1';
const SEASON = new Date().getFullYear();

const API = {
    async getTeams() {
        const res = await fetch(`${BASE_URL}/teams?sportId=1`);
        if (!res.ok) throw new Error('Failed to fetch teams');
        const data = await res.json();
        return data.teams;
    },

    async getBattingLeaders() {
        const res = await fetch(
            `${BASE_URL}/stats?stats=season&group=hitting&gameType=R&season=${SEASON}&playerPool=All&limit=20`
        );
        if (!res.ok) throw new Error('Failed to fetch batting stats');
        const data = await res.json();
        const splits = data.stats?.[0]?.splits || [];
        return splits.sort((a, b) => parseFloat(b.stat?.avg) - parseFloat(a.stat?.avg));
    },

    async getSchedule(date) {
        const d = date || new Date().toISOString().split('T')[0];
        const res = await fetch(`${BASE_URL}/schedule?sportId=1&date=${d}`);
        if (!res.ok) throw new Error('Failed to fetch schedule');
        const data = await res.json();
        return data.dates?.[0]?.games || [];
    },

    async getNews() {
        const res = await fetch(
            'https://newsapi.org/v2/everything?q=MLB+baseball&language=en&sortBy=publishedAt&pageSize=6&apiKey=b5afbb42a8334d97941da11b45a67f76'
        );
        if (!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        return data.articles || [];
    },

    async getLeagueLeaders() { 
        const res = await fetch(

        )
        if(!res.ok) throw new Error('Failed to fetch League Leaders');
        const data = await res.json();
        return data.league_leaders || [];
    }
};
