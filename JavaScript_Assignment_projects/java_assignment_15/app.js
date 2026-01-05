// Function to fetch and display subway lines and their stations
function getStations(lineName) {
    fetch('nyc-subway.json')
      .then(response => response.json())
      .then(data => {
        let subwayLine = null;
  
        // Find the line in the data
        for (let line in data.lines) {
          if (data.lines[line].name === lineName) {
            subwayLine = data.lines[line];
            break;
          }
        }
  
        // If the line is found, display the stations
        if (subwayLine) {
          displayStations(subwayLine);
        } else {
          alert('Line not found!');
        }
      })
      .catch(err => {
        console.error('Error fetching subway data:', err);
      });
  }
  
  // Function to display the stations for a given subway line
  function displayStations(subwayLine) {
    const stationListDiv = document.getElementById('station-list');
    stationListDiv.innerHTML = ''; // Clear previous stations
    
    const lineHeading = document.createElement('h2');
    lineHeading.textContent = `Line ${subwayLine.name} (${subwayLine.color})`;
    stationListDiv.appendChild(lineHeading);
    
    const stationList = document.createElement('ul');
    subwayLine.stations.forEach(station => {
      const listItem = document.createElement('li');
      listItem.textContent = station;
      stationList.appendChild(listItem);
    });
    
    stationListDiv.appendChild(stationList);
  }
  
  // Event listener for the "Get Stations" button
  document.getElementById('get-stations').addEventListener('click', () => {
    const lineName = document.getElementById('line-name').value.trim();
    
    if (lineName) {
      getStations(lineName);
    } else {
      alert('Please enter a subway line number.');
    }
  });
  