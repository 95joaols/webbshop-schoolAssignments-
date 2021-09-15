# Webshop med Material-UI
*Inlämning nummer 4 i kursen Webutveckling*
*Utförd av Rikard Friberg, Joacim Olsson, Mathias Millberg och Andreas Gunnarsson*

Uppgiften är en gruppuppgift och går ut på att bygga en webshop med hjälp av React, Typescript och Material-UI. Sidan ska innehålla en startsida, en produktsida, ett utcheckningsflöda samt en admin-sida som frivillig expansion av uppgiften.

Vi valde att satsa på att uppfylla alla krav, både för godkänt och väl godkänt. Vid uppstart skrivs vår lista med hårdkodade produkter till användarens local storage. Vår startsida listar alla dessa produkter och där har man möjlighet att välja önskat antal samt lägga till i kundvagn. Man kan även klicka på produkter för att komma till produktsidan innehållandes mer detaljerad info. Även här kan man lägga till i kundvagn. Högst upp på sidan har vi en appbar med knappar för de olika sidorna och en kundvagnsikon med ett antal, som uppdateras varje gång en produkt läggs till i kundvagnen. Man kan också klicka på ikonen för att få fram en lista över tillagda produkter.
I kassan får man upp en lista med kundvagnens produkter. Här kan man ändra antal och ta bort om man önskar. Det finns ett formulär med automatisk ifyllnad för köparen att lägga till sina uppgifter i. Klickar man vidare så kommer man till en bekräftelsesida med en sammanfattning på alla produkter och den adress man angivit. Godkänns detta får man upp en bekräftelse på att ordern är lagd samt att sidan återgår till sitt ursprungliga state, redo för en ny order.
På adminsidan listas alla produkter. Här kan man klicka på en produkt för att redigera dess detaljer, ta bort produkten eller lägga till en ny produkt.

Sidan finns upplagd på https://webshopp-react.netlify.app/ för demo.

---
För att bygga projektet, kör:
> `npm install`

För att starta projektet, kör:
> `npm start`

Projektet använder sig av: 
* [React](https://reactjs.org/)
* [Material-UI](https://material-ui.com/)
* [TypeScript](https://www.typescriptlang.org/)