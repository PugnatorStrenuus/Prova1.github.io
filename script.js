// Crea una mappa centrata sulle coordinate specificate
const map = L.map('map').setView([45.434, 12.338], 13);

// Aggiungi un layer di OpenStreetMap alla mappa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Aggiungi il primo marker e il popup con l'immagine
L.marker([45.4323, 12.3296]).addTo(map)
  .bindPopup(`
    <b>Cnaeus Numerius Fronto</b>
    <br><img src="images/Fronto_Inscription.jpg" alt="Iscrizione di Cnaeus Numerius Fronto" width="150">
  `)
  .openPopup();

// Aggiungi il secondo marker e il popup con l'immagine
L.marker([45.4375, 12.3401]).addTo(map)
  .bindPopup(`
    <b>Lucius Statius Faustus</b>
    <br><img src="images/Faustus_Inscription.jpg" alt="Iscrizione di Lucius Statius Faustus" width="150">
  `)
  .openPopup();
