const map = L.map('map').setView([45.434, 12.338], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([45.434, 12.338]).addTo(map)
  .bindPopup('Venezia')
  .openPopup();
