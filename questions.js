// Domande del quiz (max 4 da consegna). correct = indice 0-3. why = spiegazione per la correzione partecipata.
export const QUESTIONS = [
  {
    text: "Nel 2006 una banca concede molti mutui subprime e li cartolarizza. La FED alza i tassi al 5,25% e le famiglie smettono di pagare. Chi ci rimette?",
    options: [
      "Solo la banca, che resta l'unica creditrice delle famiglie",
      "La FED",
      "Nessuno: se la famiglia non paga, la banca si tiene la casa",
      "Chi ha comprato i titoli fatti con quei mutui",
    ],
    correct: 3,
    why: "Con la cartolarizzazione i mutui diventano titoli (Abs) venduti ad altri: il rischio che le famiglie non paghino passa a chi li compra. È la zuppa di pesce avanzato.",
    src: "Materiale2 p. 65",
  },
  {
    text: "Anna e Marco guadagnano entrambi 1.500 € al mese, ma Marco parte svantaggiato e spende gran parte del reddito solo per spostarsi. Secondo Sen…",
    options: [
      "Marco: stesso reddito, ma meno capacità e meno benessere",
      "Stanno uguale: con lo stesso reddito hanno lo stesso benessere",
      "Conta solo il PIL del Paese",
      "Marco sta meglio, perché con le sue spese fa girare l'economia",
    ],
    correct: 0,
    why: "Per Sen conta cosa riesci davvero a fare con il reddito (capacità = libertà sostanziale). Chi parte svantaggiato trasforma lo stesso reddito in meno benessere.",
    src: "Economia futuro p. 72 · Materiale1 p. 62",
  },
  {
    text: "Un Comune vuole che i ragazzi vadano di più a scuola. Cosa farebbe un economista sperimentale?",
    options: [
      "Applica la teoria economica più accreditata, senza perdere tempo in prove",
      "Compra libri nuovi per tutti, perché è la soluzione più ovvia ed efficace",
      "Prova più interventi e misura quale funziona davvero",
      "Lascia decidere al mercato, che premierà da solo le scuole migliori",
    ],
    correct: 2,
    why: "Gli esperimenti sul campo partono dai dati, non dalla teoria. In Kenya (Kremer) libri e maestri contavano poco: le cure contro i vermi hanno fatto salire la frequenza.",
    src: "Economia futuro p. 72",
  },
  {
    text: "Europa 2010-2012: i Paesi con molto debito fanno austerità. Cosa succede al rapporto debito/PIL?",
    options: [
      "Scende, perché lo Stato spende meno",
      "Sale, perché l'austerità fa crollare il PIL, cioè il denominatore",
      "Resta uguale",
      "Scende grazie alle tasse più alte",
    ],
    correct: 1,
    why: "L'austerità fa crollare il reddito: il denominatore (PIL) scende e il rapporto debito/PIL sale invece di ridursi. Si salva nel 2012 con Draghi.",
    src: "Materiale2 p. 66-67",
  },
];
export const SECONDS = 25;
