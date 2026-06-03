🌟 Features
FeatureStatus🔴 Live Scores & Game Updates🚧 In Progress🏆 League Standings (AL & NL)🚧 In Progress👤 Player Stats & Profiles🚧 In Progress📅 Game Schedule by Date🚧 In Progress📱 Responsive Design🚧 In Progress

🛠️ Tech Stack
⚾  Frontend    →  Vanilla JavaScript (ES6+)
🎨  Styling     →  CSS3
🌐  Data        →  MLB Stats API (statsapi.mlb.com)
📦  Version     →  Git & GitHub

📁 Project Structure
mlb-dashboard/
│
├── 📄 index.html               # App entry point
│
├── 🎨 css/
│   └── styles.css              # Global styles
│
└── ⚡ js/
    ├── api.js                  # All MLB Stats API calls (acts as a service layer)
    ├── app.js                  # Main app entry & routing logic
    │
    └── 📦 components/
        ├── scores.js           # Live scores component
        ├── standings.js        # Standings component
        └── players.js          # Player stats component

🚀 Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Edge)
A code editor (VS Code recommended)
Git installed on your machine

Installation
bash# 1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/mlb-dashboard.git

# 2️⃣ Navigate into the project
cd mlb-dashboard

# 3️⃣ Open in your browser
# Just open index.html — no build step needed! ⚡

🌐 API Reference
This project uses the free, public MLB Stats API — no API key required!
Base URL: https://statsapi.mlb.com/api/v1
EndpointDescription/schedule?sportId=1&date=YYYY-MM-DD📅 Today's game schedule & scores/standings?leagueId=103,104🏆 AL & NL standings/teams?sportId=1🧢 All MLB teams/people/{playerId}/stats👤 Individual player stats

🗺️ Roadmap

 📁 Project scaffold & folder structure
 📝 Git version control setup
 🌐 API service layer (api.js)
 🔴 Live scores page
 🏆 Standings page
 👤 Player stats page
 🎨 Styling & responsive layout
 🔄 Migrate to Angular (Phase 2)


🤝 Contributing
This is a personal portfolio project but feedback is always welcome!

Fork the repo
Create a feature branch: git checkout -b feat/your-feature
Commit your changes: git commit -m "feat: add your feature"
Push to the branch: git push origin feat/your-feature
Open a Pull Request


📌 Commit Convention
This project follows conventional commits to keep the history clean and professional:
PrefixUse Forfeat:✨ New featuresfix:🐛 Bug fixesstyle:🎨 CSS/UI changesrefactor:♻️ Code restructuringchore:🔧 Maintenance tasksdocs:📝 Documentation updates

👨‍💻 Author
Built with ❤️ and ☕ as a portfolio project to sharpen Vanilla JS and frontend development skills — with plans to scale up to Angular.
