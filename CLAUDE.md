# Job Agent

Agent zbierajacy oferty pracy IT z polskich portali i wysylajacy dzienny digest mailem.
Pelny plan wdrozenia: `docs/plan.md`.

## Tryb pracy

- Nie pisz implementacji, dopoki wprost o nia nie poprosze
- Domyslnie: pytanie naprowadzajace albo wskazanie miejsca w dokumentacji
- Przy review wskaz problem i dlaczego jest problemem - bez poprawionego kodu
- Jesli moj kod dziala, ale jest nieoptymalny, powiedz to i zostaw decyzje mnie
- Podpowiedzi tylko na zadanie, w czterech poziomach (drabinka nizej)

### Drabinka podpowiedzi

Mowie "poziom N" i tyle dostaje.

1. **Pytanie naprowadzajace** - kieruje uwage na wlasciwy fragment problemu, bez nazywania rozwiazania
2. **Miejsce w dokumentacji** - konkretna sekcja do przeczytania, bez streszczenia jej tresci
3. **Analogiczny przyklad** - ten sam mechanizm w innym kontekscie, do przelozenia samodzielnie
4. **Rozwiazanie z wyjasnieniem** - kod plus powod, dla ktorego akurat taki

Zanim poprosze o poziom wyzej, probuje sformulowac jednym zdaniem, czego dokladnie nie wiem.

## Zasady

- Polski w komentarzach i promptach, angielski w kodzie
- async/await, nigdy .then()
- Jawny, czytelny kod zamiast sprytnych abstrakcji
- Kazde nowe zrodlo implementuje JobSource, nic poza sources/ go nie zna
- Zero auto-aplikowania - agent tylko czyta i podpowiada
- Kod pisany recznie, nie generowany: `TODO(human)` oznacza miejsca, ktore sa moje

## Niezmienniki

Miejsca, w ktorych kod wyglada na niedokonczony i gdzie asystent (albo ja za miesiac)
odruchowo "poprawi" cos, co jest celowe.

- `ingest()` ma `update: {}` - oceniona oferta nie wraca do scoringu.
  Z `update: offer` kazdy przebieg cronu kasowalby score i placilbym za te sama ocene codziennie.
- digest wysyla tylko `score >= 70 AND sentAt = null` (od dnia 3)
- prompt do CV nie dopisuje technologii spoza `cv.md`
- `runAll()` uzywa `Promise.allSettled` - jedno padniete zrodlo nie blokuje maila
- kazde zrodlo dostaje wpis w `SourceRun` takze gdy polegnie (found=0 + error)
- walidacja odpowiedzi portalu przez zod na granicy `sources/`:
  `RawOffer` to typ kompilacji, w runtimie nie chroni przed niczym

## Stack

NestJS 12 (ESM) + Prisma 6 + PostgreSQL. Mail przez Resend, scoring przez Claude API.
Hosting: Railway.

Pulapki tego setupu, sprawdzone przy scaffoldzie:

- **ESM.** `"type": "module"` w package.json - kazdy relatywny import konczy sie `.js`,
  nawet gdy plik zrodlowy to `.ts`. Brak rozszerzenia = blad dopiero w runtimie.
- **vitest przypiety na 3.x.** vitest 4 wywala resolver npm 10
  (`Cannot read properties of null (reading 'edgesOut')`). Nie podnosic bez npm 12.
- **`@nestjs/*` satelity maja numeracje core'a.** `@nestjs/config@12`, nie `4.x`.
- **`prisma.config.ts` nie laduje `.env` sam** - stad `import 'dotenv/config'` na gorze.

## Komendy

```bash
npm run dev            # nest start --watch
npm run db:up          # lokalny Postgres w dockerze (port 5433)
npm run db:migrate     # prisma migrate dev
npm run db:studio      # podglad bazy
npm run lint           # oxlint
npm test               # vitest

curl -X POST localhost:3000/debug/run   # reczny przebieg
```

## Stan projektu

Dzien 1 w toku. Zrobione: scaffold, schema + migracja, szkielet modulow.
Do napisania (`TODO(human)`): `NoFluffJobsSource.fetchOffers`, `IngestionService.ingest`
i `runAll`, `DigestService.send`, `DebugController.run`.
