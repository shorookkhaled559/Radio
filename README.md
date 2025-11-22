# Vintage Radio

This project is an **interactive web radio app** that allows users to **listen to radio stations instantly** from around the world using the **Radio-Browser public API**.  
It’s built with **HTML, Tailwind CSS, and JavaScript**, featuring a **vintage-style, fully responsive design**.

---

## Live Demo

You can try the live version here:  
[Live Demo](https://shorookkhaled559.github.io/Radio/) 

---

## Features

- **Search by Country** — Enter a country name to view all available radio stations.  
- **Load More Stations** — Initially shows 12 stations with a **Load More** button to display more.  
- **Station Info** — Displays station name, country, language, and tags.  
- **Play Stations** — Click a station to start streaming it in the embedded player.  
- **Responsive Design** — Works smoothly on all screen sizes.  

---


## Technologies Used

- **HTML5** — Structure of the app.  
- **Tailwind CSS** — For modern, responsive styling.  
- **JavaScript (ES6)** — Handles API requests, audio playback, and UI updates.  
- **Radio-Browser Public API** — Fetches live radio station data (no API key required).  

---

## API Used

**Base URL:**  
\`\`\`
https://de1.api.radio-browser.info/json/
\`\`\`

**Example (JavaScript) — Fetch stations by user input country:**
\\\js
const countryInput = document.getElementById('countryInput'); 
const country = countryInput.value.trim(); 

fetch(`https://de1.api.radio-browser.info/json/stations/bycountryexact/${country}`)
  .then(res => res.json())
  .then(data => console.log(data));

\\\

It’s **free**, **public**, and requires **no API key**.

---

## Project Structure

\`\`\`
Radio/
│
├── css/
│   └── style.css
|
├── js/
│   └── script.js
|
├── index.html
└── README.md
\`\`\`

---

## How It Works

1. User opens the app.  
2. User enters a country name in the input field.  
3. The app fetches a list of radio stations from the **Radio-Browser API** for that country.  
4. Initially, a limited number of stations (12) are displayed.  
5. User can click **Load More** to see additional stations.  
6. User clicks a station from the list to start streaming it.  
7. Station info (name, country, language, tags) is displayed.  
8. The design is responsive, working smoothly on mobile and desktop.  

---


## How to Run Locally

1. Clone this repository:  
\`\`\`bash
git clone https://github.com/shorookkhaled559/Radio
\`\`\`
2. Navigate to the project folder:  
\`\`\`bash
cd Radio
\`\`\`
3. Open \`index.html\` in your browser.  
4. Click any station to start listening.  

---

## Future Enhancements

- Add **search stations by language or genre**.  
- Add **volume control and mute toggle**.  
- Add **favorites list** to save preferred stations.  
- Show **station thumbnails or logos** for better UI.  
- Add **dark/light themes**.  

---


## 🪪 License

This project is **open-source** and free for educational and personal use.  
Developed by **Shorouk Khaled**.
