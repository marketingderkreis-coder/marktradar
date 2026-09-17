# DER KREIS MarktRadar

Een responsive MVP-dashboard voor marketing intelligence in de Nederlandse keuken- en sanitairbranche.

## Development

Gebruik Node.js 22 LTS (zoals vastgelegd in `.nvmrc`) en npm 10 of nieuwer.

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

Maak een production build met:

```bash
npm run build
```

De data staat voor deze MVP in `data/mock-data.ts` en gebruikt gedeelde TypeScript-datatypen, zodat een toekomstige Supabase-datalaag de mockdata eenvoudig kan vervangen.

## Google AI Studio

Deze GitHub-repository is de centrale bron voor import en synchronisatie met Google AI Studio. Wijzigingen horen via de repository en de bijbehorende pull-requestworkflow te verlopen, zodat de gesynchroniseerde versie reproduceerbaar blijft.

Er zijn momenteel geen environment variables nodig. Voeg toekomstige API-sleutels of andere secrets nooit toe aan Git; configureer deze uitsluitend als environment variables in de betreffende ontwikkel- of deploymentomgeving.
