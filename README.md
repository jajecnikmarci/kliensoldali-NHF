# 🍳 Recipe App - Recept Kezelő Alkalmazás

> Modern React + TypeScript alkalmazás receptek tárolására, kezelésére és bevásárlólista készítésére

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.18.0-007FFF?logo=mui)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)

---

## 📋 Tartalomjegyzék

- [Áttekintés](#-áttekintés)
- [Főbb Funkciók](#-főbb-funkciók)
- [Architektúra](#-architektúra)
- [Komponens Hierarchia](#-komponens-hierarchia)
- [Adatfolyam](#-adatfolyam)
- [Állapotkezelés](#-állapotkezelés)
- [Használati Esetek](#-használati-esetek)
- [Telepítés és Futtatás](#-telepítés-és-futtatás)
- [Projekt Struktúra](#-projekt-struktúra)
- [Technológiai Stack](#-technológiai-stack)
- [Követelmények Teljesítése](#-követelmények-teljesítése)

---

## 🎯 Áttekintés

A Recipe App egy teljes funkcionalitású webes alkalmazás receptek kezeléséhez. Lehetővé teszi receptek létrehozását, szerkesztését, törlését, keresését és szűrését. Beépített bevásárlólista funkcióval rendelkezik, amely megkönnyíti a bevásárlást, valamint kedvencek kezelést biztosít a gyakran használt receptek gyors eléréséhez.

Elérhető github pages-en: https://jajecnikmarci.github.io/kliensoldali-NHF/

### Kulcs Jellemzők

- 📝 **Teljes CRUD műveletek** receptekhez
- 🔍 **Valós idejű keresés** és szűrés
- 🛒 **Intelligens bevásárlólista** checkbox funkciókkal
- ⭐ **Kedvencek kezelés**
- 💾 **Perzisztens tárolás** Local Storage API-val
- 📱 **Reszponzív Material Design** interfész
- ⚡ **Gyors és reaktív** felhasználói élmény

---

## 🚀 Főbb Funkciók

### 1. Recept Kezelés (CRUD)

- **Létrehozás**: Új receptek hozzáadása részletes információkkal
- **Olvasás**: Receptek böngészése kártyás nézetben
- **Frissítés**: Meglévő receptek szerkesztése
- **Törlés**: Megerősítéssel védett törlés

### 2. Keresés és Szűrés

- **Keresés**: Valós idejű keresés recept nevében
- **Kategória szűrés**: Szűrés kategória szerint (Reggeli, Ebéd, Vacsora, stb.)
- **Rendezés**: Név, kategória vagy dátum szerint

### 3. Bevásárlólista

- Recept hozzávalók hozzáadása egy kattintással
- Elemek kipipálása vásárlás közben
- Kipipált elemek törlése
- Egyedi elemek hozzáadása

### 4. Kedvencek

- Receptek kedvencekhez adása/eltávolítása
- Dedikált kedvencek nézet
- Gyors hozzáférés gyakran használt receptekhez

---

## 🏗️ Architektúra

Az alkalmazás követi a modern React best practice-eket, komponens alapú architektúrával és centralizált állapotkezeléssel.

### Architektúra Diagram

```mermaid
flowchart TD
    App[App.tsx]
    Context[RecipeContext]
    
    Header[Header]
    Navigation[Navigation]
    SearchBar[SearchBar]
    FilterBar[FilterBar]
    Model[Model]
    Feedback[Feedback]
    
    RecipeList[RecipeList]
    RecipeCard[RecipeCard]
    RecipeDetail[RecipeDetail]
    RecipeForm[RecipeForm]
    
    ShoppingList[ShoppingList]
    FavoritesList[FavoritesList]
    
    useLocalStorage[useLocalStorage]
    useRecipes[useRecipes]
    
    LS[(Local Storage)]
    
    App --> Context
    App --> Header
    App --> Navigation
    App --> Feedback
    App --> RecipeList
    App --> ShoppingList
    App --> FavoritesList
    
    RecipeList --> RecipeCard
    RecipeList --> SearchBar
    RecipeList --> FilterBar
    
    Context --> useLocalStorage
    useLocalStorage --> LS
    
    Header -.-> useRecipes
    RecipeList -.-> useRecipes
    ShoppingList -.-> useRecipes
    FavoritesList -.-> useRecipes
    useRecipes --> Context
    
    style App fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style Context fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
    style LS fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style useLocalStorage fill:#7b1fa2,stroke:#4a148c,stroke-width:2px,color:#fff
    style useRecipes fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
```

---

## 🌲 Komponens Hierarchia

```mermaid
flowchart TD
    App[App]
    Provider[RecipeProvider]
    AppContent[AppContent]
    
    App --> Provider
    Provider --> AppContent
    
    AppContent --> Header
    AppContent --> Navigation
    AppContent --> Feedback
    AppContent --> RecipeView[Recipe View]
    AppContent --> ShoppingView[Shopping View]
    AppContent --> FavView[Favorites View]
    AppContent --> Models
    
    RecipeView --> SearchBar
    RecipeView --> FilterBar
    RecipeView --> RecipeList
    RecipeList --> RecipeCard
    
    ShoppingView --> ShoppingList
    FavView --> FavoritesList
    
    Models --> RecipeDetail
    Models --> RecipeForm
    Models --> DeleteDialog
    
    style App fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style Provider fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
    style RecipeView fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style ShoppingView fill:#7b1fa2,stroke:#4a148c,stroke-width:2px,color:#fff
    style FavView fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
```

---

## 🔄 Adatfolyam

### State Management Flow

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant Context
    participant LocalStorage

    Note over User,LocalStorage: Recipe Creation
    User->>Component: Fill Form
    Component->>Component: Validate Input
    Component->>Context: addRecipe(data)
    Context->>Context: Generate ID
    Context->>Context: Update State
    Context->>LocalStorage: Save to Storage
    LocalStorage-->>Context: Success
    Context-->>Component: State Updated
    Component-->>User: Show Success Feedback

    Note over User,LocalStorage: Recipe Reading
    User->>Component: Load App
    Component->>Context: getRecipes()
    Context->>LocalStorage: Read Data
    LocalStorage-->>Context: Return Data
    Context-->>Component: Recipes Array
    Component-->>User: Display Recipes

    Note over User,LocalStorage: Recipe Update
    User->>Component: Edit Recipe
    Component->>Context: updateRecipe(id, data)
    Context->>Context: Find & Update
    Context->>LocalStorage: Save Changes
    LocalStorage-->>Context: Success
    Context-->>Component: Updated State
    Component-->>User: Show Success

    Note over User,LocalStorage: Recipe Delete
    User->>Component: Click Delete
    Component->>Component: Show Confirmation
    User->>Component: Confirm
    Component->>Context: deleteRecipe(id)
    Context->>Context: Remove from favorites
    Context->>Context: Filter recipes
    Context->>LocalStorage: Save State
    LocalStorage-->>Context: Success
    Context-->>Component: Updated State
    Component-->>User: Show Success
```

---

## 🗃️ Állapotkezelés

### Context API Pattern

```mermaid
classDiagram
    class RecipeContextValue {
        +Recipe[] recipes
        +ShoppingItem[] shoppingList
        +string[] favorites
        +addRecipe(recipe)
        +updateRecipe(id, data)
        +deleteRecipe(id)
        +getRecipe(id)
        +setShoppingList(items)
        +addToShoppingList(name)
        +removeFromShoppingList(id)
        +toggleShoppingItem(id)
        +clearCheckedItems()
        +addToFavorites(id)
        +removeFromFavorites(id)
        +isFavorite(id)
    }

    class Recipe {
        +string id
        +string name
        +Category category
        +string[] ingredients
        +string[] steps
        +number prepTime
        +number cookTime
        +Difficulty difficulty
        +Date createdAt
        +string imageUrl
    }

    class ShoppingItem {
        +string id
        +string name
        +boolean checked
    }

    RecipeContextValue "1" *-- "0..*" Recipe
    RecipeContextValue "1" *-- "0..*" ShoppingItem
    RecipeContextValue "1" o-- "0..*" Recipe : favorites
```

### Local Storage Hook

```mermaid
flowchart TD
    Start([Start]) --> Init[Initialize State]
    Init --> Check{Has Stored Value?}
    Check -->|Yes| Parse[Parse JSON from localStorage]
    Check -->|No| Default[Use Default Value]
    Parse --> SetState[Set Initial State]
    Default --> SetState
    SetState --> Return[Return state, setState]
    
    Return --> Fork{State Updates?}
    Fork -->|Update| Trigger[Trigger useEffect]
    Trigger --> Serialize[Serialize to JSON]
    Serialize --> Save[Save to localStorage]
    Save --> Fork
    
    Fork -->|Storage Event| Listen[Listen Storage Events]
    Listen --> CrossTab{Cross-tab Change?}
    CrossTab -->|Yes| ParseNew[Parse New Value]
    ParseNew --> UpdateState[Update State]
    UpdateState --> Fork
    CrossTab -->|No| Fork
```

---

## 📖 Használati Esetek

### Use Case Diagram

```mermaid
flowchart TB
    User([👤 Felhasználó])
    
    subgraph RecipeManagement["📝 Recept Kezelés"]
        UC1[Új Recept Létrehozás]
        UC2[Recept Szerkesztés]
        UC3[Recept Törlés]
        UC4[Recept Részleteinek Megtekintés]
    end
    
    subgraph Search["🔍 Keresés & Szűrés"]
        UC5[Keresés Név Alapján]
        UC6[Szűrés Kategória Szerint]
        UC7[Rendezés]
        UC13[Találatok Megjelenítése]
    end
    
    subgraph Shopping["🛒 Bevásárlólista"]
        UC8[Hozzávalók Hozzáadása Listához]
        UC9[Egyedi Elem Hozzáadás]
        UC10[Elem Kipipálása]
        UC11[Kipipáltak Törlése]
        UC14[Lista Megtekintése]
    end
    
    subgraph Favorites["⭐ Kedvencek"]
        UC12[Recept Kedvencekhez Adás]
        UC15[Recept Eltávolítása Kedvencekből]
        UC16[Kedvencek Listájának Megtekintése]
    end
    
    subgraph Storage["💾 Adatkezelés"]
        UC17[Adatok Mentése Local Storage-ba]
        UC18[Adatok Betöltése]
        UC19[Cross-tab Szinkronizáció]
    end
    
    %% User interactions
    User --> UC1
    User --> UC2
    User --> UC3
    User --> UC4
    User --> UC5
    User --> UC6
    User --> UC7
    User --> UC8
    User --> UC9
    User --> UC10
    User --> UC11
    User --> UC12
    User --> UC15
    User --> UC14
    User --> UC16
    
    %% Dependencies
    UC1 -.->|mentés| UC17
    UC2 -.->|mentés| UC17
    UC3 -.->|mentés| UC17
    UC8 -.->|használja| UC4
    UC12 -.->|használja| UC4
    UC5 -.->|eredmény| UC13
    UC6 -.->|eredmény| UC13
    UC7 -.->|eredmény| UC13
    UC17 -.->|triggerel| UC19
    
    %% Styling
    style User fill:#1976d2,stroke:#0d47a1,stroke-width:3px,color:#fff
    style RecipeManagement fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
    style Search fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style Shopping fill:#7b1fa2,stroke:#4a148c,stroke-width:2px,color:#fff
    style Favorites fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
    style Storage fill:#0097a7,stroke:#006064,stroke-width:2px,color:#fff
```

### Recept Létrehozása - Activity Diagram

```mermaid
flowchart TD
    Start([Start]) --> OpenForm[Felhasználó megnyitja a form-ot]
    OpenForm --> FillData[Kitölti a recept adatait]
    
    FillData --> CheckFilled{Minden mező kitöltött?}
    CheckFilled -->|No| ShowRequired[Kötelező mezők kijelzése]
    ShowRequired --> FillData
    
    CheckFilled -->|Yes| Validate[Validáció végrehajtása]
    Validate --> CheckValid{Adatok érvényesek?}
    
    CheckValid -->|No| ShowErrors[Hibaüzenet]
    ShowErrors --> FillData
    
    CheckValid -->|Yes| SaveContext[Mentés Context-be]
    SaveContext --> SaveStorage[Mentés Local Storage-ba]
    SaveStorage --> ShowSuccess[Sikeres visszajelzés]
    ShowSuccess --> CloseModel[Model bezárása]
    CloseModel --> End([End])
```

### Bevásárlólista Folyamat

```mermaid
flowchart TD
    Start([Start]) --> OpenRecipe[Recept megnyitása]
    OpenRecipe --> ViewDetails[Részletek megtekintése]
    ViewDetails --> ClickButton[Kattintás Bevásárlólista gombra]
    ClickButton --> Iterate[Hozzávalók iterálása]
    Iterate --> CreateItem[ShoppingItem létrehozása]
    CreateItem --> BulkAdd[Bulk hozzáadás]
    BulkAdd --> Navigate[Navigálás bevásárló nézethez]
    Navigate --> Display[Elemek megjelenítése]
    Display --> Actions{Műveletek}
    
    Actions -->|1| Toggle[Elem kipipálása]
    Actions -->|2| Remove[Elem törlése]
    Actions -->|3| Clear[Kipipáltak törlése]
    
    Toggle --> Display
    Remove --> Display
    Clear --> Display
    Actions --> End([End])
```

---

## 💻 Telepítés és Futtatás

### Előfeltételek

- Node.js (v18 vagy újabb)
- npm vagy yarn

### Telepítési Lépések

```bash
# 1. Klónozás
git clone https://github.com/your-username/kliensoldali-NHF.git
cd kliensoldali-NHF

# 2. Függőségek telepítése
npm install

# 3. Development szerver indítása
npm run dev

# 4. Böngészőben megnyitás
http://localhost:5174
```

### Elérhető Parancsok

```bash
# Development mód (hot reload)
npm run dev

# Production build
npm run build

# Build előnézet
npm run preview

# Linting
npm run lint

# TypeScript type checking
npm run type-check
```

---

## 📁 Projekt Struktúra

```
kliensoldali-NHF/
├── src/
│   ├── components/           # React komponensek
│   │   ├── common/          # Újrafelhasználható komponensek
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   ├── Model.tsx
│   │   │   └── Feedback.tsx
│   │   ├── recipes/         # Recept komponensek
│   │   │   ├── RecipeCard.tsx
│   │   │   ├── RecipeList.tsx
│   │   │   ├── RecipeDetail.tsx
│   │   │   └── RecipeForm.tsx
│   │   ├── shopping/        # Bevásárlólista
│   │   │   └── ShoppingList.tsx
│   │   └── favorites/       # Kedvencek
│   │       └── FavoritesList.tsx
│   ├── context/             # React Context
│   │   └── RecipeContext.tsx
│   ├── hooks/               # Custom Hooks
│   │   ├── useLocalStorage.ts
│   │   └── useRecipes.ts
│   ├── types/               # TypeScript típusok
│   │   └── index.ts
│   ├── App.tsx              # Fő komponens
│   ├── main.tsx             # Entry point
│   └── index.css            # Globális stílusok
├── public/                  # Statikus fájlok
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Komponens Felelősségek

```mermaid
graph TB
    subgraph Common["🔧 Common Components"]
        Header["Header<br/>Alkalmazás fejléc"]
        Navigation["Navigation<br/>Nézetek közötti váltás"]
        SearchBar["SearchBar<br/>Keresési input"]
        FilterBar["FilterBar<br/>Szűrő kontrollok"]
        Model["Model<br/>Újrafelhasználható model"]
        Feedback["Feedback<br/>Snackbar értesítések"]
    end
    
    subgraph Recipe["📝 Recipe Components"]
        RecipeCard["RecipeCard<br/>Recept kártya megjelenítés"]
        RecipeList["RecipeList<br/>Receptek listája szűréssel"]
        RecipeDetail["RecipeDetail<br/>Részletes recept nézet"]
        RecipeForm["RecipeForm<br/>Recept létrehozó/szerkesztő"]
    end
    
    subgraph Feature["⭐ Feature Components"]
        ShoppingList["ShoppingList<br/>Bevásárlólista kezelő"]
        FavoritesList["FavoritesList<br/>Kedvenc receptek nézet"]
    end
    
    style Common fill:#546e7a,stroke:#263238,stroke-width:2px,color:#fff
    style Recipe fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style Feature fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style Header fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style Navigation fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style SearchBar fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style FilterBar fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style Model fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style Feedback fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style RecipeCard fill:#1565c0,stroke:#0d47a1,stroke-width:2px,color:#fff
    style RecipeList fill:#1565c0,stroke:#0d47a1,stroke-width:2px,color:#fff
    style RecipeDetail fill:#1565c0,stroke:#0d47a1,stroke-width:2px,color:#fff
    style RecipeForm fill:#1565c0,stroke:#0d47a1,stroke-width:2px,color:#fff
    style ShoppingList fill:#ef6c00,stroke:#e65100,stroke-width:2px,color:#fff
    style FavoritesList fill:#ef6c00,stroke:#e65100,stroke-width:2px,color:#fff
```

---

## 🛠️ Technológiai Stack

### Frontend Framework

```mermaid
graph TB
    subgraph Stack["Technology Stack"]
        subgraph Core
            React["React 19.2.0"]
            TS["TypeScript 5.9.3"]
        end
        
        subgraph Build["Build Tool"]
            Vite["Vite 7.2.4"]
        end
        
        subgraph UI["UI Framework"]
            MUI["Material-UI 5.18.0"]
            Icons["@mui/icons-material"]
            Emotion["@emotion/react"]
        end
        
        subgraph State["State & Storage"]
            Context["Context API"]
            Storage["Local Storage API"]
        end
        
        subgraph Dev["Development"]
            Lint["ESLint"]
            TSLint["TypeScript ESLint"]
        end
    end
    
    React -.typed with.-> TS
    Vite -.builds.-> React
    React -.styled with.-> MUI
    MUI -.uses.-> Icons
    MUI -.powered by.-> Emotion
    React -.state management.-> Context
    Context -.persists to.-> Storage
```

### Hook Használat

Az alkalmazás **7 különböző hook típust** használ:

1. **useState** - Lokális komponens állapot
2. **useEffect** - Side effects, lifecycle
3. **useContext** - Global state hozzáférés
4. **useRef** - DOM referenciák (SearchBar input focus)
5. **useMemo** - Optimalizált számítások (szűrés, rendezés)
6. **useCallback** - Memorizált callback függvények
7. **useLocalStorage** - Custom hook (perzisztencia)

```mermaid
flowchart LR
    useState["useState
    Local state"]
    useEffect["useEffect
    Side effects"]
    useContext["useContext
    Global state"]
    useRef["useRef
    DOM refs"]
    useMemo["useMemo
    Optimization"]
    useCallback["useCallback
    Memoized"]
    useLS["useLocalStorage
    Custom hook"]
    
    style useState fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style useEffect fill:#7b1fa2,stroke:#4a148c,stroke-width:2px,color:#fff
    style useContext fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
    style useRef fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style useMemo fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
    style useCallback fill:#0097a7,stroke:#006064,stroke-width:2px,color:#fff
    style useLS fill:#fbc02d,stroke:#f57f17,stroke-width:2px,color:#000
```

---

## ✅ Követelmények Teljesítése

### Funkcionalitás Részletezés (7/7)

```mermaid
flowchart LR
    CRUD["CRUD
    ✅ Create
    ✅ Read
    ✅ Update
    ✅ Delete"]
    
    Search["Keresés
    ✅ Valós idejű
    ✅ Szűrés
    ✅ Rendezés"]
    
    Shop["Bevásárló
    ✅ Hozzávalók
    ✅ Checkbox
    ✅ Törlés"]
    
    Fav["Kedvencek
    ✅ Hozzáadás
    ✅ Eltávolítás
    ✅ Nézet"]
    
    Persist["Tárolás
    ✅ Local Storage
    ✅ Cross-tab
    ✅ Auto-save"]
    
    style CRUD fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
    style Search fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style Shop fill:#f57c00,stroke:#e65100,stroke-width:2px,color:#fff
    style Fav fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
    style Persist fill:#7b1fa2,stroke:#4a148c,stroke-width:2px,color:#fff
```

### Komplexitás Elemzés (5/5)

**Komponensek (17+):**
```
✓ App.tsx
✓ RecipeContext.tsx (Provider)
✓ Header.tsx
✓ Navigation.tsx
✓ SearchBar.tsx
✓ FilterBar.tsx
✓ Model.tsx
✓ Feedback.tsx
✓ RecipeCard.tsx
✓ RecipeList.tsx
✓ RecipeDetail.tsx
✓ RecipeForm.tsx
✓ ShoppingList.tsx
✓ FavoritesList.tsx
✓ useLocalStorage.ts (Custom Hook)
✓ useRecipes.ts (Custom Hook)
✓ main.tsx
```

**Hook Típusok (7):**
```
✓ useState - Lokális state
✓ useEffect - Side effects
✓ useContext - Context fogyasztás
✓ useRef - DOM referenciák
✓ useMemo - Optimalizáció
✓ useCallback - Memorizált függvények
✓ useLocalStorage - Custom hook
```

### Design & UX (2/2)

**Material Design Implementation:**

- **UI Components**: AppBar (fejléc), Card (kártyák), TextField (input mezők), Button (44x44px gombok), Chip (címkék), IconButton, Snackbar, Dialog
- **Icons**: Add, Delete, Edit, Favorite, Search, Filter, Shopping Cart, Access Time
- **Responsive Design**: Grid System (xs/sm/md), Flex Layout, 44x44px touch targets
- **User Feedback**: Loading states, Error messages, Success notifications, Confirmations

---

## 🔐 Data Security & Validation

### Validációs Folyamat

**Client-side validation rétegek:**

1. **Név ellenőrzés**: "Név megadása kötelező"
2. **Kategória**: "Kategória választása kötelező"
3. **Hozzávalók**: Legalább 1 elem szükséges
4. **Lépések**: Legalább 1 lépés szükséges
5. **Előkészítési idő**: > 0 perc
6. **Főzési idő**: > 0 perc

**Sikeres validáció után:**
- UUID generálás
- Timestamp hozzáadása
- Recipe object létrehozása
- Context frissítés
- Local Storage mentés
- Cross-tab broadcast

---

## 🔄 Cross-Tab Synchronization

```mermaid
sequenceDiagram
    participant T1 as Tab 1
    participant LS as Local Storage
    participant SE as Storage Event
    participant T2 as Tab 2

    T1->>T1: User adds recipe
    T1->>T1: Update state
    T1->>LS: localStorage.setItem()
    LS->>SE: Trigger storage event
    SE->>T2: window.addEventListener('storage')
    T2->>T2: Parse new value
    T2->>T2: setState(newValue)
    T2->>T2: Re-render with new data
    
    Note over T2: Tabs stay in sync<br/>automatically through<br/>storage events
```

---

## 📱 Responsive Design

### Breakpoint System

```mermaid
graph LR
    subgraph Grid["Responsive Grid System"]
        Mobile["Mobile xs<br/>< 600px<br/>1 column<br/>Full width cards<br/>Stacked layout"]
        Tablet["Tablet sm<br/>600px - 960px<br/>2 columns<br/>Side-by-side cards<br/>Responsive nav"]
        Desktop["Desktop md+<br/>> 960px<br/>3 columns<br/>Full layout<br/>All features visible"]
    end
    
    style Grid fill:#37474f,stroke:#263238,stroke-width:2px,color:#fff
    style Mobile fill:#c2185b,stroke:#880e4f,stroke-width:2px,color:#fff
    style Tablet fill:#1976d2,stroke:#0d47a1,stroke-width:2px,color:#fff
    style Desktop fill:#388e3c,stroke:#1b5e20,stroke-width:2px,color:#fff
```

---

## 🚀 Performance Optimizations

### Implemented Optimizations

**Performance Features:**

- **useMemo** ✅
  - Filtered recipe list
  - Favorite recipes
  - Search results

- **useCallback** ✅
  - Event handlers
  - CRUD operations
  - Context functions

- **State Management** ✅
  - Context optimization
  - Minimal re-renders
  - Memoized values

---

## 👨‍💻 Fejlesztő

**Kliensoldali Házi Feladat - 2025/2026 ősz**

Készítette: Jajecnik Marcell

Tantárgy: Kliensoldali Webprogramozás  