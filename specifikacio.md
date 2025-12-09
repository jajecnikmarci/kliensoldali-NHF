# Recept App - Specifikáció

## Házi feladat - Kliensoldali rendszerek

**Készítette:** jajecnikmarci  
**Dátum:** 2025-11-02

---

## 1. Áttekintés

A Recept App egy webes, React alapú alkalmazás, amely lehetővé teszi a felhasználók számára saját receptjeik gyűjtését, kezelését és megosztását. Az alkalmazás célja egy egyszerű, intuitív felület biztosítása a mindennapi főzési tervek és receptek menedzseléséhez.

---

## 2. Funkcionális követelmények

### 2.1 Recept kezelés
- **Új recept hozzáadása**: Felhasználók létrehozhatnak új recepteket a következő információkkal:
  - Recept neve (kötelező)
  - Kategória (pl. előétel, főétel, desszert, leves)
  - Hozzávalók listája (név, mennyiség, mértékegység)
  - Elkészítési lépések (sorrendezett lista)
  - Elkészítési idő (perc)
  - Adag szám
  - Nehézségi szint (könnyű, közepes, nehéz)
  - Opcionális kép URL

- **Receptek listázása**: Összes recept megjelenítése kártyás nézetben
  - Szűrési lehetőségek kategória szerint
  - Keresés név alapján
  - Rendezés (név, elkészítési idő, hozzáadás dátuma szerint)

- **Recept részletei**: Kiválasztott recept teljes információinak megjelenítése
  - Hozzávalók lista
  - Elkészítési lépések
  - Metaadatok (idő, adag, nehézség)

- **Recept szerkesztése**: Meglévő receptek módosítása

- **Recept törlése**: Recept eltávolítása megerősítés után

### 2.2 Bevásárlólista funkció
- Hozzávalók hozzáadása a bevásárlólistához receptből
- Bevásárlólista megtekintése
- Elemek kipipálása/visszavonása
- Bevásárlólista törlése

### 2.3 Kedvencek
- Receptek hozzáadása/eltávolítása a kedvencekhez
- Kedvenc receptek külön nézetben való megjelenítése

### 2.4 Adatperzisztencia
- Local Storage használata az adatok tárolására
- Receptek, bevásárlólista és kedvencek mentése

---

## 3. Technológiai követelmények

### 3.1 Framework és könyvtárak
- **React** (hooks alapú fejlesztés)
- **React Router** (navigáció)
- **TypeScript** (típusbiztonság)

### 3.2 Hook-ok használata
- `useState` - állapotkezelés (receptek, szűrők, űrlapok)
- `useEffect` - Local Storage szinkronizáció, oldalbetöltés kezelés
- `useContext` - globális állapotkezelés (receptek, bevásárlólista, kedvencek)
- `useRef` - űrlap elemek referenciái
- `useMemo` - szűrt/rendezett listák optimalizálása
- Egyedi hook: `useLocalStorage` - Local Storage műveletek egyszerűsítésére

### 3.3 Komponensek (min. 15 db)
1. **App** - Főkomponens
2. **Header** - Navigációs menü
3. **Footer** - Lábléc
4. **RecipeList** - Receptek listája
5. **RecipeCard** - Egyedi recept kártya
6. **RecipeDetails** - Recept részletek oldal
7. **RecipeForm** - Recept hozzáadása/szerkesztése
8. **IngredientInput** - Hozzávaló beviteli mező
9. **StepInput** - Elkészítési lépés beviteli mező
10. **CategoryFilter** - Kategória szűrő
11. **SearchBar** - Keresőmező
12. **SortSelector** - Rendezés választó
13. **ShoppingList** - Bevásárlólista
14. **ShoppingListItem** - Bevásárlólista elem
15. **FavoritesList** - Kedvencek lista
16. **ConfirmDialog** - Megerősítő dialógus
17. **EmptyState** - Üres állapot jelző

### 3.4 JS API-k
- **Local Storage** - receptek, bevásárlólista, kedvencek tárolása
- **fetch** (opcionális) - külső recept API integrációja (pl. Spoonacular API)

---

## 4. Komponens struktúra

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ConfirmDialog.tsx
│   │   └── EmptyState.tsx
│   ├── recipes/
│   │   ├── RecipeList.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeDetails.tsx
│   │   ├── RecipeForm.tsx
│   │   ├── IngredientInput.tsx
│   │   ├── StepInput.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SortSelector.tsx
│   ├── shopping/
│   │   ├── ShoppingList.tsx
│   │   └── ShoppingListItem.tsx
│   └── favorites/
│       └── FavoritesList.tsx
├── contexts/
│   └── RecipeContext.tsx
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── recipe.ts
├── utils/
│   └── helpers.ts
├── App.tsx
└── main.tsx
```

---

## 5. Adatmodell

```typescript
interface Recipe {
  id: string;
  name: string;
  category: Category;
  ingredients: Ingredient[];
  steps: string[];
  prepTime: number; // percben
  servings: number;
  difficulty: Difficulty;
  imageUrl?: string;
  isFavorite: boolean;
  createdAt: Date;
}

interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
}

type Category = 'appetizer' | 'main' | 'dessert' | 'soup' | 'salad' | 'drink';
type Difficulty = 'easy' | 'medium' | 'hard';

interface ShoppingListItem {
  id: string;
  recipeId: string;
  ingredient: Ingredient;
  checked: boolean;
}
```

---

## 6. Felhasználói felület és UX

### 6.1 Design követelmények
- **Material Design** irányelvek követése
- Material UI vagy saját implementáció
- Ikonok használata (Material Icons vagy React Icons)
- Responsív dizájn (mobil, tablet, desktop)

### 6.2 Színséma
- Főszín: Meleg narancssárga/piros tónus (főzéshez kapcsolódó)
- Kiegészítő szín: Zöld (frissesség)
- Semleges színek: fehér, szürke árnyalatok

### 6.3 Ergonómia
- Minimum 44x44px gomb méret (érintőképernyő)
- Megfelelő kontrasztarányok (WCAG AA)
- Egyértelmű visszajelzések felhasználói műveletekre
- Loading állapotok jelzése
- Hibakezelés felhasználóbarát üzenetekkel

### 6.4 Főbb oldalak
1. **Kezdőoldal** - Receptek listája szűrőkkel
2. **Recept részletek** - Teljes recept megjelenítése
3. **Új recept** - Recept hozzáadása űrlap
4. **Szerkesztés** - Recept módosítása
5. **Bevásárlólista** - Bevásárlólista kezelés
6. **Kedvencek** - Kedvenc receptek

---

## 7. Pontszám elérési terv

| Szempont | Célpont | Megvalósítás |
|----------|---------|--------------|
| **Funkcionalitás** | 7 | Teljes CRUD, szűrés, keresés, rendezés, bevásárlólista, kedvencek |
| **Komplexitás** | 5 | 17 komponens, useState, useEffect, useContext, useRef, useMemo, egyedi hook |
| **Kód szervezése** | 2 | Logikus mappastruktúra, komponensek külön fájlokban |
| **JS API-k** | 2 | Local Storage + opcionálisan fetch (külső API) |
| **Kommentezés** | 2 | TSDoc kommentek minden publikus függvényen és típuson |
| **Design** | 2 | Material Design, ikonok, responsív design |
| **Összesen** | **20** | |

---

## 8. Opcionális továbbfejlesztési lehetőségek

- PWA funkciók (offline működés, telepíthetőség)
- Recept export/import JSON formátumban
- Külső API integráció új receptek felfedezésére
- Recept értékelés és kommentelés
- Táplálkozási információk kalkuláció
- Recept megosztás (Share API)
- Fotó feltöltés receptekhez
- Sötét mód

---

## 9. Implementációs ütemterv

1. **1-2. hét**: Projekt setup, alap komponensstruktúra
2. **3-4. hét**: Recept CRUD műveletek, Local Storage
3. **5-6. hét**: Szűrés, keresés, rendezés funkciók
4. **7-8. hét**: Bevásárlólista, kedvencek, design finomítás
5. **9. hét**: Tesztelés, bugfixek, dokumentáció

---

## 10. AI használat

**Használt eszközök:**
- GitHub Copilot - kód kiegészítés, komponens vázak generálása
- ChatGPT - TypeScript típusdefiníciók pontosítása, CSS layout problémák megoldása

**Főbb promptok:**
- "Hogyan lehet TypeScript-ben típusos context-et létrehozni React-ben?"
- "Material Design szerint milyen színkombinációk alkalmasak food app-hoz?"
- "Hogyan optimalizálható React-ben egy nagy lista renderelése useMemo-val?"
- "Local Storage típusos wrapper készítése TypeScript-ben"

---

## 11. Összefoglalás

A Recept App egy teljes körű, React alapú kliens oldali alkalmazás, amely megfelel a házi feladat minden követelményének. Az alkalmazás praktikus, mindennapokban használható funkciót biztosít, miközben demonstrálja a React és TypeScript haladó használatát, valamint követi a modern webalkalmazás-fejlesztési best practice-eket.