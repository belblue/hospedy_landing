// robots.txt según el host: en gethospedy.com se rastrea todo (también los asistentes y modelos de IA, decisión de
// Arturo del 10-10) y en cualquier otro host no se rastrea nada (server/plugins/indexacion.ts).
//
// Content-Signal dice para qué se puede usar el contenido: buscar, responder a un usuario (ai-input) y entrenar
// modelos (ai-train). Los bots de IA van con nombre propio para que quede claro que son bienvenidos; un bot con grupo
// propio no lee el de «*», así que su grupo repite las mismas reglas.
import { SITIO_URL, esHostDeProduccion } from '../../utils/sitio'

const BOTS_CON_NOMBRE = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'CCBot', 'bingbot',
]

const REGLAS = [
  'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
  'Allow: /',
  // atajo del Programa Amigos: solo redirige a la portada
  'Disallow: /r/',
]

const PRODUCCION = [
  '# Hospedy: programa de gestión para hoteles, casas rurales y apartamentos turísticos.',
  '',
  ...BOTS_CON_NOMBRE.map(bot => `User-agent: ${bot}`),
  ...REGLAS,
  '',
  'User-agent: *',
  ...REGLAS,
  '',
  `Sitemap: ${SITIO_URL}/sitemap.xml`,
  '',
].join('\n')

const FUERA_DE_PRODUCCION = [
  '# Copia de trabajo de la web de Hospedy: no se rastrea. La web es ' + SITIO_URL,
  'User-agent: *',
  'Disallow: /',
  '',
].join('\n')

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=3600',
  })
  return esHostDeProduccion(getRequestHost(event)) ? PRODUCCION : FUERA_DE_PRODUCCION
})
