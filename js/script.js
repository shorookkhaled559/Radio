
    const fetchBtn = document.getElementById('fetchBtn');
    const countryInput = document.getElementById('countryInput');
    const stationsList = document.getElementById('stationsList');
    const radioPlayer = document.getElementById('radioPlayer');
    const currentStation = document.getElementById('currentStation');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let allStations = [];
    let currentIndex = 0;
    const increment = 12;

    function displayStations() {
      const nextIndex = currentIndex + increment;
      const stationsToShow = allStations.slice(currentIndex, nextIndex);

      stationsToShow.forEach(station => {
        const stationDiv = document.createElement('div');
        stationDiv.className = "bg-gray-800 p-4 rounded hover:bg-gray-700 cursor-pointer transition";
        stationDiv.innerHTML = `
          <h2 class="font-bold truncate">${station.name}</h2>
          <p class="text-sm truncate">${station.country}</p>
          <p class="text-xs text-gray-400 truncate">${station.language} | ${station.tags}</p>
        `;
        stationDiv.addEventListener('click', () => {
          radioPlayer.src = station.url_resolved;
          radioPlayer.play();
          currentStation.textContent = station.name;
        });
        stationsList.appendChild(stationDiv);
      });

      currentIndex = nextIndex;
      loadMoreBtn.classList.toggle('hidden', currentIndex >= allStations.length);
    }

    fetchBtn.addEventListener('click', () => {
      const country = countryInput.value.trim();
      if (!country) return alert("Please enter a country");

      stationsList.innerHTML = '<p class="col-span-full text-center">Loading stations...</p>';
      loadMoreBtn.classList.add('hidden');
      allStations = [];
      currentIndex = 0;

      const url = `https://de1.api.radio-browser.info/json/stations/bycountryexact/${country}`;
      
      fetch(url)
        .then(res => res.json())
        .then(data => {
          stationsList.innerHTML = '';
          if (data.length === 0) {
            stationsList.innerHTML = '<p class="col-span-full text-center">No stations found</p>';
            return;
          }
          allStations = data;
          displayStations();
        })
        .catch(err => {
          console.error(err);
          stationsList.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to fetch stations</p>';
        });
    });

    loadMoreBtn.addEventListener('click', displayStations);
