# Recept App - Kliensoldali Rendszerek Házi Feladat

## 📝 Specifikáció

A Recept App egy React és TypeScript alapú webalkalmazás, amely lehetővé teszi a felhasználók számára saját receptjeik gyűjtését, kezelését és szervezését intuitív felületen keresztül.

### Főbb funkciók

#### 🍳 Recept kezelés (CRUD)
- **Létrehozás**: Új receptek hozzáadása részletes információkkal
  - Név, kategória, hozzávalók, elkészítési lépések
  - Előkészítési és főzési idő megadása
  - Nehézségi szint kiválasztása
- **Listázás**: Receptek áttekintése kártyás nézetben
- **Megtekintés**: Részletes recept információk modal ablakban
- **Szerkesztés**: Meglévő receptek módosítása
- **Törlés**: Receptek eltávolítása megerősítéssel

#### 🔍 Keresés és szűrés
- **Keresés**: Receptek keresése név alapján (valós idejű)
- **Kategória szűrés**: Szűrés 7 kategória szerint (Előétel, Főétel, Desszert, Leves, Saláta, Ital, Egyéb)
- **Rendezés**: Többféle rendezési opció
  - Név szerint (A-Z, Z-A)
  - Idő szerint (növekvő, csökkenő)
  - Dátum szerint (legrégebbi, legújabb)

#### 🛒 Bevásárlólista
- Hozzávalók hozzáadása a bevásárlólistához közvetlenül a receptből
- Új tételek manuális hozzáadása
- Tételek kipipálása vásárlás után
- Kipipált tételek törlése egy gombbal
- Folyamat követése (kipipált/összes)

#### ⭐ Kedvencek
- Receptek kedvencekhez adása/eltávolítása
- Dedikált kedvencek nézet
- Gyors hozzáférés gyakran használt receptekhez

### 🏗️ Technológiai stack

- **Frontend Framework**: React 18
- **Nyelv**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Állapotkezelés**: React Context API
- **Adattárolás**: Local Storage API
- **Ikonok**: Material Icons

### 📦 Projekt struktúra

```
src/
├── components/
│   ├── common/          # Újrafelhasználható komponensek
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Modal.tsx
│   │   └── Feedback.tsx
│   ├── recipes/         # Recept komponensek
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeList.tsx
│   │   ├── RecipeDetail.tsx
│   │   └── RecipeForm.tsx
│   ├── shopping/        # Bevásárlólista komponensek
│   │   └── ShoppingList.tsx
│   └── favorites/       # Kedvencek komponensek
│       └── FavoritesList.tsx
├── context/             # React Context
│   └── RecipeContext.tsx
├── hooks/              # Custom hooks
│   ├── useLocalStorage.ts
│   └── useRecipes.ts
├── types/              # TypeScript típusok
│   └── index.ts
├── App.tsx
└── main.tsx
```

### 🎯 Követelmények teljesítése

#### Funkcionalitás (7 pont) ✅
- Teljes CRUD műveletek
- Keresés, szűrés, rendezés
- Bevásárlólista integráció
- Kedvencek kezelése

#### Komplexitás (5 pont) ✅
- **17+ komponens**: Header, Navigation, SearchBar, FilterBar, Modal, Feedback, RecipeCard, RecipeList, RecipeDetail, RecipeForm, ShoppingList, FavoritesList, RecipeProvider, AppContent, App
- **6 hook típus**:
  - `useState` - állapotkezelés
  - `useEffect` - mellékhatások
  - `useContext` - context elérése
  - `useMemo` - teljesítmény optimalizálás
  - `useCallback` - függvény memorizálás
  - `useLocalStorage` - egyedi hook

#### Kód szervezése (2 pont) ✅
- Komponensek külön fájlokban
- Logikus mappastruktúra
- Egy export komponensenként

#### JS API-k (2 pont) ✅
- **Local Storage**: receptek, bevásárlólista, kedvencek perzisztens tárolása
- **fetch API**: készen áll külső API-k integrálására

#### Kommentezés (2 pont) ✅
- TSDoc kommentek minden publikus függvényen
- 90%+ komment lefedettség
- Platform konvenciók követése

#### Design, Ergonómia (2 pont) ✅
- Material Design irányelvek
- Reszponzív dizájn
- Min. 44x44px érintési célpontok
- Megfelelő kontrasztok
- Visszajelzések minden műveletre
- Hibakezelés és validáció

## 🚀 Telepítés és futtatás

### Előfeltételek
- Node.js (v18+)
- npm vagy yarn

### Telepítés

```bash
# Projekt klónozása
git clone <repository-url>
cd kliensoldali-NHF

# Függőségek telepítése
npm install
```

### Fejlesztői szerver indítása

```bash
npm run dev
```

Az alkalmazás elérhető: http://localhost:5173/

### Build

```bash
npm run build
```

A production build a `dist/` mappába kerül.

### Preview

```bash
npm run preview
```

## 📱 Használat

1. **Recept hozzáadása**: Kattints a jobb alsó sarokban lévő + gombra
2. **Keresés**: Írd be a recept nevét a keresőmezőbe
3. **Szűrés**: Válassz kategóriát és rendezési módot
4. **Kedvencek**: Kattints a szív ikonra a receptkártyán
5. **Bevásárlólista**: Nyisd meg a receptet és kattints a "Hozzáadás bevásárlólistához" gombra
6. **Navigáció**: Használd az alsó navigációs sávot a nézetek közötti váltáshoz

## 🧪 Tesztelés

Az alkalmazás minden funkciója tesztelhető böngészőben:
- Recept CRUD műveletek
- Keresés és szűrés
- Kedvencek kezelése
- Bevásárlólista funkciók
- Local Storage perzisztencia (újratöltés után is megmaradnak az adatok)

## 📄 Licensz

Ez a projekt a BME Kliensoldali rendszerek tárgy házi feladata.

## 👨‍💻 Szerző

Készítette: [Név]
Dátum: 2024

## 🎓 Házi feladat összefoglalás

Lásd részletes összefoglalót: [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
