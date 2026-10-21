# Projekt: Statyczna strona WWW - Portfolio Studenta

## Opis projektu
Statyczna strona internetowa przedstawiająca portfolio studenta kierunku Informatyka Ekonomiczna. Projekt został zrealizowany w celach zaliczeniowych z uwzględnieniem rygorystycznych wymagań dotyczących dostępności (a11y), responsywności oraz poprawności semantycznej.

## Wymagania techniczne i ich realizacja
* **Struktura HTML5:** Wykorzystanie semantycznych znaczników (`header`, `nav`, `main`, `section`, `footer`) oraz dokładnie jednego znacznika `h1`.
* **Dostępność (a11y):** Zastosowanie atrybutów `alt` dla grafik, powiązanie pól formularza przez `<label for>`, widoczne obramowanie `:focus-visible` oraz zachowanie kontrastu zgodnego z WCAG AA.
* **Responsywność:** Podejście *mobile-first* (baza od 320px), media queries z użyciem `min-width` (dla 768px i 1024px), a także wdrożenie layoutów opartych na **CSS Grid** oraz **Flexbox**.
* **CSS:** Konfiguracja zmiennych w `:root`, globalny `box-sizing: border-box`, brak użycia reguł `!important`.
* **JavaScript:** Obsługa formularza z walidacją i `preventDefault()`, interaktywny akordeon oraz skrypt detekcji przeglądarki.

## Wynik audytu Lighthouse
Poniżej przedstawiono zrzut ekranu z audytu Lighthouse potwierdzający wysoką dostępność i optymalizację strony:

![Lighthouse Score](assets/img/lighthouse.png)

## Polityka AI
Oświadczam, że w procesie tworzenia projektu korzystano ze wsparcia sztucznej inteligencji od 13. tygodnia semestru. Szczegółowy dziennik operacji znajduje się w pliku [AI_LOG.md](AI_LOG.md).

## Link do strony (GitHub Pages)
* [Odwiedź stronę online](https://[Twój_Login].github.io/[nazwa-repo]/)