import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_KEY } from "./config.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { realtime: { params: { eventsPerSecond: 20 } } });
export const room = (code, key = "host") => supabase.channel(`quiz-${code}`, { config: { broadcast: { self: false }, presence: { key } } });

// Forme per le 4 risposte (triangolo, rombo, cerchio, quadrato): il colore non è l'unico indizio
const P = [
  '<polygon points="50,8 95,90 5,90"/>',
  '<polygon points="50,4 96,50 50,96 4,50"/>',
  '<circle cx="50" cy="50" r="44"/>',
  '<rect x="10" y="10" width="80" height="80" rx="6"/>',
];
export const shape = (i) => `<span class="shape" aria-hidden="true"><svg viewBox="0 0 100 100">${P[i]}</svg></span>`;
export const LETTERS = ["A", "B", "C", "D"];
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const $ = (s) => document.querySelector(s);
