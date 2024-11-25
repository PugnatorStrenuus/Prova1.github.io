// Inizializza la mappa centrata su Venezia (latitudine e longitudine)
const map = L.map('map').setView([45.434, 12.338], 13);

// Aggiungi i tasselli della mappa con OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Aggiungi un marker (puntatore) su Venezia
L.marker([45.434, 12.338]).addTo(map)
  .bindPopup('Venezia') // Testo che appare sul marker
  .openPopup(); // Apre automaticamente il popup
