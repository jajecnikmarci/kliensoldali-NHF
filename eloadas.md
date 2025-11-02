##### Kliensoldali rendszerek

```
Bevezetés
```

##### Követelmények


Elérhetőség

- Kővári Bence - tárgyfelelős, UX, kovari.bence@vik.bme.hu
- Rajacsics Tamás - React, Rajacsics.tamas@vik.bme.hu
- Albert István - Blazor, albert.istvan@vik.bme.hu
- Tárgyhonlap
    - https://edu.vik.bme.hu ➔Kliensoldali rendszerek


Oktatási forma

- Előadás
    - Minden hét szerda 16 :15 (IB. 025 )
- Gyakorlat
    - 4. héttől
    - Terem, beosztás: Moodle


Számonkérések – Aláírásért

- Gyakorlatok
    - Első 6 - ból legalább 4 gyakorlat
    - Gyakorlat pótlására nincs lehetőség
- Házi feladat
    - A tárgyhonlapon meghirdetett feladatok valamelyikét kell teljesíteni
    - Bemutatás: 7. gyakorlaton
    - Pótbeadás: pótlási héten
    - Pontozás: 0- 4 0 pont, 50%-ot el kell érni az aláíráshoz
- Bónuszpontok (10)
    - Utolsó 2 gyakorlaton a jelenétalkalmankén 2 - 2 többletpontotjelentvizsgán
    - Utolsó 6 előadáson a részvétel 6 többletpontotjelent vizsgán


Számonkérések

- Vizsga
    - Évfolyam vizsgarendje szerint
    - 50%-ot el kell érnia teljesítéshez

```
Házi 4 0 pont
Vizsga 6 0 pont
Összesen 100 pont
```
```
0 - 49 pont 1
50 - 59 pont 2
60 - 69 pont 3
70 - 84 pont 4
85 - 100 pont 5
```
```
Ponthatárok
```
```
Elérhetőpontok
```

Kapcsolódó tárgyak

```
Szoftver-
technikák
```
```
Adatvezérelt
rendszerek
```
```
Kliensoldali
rendszerek
```
C#

```
WinUI
```
EF WebAPI

```
JSON
```
```
Blazor
```
```
TypeScript React
```
```
Mobil- és
webes szoftverek
```
```
CSS
```
```
HTML
```
```
JavaScript
```
```
Programozás
alapjai 3
Java
```
```
Swing
```

Tematika

1. Kliensoldali alkalmazások (Dr. Kővári Bence)
2. Ergonómia (Dr. Kővári Bence)
3. TypeScript (Rajacsics Tamás)

4 - 8. React (Rajacsics Tamás)

9 - 11., 13. Blazor (Albert István)

12. Angular, Vue (Rajacsics Tamás)


Előkövetelmények

A HTML, CSS, JS felzárkóztató anyagok Moodle-ben átnézendők, a 3. hétig


GitHub Copilot ➔ Diákoknak ingyenes

- https://docs.github.com/en/education/about-github-education/github-

education-for-students/apply-to-github-education-as-a-student


MI használat hatása a tanulásra

```
Marina Lepp et al, Does generative AI help in learning programming: Students' perceptions, reported use and relation to
performance, Computers in Human Behavior Reports (2025. május).DOI: 10.1016/j.chbr.2025.
```

MI használati irányelvek a tantárgyban

- Kari ajánlások:
    - https://vik.bme.hu/hallgatoknak/altalanos/mi-hasznalat-ajanlasok
- A kiadott házi feladatokhoz használható AI “tanácsadó” chat jelleggel,
    ugyanakkor a **kódot egyénileg kell megírni**
       - Hogyantudomcss-ben megoldani, hogyközépenlegyena szöveg?
       - Hogyanlehetreact-ban reagálnirá, hogyfókuszbakerültegyszövegdoboz?
    - A beadott megoldás részeként/mellékleteként fel kell sorolni a használt eszközöket és
       a fontosabb propmptokat


Kliensoldali rendszerek


##### Bevezető


Kliensoldali szoftver?

A **kliensoldali szoftver** egy olyan program
vagy alkalmazás, amely a felhasználó
eszközén, például számítógépen,
okostelefonon vagy táblagépen fut.

Ez a szoftver kommunikálhat egy távoli
szerverrel, hogy különféle adatokat kérjen
le, vagy műveleteket végezzen, de a
végrehajtás és az adatok feldolgozása az
ügyfél, azaz a felhasználó eszközén történik.

```
Alkalmazás
```
```
Webes
alkalmazások
```
```
Mobil
alkalmazások
```
```
Asztali
alkalmazások
```

3 rétegű architektúra

```
Megjelenítési réteg
Presentation Layer (UI)
```
```
Üzleti logika réteg
Business Logic Layer (BLL)
```
```
Adatelérési rétrg
Data Access Layer (DAL)
```
```
Felhasználók
```
```
UI komponensek
UI folyamatok
Szolgáltatás interfészek
Üzleti
folyamatok
```
```
Üzleti
komponesek
```
```
Üzleti
entitások
```
```
Adatelérési
komponesek
```
```
Szolgáltatás
kliensek
```
```
Adatforrások Szolgáltatások
A legtöbb réteghatár
egyben potenciális
hálózati határ is
```

##### Web alapú alkalmazás


Web alapú alkalmazás

- Webes technológiákat használ
    - HTML, CSS, JS
- Asztali és/vagy mobil alkalmazások
    - Nem weboldalak, nem web alkalmazások
- Multiplatform
    - A lehető legtöbb eszközön menjen
    - 5% felett: Windows, macOS, iOS, Android
    - 5% alatt: Linux, ChromeOS, ...


Web alapú alkalmazás

- Alkalmazásként működik
    - Úgy néz ki, mint egy alkalmazás – design
    - Úgy viselkedik, mint egy alkalmazás
       - Nem linkel ki, ...
       - Együttműködik a többi alkalmazással
       - OS integráció (share, drag&drop, ...)


Webes technológia

- Webes technológiák használata felhasználói felület készítésére
    - HTML elemek + CSS
       - Tartalomfogyasztó alkalmazások (Twitter, ...)
          - Ezek lehetnek sima webalkalmazások is
       - Utility és productivity alkalmazások
       - Egyszerűbb játékok
    - Canvas
       - Tipikusan játékok (legnagyobb bevétel mobilon)
       - Esetleg multimédia alkalmazások
- Hogyan lehet hatékonyan fejleszteni HTML-en és CSS-en alapuló
    alkalmazást?
       - Canvas-ra visszatérünk


##### Miért a web? Miért “most”?


1. Böngésző háború (1995-2009)


1. Böngésző háború (1995-2009)

```
Forrás: Wikipedia
```

2. Böngésző háború

```
Forrás: Wikipedia, StatCounter
```
- Chrome: 65,2%
- Safari: 18,6%
- Edge: 5,3%
- Firefox: 2,7%
- Samsung: 2,6%
- Opera: 2,1%
- **2024. szeptember**


2. Böngésző háború

```
Forrás: Wikipedia, StatCounter
```
- Chrome: 65,2%
- Safari: 18,6%
- Edge: 5,3%
- Firefox: 2,7%
- Samsung: 2,6%
- Opera: 2,1%
- **2024. szeptember**

2010 - es évektől kezdve elkezdett kialakulni egy stabil böngésző

ökoszisztéma

➢ Szabványkövetés

➢ Egyre hatékonyabb JS végrehajtás


Történelem

- 2007: Steve Jobs vízionálja a webet, mint appot telefonon (iPhone
    bemutatása)
       - De nem ez valósult meg, 2008-ban kijött az AppStore
- 2010 körül váltak a böngészők futtatókörnyezetté
    - Előtte lassú volt minden, nem volt általános a web alapú alkalmazás
- 2010: NPM – Node Package Manager
- 2010: AngularJS, később Angular váltja
- 2013: React
    - 2019: Hooks


Történelem

- 2013: Electron
    - Böngésző elég gyors
- 2014 - től jelennek meg a csomagolók
    - Webpack (2014), Rollup (2015), Parcel (2017) és társai
    - Fejlesztés közben is képesek csomagolni, akár hot reload képességekkel
    - A végső csomag optimalizált
       - Tree-shaking (DCE: Dead Code Elmination)
       - Lazy loading, modulokra bontott
       - Minimalizált
       - Verzionált, hogy pl. ne ragadjon be régi verzió a cache-ben


Történelem

- 2014: Vue
- 2015 PWA
    - Az ötlet, hogy átvegyük a vezérlést a cache felett
    - De ekkor még használhatatlan
- 2015 Visual Studio Code, Webstorm, ...
    - Webstorm (Jetbrains) eredetileg 2010-es, de alapvető funkciókat később kap csak
    - Visual Studio nem jól használható ebben a modellben
- 2016: Angular
- 2020 ESM csomagolók (Vite, WMR, ...)
    - Nem csomagolnak fejlesztés közben


Böngésző motor

- Jelenlegi böngészők a leggyorsabb UI-t biztosítják
- JS motorok lehetővé tették a szerver oldali programozást
- PWA-kat lehet csomagolni AppStore-ba és PlayStore-ba
- JS és TS alapú multiplatform fejlesztés egyre gyakoribb
    - JavaScript talán a leghasználtabb nyelv jelenleg


Jelen

- Jelen
    - Lassan változnak szokások
    - Korábban elkezdett projektek nem kerülnek konvertálásra általában
    - Egyre nagyobbak az alkalmazások
       - Egy 5-10 évvel ezelőtti projekt webpackben 1 - 10 másodperc alatt frissül
       - Mai projekt több perc is lehet
    - Állandóan változó eszközpark a mai napig
       - Nincs integrált környezet, ellentétben sok más technológiával


##### Kliens, vagy szerver oldali

##### keretrendszer


Architektúra

- Szerver oldali keretrendszer
- Kliens oldali keretrendszer

```
Alkalmazás
szerver
```
```
Web
szerver Internet Böngésző
```
```
Alkalmazás
szerver
```
```
Web
szerver
```
```
Internet Böngésző
```
```
JSON
```
```
HTML,
CSS, JS
```
```
RPC HTML, CSS, JS
```

Szerver oldal

- Példa: ASP.NET, PHP, JSP
- Minden kérést a webszerver kezel
- Bemenet: HTTP kérés
- Kimenet: HTTP válaszban HTML [+JS+CSS]
    - Teljes oldal, vagy csak része
    - Ha nem teljes oldal, akkor kliensen kell JS a feldolgozáshoz
- Működik JS nélkül is
    - Ha van JS, akkor lehet validálást, felhasználót segítő apróságokat végezni


Kliens oldal – előnyök

- Jobban skálázódik
    - Szerver oldalról egy nagy tétel eltűnik (render)
- Gyorsabb
    - Kliens nem felejt navigálások között
       - Nem kell újra letölteni az oldal részeit
    - Maga a lekérés is kisebb
       - JSON kisebb, mint az abból készített HTML
- Gyorsabbnak tűnik
    - Kliens oldalon lehet animációkkal, stb. úgy tenni, mintha az adat már itt is lenne


Kliens oldal – előnyök

- Hozzáfér csak kliens oldalon lévő szolgáltatásokhoz (share target,
    notification)
- Aktív kapcsolatot tarthat fenn a szerverrel
    - Frissítheti magát
- Több szerverrel is kommunikálhat
    - Nem kell minden kommunikációnak átmenni saját szerveren
- PWA (Progressive Web Apps)
- A hibrid megoldások (szerver render, de van kliens oldali része is) ezek egy
    részét tudják


Kliens oldali keretrendszer

- Példa: Angular, React, Vue, Blazor
- Webszerver statikus oldalakat ad vissza
- Alkalmazás szerver JSON-t ad vissza
    - Kliens készíti el a HTML oldalt az adatokból
- Nem működik JavaScript nélkül – ma már nem gond
- Blazor ➔ WebAssembly
- Szervert nem terheli a render


##### Kihívások a kliensoldalon


Kihívások a kliensoldalon

- Környezet

```
> Heterogén (Windows, Android, iOS ...)
> Ismeretlen (egyedi konfigurációk)
> Ellenőrizetlen (jogosultságok, adatbiztonság...)
```
- Böngészők

```
> Kisebb különbségek akadnak köztük
```

Kihívások a kliensoldalon

- Felhasználó
    - Heterogén
    - Kiszámíthatatlan
    - Türelmetlen
    - ...

```
Houston airport
```

Kihívások a kliensoldalon

- Hibakezelés
    - Hibák detektálása
    - Hibák kezelése
    - Felhasználói visszajelzés?

```
idő
```
```
$
```

Kihívások a kliensoldalon

- Rohamosan változó kliensoldali stack

```
https://github.com/mraible/history-of-web-frameworks-timeline
```

Kihívások a kliensoldalon

- Ergonómia
    - Prototipizálás, sketch
    - Felhasználói élmény (UX) tervezés
    - Intuitív felhasználói felületek
    - Reszponzivitás



Kihívások a kliensoldalon – Botok (crawler)

- Indexelő crawlerek
    - Google, Bing, DuckDuckGo, Yandex, ...
    - Linkeket követik
    - Legtöbb nem hajt végre JS-t
    - Néhány igen
       - Google és Bing még XHR-t is végrehajt
       - Websocketet egyik sem tud
    - Komplex oldalon hibáznak
       - Lehet/kell segítséget adni, mindegyiknek van leírása
       - Sajnos több száz crawler van


Kihívások a kliensoldalon – Botok (share link)

- Share link botok
    - Facebook, Twitter, Skype, Viber, Telegram, ...
    - Egy link miatt elemzik az oldalt, keresnek
       - Képet
       - Címet
       - Leírást
    - Nem keresnek linkeket, nem követik őket
    - Kliens oldali kódot általában nem hajtanak végre
    - Bonyolult oldal esetén hibáznak
       - Segíteni kell nekik
       - meta tagek formájában (pl. Open Graph tagek)


Kihívások a kliensoldalon – Botok (AI)

- AI Crawler
    - AI tanítóadatokatgyűjt
    - AI adatokatellenőriz
    - RAG
- Torz látogatási adatok
- Érvénytelen A/B tesztek
- Magas terhelés


Kihívások a kliensoldalon – Botok (szerver oldal)

- Szerver oldalon renderelt oldal hátrányai nem problémák botok esetén
    - Nem kell validálni
    - Nem kell interakció: animáció, egyéb hatások
- Minden botnak más a fontos
    - Például képméret függő, hogy Facebook hogyan teszi ki a linket
    - Több különböző oldalt/variációt kell gyártani
       - Akár 3- 4
    - Szerver oldali render kell


SSR – Server Side Rendering

- Szerver oldalra átvitt kliens kód
    - Tipikusan Node.js szerverrel
    - Nem megy minden – nyilván
- Minden általunk vizsgált technológia támogatja
- Hibrid megoldás: szerver és kliens render
    - Első körben a szerveren elkészül a HTML
    - Böngésző megjeleníti
    - Majd letöltődik a teljes app
    - Átveszi a kész HTML-t, működik minden


Botok – amikor nem számít

- Ha az oldal nem indexelhető
    - Intranet site
       - Csak a site felhasználóinak érdekes adat
    - Védett tartalom
       - Bizonyos felhasználók férhetnek csak hozzá
    - Alkalmazás
       - Játékok
       - Utility appok
       - Egyéb alkalmazások
    - Vagy ezek kombinációja
- Akkor nem kell foglalkozni a botokkal


##### Köszönöm a figyelmet!


##### A felhasználói élmény alapjai

- Fejlesztőknek

```
Az előadástösszeállította: Kis-Nagy Dániel
```

##### Felhasználói élmény (UX)


###### „AZ ÉLMÉNY, AMIT A TERMÉK KIVÁLT A

###### FELHASZNÁLÓBAN, AMIKOR VALÓS

###### KÖRÜLMÉNYEK KÖZÖTT HASZNÁLJA AZT.”

JESSE JAMES GARRETT: THE ELEMENTS OF THE USER EXPERIENCE


Felhasználói élmény (User Experience, UX)

- Nem az, amire a termék használható, hanem ahogy használható.
- A termék megítélésének meghatározó eleme
- „Na milyen az új kávéfőződ (ébresztőórád, telefonod, széked...)?”
    - Az élmény, és nem a specifikáció / funkciólista alapján szoktunk

```
válaszolni.
(Legalábbis a többség.)
```

Élmény


Élmény


A FELHASZNÁLÓI ÉLMÉNY NEM AZT JELENTI, HOGY

```
A TERMÉK HASZNÁLATA „ÉLMÉNY”, ABBAN AZ
ÉRTELEMBEN, AHOGY ÉLMÉNY MEGMÁSZNI EGY
HEGYET VAGY ELOLVASNI EGY KÖNYVET.
```

```
A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY BE
TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT ANÉLKÜL,
```
HOGY FELIDEGESÍTENE, ÉS NEM MÁSNAP DÉLBEN

DERÜL KI, HOGY VALAMIT ELRONTOTTAM.


```
A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY BE
TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT ANÉLKÜL,
```
HOGY FELIDEGESÍTENE, ÉS NEM MÁSNAP DÉLBEN

DERÜL KI, HOGY VALAMIT ELRONTOTTAM.

```
▪ A lényeg az, hogy kényelmesen tudjam
használni, nem kell, hogy „élmény” legyen!
▪ Persze még jobb, ha jól is néz ki, kellemes a
hangja stb., de mindez másodlagos
```

### A FELHASZNÁLÓI ÉLMÉNY

### ALAPJAI


### A FELHASZNÁLÓI ÉLMÉNY

### ALAPJAI KÉZZEL FOGHATÓ

### TERMÉKEKNÉL


```
A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY BE
TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT ANÉLKÜL,
```
HOGY FELIDEGESÍTENE, ÉS NEM MÁSNAP DÉLBEN

DERÜL KI, HOGY VALAMIT ELRONTOTTAM.

▪ Rendelkezik a funkcióval, amire szükségem van


„Klasszikus” Terméktervezés (Product Design)

- Eredeti elképzelés: az a jó termék, ami beteljesíti a funkcióját.
    - Műszakilag legyen rendben, akkor nem lehet baj...
- A külső megjelenés
    alakulását a funkciók
    megvalósítása
    vezérli (és csak az)


„ÉRTELMETLEN AZON VITATKOZNI, HOGY A DESIGN

```
SZÜKSÉGES VAGY MEGFIZETHETŐ-E: A DESIGN
ELKERÜLHETETLEN. A JÓ DIZÁJN ALTERNATÍVÁJA A
ROSSZ DIZÁJN, ÉS NEM ANNAK HIÁNYA.”
DOUGLAS MARTIN: BOOK DESIGN: A PRACTICAL INTRODUCTION
```

```
A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY BE
TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT ANÉLKÜL,
```
HOGY FELIDEGESÍTENE, ÉS NEM MÁSNAP DÉLBEN

DERÜL KI, HOGY VALAMIT ELRONTOTTAM.

```
▪ Hamar rájövök, hogy működik – adja magát a
használata
▪ „Emberi adottságokra tervezett”
```

Formatervezés

- „Kézzel fogható” termékeknél tipikusan ezt szoktuk „dizájnnak” hívni.
    - Megjelenés, tapintás stb.
- Néha a funkció rovására megy...
    - Néha ez nem baj... (de többnyire az)


A funkciót támogató dizájn

- A helyes használat adja magát, szöveges vagy más instrukciók nélkül


A funkció rovására menő dizájn:

- A New Yorki Modern
    Művészetek Múzeuma büszkén
    őriz egyet a gyűjteményében
- Melegedési problémákat
    okozott a tetejére helyezett
    szellőzőnyílás
       - Adta magát, hogy rápakoljanak a
          felhasználók...

Power Mac G4 Cube


A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY

BE TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT

ANÉLKÜL, HOGY FELIDEGESÍTENE, ÉS NEM

MÁSNAP DÉLBEN DERÜL KI, HOGY VALAMIT

ELRONTOTTAM.

▪ Egyértelmű visszajelzésekkel szolgál


Egyértelmű visszajelzések

- Azonnali válasz az interakcióra
    - Hanggal
    - Érintésre (pl. gomboknál)
    - Vizuálisan (pl. kijelzők)


A FELHASZNÁLÓI ÉLMÉNY AZT JELENTI, HOGY BE

TUDOM ÁLLÍTANI AZ ÉBRESZTŐÓRÁT ANÉLKÜL,

HOGY FELIDEGESÍTENE, ÉS NEM MÁSNAP DÉLBEN

DERÜL KI, HOGY VALAMIT ELRONTOTTAM.

```
▪ Rendelkezik a funkcióval, amire szükségem van
▪ Adja magát a használata
▪ Egyértelmű visszajelzésekkel szolgál
```

A felhasználói élmény tervezése

```
Funkcionalitás
```
```
Használhatóság- Dizájn
```
```
Mérnöki hozzáállás
▪ A funkcionalitás ellátásához
szükséges mérnöki tudás
alkalmazása.
▪ Stabil tudományos háttér
```
```
Művészi
hozzáállás
▪ Kreativitást,
intuíciót igényel
▪ Állandóan változó
divatokat kell
kövessen
```
```
Pszichológiai
hozzáállás
```
▪ Az emberi viselkedés
modelljeit hasznosítja
▪ Folyamatosan fejlődő
tudományos háttér
▪ Ma még főleg tapasztalati
tudásra épít
(bevált módszereket keresünk)


Webalkalmazások használhatósága

- A felhasználói élmény fontosabb, mint valaha
    - Nincs se használati utasítás (ha lenne, se olvasná el senki), se tanfolyam
    - „Ha nehéz használni, nem fogom”
       - Senki nem kényszerít (vö. munkahely)
       - Nem veszítek semmit (vö. már megvásárolt dobozos szoftver)
       - A konkurencia csak egy kattintásnyira van
    - De legfőképpen...


### HA VALAMI NEM MEGY,

### MAGUNKAT OKOLJUK, ÉS

### HÜLYÉNEK ÉREZZÜK

### MAGUNKAT


Kinek a hibája, hogy nem megy?

- Mit érzünk?
    - „Biztos rosszul csináltam valamit...”
    - „Biztos nem figyeltem...”
    - „Biztos már eleve rosszul indultam neki....”
- Mi a valóság?
    - A felhasználó úgy cselekszik, ahogy számára az logikus
    - A problémát az okozza, hogy az alkalmazás nem úgy működik, ahogy az a felhasználó
       számára logikus lenne


### AKKOR MI A LOGIKUS?

### AMIN NEM KELL

### GONDOLKODNI!


### PÉLDA

### SZERETNÉK MISKOLCON

### KÖNYVELŐI ÁLLÁST

### TALÁLNI



Hogyhogy
„kulcsszavak”?
Mi az a kategória?
Nem inkább pozíció?
Hol tudok várost
választani?



Megint kulcsszavak?
Mondjuk itt legalább
megye van... persze az
kevés. Talán a részletes
keresést kéne
kipróbálnom...



### Aha!


### MI A HELYZET AZ

### IRODÁBAN?




„Jó volt az úgy!”

- Közhiedelem
    - Az Office jó úgy, ahogy van
    - Úgyis mindenki csak töredékét használja a funkcióknak
    - Az Office 6.0/97/2000 –ben minden benne volt, ami kellett
- Valóság
    - „Ezt biztos, hogy meg lehet csinálni valahogy, de nem tudom, melyik menüben
       keressem...”
    - „Sokat tud az Office, biztos sokat segítene, ha profibban tudnám használni...”


Az Office UI kudarcai

- Évről-évre új funkciókkal bővült...

...de senki nem találta meg őket

- Az Office egyre bonyolultabb lett...

...és a helyzet évről-évre romlott

- A felhasználók szeretnének hatékonyabban dolgozni...

...de beletörődnek, hogy semmi nem változik







Hogy jutottunk el idáig?

- A menüket és toolbarokat sokkal kevésbé gazdag funkcionalitáshoz találták ki
- Az Office funkcionalitása túlmutat azon, amiket a régi UI megoldások
    használhatóan reprezentálni tudnak
- Egy adott funkciót nehezebb ma megtalálni, mint a ’90-es években volt
    - „Valahogy biztos meg lehet csinálni, de azt sem tudom, hol keressem...”



Mi a közös az alábbi parancsokban?

- Find out the current number of words
- Turn on speech command and control
- Create a SharePoint Document Workspace
- Print Envelopes
- Open the Visual Basic Editor
- Turn on hyphenation
- Merge the contents of multiple documents
- Start a web conference
- Tweak AutoCorrect settings


### MIND A

### TOOLS

### MENÜBEN

### VANNAK!


### HOGYAN LEHETNE EZEN

### JAVÍTANI?

### MÉRJÜNK!


Telemetria: parancsok gyakorisága


Telemetria: parancsok gyakorisága


Telemetria: gyorsbillentyűk


Videó: Gaze tracking


Videó: Gaze tracking



```
0% 10% 20% 30% 40% 50% 60% 70% 80% 90% 100%
```
```
makes my job less stressful
```
```
gives me more control over the activities in my life
```
```
gives me more control
```
```
enhances my effectiveness on the job
```
```
makes it easier to do my job
```
```
saves me time
```
```
makes me more effective
```
```
makes me more productive
```
```
enables me to find and use new features more quickly
```
```
makes it easier to get tasks done
```
```
better meets my needs
```
```
enables me to accomplish tasks more quickly
```
```
is easy to learn
```
```
is easier to use
```
```
is simple to use
```
```
makes it easier to discover new features and functions
```
```
is more intuitive
```
```
requires fewer steps to accomplish what I want to do
```
```
is more enjoyable to use
```
```
is more fun to use
```
makes it easier to create professional looking documents

```
Strongly Agree Somewhat Agree Somewhat Disagree Strongly Disagree
```
Az Office 2007 értékelése


#### ÉS MI A HELYZET A

#### „FELHASZNÁLÓI HIBÁKKAL”?


Kezdetben vala...


Kezdetben vala...

- Drága gépek, alacsony teljesítmény
    - Olcsóbb a munkaerőt hosszasan betanítani, mint validációs logikát írni / futtatni
    - A grafikus felhasználói felület fel sem merül!
    - Az emberi hibák költségesek, de nem annyira, mint a gépidő...


De Kinek a hibája az „emberi hiba”?

- Azért szoktuk emberi hibának hívni, mivel a problémát végső soron egy
    elmulasztott vagy rosszul véghezvitt emberi cselekedet okozta.
- Tudnia kellett volna, mit tegyen, hiszen:
    - Kapott képzést
    - Benne volt a használati útmutatóban
    - A dokumentáció mindenki számára elérhető az A12 épület C szárnyának 2-es
       pincéjében.


RTFM


Olvasnak-e a gyerekek használati útmutatót?


Kinek a hibája az „emberi hiba”? (folyt.)

- Az emberi viselkedésnek és gondolkodásnak léteznek ismert,

```
majdnem mindenkinél előforduló „hibái” – ez pontosan
ugyanannyira adottság, mint az, hogy két kezünk van.
```
- Figyelmen kívül hagyni ezeket a tervezésnél olyan, mint autót

gyártani három kezűeknek.


„A LEGTÖBB BALESETET

EMBERI HIBÁNAK

TULAJDONÍTJÁK, DE AZ

EMBERI HIBA MAJDNEM

MINDIG A ROSSZ TERVEZÉS

KÖVETKEZMÉNYE.”

DON NORMAN: THE DESIGN OF EVERYDAY THINGS


### HOGYAN?


**Konkrét**

**Absztrakt**

```
A termék mint
funkcionalitás
```
```
A termék mint
információforrá
s
```
```
Felhasználói igények
Termék célok
```
```
Funkcionális
specifikáció
```
```
Tartalmi
követelmények
```
```
Interakció
tervezés
```
```
Információ
architektúra
```
```
Interfész t.
Információ tervezés
```
```
Navigáció t.
```
```
Érzéki tervezés
```

Egy képernyő megannyi formája...


Sketch: ötletelés


Wireframe: Tervrajz


Vizuális terv: Minden a helyén


Prototípus: Bármelyik eddigi + interakció


A folyamat konrántsem lineáris


A folyamat konrántsem lineáris


##### Honnan jöttünk?



Xerox Star (1981)





A Xerox fontosabb alapelvei

- **Közvetlen kezelés**
    >A funkciókat nem parancsok begépelésével érjük el – csak egérrel rá kell mutatni,
       és kattintani
- **Azt kapod, amit látsz (WYSIWYG)**
    >Már szerkesztés közben a végeredmény látható – nem valami elvont jelölőnyelv,
       ami csak nyomtatáskor kerül értelmezésre


A Xerox fontosabb alapelvei (folyt.)

- **Egységes parancsok**
    >Ha két program rendelkezik kb. ugyanazzal a funkcióval, azt ugyanúgy kell
       használni
       (pl. másolás, nyomtatás)
    >Egyszerűbb, gyorsabban tanulható
    >Együttműködést igényel a különböző alkalmazások fejlesztői közt
       - A Xerox ezt úgy „oldotta meg”, hogy minden Star alkalmazás náluk készült, külső alkalmazást
          nem lehetett telepíteni...


Apple Macintosh (1984)


Apple Macintosh (1984)

- Továbbvitte a Xerox GUI-t, de külső alkalmazások fejlesztését is
    támogatta
- A konzisztencia megőrzése végett **dokumentálták** és **terjesztették** a
    felület kialakításának alapelveit


Macintosh Human Interface Guidelines


Macintosh alapelvek

- **Metaforák**
    >Segítsük a koncepciós modellek kialakulását azáltal, hogy a felületelemek
       hasonlítanak ismerős, nem digitális dolgokra
    >Pl. a fájlrendszer fát feleltessük meg mappáknak és dokumentumoknak


Macintosh alapelvek (Folyt.)

- **Közvetlen kezelés, WYSIWYG,**
    **egységes parancsok**
       >Mint a Xeroxnál
- **A felhasználó irányít**
    >Úgy lehet megtanulni egy szoftver használatát, ha részt veszünk benne
    >Csak összezavar, ha minden automatikusan történik (Segíteni ettől még persze lehet)


Macintosh alapelvek (Folyt.)

- **Visszajelzések és dialógusok**
    >Legyen mindig egyértelmű a rendszer állapota
    >Ha valami nem sikerül, legyen érhető ennek oka, és hogy mit tehetünk ellene


Macintosh alapelvek (Folyt.)

- **Megbocsátás**
    >A felhasználói műveletek visszavonhatóak kell legyenek
    >Ezzel támogatjuk a lehetőségek kipróbálását, a kísérletezgetés jellegű tanulást
- **A stabilitás érzete**
    >Ne változzon a dolgok helye és mérete ok nélkül
    >Pl. a menüpontokat mindig ugyanott kell elhelyezni; ha éppen nem érhető el
       valamelyik, akkor sem szabad eltűntetni, csak elhalványítani (a hiábavaló keresést
       elkerülendő)


Macintosh Alapelvek (Folyt.)

- **Esztétikai egységesség**
    >A GUI-nak illeszkednie kell a Macintosh rendszer egészéhez – a szokásos
       vezérlőelemek, ikonok, viselkedés stb. alkalmazásával.
    >Fontos továbbá a jó megjelenés– a profi megjelenés a profi, megbízható működés
       érzetét kelti
- **Módnélküliség**
    >Az alkalmazás viselkedése lehetőleg ne függjön láthatatlan „üzemmódoktól”


Mit tartalmaz még „a könyv”?

- Tanácsokat az akadálymentesítéshez és a lokalizációhoz
- A felhasználók bevonása a tesztelésbe és a tervezésbe
- A beépített felületelemek teljes listáját és leírását
    >Akkor még nagyon újak voltak, és egyáltalán nem volt egyértelmű, mikor melyiket
       kell használni


Mit tartalmaz még „a könyv”? (Folyt.)

- A rendszer általános viselkedését


##### Videó

Hogyan kell az egeret használni?



Ikonografikus szemlélet

- Metaforák
    „a végletekig”
       >Amennyire csak a
          technológia engedi
             - Árnyékok,
                tükröződés stb.
       >Digitális eszköz
          = a mi digitális „cuccaink” tára



WIMP – windows, icons, menus, pointer

# ...


##### Honnan jöttünk?

Mobil alkalmazások


A mobil más...

- Alapvetően „kevesebb”
    >Alacsonyabb számítási teljesítmény
    >Korlátozott RAM
       - Nem fogják bővíteni egy-egy alkalmazás kedvéért (leginkább, mert nem lehet)
    >Kis méretű permanens tár
    >Korlátozott kapcsolat
       - Drága, lassú, megbízhatatlan
    >Limitált energiaforrás


A mobil más... (Folyt.)

- Változatos beviteli módok

>Érintőképernyő, toll, QWERTY, esetleg keypad ☺

- Kis képernyő, gyakran kis felbontással

>Ráadásul eszközről eszközre változik

>Sőt, egy eszközön belül is

- Álló, fekvő, képernyő felét kitakaró virtuális billentyűzet


Milyen legyen a mobil verzió?

- Kevés összetett képernyő
    helyett sok egyszerű
       > A navigáció majdnem
          olyan hangsúlyos, mint
          weben
- Kevesebb funkció
    > Gondoljuk végig, mit
       szeretnénk mozgásban
       is elérni
- Kevesebb tartalom
    > Nincs mindennek hely – emeljük ki a lényeget
- Nagyobb felületelemek
    > Különösen érintőképernyőn


A mobil élmény

(nem is olyan) régen


A mobil élmény

Most


A mobil élmény

Most


Ikonografikus szemlélet – Mobilon is

- Metaforák „a végletekig”
    >Amennyire csak a technológia engedi
       - Árnyékok, tükröződés stb.
    >Digitális eszköz
       = a mi digitális „cuccaink” tára


Szkeumorfizmus

- A **szkeumorf** olyan **díszítése** vagy elrendezése valaminek, ami
    ugyanannak a dolognak a **más anyagból vagy más technikával** készült
    formájában **nélkülözhetetlen** volt.


Melyik szkeumorf?


Realizmus


Realizmus (Folyt.)


Régi szokások ≈ Régi limitációk


Új divat: Flat UI


Jóból is megárt a sok


„Almost flat UI” – az arany középút?


Material Design


IOS 7: Egy korszak vége...


## ELRENDEZÉS


Gestalt törvények

- Gestalt: valami, amit egyetlen objektumnak / egységnek érzékelünk
    - Szó szerint „formát” jelent (németül)
- A gestalt törvények mondják meg, miket látunk koherens egységnek
    - Előképzés vagy tudatos erőfeszítés nélkül
- A felületelemek elrendezésekor építünk rájuk


A közelség törvénye

- Az egymáshoz közelálló elemeket összetartozónak érzékeljük


A közelség törvénye

- Az egymáshoz közelálló elemeket összetartozónak érzékeljük


A Lezárás törvénye

- A vonallal körbezárt területet egy alakzatnak érzékeljük
- Erősebb, mint a közelség törvénye


A helyes folytatás törvénye

- Az egy vonalra eső elemeket összetartozónak érzékeljük


Lezárás kontra folytatás

- Hosszú egyenes vonal vagy három trapéz?


Lezárás konrta folytatás

- Hosszú egyenes vonal vagy három trapéz?


A párhuzamos mozgás törvénye

- Az együtt mozgó elemeket összetartozónak érzékeljük


A hasonlóság törvénye

- A hasonló kinézetű elemeket összetartozónak érzékeljük


A hasonlóság törvénye

- A hasonló kinézetű elemeket összetartozónak érzékeljük


A hasonlóság törvénye

- A hasonló kinézetű elemeket összetartozónak érzékeljük


A hasonlóság törvénye

- A hasonló kinézetű elemeket összetartozónak érzékeljük


Gestaltok az interfészeken






### ELRENDEZÉS

### DOMINANCIA


Kiemelés a sokaságból

- „Itt van ez a sok minden, mi ebből a fontos”
    - Belépési pontot kell adnunk a felületen
       („Hol kezdjem? Honnan induljak?”)
    - Ki kell fejeznünk az elemek relatív fontosságát
       - Ettől tudjuk „átfutni” a képernyőt
- Kontraszttal kiemeljük a
    domináns elemeket


Átfuthatóság és hierarchia – tartalmakhoz


Belépési pont



Túl sok kiemelés = nincs kiemelés


A részleteken múlik

- Ha nincsenek konzisztens betűméretek

...elvész a hierarchia


A részleteken múlik

- Ha nincsenek konzisztens betűméretek

...elvész a hierarchia

- Ha nincsenek rendben a térközök

...elvész az átláthatóság


A részleteken múlik

- Ha nincsenek konzisztens betűméretek

...elvész a hierarchia

- Ha nincsenek rendben a térközök

...elvész az átláthatóság

- Ha nincsenek egy vonalban az elemek

...nem alakul ki az összetartozóság


Ha mindent jól csináltunk

### Aha!


##### Kliensoldali rendszerek

```
TypeScript
```

##### JavaScript


JavaScript támogatás

- Van szabvány (ECMAScript 2024), és megkésve követjük is
    - Ez sokat javult az elmúlt 15 évben
- Fordítót használunk
    - Babel
    - TypeScript
    - Tipikusan ES6-ra (2015) fordítunk
- Ez meglepően jól működik
    - Ellentétben a HTML és CSS problémákkal

```
Babel is a JavaScript compiler.
Use next generation JavaScript, today.
```

JavaScript támogatás

- Polyfillt használunk a nem implementált funkcionalitáshoz

```
if ( !String.prototype.startsWith )
{
Object.defineProperty( String.prototype, 'startsWith', {
value: function ( search, rawPos )
{
var pos = rawPos > 0? rawPos | 0 : 0 ;
return this.substring( pos, pos + search.length ) === search;
}
} );
}
```

Jelenlegi támogatás

- Report: caniuse 2024 szeptember
    - JS, HTML, CSS
- Oszlopok
    - Chrome
    - Edge
    - Firefox
    - Android Chrome
    - iOS Safari
- Chrome (Edge) elöl
    - A különbségek kicsik, de nem lényegtelenek
       - Push notification, WebGL2 mindenhol van már
       - WebGPU van Androidon, de nincs iOS-en


Gyengén típusos

- Vannak típusok
    - number, string, boolean, Object, Symbol, function, bigint, null, undefined
    - Csak futásidőben kerülnek ellenőrzésre
    - A runtime megpróbál mindenhol konvertálni
       - Csak végső esetben dob hibát
- De nem kell/lehet kiírni őket
    - Rövid, jól átlátható kódot eredményez
       - Amíg kicsi a program


Gyengén típusos

- Közepes és nagy szoftvereknél probléma
    - Nincs fordításidejű ellenőrzés, sokkal többet kell tesztelni
    - Problémás a tooling
       - Kódkiegészítés: nehéz javaslatokat adni a fejlesztőnek, hogy mit tud beírni
       - Ellenőrzés: kevesebb hibát lehet kielemezni
    - Nem látni a kódból, hogyan kell használni
       - Ez megoldható dokumentációval – /**...*/ széleskörben támogatott
- Mi csak a közepes és nagy szoftverekre koncentrálunk


##### TypeScript

Általában


Mi a TypeScript?

- Típusos JavaScript, a típusok opcionálisak
    - Minden JS egyben TS is
    - Amint beírunk típust valahova, az már csak TS
- Típust a változó neve után írjuk

```
function A(a, b) // .js, vagy .ts fájl is lehet
{
return a + b;
}
function A(a: number, b: number) // csak .ts fájlban lehet
{
return a + b;
}
```

Tudásban TypeScript=JavaScript

- TS nem tud többet
- Ha kivesszük a típusokat, akkor JS-t kapunk
    - Ugyanúgy fog viselkedni a kód futásidőben
    - typeof és társai is csak a JS szintet hozzák
- Az egyetlen különbség, hogy van egy fordítási lépés
    - Ez nagyon fontos, akkor is használjuk, ha JS-t írunk (babeljs segítségével)
    - A cél, hogy átkódoljuk az új szabvány szerint megírt kódot a célplatformra
       - Mert a felhasználó eszköze esetleg nem a legújabb JS-t tudja
    - TS esetében ez a lépés kiveszi a típusokat is


Miért fontosak a típusok?

- Kezdetleges dokumentáció
    - Sokszor lehet következtetni, hogy mit csinál
       - Névből– JS/TS
       - Paraméterek nevéből – JS/TS
       - Paraméterek típusából – csak TS
- Tooling
    - Kódkiegészítés
       - Kontextusfüggő: típus korlátozza a listát
    - Linter
- Fordításidejű kódellenőrzés
    - Hasonló linterhez, de sokkal hatékonyabb


Miért fontosak a típusok

- Tesztelés segítése
    - Típusok esetén a tesztelés költsége jelentősen csökken (akár felére)
       - A hibák jelentős része nem kerül bele a kódba
- Összességében a típusok csökkentik a költséget


OO paradigma kérdése

- Fontos: a típusok használata nem segít az objektum orientáltságon
    - Függetlenek egymástól
- JS támogatja az OO irányelveket
    - Vannak osztályok, egységbe zárás (encapsulation)
    - Belső működés elrejtése – absztrakció
       - Private (#) csak ES2019-től
       - TS-ben volt/van
    - Öröklés
    - Polimorfizmus – majdnem
       - Ez nincs JS-ben, sem TS-ben
       - Egy függvény viszont több típussal
          is tud működni
       - Az eredeti célt el tudja érni


OOP TS-ben

- Támogatottak
    - Osztályok
    - Interfészek (explicit- és implicit megvalósítás)
    - Absztrakt osztályok
    - Öröklés
    - Láthatósági módosítók (public, private, protected)
    - Osztályszintű változók és függvények
    - Enum típusok, string literálok, unió- és metszettípusok
- Nem támogatottak
    - Valódi metódus overloading
    - Valódi többszörös öröklés
    - Típusonként több konstruktor/azonos nevű függvény


Osztályok és öröklés

- A legtöbb keretrendszer nem osztály alapú
    - Régen nem voltak osztályok
    - Kezdő programozóknak egy akadály
    - this probléma nem segít
    - Komponens alapú fejlesztés
       - Kompozíciót használunk, nem öröklést
    - Egységbe zárást a komponens valósítja meg
       - Ami vagy osztály, vagy nem
- TS-től a típusosságot kérjük
    - Osztályokkal külön nem foglalkozunk
    - Ettől még sok kód osztályt fog használni


##### TypeScript

Típusok


Alaptípusok

- Az alaptípusok a JS alaptípusok, plusz

```
let a: number[]; // tömb
let b: [ number, string ]; // tuple
enum Color { Red, Green, Blue };
let c: Color; // enum
let d: any; // nincs ellenőrzés
let e: "red" | "green" | "blue"; // string literal
```

Összetett típusok

- Unió: string | number
    - Vagy egyik, vagy másik
    - Nagyon sokat használjuk
       - Mert azonos neve nem lehet függvényeknek
          - Például polimorfizmus megoldására
       - Nem a fordító dönti el, hogy melyiket kell hívni
          - Függvényen belül if-elünk
- Metszet: ObjA & ObjB
    - MindenA-ból és B-ből


Függvények, röviden

- Default és opcionális paraméterek
- undefined-ot kapunk, ha nincs megadva
    - Vagy kézzel azt adtak át
    - Tehát a default paraméter is lehet undefined
- Azonos a működés JS-sel
    - Nem fordul le, ha nem adunk meg egy kötelező paramétert – minden az, ami nem
       opcionális/default

```
function fd( a: string = "hello", b?: string ) {
}
```

Osztályok, röviden

- Konstruktorban tulajdonság
- public, protected, private működik
    - De csak fordítás időben
    - #field is működik, ez futásidőben is
- readonly, static, abstract kulcsszavak
- Accessors: get és set

```
class C {
constructor( public name: string ) { }
}
```

this

- TS nem oldja meg teljesen a this problémát
    - De segít rajta
- Nekünk kell megoldani
    - Minden callback-nél használjunk arrow function szintaktikát

```
setInterval( () =>
{
// itt a this azonos a külsővel
}, 1000 );
```

Type guards

- Fordító követi a kód logikáját
- Működik instanceof esetén is

```
function toS( x: string | number )
{
if ( typeof x === "string" )
return x;
else
return x.toFixed();
}
```

Paraméteres típusok – Generics

- Használhatunk előre nem ismert típusokat
- Osztályok és függvények is
- Több paraméter is lehetséges
- A fordító látja, hogy mivel hívjuk, nem kell megadni – mint C#, vagy C++

```
function concat<T>( a: T, b: T )
{
return a.toString() + b.toString();
}
concat( 1 , "2" ); // Error
```

Paraméteres típusok – Generics

- Kényszerekkel

```
interface HasLength
{
length: number;
}
function getTotalLength<T extends HasLength>( a: T, b: T )
{
return a.length + b.length;
}
```

Interfészek – interface kulcsszó

- Objektum tulajdonság
- Objektum függvény
- Objektum konstruktor függvény
- Függvény
- Indexer
- Ezeket mind meg lehet adni interface nélkül is

```
interface HasLength<T>{
new(): T;
length: number;
getLength(): number;
}
interface Indexable{
[ key: string ]: string;
}
interface Action<T>{
( param1: T );
}
let x: Action<string> =
s => console.log( s );
```

Struktúrálisan típusos

- Két változó akkor azonos típusú, ha struktúrálisan azonos a típusuk
- Például
- A típus neve nem számít

```
type SoN = string | number;
function FA()
{
let a: SoN = 1 ;
let b: number | string = a;
}
```

Struktúrálisan típusos

- Ez igaz interfészekre és osztályokra is
- És minden más típusra
    - Ha kompatibilis, akkor fordul

```
interface IA{
a: string;
}
interface IB{
a: string;
}
```

Struktúrálisan típusos

- Függvények is követik a kompatibilitás elvét
- Még trükkös esetekben is
    - JS-ben mindenhol átadhatok kevesebb paraméterrel rendelkező függvényt

```
let x = ( a: string ) => { };
let y = ( a: string, b: string ) => {
};
y = x; // OK
x = y; // Error
```

##### Modulok

És egyéb nyelvi elemek


Névterek (ritkán használt)

- Egy fordítási egységen belül
- Használata: /// <reference path=“x.ts”/>
- Kód darabolása a cél
    - Nagyon hasonló az osztály egységbe záráshoz

```
namespace NS
{
export class C
{
}
}
```

Modulok

- Ezt csak modul betöltővel lehet használni
    - import {C}from'my-class';
- Fordításnál állíthatjuk, hogy milyen kódot generáljon
    - CommonJS (Node.js)
    - RequireJS (AMD)
    - ...

```
moduleM
{
exportclassC { }
}
```

Natív modulok – ezt használjuk

- import kulcsszó működik mindenféle csomagoló nélkül
    - import {C}from”c.js”;
- Tipikusan egybefordítjuk, hogy kevesebb fájlt kelljen betölteni
    - Csomagolásnál visszatérünk erre
- Ez így nem tud importálni TypeScript fájlt
    - Azt a böngésző nem ismeri
    - Helyette ezt a formátumot használjuk, amit csomagoló (pl. Vite) megold nekünk

export class C { } // c.js-ben

```
import { C } from "./c";
```

Típusdeklarációs fájlok .d.ts

- Külső könyvtárakhoz van típusokat leíró fájl
- Legtöbb könyvtárral egybe csomagolják, így külön fel sem kell tenni
    - Vagy fel kell tenni, ha nincs benne
       - npm i -D @types/jquery
       - Vagy letölteni kézzel
- Óriási gyűjtemény
    - https://definitelytyped.org/


Típusdeklarációs fájlok .d.ts

- Ezek sima .ts fájlok
    - De tipikusan nincs bennük olyan kód, ami benne marad fordítás után
    - Csak típusok leírása van bennük
- Tipikusan: type, declare, interface

```
type StringOrNumber = string | number;
declare class A
{
private name: string;
}
```

Típusdeklarációs fájlok .d.ts

- Mi magunk is írhatunk .d.ts fájlt
- Célok
    - Könyvtárat írunk
       - Más fel fogja használni
       - JS-ként adjuk át, így a típusok eltűnnek belőle
    - Más nyelven készítettük a szervert
       - C#, Java szerver típusait célszerű deklarálni .d.ts fájlban
       - Lehet automatikus folyamat
       - Protocol Buffer megoldás .d.ts fájlt is generálhat


##### Aszinkron programozás

async, await


Promise

- Egyre több API használ Promise-t
    - Ez egy osztály, ami támogat
       - Több feliratkozót
       - Hívás-válasz mintát – mint egy függvényhívás
          - De például ismétlődő eseményekre nem alkalmas – nem egy esemény
       - Egységes hibakezelést
          - Van benne try-catch, nem kell kézzel beletenni
       - Láncolást: .then(valami).then(más)
- Felhasználása .then(callback)
    - Vagy .catch(callback)


Promise

- A sima callbackhez képest kényelmesebb
    - Mindennek azonos az interfésze
       - Nem kell tudni, hogy melyik paraméter a callback
    - Azonos a hibakezelés is
- Nem tökéletes
    - A kód még mindig callbackekben van
- ES6-tól van
    - ES5-re fordításkor belefordítja a kódját


Promise – delay

- Egy példa a setTimeout Promise-ra alakítására
- Visszadunk egy Promise-t
- Elindítunk egy timert
- Amikor lejár, meghívjuk a resolve-ot
    - Ami meghív minden .then-t, ami rá van téve

```
function delay( ms: number )
{
return new Promise( ( resolve, reject ) =>
setTimeout( resolve, ms ) );
}
```

async, await

- Ha egy függvény Promise-t ad vissza
    - Beírhatunk elé egy awaitet (ES 2017, vagy TypeScript 2015 )
    - Feltéve, hogy async függvényben vagyunk
- Az await utáni kód a .then-be kerül fordításkor
    - Minden await ponton elvágja a kódot a fordító

```
async function fa()
{
await delay( 500 );
console.log( "hello" );
}
```

async

- Promise-t ad vissza (csak nem látszik)
- Akkor hívja meg a resolve-ot, amikor
    az utolsó sor is lefutott
- Meghívja a reject-et, ha kivétel
    keletkezik

```
async function fa() {
await delay( 500 );
console.log( "hello" );
}
```
```
function fa(){
return new Promise( ( resolve, reject ) => {
delay( 500 ).then( () => {
console.log( "hello" );
resolve();
} );
} );
}
```

Szálak

- JS-ben csak egy szál van, azon megy az egész
    - Ha szinkron minden, akkor megszakítás nélkül
    - Ha olyan API-t hívunk, ami később hív vissza, akkor kiütemezi a szálat
       - És folytatja ugyanazon a szálon, amikor visszatér
- Más nyelvekben (pl. C#) kontextus van
    - Azonos kontextusban kapjuk vissza a vezérlést
    - A fő szál, ami a UI-t futtatja egy külön kontextusban van egyedül
       - A fő szálon való aszinkron programozás egyszálú – nem kell szinkronizálni
    - Háttérszálak – például szerver kódban – egy kontextusban vannak együtt
       - Alapban többszálú, az aszinkron programozás nem változtat ezen


##### CSS

Amikor nem designról van szó


Layout CSS-ben

- Bizonyos CSS elemek nem a designról szólnak
    - Nem sima szín, méret, árnyék, stb.
- Hanem layoutot definiálnak, ami általában fejlesztői hatáskör web alapú
    alkalmazásoknál
- A web alapú alkalmazások nem görgethető oldalak, ahol a designerre lehet
    bízni, hogy mi hol van, vagy látszik-e
       - Ha például nem látszik az alkalmazás jobb oldala, mert mobil nézetben nem fér ki,
          akkor azt nem kell frissíteni folyamatosan
- Web oldal: mindent kiteszünk, és designer azt hoz ki belőle, amit akar
- Web alapú alkalmazás: fejlesztői felelősség a layout, de a stílus továbbra is
    designer feladat


display: grid

- Web alapú alkalmazásnál többnyire ezt használjuk
    - Nem alulról (hierarchiában) megyünk felfelé (tartalom méretez)
    - Hanem felülről lefelé (ablak méretez) – ez a megszokott alkalmazásoknál
- Mindenhol megy
    - 2017 - től
    - Mára nem nagyon maradt eszköz,
       ami ennél régebbi lenne
- Hasonló, de nem azonos a XAML Grid-del
- Lehet benne egy elem
- Vagy több oszlop, több sor is


CSS változók (2016-tól mindenhol)

- CSS-ben tudunk létrehozni változókat
    - Ezek stringek
    - --szin: white
- Utána ezt máshol felhasználhatjuk
    - color: var( --szin )
- Egy helyen kell állítani, és több helyen fel lehet használni
- Hierarchiát kezel, részfára át lehet állítani, míg a többi részen marad
    - Azonos változó más értéket vehet fel más helyeken
- Kódból lehet írni és olvasni
    - Olyan html elemen is, ahol nincs megadva


##### Köszönöm a figyelmet!


##### Kliensoldali rendszerek

```
Reactalapok
```

##### Kliens oldali render

Probléma felvetése


A probléma

- Miért kell keretrendszer?
    - HTML-t előállítani nem nehéz
    - Eseményekre cserélni is tudjuk
    - Bonyolult HTML-t is tudunk készíteni
       - Bár az olvashatósága egy stringbennem jó
       - Nincs szintaktikai színezés és kódkiegészítés
       - De szét tudom bontani egyszerűbb komponensekre
          - Ez amúgy is jó gyakorlat

```
let name = "Leo";
div.innerHTML = `<span>Kedves, ${ name }!</span>`;
```

A probléma

- A teljes HTML cserélése nem jó
    - Villog
    - Lassú
       - 10 - 500 ms függően az elemek számától
       - Egyszer nem gond
       - Minden bemenetre nem életképes
    - Elveszti az állapotot
       - Fókusz
       - input típusú elemek


A probléma

- Megkereshetjük a kérdéses elemet
    - Működik, de a kód erősen függ a HTML felépítésétől
       - Karbantarthatóság problémás
    - Ha nem akarunk használni semmit, akkor ez a megoldás

```
let span = container.querySelector("div span.sum");
span.textContent = "Összeg: " + total;
```

Struktúra szinkronizáció

- A HTML fa felépítésű, egy ágon sok levél lehet
- Fa/lista szinkronizációs probléma (set/tree reconciliation)
    - Van két listánk A és B, generáljunk módosító utasításokat (insert, remove)
       - A-ból B legyen
       - Legkevesebb utasítás generálódjon
    - Fára ez𝑂 𝑛^3 - lassú
- Naiv módszer: oldjuk meg csak beszúrásra és törlésre
    - Átrendezésre előröl kezdjük


Megoldás

- Készítsünk egy keretrendszert, ami
    - Az általunk megadott HTML-t legyártja
    - Képes frissíteni
       - Nem villog
       - Nem lassú
       - Nem veszti el az állapotot
    - Opcionálisan
       - Adatkötést támogat, akár kétirányú adatkötést
       - Jó a tooling
          - Segít a HTML szerkesztésében
          - Ellenőrzi a kódot szerkesztés/fordítás időben
          - Segít debuggolni, ha gond van


Vizsgált keretrendszerek

- React – a fő témánk a
    félévre
       - Csak UI keretrendszer
       - Legnépszerűbb
       - Nagy ökoszisztéma
- Vue
    - Szintén csak UI
       keretrendszer
- Angular
    - Teljes keretrendszer


##### Kompozíció (összetétel)

Strukturális tervezési minta általában

(Composite)


A probléma

- Szeretnénk felépíteni egy struktúrát, ami a felhasználói felületet jól leírja és
    kezeli
- Lehetne típusonként eltérő interfész
    - Konténereket máshogyan kezelni, mint az elemeket
       - Akár lehetne különböző függően a gyerekeik számától
    - Ez kényelmetlen a fejlesztőnek
       - Minden típusra eltérő kódot kell írni
       - Tesztelni, újra felhasználni (pl. konténerben konténer)
- Lehetne egzotikus struktúra
    - Nem fa, hanem például gráf
    - Például meg akarjuk oldani,
    hogy egy elemnektöbb szülője is legyen


A megoldás (kompozíció minta)

- Egy elemet (komponens) attól függetlenül akarunk
    kezelni, hogy az egy konténer, vagy csak egy pici
    rész/elem
       - Egymásba ágyazhatóság miatt legyen minden
          komponensnek egy olyan interfésze, ami támogatja a
          minimumot függetlenül attól, hogy levél, vagy ág
- Fa struktúrában szeretnénk tárolni
    - Egy szülő és 0, vagy több gyerek
    - Adjuk fel az egyéb struktúrákat, mert nehéz kezelni őket


A megoldás

- Meg lehet oldani objektum orientált módon
    - Örökléssel: Levél és Konténer származik komponensből
- Vagy simán minden komponens
    - Ebben az esetben futásidőben kell megoldani, hogy ha
       valaminek nem lehet gyereke
          - Ez nem feltétlen gond, mert a kivételeket amúgy is kezelni kell


Kivételek

- Készíthetünk olyan elemet, aminek
    - Nem lehet gyereke (input)
    - Megadott számú gyereke lehet csak
       - Például 2 (split container)
- Ezeket nehéz örökléssel kezelni
    - Főleg, hogy adatfüggő is lehet
- A fa felépítésénél kell hibát dobni
    - Ez lehet futásidőben
    - Vagy a szerkesztő eszköz által
       - Ez utóbbi gyakori


Felhasználása

- Nagyon gyakran használt minta felhasználói felület kialakítására
    - Adja magát
- Minden elterjedt keretrendszer ezt használja
- A komponensek célja
    - Dekompozíció: részekre bontani a bonyolult felületet
    - Felelősség és egységbe zárás: csak saját magán belül felelős, de ott mindenért
    - Újrafelhasználás
       - Jól körülhatárolt, ezért jó eséllyel működik máshol is


Komponens

- A komponensben van
    - Nézet (HTML) leírása: sablon, vagy kód
    - Nézettel való interakció: események, adatkötés
    - Állapotkezelés
- A komponensek egymásba ágyazhatók
    - Így épül fel a logikai fa
    - Vannak komponensek, amik csak levelek lehetnek


Öröklés

- Kerülendő (React ajánlás)
    - Az általánosabb komponensből ne származtassunk, hanem a props-on keresztül
       specializáljuk
- Összehasonlítva OOP-vel
    - Van: osztály és példánya, egységbe zárás, publikus interfész, belső állapot, absztrakció
    - Nincs: öröklés, polimorfizmus, heterogén kollekció


##### Alkalmazás tervezése

Komponens alapú programozás


Dekompozíció

- Komponens alapú tervezésnél (minden modern UI az) komponensekre
    bontjuk az alkalmazást
       - Iteratív folyamat
       - Olyan mélyre kell menni, amit már átlát a fejlesztő
          - Ez lehet tényleges komponens szint, vagy elnagyolt összetett komponensek
- Gondolni kell designra is
    - Mi és hova fog kerülni a képernyőn
    - Milyen egymásra hatása lesz a részeknek
    - Hogyan lesz CSS szervezve


Statikus verzió elkészítése

- Dinamikus adatok nélküli verzió elkészítése
    - Gyors visszajelzés ügyféltől
    - Gyors visszajelzés a fejlesztőktől
       - Dekompozíció hibáinak egy része előjön
    - Lehetővé teszi a részletes design indítását
    - Kód újra-felhasználási lehetőségek azonosítása
       - Amik csak adatban/paraméterben térnek el


Állapot

- Definiálni kell azt a minimális állapotot, amire szükség lesz
    - Például kiválasztott elem, belépett felhasználó, begépelt szöveg
- Nem állapot, ami konstans, vagy adatfüggetlen paraméter
- Az állapotot hozzá kell rendelni
    - Globális szolgáltatásokhoz/UI-on kívüli részekhez
    - Komponensekhez, ami lokális
       - Nem triviális, hogy a szülőben, vagy gyerekben kell tárolni
       - Tipikusan a részfa gyökerében tároljuk, ahol kelleni fog, és nem lehet lejjebb menni a részfában


Események és adatkötés

- Kezelni kell a felhasználói bemenetet/külső adatok
    változását
- Ez eltér keretrendszerenként: van-e kétirányú
    adatkötés
       - Ha van, akkor viszonylag fájdalommentesen terjed szét
          az adat, ahova kell
       - Ha nincs, akkor adott esetben szülő felé vissza kell adni
          visszahívás alapon
             - React-ben nincs


##### React

function HelloWorld(){
return <h1>Hello, World!</h1>;
}


Hello, World!

- Létrehozunk egy komponenst (Greeter)
    - Ami egy függvény
    - Kap egy p paramétert
       - Amiben egy name tulajdonság van
    - Meghívja a React.createElement függvényt
       - Létrehoz egy h1 objektumot (JS objektum, nem HTML)
       - Hello+p.name+"!" tartalommal
    - Visszaadja a kapott React fát

function Greeter( p ) {
return createElement( "h1", null, "Hello, ", p.name, "!" );
};


Hello, World!

- Meghívjuk a ReactDOM.render függvényt
    - Paraméterek: tartalom és konténer
    - A tartalmat a React.createElement állítja elő
    - A mi komponensünket használva
       - És átadva neki a paramétert

function Greeter( p ) {
return createElement( "h1", null, "Hello, ", p.name, "!" );
};
render( createElement( Greeter, { name: "Leo" } ), document.body );


JSX – babeljs

- Egyszerűsített szintaktika
- A fordító átalakítja a kódot az előző formára

```
function Greeter( p ) {
return <h1>Hello, { p.name }!</h1>;
}
render( <Greeter name="Leo" />, document.body );
```
```
function Greeter( p ) {
return createElement("h1", null, "Hello, ",p.name,"!");
};
render(createElement(Greeter, { name: "Leo" }), document.body);
```

TSX – TypeScript

- Típusos JSX
- Miért kéne plusz karaktereket beírni, ha nem csinál semmit?
    - A típusellenőrzés miatt fordítási időben előjönnek a hibák
    - Kódkiegészítés működik

```
function Greeter( p: { name: string } ) {
return <h1>Hello, { p.name }!</h1>;
}
```

React fa

- A létrehozott elemek nem HTML elemek
    - ReactElementtípusú objektumok
- Ugyanúgy hierarchiába vannak rendezve
    - Ez adja majd a HTML fát
- A render hívás végzi el a HTML-re konvertálást
    - Szinkronizációs folyamat, amit csak JS objektumokon végez el
       - Keresi a változásokat (tree reconciliation)
    - Az eredmény egy változás lista
       - Első futáskor az eredmény a teljes fa
       - Utána csak a különbség

```
interface ReactElement<P, T extends string |
JSXElementConstructor<any>> {
type: T;
props: P;
key: Key | null;
}
```

React fa

- A különbségből előáll a parancslista
    - Tényleges HTML változtató parancsok
    - Ezt végrehajtja
- Lehetne vizsgálni a tényleges HTML fát is
    - Lassú
- Következmény: közvetlenül a HTML-be beleírni nem lehet
    - Nem észleli
    - Nem írja vissza
    - De ha változik a React fában, akkor felülírja
    - Megbízhatatlan megoldás


Nem szokásos logika

- React eltér a legtöbb keretrendszertől
    - Nincs adatkötés
       - De van annak látszó konstrukció ({})
    - Nincs UI-t beállító függvény
    - Nincs nézeti sablon
       - De van annak látszó JSX/TSX szintaktika
- Így működik
    - Minden változásra újra hívja a függvényt
    - Nulláról újra előáll a teljes logikai fa (React fa)
    - Újra lefut a fa szinkronizáció
    - Meglepő módon az egész folyamat gyors


##### props

Szülő -> gyerek adatfolyam


Tulajdonságok (props)

- A komponens publikus interfésze
    - Elérhető kívülről (a szülő felől)
    - JSX/TSX támogatja a beállítást
       - Mintha egy sima HTML attribútum lenne
       - Az összes így beállított tulajdonság a props objektumban landol
       - Olyan tulajdonságot is be lehet állítani, ami nincs is
          - Bár TS szólni fog
    - Ha van típusa (TS), akkor beíráskor ellenőrzi

```
<Greeter name="Leo" />
```

Tulajdonságok átadása

- Nem változtathatjuk belülről – paraméterként viselkedik
- Minden rajzoláskor újra megkapjuk a szülő által adott tulajdonságokat
    - Az előző rajzoláskori tulajdonságok elvesznek
    - Nem alkalmas állapot tárolására
- Ha nem sima szöveg ={}
    - Bármilyen JS típust át lehet adni
       - boolean, number, string, array, object, null, undefined
       - Másik komponenst is át lehet adni

```
<Greeter name={ true } />
```

Tulajdonságok átvétele

- Át lehet venni props-ként (osztály komponensnél csak ez van)
- Vagy object destructuring szintaktikával (ES6 óta)
- Gyakori bizonyos paraméterek kiszedése a props-ból

```
function Greeter( { name }: { name: string } ){
return <h1>Hello, { name }!</h1>
}
```
```
function Header({date, ...rest}: {date: Date, name: string}){
return <div>
<p>{date.toLocaleDateString()}</p>
<Greeter {...rest}/>
</div>
}
```

Opcionális tulajdonságok

- Bármit ki lehet hagyni (és be lehet tenni) a propsból/ba
    - Bár TS szól, ha kötelező
       - name?:string az opcionális TS-ben
- Ha nincs megadva, akkor undefined az értéke
    - A komponens sima kód, bármit beírhatunk az undefined kezelésére
       - Pl.: object destructuring-nél, vagy ??= operátor

function Header( { date = new Date(), name }: { date?: Date, name: string } ) {
// ...
}


Gyerekek

- A gyerekek a children tulajdonságban érkeznek meg
    - TS-ben lehet használni a ReactNode típust, ami bármi lehet, amit át lehet adni
       gyerekként (tömb, string, komponens, ...)

function Header({ name, children }: { name: string, children: ReactNode }) {
return <div>
<Greeter name={name} />
{children}
</div>
}


Adatkötésnek látszó szintaktika

- Kapcsos zárójelet lehet használni adat beillesztésére
    - Nem csak szöveget lehet így betenni
    - Kapcsos zárójelen kívül a sablon van, nem kód
- Csak kifejezést lehet megadni
    - if, for, ... nem működik, de van helyettük ?:, map, ...

```
function Greeter({name}: {name: string}){
return <h1>Hello, {name}!</h1>
}
```

##### Osztály komponensek

Az eredeti módszer


Osztály komponens

- Kezdetben csak ez volt, 2019-től van függvény komponens
- A függvény komponens bevezetése nagyot lendített a népszerűségen
- A függvény komponens logikailag az osztály komponens render függvénye

class GreeterC extends Component<{name: string}>{
render(){
return <h1>Hello, {this.props.name}!</h1>;
}
}


Osztály komponens

- Tényleges osztály (JS, vagy TS), ami Component-ből származik
    - Egységbe zárás
    - render függvény kötelező
    - Első típus paraméter a props típusa
    - Lehetnek belső változói

class GreeterC extends Component<{ name: string }> {
renderCount = 0 ;
render(){
this.renderCount++
return <h1>Hello, { this.props.name }!</h1>;
}
}


Osztály komponens előnyei/hátrányai

- OO mintát jobban követi, egyszerűbb megérteni (nekünk)
    - Bonyolult komponenseknél jobban látható, hogy mi történik
- Elvileg többet tud – pl. belső változók
    - Ritka az az eset, amikor szükség van erre
    - És akkor is meg lehet oldani máshogy
- Hosszabb kódot eredményez
    - Pár sorral több
- this probléma
    - Mindenhol arrow functiont kell használni, vagy bindolni


##### Életciklus


Komponens életciklusa


Életciklus kezelés

- Tipikus beavatkozási helyek, amikor a keretrendszer meghívja a
    komponensünket
       - constructor – létrehozáskor
       - render – a React fa előállító kódja
       - componentDidMount – első rajzolás után
       - componentDidUpdate –többi rajzolás után, ritkán használt
       - componentWillUnmount – eldobás előtt
- A függvény komponensnek nincs visszahívható függvénye
    - A render maga a függvény
    - A többit el lehet érni use... függvényekkel


```
Kliensoldali rendszerek
```
Életciklus kezelés

class Counter extends Component {
private timer: number; // belső változó
componentDidMount() // első render után
{
this.timer = setInterval( () => this.forceUpdate(), 1000 );
}
componentWillUnmount() // fából való kivétel előtt
{
clearInterval( this.timer );
}
render() // amikor frissíteni kell a komponenst
{
return <span>{ new Date().toLocaleTimeString() }</span>
}
}


##### Kompozíció

React megoldása


render

- A felület leírása kóddal történik
    - Hibrid megoldás, nem tisztán deklaratív
    - Különböző keretrendszerek különböző irányokban mennek
       - Pl. Flutter támogat imperatív és deklaratív megoldást is
- A kódba (render) szinte bármit beírhatunk
- A lényeg, hogy egy fát adjon vissza
    - Ami leírja a felületet
    - Továbbra sem kézzel hozzuk létre a HTML-t
- A teljes szinkronizációt a keretrendszer végzi


Egymásba ágyazás

- A komponensek egy fát alkotnak
    - Statikus gyerekek (fixen beírva)
    - Feltételes gyerekek (if, &&, ?:, ??)
    - Generált gyerekek (.map)
- Fából több lehet
    - Több konténerbe is tehetünk React fát
    - Egy alkalmazás pici része is lehet React-es
       - Vagy több része egymástól függetlenül
    - Nagyon sok ne legyen
       - Például generálunk egy 1000 cellából álló táblázatot és minden cella egy React fa...


Statikus és feltételes gyerekek

- Statikus elemek esetén nincs kód a renderben
- Feltételes esetben használhatunk
    - && operátor – JS-ben a második tagot adja vissza, ha az első tag igaz
       - Hamis esetben hamis értéket ad vissza, amit React úgy értékel, hogy nincs ott semmi
       - Null elemek: false, null, undefined – nem minden falsy érték null elem, pl. üres string, vagy 0
    - ?: operator– feltétel függően csak az egyik

function Greeter( { name, location, time }: { name: string, location?: string, time: string | Date } ) {
return <header>
<h1>Hello, { name }!</h1>
{ location && <span>Welcome to { location }!</span> }
{ typeof time === "string"? time : <time value={ time.toISOString() } /> }
</header>
}


Lista létrehozása

- Tömböt kell visszaadni
- Kell/javasolt key attribútum
    - Ez azonosítja az elemet
    - Innen tudja a React fa szinkronizáció
       - Melyik új elem
       - Melyik törölt
       - Melyik változott

```
return <ul>
{ ar.map( x => <li key={ x.id }><Dot { ...x } /></li> ) }
</ul>
```

Lista létrehozása – key

- A key egyedi kell legyen a tömbön belül
    - De nem globálisan
- Tipikusan a key egy ID az adatbázisból
- Ha nem tudunk jó key-t adni, akkor használjuk az indexet
    - Ez általában megoldja a problémát
    - Ha az elemeket átrendezzük, akkor lassú
- Új elem létrehozása, aminek még nincs ID-je
    - Adjuk neki olyat, ami amúgy nem lehetséges(pl. -1, vagy "boo")


Több gyökérelem

- A komponens több elemet is visszaadhat
    - Tömbként, vagy <Fragment> virtuális elemmel, vagy röviden <>
- Ez akkor fontos, ha egy wrapper HTML elem (pl. div) elrontaná a
    formázást/layoutot
       - Ha nem rontja el, akkor betehetünk gyökérnek egy div-et
       - Kerülendő – általában ne tegyünk felesleg plusz elemeket a HTML fába
- Tipikus példa a flexbox
    - Nem lehet plusz elemeket betenni, mert elromlik


Komponens gyerekei

- children tulajdonságban számos dolog lehet:
    - null, undefined, false, string, number, komponens, tömb
- Felhasználására vannak segédfüggvények
    - Children.map
    - Children.count
    - Children.toArray
    - ...
- Ritkán kell
    - Általában elég a {children} kód


##### Attribútumok


Feltételes attribútumok

- Ha feltétel függően akarunk betenni egy HTML attribútumot
    - true vagy false/undefined értéket adunk neki
       - Ez működik érték nélküli attribútumokra
          - Pl. disabled, required, stb.
    - Vagy használjuk a spread operátort

```
autoFocus={ this.props.autofocus }
```
```
let attrs: HTMLAttributes<HTMLInputElement> = {};
if ( condition )
attrs.disabled = true;
```
```
<input { ...attrs } />
```

class, for, classList

- Az egyes attribútumok elnevezése a JS szintaktikát követi
    - Nem class=“...”, hanem className="„
    - Nem for=“...”, hanemhtmlFor=“...”
    - (preact-ben nincs ez a megkötés, ott lehet class-t használni)
- Picit zavaros, mert úgy tűnik, mintha HTML-t írnánk (JSX, TSX miatt)
    - De ez átfordul kódra, ahol a class és for kulcsszavak
- Nincs classList
    - De amúgy is kódból állítjuk elő a class listát
       - Van segédkönyvtár, ha bonyolult: classcat, classnames, ...


##### Köszönöm a figyelmet!


##### Kliensoldali rendszerek

```
React állapot- és eseménykezelés
```

##### Hooks

Osztály helyett függvény


Függvény komponens

- Nem kell osztályt írni
    - Sok fejlesztő nem szereti az OOP-t (felesleges komplexitás)
    - Kevesebb kód: tömörebb, jobban olvasható
- Függvény komponens nem tud többet az osztálynál
    - Igazából annak a renderfüggvénye
- Máshogyan van megoldva (hook-okkal)
    - Állapot (useState)
    - Komplex állapot (useReducer)
    - Életciklus kezelés (useEffect)
    - Belső változó (useRef, később)


##### Állapot

State


Állapot (state)

- Belső állapot
    - Ez sok komponensnek nem lesz – állapotmentes
- Megmarad az értéke rajzolások között
    - Ezért alkalmas állapot kezelésre
- Inicializálni kell konstruktor időben, ha osztály komponens
    state= {name: ""};
- Típusa, amit beállítunk kezdő értéknek


Állapot osztályban

- Állapot kezdeti értéke {c: 0 }, típusa {c: number}
- setState állítja
    - Ez egy rajzolást is kivált
    - Máshogyan nem lehet állítani az állapotot

class Counter extends Component<{}, { c: number }>{
state = { c: 0 };
inc() { this.setState( { c: this.state.c + 1 } ); }
render() { return <p>Counter: { this.state.c }</p>; }
}


Aszinkron setState

- setState aszinkron
    - Nem akkor állítja be, amikor meghívjuk
    - Ez optimalizáció miatt van
       - Előbb végigmegy a teljes fán, és csak a végén állít be mindent
    - Számunkra ez nem tűnik fel
       - Kivétel, ha
          - Az állapot előző értékét felhasználjuk az új érték állításához, és
          - Többször is állítjuk egy render alatt

inc() {
this.setState( { c: this.state.c + 1 } ); // nem mindig lesz jó
}


Aszinkron állapot

- Az aszinkron állapot állítás problémára van megoldás
    - setState tud kezelni függvényt is
- Csak akkor kell használni, ha az aszinkron működés problémás lehet
    - Nem gyakori

```
inc() {
this.setState( state => { c: state.c + 1 } );
}
```

Állapot kezelés (state) – merge

- Állapot állításkor az egyes állapotok külön állíthatók
- A kód csak az a állapotot állítja át
    - b és c marad 2 és 3
- Csak a felső szintű állapotokra vonatkozik – shallow

```
state = { a: 1 , b: 2 , c: 3 };
inc() { this.setState( { a: 10 } ); }
```

Függvény komponens állapota

- Függvény komponensnek useState adja a hozzáférést az állapothoz

function DateInput( { defaultDate, ...rest }: { defaultDate?: Date, name: string } )
{
let [ date, setDate ] = useState( defaultDate ?? new Date );
return <div>
<p>{ date.toLocaleDateString() }</p>
/*<input type="date" />*/
</div>
}


useState

- A useState kéri az állapot alapértékét
- Majd két elemű tömböt ad vissza
    - Destructuring veszi ketté
- Az első visszaadott érték az állapot jelenlegi értéke
    - Első hívásra az alapérték, amit most adtunk át
- A második a beállítására szolgáló függvény
    - Meghívva a komponens újra hívódik, de már az új értéke lesz az állapotban
    - Tipikusan eseménykezelő függvényben hívjuk meg

```
let [ date, setDate ] = useState( defaultDate ?? new Date );
```

useState belső működése

- A háttérben van egy osztály komponens szerűség, ami
    - Tárolja az állapotot
    - A render függvénye a függvény komponens
- A useState sorrendje adja meg, hogy melyik állapotra van szükség
    - A háttér osztályban a state egy tömb
    - Minden renderben nullára áll a state index, ami egy belső változó
    - Minden useState kiolvassa azt az állapotot és növeli a state indexet


useState problémák

- Előbbi működés miatt a useState hívások
    - Nem lehetnek feltételesek
       - Mindenképpen meg kell hívni, nem lehet if-ben
    - Nem változhat a sorrendjük
       - Mert a sorrend a „neve” az állapotnak
- Ennek következménye, hogy a useState hívások mindig
    - A függvény elején vannak
    - Mindenféle vezérlési szerkezet nélkül (nincs if, for, ... körülöttük/előttük)
- Elvileg lehetne az utolsót lehagyni, de React ellenőrzi ezt, mert hibára utal


##### Felhasználói bemenet


Esemény kezelés

- HTML elemek eseményeire feliratkozhatunk
    - Az események neve on<HTML esemény neve Pascal Case>
    - Minden esemény elérhető (több száz)

function Counter()
{
let [ count, setCount ] = useState( 0 );
return <div>
<p>Counter: { count }</p>
<button type="button" onClick={ () => setCount( count + 1 ) }>Inc</button>
</div>
}


input és társai

- Felhasználó bemenet kiolvasása
    - Gombnyomásra (pl. elküld gomb)
    - Változásra, például validáláshoz
- Típusok
    - <input type=“text”> és társai: textbox
    - <input type=“file”>: fájlválasztó
    - <textarea>: multiline
    - <select>: combobox
- Nem ide tartozik
    - <input type=“button”>, <input type=“checkbox”>, ...


state-ben tárolt állapot

- Minden változásra eltároljuk, hogy mi van beírva
    - Az onChange nem lenne jó, mert az csak fókusz vesztésre jön
- setState hívás helyett lehet validálni, stb.
- setState-re újra hívódik a komponens, de az input értéke már azonos a text
    állapottal, így nem történik semmi

function TextInput(){
let [ text, setText ] = useState( "" );
return <input value={ text } onInput={ e => setText( e.currentTarget.value ) } />
}


DOM-ban tárolt állapot

- Elsődleges állapot a DOM-ban van
    - El sem tároljuk a state-ben – felesleges
- Amikor szükségünk van rá, kiolvassuk
- Ehhez kell egy referencia
    - Nem triviális, mert a generált objektum elérhetetlen
    - Tudunk referenciát adni objektumokra(ref)


DOM-ban tárolt állapot

- useRef
- Első renderkor null az inputRef.current
    - Másodikra/eseményre már be van állítva, és lehet használni

```
function TextInputDOM(){
let inputRef = useRef<HTMLInputElement>( null );
return <input ref={ inputRef } />
}
```

Hol legyen az állapot?

- <input type=“file”> esetén DOM lehet csak
    - Nem lehet állítani a value-ját
    - De nem is kell referencia rá, mert eseményre megkapjuk a fájl listát
- Kezdeti értéket mindkettő támogatja
    - value a state esetben
    - defaultValue a DOM esetben
    - Azért van különbség, mert a value beállítására a vezérlő írhatatlan lesz a felhasználó
       számára
          - onChange hívódik így is, ezért működik
          - null-t adva mégis írható lesz
- State-ben tároljuk, ha lehet
    - Így tudunk segíteni a felhasználónak gépelés közben, vagy validálni


Típusok

- Mit hogyan kell használni
- onChange mindegyiknek van
- onInput minden inputnak van
    - Itt onChange csak fókusz vesztésre hívódik

```
Típus Érték Érték a callbackben
<input type="text" /> value="string" e.currentTarget.value
<input type="checkbox" /> checked={boolean} e.currentTarget.checked
<input type="radio" /> checked={boolean} e.currentTarget.checked
<textarea /> value="string" e.currentTarget.value
<select /> value="option value" e.currentTarget.value
```

Állapot alapértékkel props-ban

- Use case
    - TextInput-nak van alapértéke props-ban
    - Kéne tudni beírni is

function TextInputFull( { defaultText, onChange }: { defaultText?: string, onChange?: (
text: string ) => void } ){
let [ text, setText ] = useState( defaultText ?? "" );
return <input value={ text } onInput={ e =>
{
setText( e.currentTarget.value );
onChange?.( e.currentTarget.value );
} } />
}


##### Komplex állapot

useReducer hook


Komplex állapot kezelése

- Lehetséges a komponensben, vagy kiszervezhető
- Akkor kell kiszervezni, ha
    - Segít dekompozícióban, így a komponens kódja sokkal rövidebb és átláthatóbb lesz,
       vagy
    - Több helyen felhasználható az állapotot állító komplex kód
- Ha kiszervezés mellett döntünk
    - useReducer hook
    - Redux könyvtár – már ritkábban használt induló fejlesztéseknél


reducer

- Szükség van egy függvényre, ami állítja a komplex állapotot
    - Kapja a régi állapotot (state), és a változtató adatot (action)

function reducerPerson( state: { age: number }, action: { type: "age", age: number } | {
type: "adult" } )
{
switch ( action.type )
{
case "age": return { age: action.age };
case "adult": return { age: state.age < 18? 18 : state.age };
default: throw Error( "Unknown action" );
}
}


useReducer

- A reducerPerson beüzemelése, kezdő állapottal

function PersonForm()
{
let [ state, dispatch ] = useReducer( reducerPerson, { age: 10 } );
return <div>
<input value={ state.age.toString() } onChange={ e =>
dispatch( { type: "age", age: e.currentTarget.valueAsNumber } ) } />
<button onClick={ () => dispatch( { type: "adult" } ) } />
</div>
}


useState, vagy useReducer

- Valójában a useState belül egy useReducer-t hív

function reducerUseState<T>( state: T, action: T ){
return action;
}
function useMyState<T>( defaultValue: T ){
return useReducer( reducerUseState<T>, defaultValue );
}
function PersonAge(){
let [ age, setAge ] = useMyState( 10 );
return <input value={ age.toString() } onChange={ e => setAge(
e.currentTarget.valueAsNumber ) } />
}


##### Életciklus kezelés

useEffect hook


Életciklus kezelés

- Osztálynak voltak életciklus
    függvényei
       - Fel tudott iratkozni külső
          eseményekre
- useEffect az életciklus kezelő
    - Függvényt adunk át
    - Meghívja minden rajzolás után
    - Ha visszaadunk egy függvényt,
       akkor azt meghívja a
       componentWillUnmount
       idejében


Életciklus kezelés

class Time extends Component{
private timer: number;
componentDidMount(){
this.timer = setInterval( () => this.forceUpdate(), 1000 );
}
componentWillUnmount(){
clearInterval( this.timer );
}
render(){
return <span>{ new Date().toLocaleTimeString() }</span>
}
}


Életciklus kezelés

- Át kell álljunk state-re, csak az vált ki rajzolást
- useEffect 2. paramétere a függőség
    - Mikor futtassa a megadott függvényt – itt soha

function Time(){
let [ time, setTime ] = useState( "" );
useEffect( () =>
{
let timer = setInterval( () => setTime( new Date().toLocaleTimeString() ), 1000 );
return () => clearInterval( timer );
}, [] );
return <span>{ time }</span>
}


useEffect mikor futtat minket?

- useEffect 2. paramétere a függőség
    - Ha üres tömb, akkor csak az első render után hívja meg egyszer
       - Ez volt az osztály komponensnél a componentDidMount
       - Tipikus használat a külső eseményekre feliratkozáshoz
    - Itt, ha delay megváltozik (props-ban van), akkor újra hívja a függvényünket
    - Ha undefined-ot adunk meg üres tömb helyett, akkor minden render után újrahívja
       - Ez volt az osztály komponensnél a componentDidUpdate

useEffect( () =>{ /*...*/ }, [delay] );


useEffect takarító kód

- A függvényünkből visszaadhatunk egy másik függvényt
    - Nem kötelező bármit visszaadni
- Ha visszaadunk egy függvényt, akkor az meghívódik takarító kódként
    - Amikor a komponens törlődik (componentWillUnmount)
    - Amikor újra kell hívni a függvényt
       - Mert például megváltozott a függőség

useEffect( () =>{
/*...*/
return () => clearInterval( timer );
}, [delay] );


useEffect párban hív

- useEffect mindig párban hívja a függvényt és takarító kódot
    - Ha van takarító kód (visszaadtunk valamit)
- Lehetséges állapotok useEffect-nél
    - Egyik sem hívódott meg még – első render után fog először meghívódni
    - Csak a függvényünk hívódott meg, de a takarító kód még nem
       - Ez a normál állapota egy aktív komponensnek
    - Meghívódott a takarító kód, és rá egyből meghívódott a függvényünk
       - Amikor a függőség megváltozott
    - Mindkettő azonos mennyiségben hívódott meg, és nem jön új hívás
       - Amikor a komponens éppen megszűnik
- Render csak akkor jöhet, ha
    - Egyik sem hívódott még meg – első render
    - A függvényünk pont eggyel többször hívódott meg, mint a takarító kód


##### Kérdések?


##### Kliensoldali rendszerek

```
Reactkommunikáció a fában
```

##### Szétosztott állapot

Részfa, közös, globális állapotok


Lifting state

- Ha adott állapotot több komponensben használunk
    - Tegyük az állapotot a közös, legközelebbi szülőbe
    - props formájában küldjük le a gyerekeknek
    - onChangeformájában küldjük fel a szülőnek, ha változik
- Jól működik, ha az adott állapot lokális és csak pár komponenst érint
- Nem szép, ha
    - Szétterjedt, a UI-on mindenfelé szükség van rá, vagy
    - Nagyon mélyre kell küldeni, olyan komponenseken keresztül, amiknek ehhez semmi
       köze


Lifting state példa

function Parent(){
let [ text, setText ] = useState( "" );
return <div>
<ChildA text={ text } onChange={ setText } />
<ChildB text={ text } />
</div>
}
function ChildA( { text, onChange }: { text: string, onChange: ( text: string ) => void } ){
return <input value={ text } onInput={ e => onChange( e.currentTarget.value ) } />
}
function ChildB( { text }: { text: string } ){
return <span>{ text }</span>
}


##### Globális állapot

Vagy külső forrásból jövő adat


Globális állapot

- Ki lehet tenni globális változóba állapotot
    - Ha konstans, akkor kész is vagyunk
- Gondoskodni kell a változás értesítésről
    - Ha beállítják, akkor minden érintett komponenst újra kell renderelni
    - Nyilván kell tartani egy feliratkozási listát
    - Minden komponensnek fel/le kell iratkozni, amelyik használja
- Nem számít, hogy mi okozza a változást
    - Lehet szinkron (komponens írja)
    - Vagy aszinkron (hálózati adat, timer, ...)


Globális/külső esemény

- Feliratkozási lista szükséges, ha van
    - Globális állapot
    - Aszinkron hívások
       - Hálózati kommunikáció
       - Külső könyvtárak
    - Timer
- DOM üzemeltet feliratkozási listát HTML elemenként
    - addEventListener / removeEventListener
    - Mindegyik HTML elemnek sok listája van (Event Dictionary pattern)
- Egyéb API-k is üzemeltetnek ilyet
    - Pl. Websocket, XHR


useSyncExternalStore hook

- Doksi
- Szükségünk van egy olyan osztályra, aminek van
    - Feliratkozó (subscribe) függvénye, ami visszaadja a leiratkozó függvényt
    - Ki lehet olvasni az értéket (getSnapshot)
    - Üzemeltet egy callback listát

import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp(){
const todos = useSyncExternalStore( todosStore.subscribe, todosStore.getSnapshot );
// ...
}


GlobalStore példa

- Üzemeltet egy callback listát
- Tudja az értéket
    - És egyben kezeli a kezdő értéket
- Ki lehet olvasni az értéket (getValue)

class GlobalStore<T>
{
#listeners: ( () => void )[] = [];
#value: T;
constructor( initialValue: T ) { this.#value = initialValue; }
getValue() { return this.#value; }
}


GlobalStore példa

- Van feliratkozó függvénye
    - Ami visszaadja a leiratkozó függvényt
- Ez a megoldás itt immutable tervezési mintát implementál
    - A listát lecseréljük, és nem hozzáadunk
    - Így végig lehet iterálni rajta később gond nélkül, mert nem tud megváltozni

subscribe( callback: () => void )
{
this.#listeners = [ ...this.#listeners, callback ];
return () => this.#listeners = this.#listeners.filter( x => x !== callback );
}


GlobalStore példa

- Be lehet állítani az értékét
    - Ami kiváltja a változás értesítést
    - Object.is (React ajánlás) egyenlőséget vizsgál
       - Nagyon hasonló a === operátorhoz

setValue( v: T ){
if ( !Object.is( this.#value, v ) ){
this.#value = v;
for ( let listener of this.#listeners )
listener();
}
}


GlobalStore felhasználása

- Globálisan létrehozzuk
- Komponensben használjuk
    - (A useSyncExternalStorebelül useEffect-et és useState-et használ)

const globalProp = new GlobalStore( 12 );

export function Comp()
{
let value = useSyncExternalStore( globalProp.subscribe, globalProp.getValue );
return <span>{ value }</span>
}


##### Context

Állapot öröklés a fában


Context

- Helyi és globális állapoton kívül van még egy use-case
    - Context
- Ez olyan állapot, ami
    - Mindenhol jelen van – globális
    - Mindenhol más lehet az értéke – lokális
    - Öröklődik a React fában
- Design pattern: Property Inheritance, tulajdonság öröklődés
- Minden UI keretrendszerben van valamilyen formában
    - Például font mindenhol, WPF Dependency Property, ...
- Use case: leggyakrabban globális állapot helyett használják, így mindenhol
    azonos az értéke


Context használata

- Létrehozása default értékkel
- Beállítása részfára
- Kiolvasása
    - Ha megváltozik, akkor render
       hívódik

```
const ThemeContext = createContext( null );
```
```
<ThemeContext.Provider value={ theme }>
...
</ThemeContext.Provider>
```
```
const theme = useContext( ThemeContext );
```

Context, mint írható és felülírható állapot

- Context tud bármilyen adatot tárolni
    - Objektumot és függvényt is
- Létrehozhatunk egy állapotot, ami írható
    - Tároljuk el az értéket és a változtató függvényt (value, onChange)
    - Mintha változtatható állapot lenne, useState szerű
    - Azonban ez nem egy sima állapot, hanem felülírható a Provider-rel a részfára, ami
       elrejti az eredeti állapotot

const ThemeContext = createContext<[ string, ( theme: string ) => void ]>( [ "dark", () => { } ] );
let [ theme, setTheme ] = useContext( ThemeContext );


##### useRef

Függvénykomponensek tagváltozója


useRef

- A megoldás függvénykomponensek felokosítására
- Visszaad egy objektumot, aminek egyetlen tulajdonsága van: current
    - Írható/olvasható (mint tagváltozó)
    - Minden renderben ugyanazt az objektumot adja vissza
       - Stable identity
    - Írása nem okoz rendert
- Ez biztosítja a függvény komponensek egyenlőségét az osztály
    komponensekhez
       - E nélkül néha osztály komponenseket kéne használjunk
          - Vagy trükközni állapottal, hogy ne váltson ki rendert
       - Számos feladat nem jól oldható meg tagváltozó nélkül
          - Cache, számított értékek, animációk requestAnimationFrame-mel, ...


useRef felhasználása

- HTML elemre referencia megszerzése
    - ref attribútum egy objektumot vár, aminek van current tulajdonsága
- Tagváltozó létrehozása
    - Például generált/kalkulált (cache) adatok tárolása

```
let inputRef = useRef<HTMLInputElement>( null );
return <input ref={ inputRef } />
```
```
let that = useRef( { text: "", encodedText: "" } );
if ( that.current.text !== text ){
that.current.text = text;
that.current.encodedText = ...
}
```

useRef és tisztaság (pure)

- Ha van belső változónk (useRef)
    - Ha render során nem használjuk fel (nem írjuk/nem olvassuk)
       - Akkor a komponens tiszta
       - Ez az ajánlás
       - ref attribútum például ilyen, mert mi nem írjuk és nem olvassuk
    - Ha render során csak olvassuk
       - Még mindig teljesül az „azonos bemenet azonos kimenet” követelmény
    - Ha render során írjuk és olvassuk is
       - Nekünk kell gondoskodni a komponens helyes működéséről, React nem segít többé
       - Ha ilyen kódra van szükség, érdemes újra átgondolni, hátha elkerülhető
       - Példa: kalkulált segédváltozó optimalizálási céllal


Funkcionális programozás

- A modern React célja funkcionális programozás szerű komponensek
    létrehozása (pure function)
       - Nem változtat meg adatot, amit nem ő hozott létre
       - Azonos bemenetre azonos kimenetet ad
          - Ez utóbbit ellenőrzi is úgy, hogy kétszer hív render-t (debug módban)
- Motiváció
    - Funkcionális programozásban bizonyos típusú hibák nem léteznek
    - Komplexitás csökkentése: egyre nagyobbak a web alapú alkalmazások


##### Hooks


Hol van az állapota egy komponensnek?

- Írjunk egy saját hook-ot, ami használ useState-et
- Kinek az állapotát kezeljük itt?
    - Amelyik komponens meghívja
    - Működik, mert a useState sorrend alapú

```
function useIncValue( defaultValue: number ){
let [ value, setValue ] = useState( defaultValue );
return [ value + 1 , setValue ];
}
```

Hasonló az OOP paradigmához

- Ami ide vonatkozik
    - Egységbe zárás
       - Elsőre úgy tűnhet, hogy épp az ellenkezője történik
       - De a hook megvalósítja az elvet: kezeli és védi az adatot
    - Absztrakció: működik, elrejti a belső működést, magasabb szintű felületet biztosít
    - Életciklus kezelés: működik, az adat együtt él/hal a komponenssel
- De minden másban eltér, meg kell tanulni React-ben gondolkodni


Logika kiszervezése

- React-ben hook-ok segítségével valósítunk meg logika kiszervezést
- A mindekori cél
    - Kód újrafelhasználás
    - Dekompozíció: komplex feladat egyszerűbb részekre bontása
- Nagyon eltér az OOP megoldásoktól
    - Csak funkcionális programozás szerű környezetben működik
       - Mert számít a sorrend és a tisztaság


Tipikus use-case-ek

- rendert kérni (reducer általában 2 paraméteres, de itt 1 is elég)
- Adott időnként rendert kérni

```
function reducerForceUpdate( x: number ) { return x + 1 ; }
function useForceUpdate(){
return useReducer( reducerForceUpdate, 0 )[ 1 ];
}
```
```
function useInterval( ms: number ){
let forceUpdate = useForceUpdate();
useEffect( () => {
let timer = setInterval( forceUpdate, ms );
return () => clearInterval( timer );
}, [] )
}
```

function useResizeObserver<T extends Element>( htmlElRef: MutableRef<T>, defWidth?: number,
defHeight?: number ){
const forceUpdate = useForceUpdate(); // renderhez kell
const obRef = useRef<ResizeObserver>(); // valahol el kell tárolni
const ob = obRef.current ??= new ResizeObserver( forceUpdate ); // létrehozzuk, ha még nincs
useEffect( () => {
let el = htmlElRef.current; // capture
if ( el ) {
ob.observe( el ); // feliratkozunk
return () => ob.unobserve( el! ); // leiratkozunk
}
}, [ htmlElRef.current ] ); // újra fel- és leiratkozunk, ha változik
return [ htmlElRef.current?.clientWidth ?? defWidth, htmlElRef.current?.clientHeight ?? defHeight ];
}

Tipikus use-case-ek: ResizeObserver


##### async-await és React


Promise, async-await, React

- React nem támogatja külön az aszinkron programozást
    - De nem is tesz ellene
- Szabadon használhatjuk, amíg nem kavarunk be React működésébe
    - render szinkron
    - Minden hook szinkron
    - useEffect nem fogad el async függvényt
    - Viszont mi meghívhatunk async függvényt, ha nem használunk await-et
    - Használhatunk await-et például egy eseménykezelőben
       - Meg kell jelölni async-nak a függvényt
       - Nem adhatunk vissza semmit, mert Promise-ra nem vár sem React, sem DOM


Hálózati erőforrás letöltése 1

- Első, nem tökéletes verzió
    - IIFE használatával
       - (IIFE = ImmediatelyInvokedFunction
          Expression)
- Ha a komponens előbb szűnik
    meg, mint az adat megjönne,
    akkor kapunk figyelmeztetést (és
    nincs hibakezelés sem)

```
function useJsonResource( uri: string ){
let [ json, setJson ] = useState<string>();
useEffect( () => {
( async function (){
let x = await fetch( uri );
let json = await x.json();
setJson( json );
} )();
}, [ uri ] );
return json;
}
```

Hálózati erőforrás letöltése 2

- Figyelme veszi, hogy a
    komponens még él-e
       - Reactben nincs módszer arra,
          hogy lekérdezzük, hogy a
          komponensünk mounted-e –
          nekünk kell nyilvántartani

```
function useJsonResource( uri: string ){
let [ json, setJson ] = useState<string>();
useEffect( () => {
let mounted = true;
( async function (){
let x = await fetch( uri );
let json = await x.json();
if ( mounted )
setJson( json );
} )();
return () => mounted = false;
}, [ uri ] );
return json;
}
```

Mindenhol hook

- Ahogy az alkalmazás nő
    - A komponensek száma emelkedik
    - Egyre több helyen lesz rövidebb-hosszabb logika
- Ha látunk lehetőséget hook készítésére
    - Kód újrafelhasználás miatt
    - Dekompozíció miatt
- Tegyük meg
    - Akkor is, ha csak egy helyen lehet használni
    - Nem lassít semmit
       - A hook maga csak egy függvény
       - React keretrendszernek/kódnak nincs köze hozzá


##### forwardRef


forwardRef

- Alapban a ref attribútum nem használható komponenseken
    - Csak HTML elemeken
- Így nem tudunk hozzáférni a gyerek komponens dolgaihoz
    - A props rendelkezésre áll
    - De például a gyerekben létrehozott inputhoz nem tudunk hozzáférni
- Van megoldás: forwardRef
    - Létrehoz egy ref attribútumot a komponensre
    - A gyerek komponensen belül kell rátenni HTML elemre
       - Így lehet kipublikálni belső HTML elemet


forwardRef példa

- A forwardRef hozza létre a komponenst
    - A props-on kívül van egy új paraméter: a kívülről jövő ref
- Felhasználni a szülőben

```
const ChildA = forwardRef<HTMLInputElement>( ( props, inputRef ) =>{
return <label>
<input ref={ inputRef } />
</label>
} );
```
```
function Parent(){
let childRef = useRef<HTMLInputElement>( null );
return <div>
<ChildA ref={ childRef } />
</div>
}
```

Gyerekekhez és szülőhöz hozzáférés

- A forwardRef-en kívül nem férünk hozzá a gyerekhez
    - Nem érjük el az állapotát, belső változóit, ...
    - Csak létre tudjuk hozni, és megszűntetni
       - Azzal, hogy betesszük/kivesszük a renderben
- A szülőhöz sem tudunk hozzáférni
    - Még csak életciklus kezelés ügyben sem
- A komponens magát nem tudja megszűntetni
    - De visszaadhat üres React fát (return null)
- A lehetőségeink erősen korlátozottak
    - Meglepő módon nem gond (és debug eszközök vannak)


##### Komponens átadása

Gyerek, vagy paraméter


Komponens paraméterként

- Általában gyerekként adunk át komponenst
    - Itt láttuk, hogy ez ugyan jól működik, de nem tudunk módosítani
    - Ez az esetek 90+%-a
- Át lehet adni komponenst paraméterként is, mint
    - React elem
    - Komponens
    - Függvény


Use-case: MessageBox

- Megadható
    - Az ikon része, alapban info
    - A gombok, alapban ok
    - Gyerekekként pedig a tartalma
- Típusok attól függenek, hogy melyik megoldást választjuk

function MessageBox( props: { icon?, buttons?, children?} ){
return <div class="MessageBox">
...
</div>
}


Megoldás 1: React elem paraméter

- Simán át lehet adni
- És simán fel lehet
    használni, default
    értéket adni

```
function Parent(){
return <dialog>
<MessageBox icon={ <Icon icon="warning" /> } />
</dialog>
}
```
```
function MessageBox( props: { icon?, buttons?, children?} ){
return <div class="MessageBox">
{ props.icon ?? <Icon icon="info" /> }
...
</div>
}
```

Megoldás 2: Komponens paraméter

- Átadás
    - Icon egy komponens
       - a kódja, nem
       példánya
    - props-ot külön kell
       átadni
- Felhasználás default
    értékkel

```
function Parent(){
return <dialog>
<MessageBox icon={ Icon } iconProps={ { icon: "warning" } } />
</dialog>
}
```
```
function MessageBox( props: { icon?, iconProps?, buttons?, children?} ){
let IconComponent = props.icon ?? Icon;
let iconProps = props.iconProps ?? { icon: "info" };
return <div class="MessageBox">
<IconComponent { ...iconProps } />
...
</div>
}
```

Megoldás 3: Függvény paraméter

- Átadás
- Felhasználás
    default értekkel

```
function Parent(){
return <dialog>
<MessageBox icon={ () => <Icon icon="warning" /> } />
</dialog>
}
```
```
function MessageBox( props: { icon?, buttons?, children?} ){
return <div class="MessageBox">
{ props.icon?.() ?? <Icon icon="ok" /> }
...
</div>
}
```

Kihívások

- Ha React elemet adunk át (megoldás 1)
    - Nehéz változtatni props-on, ha szükséges lenne
       - cloneElement-et kell hívni
- Ha komponenst adunk át (megoldás 2)
    - Át kell adni külön a props-ot, vagy
    - Olyan komponens kell, aminek nincs paramétere, vagy
    - Létre kell hozni minden esetre egy komponenst
- Ha függvényt adunk át (megoldás 3)
    - Mindent tudhat, de akkor erre készülni kell
    - Legköltségesebb – nem vészes ez sem
- Mindhárom megoldást használják


##### Köszönöm a figyelmet!


##### Kliensoldali rendszerek

```
React render
```

##### Render sebesség

PureComponent, memo


Sebesség

- Alapvetően a render gyors
    - Ha a fa mérete korlátos
- A leggyorsabb UI a böngészőben van
    - Nagyságrenddel gyorsabb, mint például WPF
    - Ez főleg a hosszú évek optimalizációja miatt van így
- A kettő együtt (gyors React render, gyors HTML render)
    - Megold mindent... vagy mégsem


Render vs HTML sebesség

- Meg kell különböztetni a
    - React rendersebességét a
    - HTML sebességtől
- Ha React render lassú, akkor
    - Megakasztja az alkalmazást, laggel
- Ha a HTML lassú, akkor
    - Kicsi az FPS
    - Minden működik, de lassú a scroll, az animáció, ...
- Ha a hálózat lassú... – ezzel nem foglalkozunk


HTML sebesség

- A HTML sebessége nagyban függ a HTML fa méretétől
- De más tételek is jelentősek lehetnek
    - CSS animáció
    - SVG mennyisége
    - Képek nagysága
    - Periodikusan futó JS kód, ami animál, rajzol, ...
- Jelenleg 10e elemig nincs gond
    - Ha egyszerű szerkezetről van szó, és CSS is minimális, akkor 1M is működik
- Ezzel nem foglalkozunk, mert web alapú alkalmazásra elég


React render sebesség

- A render sebessége nagyban függ a React fa méretétől
    - Ami összefügg a HTML fa méretével, de nem azonos
- Itt sokkal kisebb tűréshatárral dolgozhatunk
    - 10e elem több másodperc is lehet
    - 1000 alatt kell maradni (egy renderben)
- Ha nagyobb fára lenne szükség, ami gyakori, akkor
    - Nem látszó részek kihagyása
       - Virtualizáció
    - PureComponent, memo


Nem látszó részek kihagyása, virtualizáció

- Gyakori esete a virtualizációnak az óriási táblázat
    - Csak azokat a sorokat kell betenni a React fába, ami látszik
    - Vagy mindjárt látszani fog görgetés esetén
    - Meg lehet jeleníteni 1M soros táblázatokat így
       - 1M felett már gond van minden mással is
          - Maga a JS kód is lassul 10M ciklusoknál
          - Hálózatról nehéz letölteni ennyi adatot
          - Szerver nehezen tudja előállítani az adatot
          - ...
- Általános esetben
    - Ami nem látszik, az ne display: nonelegyen, hanem bent se legyen a fában
       (TabControl, más oldalak, ...)


Mikor fut render?

- Egy komponens rendere lefut, ha
    - A szülő rendere lefut
    - state, vagy reducerállítás történik, ide tartozik a forceUpdate
- Ebből adódik, hogy
    - Alapvetően csak úgy magától nem fut render
    - Ha a valahol magasan a fában lefut a render, akkor az egész részfára is lefut
       - Akkor is, ha amúgy nem változott semmi
- Van eszköz a felesleges render megakadályozására
    - memo(függvénykomponens)
    - PureComponent(osztálykomponens)


memo

- A két okból (szülő és state) az egyiket (szülő) ki lehet iktatni
    - Ha a szülő renderel, de a komponensünknek azonos props-ot ad, akkor itt meg is
       szakadhat a render, mert azonos bemenetre azonos kimenetet adunk (tiszta
       komponens)
- Burkoljuk a komponenst memo-val
    - Állapot állítás (és reducer) továbbra is hív rendert
    - Szülő rendercsak akkor fog tovább menni, ha változott a props
       - memo2. paramétere arePropsEqual, ami segítségével saját összehasonlító függvényt tudunk
          megadni, hogy az új propsazonos-e a régivel

```
const Child = memo( () => <div /> );
```

memo kihívások

- Sajnos a props gyakran változik, akkor is, ha nem kéne
    - Az onClick-ben átadott függvény mindig más, állandóan létrejön
       - A valóságban nem jön létre új kód, hanem csak a függvény objektum lesz új, tehát nagyon kevés
          memóriát eszik
- Nem elég használni a memo-t
    - Gondoskodni kell a szülőben az azonos props-ról
    - Ez nem triviális feladat
       - Lehet, hogy a szülő is kapja az egyik paramétert
    - Ez az egyik oka, hogy nem memo az alap
       - A másik ok, hogy van némi költsége, felesleges használata nem jó

```
<Child onClick={ () => { } } />
```

Stable identity - useCallback

- Hogyan lehet adott függvényt úgy létrehozni, hogy ne változzon az
    objektum?
       - A függvény így is létrejön újra és újra
       - Csak az első létrehozáskor tárolja el és mindig azt adja vissza
       - Az onClick nem változik soha (stable identity)

```
function Parent()
{
const onClick = useCallback( () => { }, [] );
return <dialog>
<Child onClick={ onClick } />
</dialog>
}
```

Stable identity – useCallback closure-nél

- Ha a függvény capture-öl adatokat (closure)
    - Újra létre kell hozni, ha azok megváltoznak (függőség lista)
    - Erre figyelni kell, nincs automatizmus, ami rámutat a closure hibákra

```
function Parent( { text } )
{
const onClick = useCallback( () => { console.log( text ) }, [ text ] );
return <dialog>
<Child onClick={ onClick } />
</dialog>
}
```

useMemo

- useMemo meghívja az átadott függvényt, ha megváltozott a függőségi lista
    - Factory design pattern: létrehozó függvényt adunk át, és nem közvetlenül az értéket
    - Mindig ugyanazt adja vissza, kivétel, ha megváltozott a függőségi lista
- Felhasználása
    - Cache, számított érték
    - Stable identity
       - Csak akkor működik, ha a bejövő items stabil,
       ami terhet ró a szülő szülőjére
- Nincs köze a memo-hoz
    - De azt is segíti stable identity miatt
- useCallback ezzel van implementálva

```
function Parent( { items }: { items: string[] } )
{
let filteredItems = useMemo(
() => items.filter( x => x ), [ items ] );
return <dialog>
<Child items={ filteredItems } />
</dialog>
}
```

Szülő-gyerek együttműködés szükséges

- Csak akkor működik a memo a render elvágására, ha a szülő együttműködik a
    gyerekkel
       - Szülőben gondoskodni kell, hogy minden átadott props stable identity legyen
          - Ha a szülő is kapja az adatot, akkor ez nem triviális – potenciálisan megoldhatatlan
       - Gyerek legyen memo-ban
- Ha ezek adottak, akkor sikeres szétkapcsolást hozunk létre
    - A teljes részfa le van választva
    - A render többé nem megy át ezen a ponton automatikusan
       - A gyerek belső állapotának állítására továbbra is render fut


useRef is megoldás

- useRef objektumban mindent eltárolhatunk
    - Ez a megoldás a legrugalmasabb (és leghosszabb), mert
       - Mi tudjuk megírni az összehasonlító kódot
       - Ki tudjuk védeni azt is, ha a szülő szülője nem ad stabil listát
          - Össze tudjuk hasonlítani elemenként, ha szükséges

```
function Parent( { items }: { items: string[] } )
{
let r = useRef<{ filtered: string[], original: string[] }>();
if ( r.current?.original !== items )
r.current = { original: items, filtered: items.filter( x => x ) };
return <dialog>
<Child items={ r.current.filtered } />
</dialog>
}
```

Mikor használjunk memo-t?

- Összességében a memo-t nehéz jól használni
- Csak ott tegyünk bele energiát, ahol
    - Tudjuk, hogy költséges, ha továbbmegy a render
    - Mérések alapján látjuk, hogy sokszor fut a render
- Ez egy komplex alkalmazásban a komponensek maximum 10%-át érinti
    - De általában csak 1%-át
    - Ennél több helyen optimalizálni majdnem biztosan felesleges
- A useMemo és useRef ettől függetlenül is hasznos cache-elni
- (useMemo és useRef egymást tudják implementálni)


##### Egyebek


key attribútum

- React-ben a listák elemeit key attribútummal kell ellátni
    - Ez segít azonosítani az elemet, ha törlünk/beszúrunk/sorrendezzük a listát
    - Ha a keretrendszer kap egy olyan kulcsot a jelenlegi renderben, ami eddig nem volt,
       akkor az új elemnem számít, és létre kell hozni
    - Ha a keretrendszer talál olyan kulcsot, amit a jelenlegi render már nem tartalmaz, azt
       törölni kell
    - Ha megtalálja a kulcsot, de más komponens van mögötte, akkor bizonyos esetekben
       összezavarodik és az állapotot és ref-eket másnak adja át, teljesen összezavarva a UI-t
          - Ez az index kulcs esetén fordul elő tipikusan


key komponensre

- Nem csak listáknál lehet key-t használni
    - Bármilyen komponensre rá lehet tenni, akkor is, ha nincs listában
    - A szabály azonos:
       - Azonos kulcs -> azonos komponens
       - Más kulcs -> más komponens, így a régit törölni kell, és létre kell hozni egy újat
- Mivel a key változása újra létrehozza a komponenst, lehetővé válik, hogy egy
    bonyolult belső állapotú komponenst újraindítsunk (mint egy reset gomb)


createPortal

- A React fa nem feltétlen azonos a HTML fával
- A React fa adott elemét betehetjük teljesen máshova a DOM-ban (pl.
    document.body)
       - Tipikusan dialógus ablakra használjuk

```
function Parent()
{
return createPortal(
<MessageBox icon={ () => <Icon icon="warning" /> } />,
document.body
)
}
```

Dialógus ablakok

- Van <dialog> HTML elem, de nem teljesen implementált
    - Gond van a Z sorrenddel, nem megy minden fölé
- A createPortal megoldás, de nem teljes körű
    - Esetenként a dialógus ablak tovább kéne éljen, mint az azt létrehozó komponens
    - Ha megszűnik a komponens, amiben a createPortal van, akkor megszűnik a dialógus is
    - Ez sokszor pont jó, de nem mindig
- A teljes körű megoldás globális API (showDialog), ami függetlenül fut minden
    komponenstől
       - Nincs beépített támogatás, de könnyen meg lehet írni


requestAnimationFrame

- Játékok és animációk létrehozására van kitalálva
    - Bizonyos animációkat nem lehet CSS-ből megoldani
    - Például a kurzor és az értékek a diagrammon kövessék az egeret
- Ilyenkor bevetjük a requestAnimationFrame-et (RAF)
- Legjobb elkerülni a React és RAF összekötését, ha lehet
    - Tehát RAF-ra ne hívjunk rendert
    - Helyette közvetlenük módosítjuk a HTML elemeket
       - Olyan attribútumot ne, amit React is ír


requestAnimationFrame render

- Ha mégis össze kell kötni RAF-ot renderrel
    - React debounce megoldást használ renderre
       - Nem szinkron módon renderel, hanem visszaadja a vezérlést a környezetnek
       - Ez általában gyorsabb, mint RAF, de lehet lassabb is
       - Nincs garancia, hogy képesek leszünk 60 (120, 144, 480) FPS-sel render-t hívni
          - Valószínűleg nem
- Preferált megoldási sorrend animációra
    - CSS
    - RAF + közvetlen HTML manipuláció
    - RAF + render – ez nem biztosan működik


##### Köszönöm a figyelmet!


##### Kliensoldali rendszerek

```
Progressive Web Apps
```

Electron

- HTML+CSS+JS csomagolva
- Node.js futtatja
- Chrome motor renderel
- API-t biztosít a fájlrendszer és egyéb OS szolgáltatások eléréséhez
- Platform: Windows, Linux, macOS
- (PWA platform: Windows, Linux, macOS, iOS, Android)


##### Progressive Web Apps


PWA

- Web alapú alkalmazás
- App szerű (ez főleg UX kérdés)
    - Például nem görgethető az egész,
       nem linkel ki, méretezhető, ...
- Telepíthető
    - Indítható a bolt/web látogatása
       nélkül
    - Akár offline is működik –ha olyan
    - Böngésző UI nincs, normál ablakban
       indul, mobilon appként
          - OS integráció (opcionális)
             - Megosztás támogatás (forrás és cél)
             - Push notification
             - Protocol handlers
             - File handlers (desktop)
             - Custom title bar (desktop)
          - Telepíthető AppStore-ba és PlayStore-ba
             - Külső csomagoló eszköz segítségével


Telepíthető

- Minimum követelmény
    - HTTPS
       - Ez nem gond, amúgy is így kommunikálunk
    - Manifest fájl
       - Az alkalmazás paramétereit írja le
    - Service Worker
       - Offline működést oldja meg
- Opcionális: prompt esemény
    - beforeinstallprompt
    - Ha nem kezeljük, akkor a felhasználó automatikusan kapja a telepíthető felszólítást
       (iOS-en nem)


HTML

- HTML head
- manifest kötelező
- A többi csak iOS miatt kell

```
<meta name="theme-color" content="white" />
<meta name="apple-mobile-web-app-title" content="My Chat" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="white" />
<link rel="manifest" href="manifest.json" />
<link rel="apple-touch-icon" href="Images/Logo180w.png" />
```

manifest.json

{
"short_name": "My Chat",
"name": "My Chat – Group Chat",
"start_url": "index.html",
"display": "standalone",
"theme_color": "white",
"background_color": "white",
"icons": [
{
"src": "Images/Logo48.png",
"type": "image/png",
"sizes": "48x48"
}
]
}


manifest.json beállításai

- Telepítés után érvényesek csak
    - name: ez lesz az alkalmazás neve
    - start_url: ezt indítja el az OS
    - display: böngésző ablakban, vagy anélkül
    - theme_color: a böngésző ablakát átszínezi, ha van
    - background_color: betöltés közbeni szín
    - icons: a telepített ikon
       - Több méretben kell, mert az OS azt használja mindig ami a legjobban passzol
       - Például Windows taskbaron vs start menüben


Böngészőnként eltér

- Sajnos a manifest.json támogatása böngészőnként eltér
    - Valahol kitesz splash screen-t – itt kell nagy kép
    - Felhasználja a színeket, vagy nem
    - Stb.
- Szerencsére az unió működik
    - Mindent beállítunk minden módon – ez megy
- Bizonyos funkcionalitások nem mindenhol támogatottak
    - iOS lemaradásban, de például push notification már van 2023-tól
    - Címsor desktop OS-eken testre szabható


##### Service Worker


Service Worker

- Egy külső JS fájl
    - Nincs benne a csomagban
    - Mi írjuk meg
- Az alkalmazásunktól függetlenül fut
    - Akkor is futhat
       - Ha nem futtatjuk az alkalmazást
       - Ha a böngésző nincs elindítva
    - Háttér szolgáltatás (OS service) futtatja
- Feladata
    - Offline működés – cache
    - Push Notification kezelés


(Web Worker)

- Web Worker != Service Worker
    - Többszálúságot biztosít
    - Minden szál (worker) az adott alkalmazásban fut
       - Mint normális többszálú programokban
       - Életciklusuk azonos az appéval
    - Felülethez nem férhetnek hozzá
       - Az továbbra is csak a fő szálból érhető el
    - Üzenetekkel kommunikál (mint SW)
    - Elér pár API-t, amit SW nem
       - Például indexedDB, WebSocket


Service Worker

- Telepítése
- sw.js az SW kódja
- Sikeres register hívás esetén elkezd működni
    - Tudunk push notificationt fogadni
    - Cache elindul
- Csak a következő betöltés megy teljesen cache-ből

```
let reg = await navigator.serviceWorker.register( 'sw.js' );
```

Service Worker

- fetch esemény
    - Ha nincs benne a cache-ben, akkor töltse le

```
self.addEventListener('fetch', event =>
event.respondWith(
caches.match(event.request)
.then(response => response ?? fetch(event.request))));
```

Service Worker életciklus

- Amikor először elindul az alkalmazásunk
    - Az eredeti címről letöltve
    - Még nincs telepítve SW
    - Böngésző elkezdi letölteni és telepíteni
       - El is indítja, amiről kapunk eseményt
          - Az SW-ben is (install esemény)
          - Az alkalmazásban is (registered promise)
- Ez a példány nem fog SW-t használni
- A következő indításkor viszont már igen


Service Worker életciklus

- A teljes életciklus így néz ki
    - Egy verzióra
- Amikor frissítjük
    - A régi verzió fut, amíg be nem záródik minden
       példánya az alkalmazásunknak
- Cache-re visszatérünk


Service Worker események

- Életciklus
    - install: telepítéskor és új verziónál
    - activate: működik, régi cache törölhető
- Cache
    - fetch: az oldal le akar tölteni valamit
- Kommunikáció
    - message: az alkalmazás küldött üzenetet
       - Ez az egyetlen mód a kommunikációra


Service Worker események

- Push notification
    - push: push notification jött
    - notificationclick: a felhasználó rányomott a notification-re
    - notificationclose: a felhasználó bezárta az üzenetet
    - pushsubscriptionchange: megszűnik a push notification feliratkozás
       - Bizonyos körülmények között újra feliratkozhatunk


##### Cache


Alkalmazás oldal – Helyi tár

- Tárolhatunk adatot helyben
    - localStorage
    - IndexedDB
    - 10MB+ (akár GB feletti méretű is lehet)
- Nem feltétlen elég nagy képek és videók tárolására
    - De lehet, hogy a kezdő oldal tartalma belefér


Cache API

- Tipikusan SW-ben használjuk
- Minden függvény Promise alapú
- caches globális objektum
    - open függvénye megnyitja a megadott cache-t
    - Több cache is létezhet egyszerre
- Cache.addAll mindent letölt

```
self.addEventListener('install', event =>
event.waitUntil(caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))));
```

Cache API

- Régi cache-t törölni kell, ha aktiválódott az új

```
self.addEventListener('activate', event =>
event.waitUntil(
caches.keys().then(cacheNames => Promise.all(
cacheNames
.filter(cacheName => cacheName !== CACHE_NAME)
.map(cacheName => caches.delete(cacheName))))));
```

Cache stratégiák

- Nincsen mindig jó megoldás
- Minden letöltendő fájlról meg kell mondani
    - Benne legyen-e a cache-ben
    - Frissítsük-e
       - Ha igen, mikor
- A build tool összeállíthat egy fájllistát
- Dinamikusan előálló tartalom gond lehet
- Van pár tervezési minta – cache stratégiák
    - Lekérdezés típusonként kiválasztjuk a megfelelőt


Mindent cache-be

- Egyszerű, gyors
- Csak offline alkalmazásnál jó (pl. calculator)
- Minden fájlnak benne kell lennie
    - Dinamikus fájlok nem lehetnek
- Kezdő letöltés lassabb, mert minden fájl kell
- Ha egy fájl nincs meg, akkor 404

```
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request)));
```

Mindent hálózatról

- Egyszerű, de minek
- Azonos működése van, mintha nem lenne
- Lassabb, mintha nem írtunk volna semmit
    - Át kell menni a hívásnak az SW-n
- Valóságban ezt sosem használjuk

```
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
```

Cache, majd hálózat

- Ha megvan, akkor nem töltjük le
- Az előző kettőnél több esetben használható
- Cache itt nem dinamikus
    - Ha valami nincs benne, akkor azt letöltjük, de nem adjuk hozzá
    - Ez bizonyos fájlok/kérések esetén fontos
       - Például állandóan változó hírlista
- Ez egy jó megoldás lehet bizonyos appoknál (pl. shared todo list)


Hálózat, majd cache

- Ha nincs net, akkor a tárolt változatot adjuk vissza
- Cél
    - Offline is kéne működni
    - De ha van friss adat, akkor azt mutassuk
- Dinamikus cache
    - A cache-t frissíthetjük a letöltött adattal
- Hátrány: lassú hálózat belassít mindent
    - Ritkán használható


Hálózat és cache

- Elindítjuk mindkét lekérést
    - Cache előbb visszatér, azt visszaadjuk
    - Majd hálózat visszatér
       - Frissítjük cache-t
       - Értesítjük az appot, hogy van új adat
- Komplex megoldás
    - Az appnak is együtt kell működnie
- Egyszerűsítési lehetőség
    - Nem értesítjük az appot
    - Legközelebb már friss adatot adunk vissza


##### Kommunikáció


XHR – XMLHttpRequest

- AJAX – Asynchronous JavaScript And XML
- Régi módszer
    - Az új verzió a fetch
- Http kérést indít egy szerver felé
- Aszinkron módon kap választ
- A kérés HTTP headerjeit részben írhatjuk
- A body-t teljesen egészében mi írjuk
    - Lehet JSON, XML, bináris, ...
- A válasz headerjeit részben olvashatjuk
- A válasz body-t teljesen olvashatjuk


XHR

- Tömörítés
    - Támogatott: gzip, deflate, brotli (20%-kal jobb, mint gzip)
    - Ez a Content-Type headerben van jelezve és csak akkor jön, ha az Accept-Encoding
       headerben kérte a böngésző
- (BREACH támadás)

```
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => console.log(xhr.response));
xhr.open("GET", "http://www.example.org/example.txt");
xhr.send();
```

fetch

- XHR helyett – de nem tud
    mindent
       - Általában jó
- Promise-t ad vissza
    - Lehet await-elni

```
fetch('http://example.com/movies.json')
.then(res => res.json())
.then(obj => console.log(obj));
```
```
let res = await fetch('http://example.com/movies.json');
let obj = await res.json();
```

WebSocket

- Üzenet alapú keretező protokoll
- Kétirányú csatorna jön létre
    - Nem szűnik meg csomagonként
    - Titkosítás azonos, mint HTTP esetén
- Kliens is és szerver is küldhet csomagot
    - Alacsony késleltetés
- Kicsi az overhead: max 8 bájt csomagonként
- Ezt használja számos klienst értesítő keretrendszer (pl. SignalR)


WebSocket

- Tömörítés van, de csak deflate (nincs brotli)
- Cache nincs
- A kapcsolódás egy HTTP kéréssel indul
    - A szerver visszaküldi, hogy OK, és nem zárja be a kapcsolatot
       - Az eredeti TCP kapcsolaton keresztül megy minden további kommunikáció
- Nem csak böngészőkben van implementálva
    - Két szerver is kommunikálhat WebSockettel
    - De botok nem támogatják
       let ws = new WebSocket("ws://echo.websocket.org/");
       ws.onmessage = e => console.log(e.data);
       ws.onopen = () => ws.send("Hello, World!");


Share API

- navigator.share meghívja az OS beépített megosztás kezelőjét
    - Meg lehet adni: url, title, text
    - Csak mobilokon csinál valamit
    - Asztali OS-en copy-paste a megszokott mód
       - Esetleg valamilyen popupban listázhatjuk a szokásos dolgokat
- Feltehetjük az appunkat a megosztási listára
    - Az OS beépített megosztás kezelőjében ott lesz
    - manifest fájlba kell megadni, hogy mi történjen
    - El lehet kapni a SW-ben


Share API

- https://twitter.com/manifest.json részlet
"share_target": {
    "action": "compose/tweet",
    "enctype": "multipart/form-data",
    "method": "POST",
    "params": {
    "title": "title",
    "text": "text",
    "url": "url",
    "files": [
    {
    "name": "externalMedia",
    "accept": ["image/jpeg", "image/png", "image/gif", "video/quicktime", "video/mp4"]
    }
    ]
    }
}


##### Köszönöm a figyelmet!


##### Kliensoldali rendszerek

```
Teljesítmény, csomagolás és formátumok
```

##### Teljesítmény

Fogalmak és mérőszámok


Teljesítmény

- A szoftver
    - Letöltési/betöltési ideje
    - Parse-olás/JIT fordítási ideje
    - Futási ideje
    - Mérete
       - Ez erősen összefügg mindegyikkel
- Főleg a kiadott csomagnál fontos
    - De fejlesztés közben is szempont


Mérőszámok

- Első rajzolás (FP – first paint)
    - Amikor bármi változást látunk (pl. háttér)
- Első tartalom rajzolás (FCP – first contentful paint)
    - Amikor az első HTML-belielemet látjuk
- DOMContentLoad esemény
    - Minden globális függvény lefutott
    - A HTML betöltve, a DOM felépítve
- Load esemény
    - Minden betöltve (CSS is)


Mérőszámok

- Oldal használható (TTI – time to interactive)
    - Látható az oldal és reagál 50 msalatt
    - Ez a legutolsó és legfontosabb mérőszám
- Sokat idézett kutatás (Google ad network mérése alapján): Ha az oldal 3
    másodperc alatt nem töltődik be, akkor a felhasználók 53%-a elhagyja a
    oldalt
       - Ezt nehéz megoldani, ha nem készülünk rá


Optimalizáció

- Caching – volt
- Gyors/kicsi könyvtárak használata
- Server Side Rendering (SSR), pl. Next.js
- Csomagolás (bundling)
    - Tree shaking
- Lazy loading
- Média formátumok (pl. webp)
- Tömörítés
- HTTP/2, HTTP/3


##### Csomagolás


Fordítás

- Fordítás (compiling, transpiling)
    - Kód átalakítása JS-re
- Például
    - .ts– TypeScript
    - .tsxés .jsx (React, vagy HTML template-et tartalmazó fájl)
- Gyors művelet
    - Forrás és cél formátum nagyon hasonló
    - Nincs szükség strukturális átalakításra
       - De szintaktikai ellenőrzés kell


Source map: app.js.map

- A fordítás/átalakítás miatt szükséges eltárolni, hogy adott kódrészlet hol volt
    az eredeti kódban
       - Célja a breakpointtámogatás, illetve más debug eszközök (soronként léptetés,
          függvénybe lépés, átugrás)
- Többszörös átalakítást támogatni kell
    - Például TS=> JS => bundle


Bundling

- Több fájl egymás után másolása
    - Majd modulokra bontása
- Célok
    - Egyesítés után kevesebb fájlt kell letölteni
    - Modulok kialakítása, hogy ne egyben töltődjönle a teljes csomag
    - Általában: a kiadott csomag függetlenné tétele a fejlesztés alatt kialakított struktúrától
- Modul rendszert át kell alakítani
    - Vagy egy kimeneti fájl esetén meg kell szüntetni


ES bundlers

- Modern csomagolók (pl. Vite) csak publikáláshoz hoznak létre
    modulokat/csomagot
       - Debug módban egyesével töltik a fájlokat
- A böngésző feladata, hogy ezeket mind betöltse, és több ezer esetén is
    viszonylag gyors
- Nagyobb projektnél hot reload esetén Vite nagyságrenddel gyorsabb, mint
    Webpack
       - Webpack egyre lassabb, ahogy az alkalmazás mérete nő


Tree Shaking

- Felesleges kód eltávolítása – DCE (Dead Code Elimination)
    - Meg kell találni a nem használt függvényeket
    - Problémás osztályok esetén
    - Általában is nehéz, ha nem erre van optimalizálva egy könyvtár
       - Nem talál meg mindent
- Célok
    - A saját kódunk kisebbé tétele
    - A használt könyvtárak kisebbé tétele
       - Vagy akár teljes kiszűrése


Tree Shaking

- Sajnos a cél elérése nem garantált
    - Saját kódunkban általában kevés nem használt függvény van
    - Külső könyvtárak esetén lehet hasznos, ha úgy vannak megírva
    - Számos könyvtár jön testre szabható (customize) formában – én választom ki, hogy mi
       kell belőle
    - Példa: Pixi.js (2D rendermotor)
       - 370K a min.js verzió(1.2M az eredeti verzió)
       - Treeshakingszinte semmit sem tud kivágni
          - Az egyes modulok módosítják a belsejét (pl. Batch render)
       - 18 0K, ha kézzel válogatom be, ami kell


Minify

- Nevek lecserélése rövidre
- Célok
    - Kisebb fájl méret
       - Jelentős méretcsökkenés (1:3, 1:4)
       - Tömörítve nem annyira nagy a hatás, de még úgy is jelentős
    - Gyorsabb
       - Letöltés –cache esetén kicsi a hatása, de nem nulla
       - Betöltés –itt is számít a méret
    - Nehezebb olvasni, ez csak egy mellékhatás
       - Nehezíti a visszafejtést/megértést (obfuscate)
       - Ha ez nem cél, akkor adunk mellé egy „fejlesztői” verziót, amiben jók a nevek


Csomagolás CSS – Minify

- CSS méretének csökkentése a felesleges whitespace-ek kivételével és akár
    átnevezéssel
- Célok – azonos a JS minifierrel
- Az átnevezés nem triviális, mert a HTML-t és JS-t is módosítani kell hozzá
    - Vannak eszközök rá, nincs teljeskörű megoldás
- Nehéz debuggolni
    - Nincs sourcemap
- Kicsi a hatása, mert tömörítés után alig lesz kisebb és a CSS fájlok eleve
    kisebbek


##### Lazy loading


Modulok

- A legjobb módszer csomagokra bontani a kódot
    - Ez nem triviális feladat
    - Értelmes csomagokat kell kapjunk
    - Például hiába van szétszedve, ha a fő oldalhoz mindegyik kell
- Import és export használata
- Modul betöltő automatikusan megoldja
    - Fordító paramétere, hogy melyiket használjuk
    - Lehet használni a natív modulkezelőt
       - Ez már széleskörben támogatott


Modulok – kimeneti formátumok

- CommonJS – szerver oldal Node.js
- AMD – require.js
- UMD – mindkettő + globális változó
    - A fájl úgy kezdődik, hogy megnézi, hogy van-e require.js, és így megy tovább
- Natív ES modul – ezt használjuk új projekteknél
- A kimeneti formátumon nem működik tree-shaking


Modulok – natív modulok

- ES6-tól van
    - A böngészőre bízzuk a betöltést
    - Ez gyorsabb, mint a JS megoldások
    - Tree-shakingműködik, ha további feldolgozásra van szükség
- Jelenleg csak Rollup tud ilyen kimenetet adni
    - Viteezt használja, amikor dinamikus importot írunk: await import(...)
- Hiába gyorsabb, több száz fájl esetén lassul
    - Nem publikálhatjuk az összes fájlt
    - Továbbra is kell csomagoló (Rollup)


Code splitting – modulokra bontás

- Sima import esetén egybe fordul
- Dinamikus import esetén külön modulba fordul
    - Saját kódot is ki tudunk tenni másik modulba
    - Nekünk kell gondoskodni a betöltés megfelelő időzítéséről
       - Általában elég igény szerint, és a felhasználó kicsit vár

```
import { useVariable } from "./Variable"
```
```
let mod = await import( "react-google-charts" );
```

Külső könyvtárak

- Itt is működik a modul módszer
    - De lehetséges, hogy nincs így csomagolva
- Késleltetni lehet a betöltést
    - async és defer: aszinkron tölti a scriptet
       - Párhuzamosít, így javít a TTI-n
    - Manuálisan csak a gombnyomásra betölteni
    - Prediktív módszerek
       - Pl. elindítani a betöltést mouseover-re
          - Mobilon nem működik (touch)
       - Vagy amikor a gomb bejön a képernyőre
          - Ez jó mobilon


Képek és egyéb tartalom

- Ami nem látszik, azt lehet késleltetni
- Natív megoldás van, és már multiplatform (iOS 15.4-től)
    - loading="lazy"
- Fontos, hogy mit késleltetünk
    - Ha akkor döntjük el, amikor a JS már fut, az késő
    - Böngésző párhuzamosan tölt és futtat
    - Csak azt lehet késleltetni, amiről biztosan tudjuk, hogy nem kell a TTI-hez
       - Image carousel
       - Oldalon később jövő anyagok
       - Felhasználói interakcióra töltés
       - ...


##### Media formátumok

webp, webm, ...


Régi, de máig működő formátumok

- JPEG
    - Veszteséges tömörítés, nincs átlátszóság
- PNG
    - Veszteségmentes tömörítés, van átlátszóság
- SVG
    - Vektorgrafikus ábra, vonal, spline, ...
- TTF, OTF, WOFF
    - Font, vektorgrafikus, egyszínű, subpixel rendering támogatás
    - Főleg kicsi képek esetén fontos


Újabb formátumok

- WOFF2
    - Tudásban azonos, jobban tömörített (brotli)
- WebP (VP8)
    - Erős tömörítés, átlátszóság, veszteséges/mentes
    - JPEG-hez képest 30-70%-kal kisebb képek azonos minőség mellet (másfajta tömörítési
       hibákat ad)
- WebM/VP9 codec (iOS 2024-től)
    - Videó
- AVIF (AV1) – 2024 - től minden böngésző támogatja (Edge volt az utolsó)
    - Még jobb tömörítés, mint WebP
    - HDR támogatás 10 és 12 bpp


picture – összes böngésző támogatása

- picture támogatás nélkül is megy
    - img fog csak érvényesülni

<picture>
<source type="image/webp"
srcset="imgs/256.webp 256w, imgs/512.webp 512w, imgs/1024.webp 1024w"
sizes="320px">
<source
srcset="imgs/256.jpg 256w, imgs/512.jpg 512w, imgs/1024.jpg 1024w"
sizes="320px">
<img alt="" src="imgs/256.jpg">
</picture>


Tömörítés

- XHR esetén deflate vagy brotli
- WebSocket esetén csak deflate
    - Vagy bináris és mi magunk írunk tömörítőt
    - Például wasm-brotli
- Média avif/webp/webm/stb.
- JS/CSS minified
    - És tömörítve jön le (brotli/deflate)
- HTTP/2


HTTP/2 és HTTP/3

- HTTP/2
    - Push resource
    - Header tömörítés
    - Multiplexing – egy TCP csatorna több HTTP csomag (akár több kérés válasz előtt)
- HTTP/3
    - UDP alapú (UDP-QUIC-HTTP)
    - TLS 1.3 beépítve
    - Szinte minden böngésző támogatja kliensként
       - Safari (macos és iOS) még nem támogatja általában, de tesztelés elkezdődött
    - Minden komolyabb szerver támogatja (pl. IIS ASP.NET Core, de csak Win11-től)


Betűtípusok

- Lehet saját betűtípust használni
    - Nem csak szöveg célból
    - Ikonokra is, pl. Font Awesome
- Formátumok
    - ttf, otf, woff, woff2
    - A különbség főleg méretben van, nem tudásban
    - Ezek mind spline-ból kirakott alakzatok, így tetszőleges méretben rajzolhatók
- Az ikonokat célszerű így tárolni a Subpixel rendering miatt
- Színes nem lehet, de adhatunk neki színt


- Csak font rendereléskor támogatott, és csak asztali OS-eken
- Háromszorozza a vízszintes felbontást
    - Egy 100 dpi-s monitor 300 dpi-sként látszik
    - Függőleges felbontás marad, de arra nem vagyunk érzékenyek, főleg nem szövegnél
    - Vízszintesen is csak mozgatni lehet, nem lesz több pixel
- Nem mindig működik, böngésző dönt
    - Canvas-on és bizonyos CSS animációk esetén kikapcsol

Subpixel rendering


Subpixel rendering

- Ha eleve nagy a DPI, akkor nincs rá szükség
    - Például mobilok: 500+ DPI
    - 4K-s laptopok
- Attól is függ, hogy milyen távolról nézzük
    - PPD: Pixel per Degree
    - Mobil tipikusan 30 cm-re van
       - 600 DPI felett tökéletes kép
       - 300 - 600 DPI: egyesek kezdik látni
       - 300 DPI alatt mindenkinek feltűnik a probléma
    - Laptop 60 cm
    - PC 80-100 cm


##### Köszönöm a figyelmet!




##### blazor
