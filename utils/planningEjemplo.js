/*
  Datos de ejemplo de las maquetas del planning, comunes al portatil (MockPlanning) y al movil
  (MockPlanningPhone): el mismo alojamiento en los dos, uno por perfil (hotel, casa rural,
  apartamentos), con diez semanas de reservas alrededor de "hoy", el viernes 9 de octubre de
  2026, y coherentes con esa fecha:
    - las que ya han salido, en el color de las pasadas ("past");
    - las que estan en curso, en el de "en casa" ("in");
    - las proximas, muchas con el auto check-in ya enviado ("pre");
    - las lejanas, confirmadas ("future");
    - y algun cierre de habitacion ("cierre").
  Deterministas (generador con semilla): el servidor y el navegador pintan lo mismo.
*/

const DIA_MS = 86400000;
const INICIO = Date.UTC(2026, 8, 14); /* lunes 14 de septiembre de 2026 */

/* diez semanas: del lunes 14 de septiembre al domingo 22 de noviembre */
export const DIAS = 70;
/* hoy: el viernes 9 de octubre (su posicion en los dias) */
export const HOY = 25;

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const SEMANA = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function diaUTC(i) {
  return new Date(INICIO + i * DIA_MS);
}

/* los dias del planning, con lo que pinta su cabecera */
export const DIAS_PLANNING = Array.from({ length: DIAS }, (_, i) => {
  const d = diaUTC(i);
  const dow = (d.getUTCDay() + 6) % 7; /* 0 = lunes */
  return { i, n: d.getUTCDate(), sem: SEMANA[dow], finde: dow >= 5, hoy: i === HOY };
});

/* "09/10/2026" */
export function fecha(i) {
  const d = diaUTC(i);
  return String(d.getUTCDate()).padStart(2, "0") + "/" + String(d.getUTCMonth() + 1).padStart(2, "0") + "/" + d.getUTCFullYear();
}

/* el mes que va en el rotulo: el del dia que se ve en el centro, como en el panel */
export function mesDe(i) {
  const d = diaUTC(Math.max(0, Math.min(DIAS - 1, Math.round(i))));
  return { mes: MESES[d.getUTCMonth()], anyo: d.getUTCFullYear() };
}

const NOMBRES = [
  "Lucía", "Martín", "Carmen", "Javier", "Elena", "Pablo", "Nuria", "Diego", "Irene", "Óscar",
  "Marta", "Hugo", "Sara", "Álvaro", "Laura", "Iker", "Noelia", "Raúl", "Ana", "Tomás",
  "Paula", "Adrián", "Rocío", "Marcos", "Julia", "Sergio", "Clara", "Andrés", "Eva", "Gonzalo",
];
const APELLIDOS = [
  "Ferrer", "Prieto", "Olmedo", "Vilalta", "Aguirre", "Requena", "Lamas", "Mendoza", "Arenas", "Navarro",
  "Cuesta", "Barreiro", "Santos", "Ibarra", "Montes", "Luna", "Serrano", "Gil", "Rey", "Campos",
  "Vidal", "Nieto", "Soler", "Crespo", "Pastor", "Rubio", "Marín", "Lozano", "Iglesias", "Moreno",
];
/* huespedes de fuera, que en apartamentos turisticos son muchos */
const VIAJEROS = [
  "Emma Müller", "Luca Rossi", "James Walker", "Chloé Martin", "Sven Larsson", "Anna Kowalska",
  "Tom Jansen", "Giulia Bianchi", "Léa Dubois", "Oliver Smith", "Mia Schmidt", "Noah Peeters",
];

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function azar(semilla) {
  const rnd = mulberry32(semilla);
  return { rnd, pick: (arr) => arr[Math.floor(rnd() * arr.length)] };
}

/* las estancias de una habitacion, una detras de otra y con huecos */
function llenar(f, rnd, noches, ocupacion, titular) {
  const out = [];
  let d = -Math.floor(rnd() * 5);
  while (d < DIAS) {
    const s = noches();
    if (rnd() < ocupacion) out.push({ f, c: d, s, q: titular() });
    d += s + (rnd() < 0.45 ? 0 : 1 + Math.floor(rnd() * 3));
  }
  return out;
}

function pisa(r, f, c, s) {
  return r.f === f && r.c < c + s && r.c + r.s > c;
}
function sinPisar(reservas, f, c, s) {
  return reservas.filter((r) => !pisa(r, f, c, s));
}
function cabe(reservas, f, c, s) {
  return !reservas.some((r) => pisa(r, f, c, s));
}

/* el estado sale de las fechas: salio, esta dentro, llega pronto (casi siempre con el auto
   check-in ya enviado) o llega mas adelante */
function estado(r, rnd) {
  if (r.c + r.s <= HOY) return "past";
  if (r.c < HOY) return "in";
  if (r.c === HOY) return rnd() < 0.5 ? "in" : "pre";
  if (r.c <= HOY + 3) return rnd() < 0.6 ? "pre" : "future";
  return rnd() < 0.06 ? "pre" : "future";
}

/* lo que falta de cada reserva (estado, regimen, agencia, factura pendiente, cobro y huespedes)
   y la limpieza de hoy de cada habitacion */
function completar(reservas, habs, rnd, o) {
  reservas.sort((a, b) => a.f - b.f || a.c - b.c);
  for (const r of reservas) {
    if (r.cierre) {
      Object.assign(r, { e: "cierre", q: "Cierre", r: "", ota: "", fact: false, cobro: "", pax: 0 });
      continue;
    }
    if (!r.e) r.e = estado(r, rnd);
    if (r.r === undefined) r.r = o.regimen();
    /* agencia: Booking ("bk"), Airbnb ("ab") o directa ("") */
    if (r.ota === undefined) {
      const x = rnd();
      r.ota = x < o.booking ? "bk" : x < o.booking + o.airbnb ? "ab" : "";
    }
    /* pendiente de facturar: solo si la estancia ya ha empezado */
    if (r.fact === undefined) r.fact = r.e === "past" ? rnd() < 0.2 : r.e === "in" ? rnd() < 0.55 : false;
    if (r.cobro === undefined) {
      const x = rnd();
      const pendiente = r.e === "past" ? 0.05 : r.e === "in" ? 0.4 : 0.55;
      r.cobro = x < pendiente ? "pend" : x < pendiente + 0.15 && r.e !== "past" ? "parcial" : "";
    }
    if (r.pax === undefined) r.pax = o.pax();
  }
  /* la habitacion que se ha vaciado esta mannana esta por limpiar; alguna con huespedes
     dentro, a medias; el resto, limpia */
  for (const r of reservas) {
    if (r.cierre) continue;
    if (r.c + r.s === HOY) habs[r.f].limpieza = "sucia";
    else if (r.e === "in" && r.c < HOY && habs[r.f].limpieza === "limpia" && rnd() < 0.4) habs[r.f].limpieza = "media";
  }
}

/* lo hecho a mano va encima de lo generado: primero se retira lo que pisa */
function fijar(reservas, fijas, huecos = []) {
  let out = reservas;
  for (const x of [...fijas, ...huecos]) out = sinPisar(out, x.f, x.c, x.s);
  return out.concat(fijas);
}

/* hotel de 30 habitaciones (101-310) */
function hotel() {
  const { rnd, pick } = azar(20261009);
  const tipos = ["Doble", "Doble", "Familiar", "Doble", "Suite", "Individual", "Familiar", "Doble", "Doble", "Suite"];
  const habs = [];
  for (const planta of [1, 2, 3]) {
    for (let i = 1; i <= 10; i++) habs.push({ n: String(planta * 100 + i), t: tipos[i - 1], limpieza: "limpia" });
  }
  const noches = () => {
    const x = rnd();
    return x < 0.14 ? 1 : x < 0.44 ? 2 : x < 0.7 ? 3 : x < 0.85 ? 4 : x < 0.95 ? 5 : 7;
  };
  const titular = () => pick(NOMBRES) + " " + pick(APELLIDOS);
  let reservas = [];
  habs.forEach((_, f) => {
    reservas = reservas.concat(llenar(f, rnd, noches, 0.8, titular));
  });

  /* dos grupos (una barra por habitacion, como el panel), la reserva que mueve la demo (con un
     nombre que el generador no usa, para que no se repita) con un hueco libre en la 101 para
     llevarla, y tres cierres */
  const fijas = [
    ...[0, 1].map((f) => ({ f, c: HOY - 2, s: 4, q: "Grupo Solana", r: "MP", g: "sol", e: "in", ota: "" })),
    ...[14, 15, 16].map((f) => ({ f, c: HOY + 1, s: 3, q: "Grupo Pirineo", r: "MP", g: "pir", e: "pre", ota: "" })),
    { f: 2, c: HOY + 10, s: 4, q: "Beatriz Robles", r: "AD", e: "future", ota: "", cobro: "pend", demo: true },
    { f: 3, c: HOY + 5, s: 3, cierre: true, motivo: "Pintura" },
    { f: 1, c: HOY - 10, s: 2, cierre: true, motivo: "Avería de fontanería" },
    { f: 12, c: HOY + 18, s: 5, cierre: true, motivo: "Reforma del baño" },
  ];
  reservas = fijar(reservas, fijas, [{ f: 0, c: HOY + 9, s: 7 }]);
  completar(reservas, habs, rnd, {
    regimen: () => {
      const x = rnd();
      return x < 0.3 ? "AD" : x < 0.4 ? "MP" : x < 0.45 ? "PC" : "";
    },
    booking: 0.4,
    airbnb: 0.12,
    pax: () => 1 + Math.floor(rnd() * 3),
  });
  return { habs, reservas };
}

/* casa rural de 6 habitaciones con nombre (de menos de 5 letras: el panel las pinta a 28px, como
   un numero): se llena sobre todo en fin de semana, y el puente del Pilar la casa entera es de
   una familia */
function rural() {
  const { rnd, pick } = azar(20261010);
  const habs = [
    ["Olmo", "Doble"], ["Tejo", "Doble"], ["Haya", "Familiar"], ["Pino", "Doble"], ["Arce", "Triple"], ["Tilo", "Individual"],
  ].map(([n, t]) => ({ n, t, limpieza: "limpia" }));
  const titular = () => pick(NOMBRES) + " " + pick(APELLIDOS);
  const reservas = [];
  const poner = (f, c, s) => {
    if (cabe(reservas, f, c, s)) reservas.push({ f, c, s, q: titular() });
  };
  habs.forEach((_, f) => {
    for (let semana = -1; semana <= 10; semana++) {
      const viernes = 4 + semana * 7;
      const x = rnd();
      if (x < 0.45) poner(f, viernes, 2); /* viernes y sabado */
      else if (x < 0.6) poner(f, viernes + 1, 1); /* solo el sabado */
      else if (x < 0.72) poner(f, viernes - 1, 3); /* de jueves a domingo */
      /* alguna escapada entre semana */
      if (rnd() < 0.18) poner(f, viernes - 4 + Math.floor(rnd() * 2), 1 + Math.floor(rnd() * 2));
    }
  });
  /* la casa entera para el puente: 12 personas, 9 ya han hecho el auto check-in */
  const fijas = [
    ...habs.map((_, f) => ({ f, c: HOY, s: 3, q: "Familia Lozano", r: "MP", g: "loz", e: "pre", ota: "", pax: 12, hechos: 9 })),
    { f: 5, c: HOY + 4, s: 3, cierre: true, motivo: "Pintura" },
    { f: 2, c: HOY - 12, s: 2, cierre: true, motivo: "Revisión de la caldera" },
  ];
  const todas = fijar(reservas, fijas);
  completar(todas, habs, rnd, {
    regimen: () => (rnd() < 0.55 ? "AD" : rnd() < 0.3 ? "MP" : ""),
    booking: 0.18,
    airbnb: 0.2,
    pax: () => 2,
  });
  return { habs, reservas: todas };
}

/* 12 apartamentos en dos edificios; cada edificio es un alojamiento del panel */
function apartamentos() {
  const { rnd, pick } = azar(20261012);
  const marina = [["1A", "2 dorm."], ["1B", "estudio"], ["2A", "2 dorm."], ["2B", "1 dorm."], ["3A", "ático"], ["3B", "2 dorm."], ["4A", "1 dorm."], ["4B", "estudio"]];
  const mirador = [["1", "3 dorm."], ["2", "2 dorm."], ["3", "2 dorm."], ["4", "1 dorm."]];
  const habs = [
    ...marina.map(([n, t]) => ({ n, t: "Marina · " + t, acc: "Marina", limpieza: "limpia" })),
    ...mirador.map(([n, t]) => ({ n, t: "Mirador · " + t, acc: "Mirador", limpieza: "limpia" })),
  ];
  const noches = () => {
    const x = rnd();
    return x < 0.12 ? 2 : x < 0.36 ? 3 : x < 0.56 ? 4 : x < 0.72 ? 5 : x < 0.93 ? 7 : 10;
  };
  const titular = () => (rnd() < 0.35 ? pick(VIAJEROS) : pick(NOMBRES) + " " + pick(APELLIDOS));
  let reservas = [];
  habs.forEach((_, f) => {
    reservas = reservas.concat(llenar(f, rnd, noches, 0.8, titular));
  });
  const fijas = [
    { f: 2, c: HOY + 6, s: 3, cierre: true, motivo: "Pintura" },
    { f: 10, c: HOY - 4, s: 14, cierre: true, motivo: "Reforma de la cocina" },
  ];
  reservas = fijar(reservas, fijas);
  completar(reservas, habs, rnd, { regimen: () => "", booking: 0.3, airbnb: 0.3, pax: () => 1 + Math.floor(rnd() * 4) });
  return { habs, reservas };
}

const GENERADORES = { hotel, rural, apartamentos };
const hechos = {};

/* habs: [{ n, t, acc, limpieza }]; reservas: [{ f, c, s, q, r, e, ota ("bk", "ab" o ""), fact, cobro, pax, g,
   hechos, cierre, motivo }] con c = dia de entrada (puede ser negativo: empezo antes) y s =
   noches; demo: la reserva que mueve la demo del planning ({ i, f }), si el perfil la tiene.
   No se modifican: quien necesite cambiarlas (mover reservas), que las copie */
export function planningEjemplo(perfil) {
  if (!hechos[perfil]) {
    const { habs, reservas } = (GENERADORES[perfil] || GENERADORES.hotel)();
    const i = reservas.findIndex((r) => r.demo);
    hechos[perfil] = { habs, reservas, demo: i >= 0 ? { i, f: 0 } : null };
  }
  return hechos[perfil];
}
