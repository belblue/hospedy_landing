# Hospedy Landing

Landing page de Hospedy. Nuxt 3 (SSR, preset `node-server`) + Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
```

Con Docker: `docker compose up --build` (usa `Dockerfile.dev` y `.env.development`).

## Ramas y despliegue

Pipeline CI/CD self-hosted: cada push buildea la imagen, comprueba que responde
HTTP 200, la publica en Harbor y la despliega por SSH en la VM.

| Rama | Imagen | App / VM | Acceso |
|---|---|---|---|
| `develop` | `registry.silatek.net/hospedy/hospedy_landing_dev` | `hospedy_landing_dev` — Ridid_frontends (192.168.9.219:3015) | solo LAN |
| `main` | `registry.silatek.net/hospedy/hospedy_landing_prod` | `hospedy_landing_prod` — Ridid_frontends (192.168.9.219:3014) | solo LAN |

Todavía **no hay dominio público**: ninguno de los dos entornos tiene ruta de
Traefik ni DNS. Se trabaja en `develop`; a `main` se llega por PR.

El `.env` de cada entorno vive en la VM (`~/apps/<app>/.env`) y se edita desde el
CI/CD Manager, nunca en el repo. Plantilla de referencia: `.env.example`.

Los workflows esperan los secrets `DEPLOY_HOST` y `DEPLOY_USER` del repo.

## Formularios

Los formularios de contacto, de demo asistida (`/demo`) y de cuenta de demo
(`/cuenta-demo`) van al admin panel. Se configuran por entorno, sin recompilar:

| Variable | Qué es |
|---|---|
| `NUXT_PUBLIC_PANEL_API_BASE` | API del admin panel (en dev, `https://rididadminapi.silatek.net`) |
| `NUXT_PUBLIC_TURNSTILE_SITE_KEY` | Sitekey de Cloudflare Turnstile |
| `NUXT_PUBLIC_DEMO_ENABLED` | `true` para ofrecer la cuenta de demo; si no, sale como «Muy pronto» |

Sin el panel o sin la sitekey, los formularios no se pueden enviar e invitan a
escribir a hola@hospedy.app. El panel tiene que admitir el origen de la landing
en su `PUBLIC_FORM_ORIGINS` (CORS).

Ya no se usan `NUXT_PUBLIC_BASE_URL` (los formularios iban al PMS) ni
`NUXT_PUBLIC_DEMO_API_BASE` (la sustituyen `NUXT_PUBLIC_PANEL_API_BASE` y
`NUXT_PUBLIC_DEMO_ENABLED`).
