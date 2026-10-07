// Domande del quiz (max 4 da consegna). correct = indice 0-3. why = spiegazione per la correzione partecipata.
export const QUESTIONS = [
  {
    text: "Nel 2006 una banca concede molti mutui subprime e li cartolarizza. La FED alza i tassi al 5,25% e le famiglie smettono di pagare. Chi ci rimette?",
    options: [
      "Solo la banca che ha dato i mutui",
      "Chi ha comprato i titoli costruiti con quei mutui",
      "La FED",
      "Nessuno: la casa garantisce il mutuo",
    ],
    correct: 1,
    why: "Con la cartolarizzazione i mutui diventano titoli (Abs) venduti ad altri: il rischio che le famiglie non paghino passa a chi li compra. È la zuppa di pesce avanzato.",
    src: "Materiale2 p. 65",
  },
  {
    text: "Anna e Marco guadagnano entrambi 1.500 € al mese, ma Marco parte svantaggiato e spende gran parte del reddito solo per spostarsi. Secondo Sen…",
    options: [
      "Stanno uguale: hanno lo stesso reddito",
      "Marco ha meno capacità: stesso reddito, meno benessere",
      "Marco sta meglio perché riceve aiuti",
      "Conta solo il PIL del Paese",
    ],
    correct: 1,
    why: "Per Sen conta cosa riesci davvero a fare con il reddito (capacità = libertà sostanziale). Chi parte svantaggiato trasforma lo stesso reddito in meno benessere.",
    src: "Economia futuro p. 72 · Materiale1 p. 62",
  },
  {
    text: "Un Comune vuole che i ragazzi vadano di più a scuola. Cosa farebbe un economista sperimentale?",
    options: [
      "Applica la teoria economica più accreditata",
      "Compra libri per tutti: è la soluzione più ovvia",
      "Prova interventi diversi in alcune scuole e misura quale funziona",
      "Lascia decidere al mercato",
    ],
    correct: 2,
    why: "Gli esperimenti sul campo partono dai dati, non dalla teoria. In Kenya (Kremer) libri e maestri contavano poco: le cure contro i vermi hanno fatto salire la frequenza.",
    src: "Economia futuro p. 72",
  },
  {
    text: "Europa 2010-2012: i Paesi con molto debito fanno austerità. Cosa succede al rapporto debito/PIL?",
    options: [
      "Scende, perché lo Stato spende meno",
      "Sale, perché il PIL crolla",
      "Resta uguale",
      "Scende grazie alle tasse più alte",
    ],
    correct: 1,
    why: "L'austerità fa crollare il reddito: il denominatore (PIL) scende e il rapporto debito/PIL sale invece di ridursi. Si salva nel 2012 con Draghi.",
    src: "Materiale2 p. 66-67",
  },
];
export const SECONDS = 25;
