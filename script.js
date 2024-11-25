const map = L.map('map').setView([45.434, 12.338], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([45.4323, 12.3296]).addTo(map)
  .bindPopup('Cnaeus Numerius Fronto')
  .openPopup();

L.marker([45.4375, 12.3401]).addTo(map)
  .bindPopup('Lucius Statius Faustus')
  .openPopup();
