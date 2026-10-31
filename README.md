# Citi Bike Halloween 🎃🚲

Parodiesite voor een Citi Bike-kostuum. Mensen scannen de QR-code op je outfit, zien "Unlocking bike…" en krijgen dan een grappige reden waarom de fiets niet beschikbaar is. Daarna kunnen ze de minigame **Find a Dock** spelen.

Puur HTML/CSS/JS, geen build-stap.

## Bestanden

| Bestand | Wat |
|---|---|
| `index.html` | De app (kaart, unlock-grap, minigame, menu, ride history) |
| `print.html` | Printbare QR-stickers (op Vercel: `/print`) |
| `js/content.js` | **Alle grappen en teksten**: hier pas je alles aan |
| `js/app.js` | Logica |
| `js/stations.js` | Echte Citi Bike-stationlocaties (openbare GBFS-data) |
| `css/app.css` | Styling |

## Grappen of locatie aanpassen

Open `js/content.js`:
- `REASONS`: redenen waarom de fiets niet beschikbaar is (titel, tekst, foutcode)
- `CONFIG.center`: middelpunt van de kaart (nu Flatiron, W 23rd St & 6th Ave). Zet hier de locatie van het feest.
- `CONFIG.gameSeconds`: duur van de minigame
- `TIP`: je Zelle-adres en naam voor de grote **Give a tip**-knop (Zelle heeft geen betaallink, dus de knop kopieert het e-mailadres en legt uit hoe je via je bank-app betaalt)
- `HISTORY`, `TRANSIT`, `TOASTS`, `MISS_LINES`, `RANKS`: overige teksten

## Lokaal bekijken

```bash
python3 -m http.server 4173
```

Open daarna http://localhost:4173 (en http://localhost:4173/print.html voor de stickers).

## Deployen op Vercel

**Optie A: CLI**

```bash
npm i -g vercel
vercel --prod
```

(Voer dit uit in deze map. Kies bij de vragen "Other" als framework en laat build-instellingen leeg.)

**Optie B: GitHub**: push deze map naar een repo, ga naar vercel.com → *Add New → Project*, importeer de repo, Framework Preset *Other*, Deploy.

## QR-codes printen

1. Ga na het deployen naar `https://<jouw-project>.vercel.app/print`
2. De link staat al goed ingevuld. Kies formaat en aantal en klik **Print**.
3. Elke sticker heeft een eigen fietsnummer (`?b=123-456`) dat verschijnt als iemand scant. Je kunt ook zelf een link maken met bijvoorbeeld `?b=JELLE`.

Tips: minimaal 7 cm voor scannen van een afstandje, mat papier (glimmend papier of laminaat geeft weerspiegelingen), en test met je eigen telefoon in een donkere kamer.

---
Kaart: © OpenFreeMap, OpenMapTiles, OpenStreetMap-bijdragers. Halloweenparodie, niet gelieerd aan Citi Bike, Lyft of Citi.
