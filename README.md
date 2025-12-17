### Read me Fix The flow
Voor AdConnect heb ik gewerkt aan het toevoegen van interacties op de site. Het ontwerpprobleem was dat gebruikers niet altijd feedback gekregen op een actie die ze hadden gedaan. Een voorbeeld hiervan is het invullen van contactformulier. Als je de formulier submitte kreeg je geen bevestiging dat het gelukt was.

De oplossing was het verduidelijken van interacties en het verwerken van feedback uit de eerdere sprint review. Ik heb zichtbare feedback toegevoegd en acties voorspelbaarder gemaakt.

### Inhoudsopgave
Beschrijving
Ontwerpkeuzes
Interactiviteit en feedback
Kenmerken
HTML
CSS
JavaScript
Live pagina

### Beschrijving



Voor AdConnect heb ik drie belangrijke interacties uitgewerkt. Deze interacties helpen de gebruiker begrijpen wat er mogelijk is en wat het resultaat van een actie is.

### Zoekbalkinteractie
De zoekbalk geeft direct feedback op de site. Doordat ik een label heb toegevoegd weet de gebruiker meteen wat de interactie doet. Uit user tests blijkt dat gebruikers na een duidelijke live-scenario weten dat ze de zoekbalkfunctie kunnen gebruiken om "specifieke" informatie op te zoeken.  


https://github.com/user-attachments/assets/4c9270dd-acd9-486f-8d25-92d0d2c90a97



### Vinkje na verzenden contactformulier
Na het verzenden van het contactformulier verschijnt een vinkje. Dit bevestigt dat het formulier succesvol is verzonden. Na 3 seconde verdwijnt het vinkje. Dit geeft duidelijke feedback bij het verzenden van het contact formulier. 




https://github.com/user-attachments/assets/5c8f2a1d-bec4-40ac-88b4-f1f6a708a0c3



### Slider met deelnemende hogescholen
Omdat de gebruiker hoogstwaarschijnlijk niet op een button gaat klikken om alle deelnemende hogescholen te zien (Deze interactie had ik eerst gemaakt). Heb ik daardoor een slider gemaakt zodat ze toch weergegeven worden op het scherm zonder dat de gebruiker ergens op moet klikken. Dit minimaliseert het klikgedrag, voorkomt een lange lijst met hogescholen en houdt het scherm overzichtelijk.


https://github.com/user-attachments/assets/8c130793-5244-491a-abb6-4ca0f5f49b00



### Live interacties

De interacties kun je zelf bekijken op de live pagina van [AdConnect](https://mohamedelib.github.io/fix-the-flow-interactive-website/).



### Ontwerpkeuzes
Ik heb gekozen voor duidelijke labels bij alle interacties. Elke interactie heeft een duidelijke beschrijving. Dit is feedforward en feedback gecombineerd. De gebruiker ziet wat hij kan doen en wat er daarna gebeurt.

De keuzes zijn gebaseerd op feedback uit user tests.


### Interactiviteit en feedback
Elke interactie reageert direct op de actie van de gebruiker. Dit geeft controle en vertrouwen. Alles wat gebeurt is zichtbaar op het scherm.


### Kenmerken

## HTML
Formulieren gebruiken duidelijke labels. Onderdelen hebben logische structuur. Dit maakt de pagina begrijpelijk voor gebruikers en screenreaders.

## CSS
CSS wordt gebruikt voor zichtbare feedback. Denk aan focus states, hover effecten. De layout is overzichtelijk en de website is responsive.

## JavaScript
JavaScript stuurt de interacties aan. Het zorgt ervoor dat door klikken op een button classes getoggled worden. Het vinkje verschijnt na verzending van het formulier. De slider wisselt tussen hogescholen. 


Live pagina
AdConnect is live te bekijken via de bijbehorende link in de repository.
