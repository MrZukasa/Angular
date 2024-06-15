:::tip
Una cosa che posso fare per non installare Angular globalmente è usare `npx ng`
:::
## Development server

Per deployare il server locale si fa `ng serve` nello specifico nel mio caso si fa `npx ng serve`. Il deploy avverrà in `http://localhost:4200/`.
A meno che non si specifichi il contrario, rimane attivo il live reload

## Code scaffolding

Per scaffoldare un nuovo componente si usa `npx ng generate component [nome]` oppure nella versione ridotta `npx g c [nome]`.
Si può anche scaffoldare altro con `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Per buildare il progetto si usa `npx ng build`.La build verrà scaffoldata in `dist/`.

## Running unit tests 🤮

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests 🤮

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

---
- I componenti adesso si importano come moduli, esattamente come in react.
In aggiunta a questo si usa anche `imports: [RouterOutlet, NomeComponente]` in questo caso in `app/app.component.ts`
- Life cicle dei componenti
- data binding
- ngIf direttiva strutturale
  - per l'else si usa il templateReference