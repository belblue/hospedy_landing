# Hospedy Favicons

Generated from `/public/icons/hospedy-favicon-32.svg` and `/public/icons/hospedy-icon-color.svg`.

## Files included

| File | Size | Usage |
|------|------|-------|
| `favicon.ico` | 16x16 + 32x32 | Classic favicon for browsers |
| `favicon-16x16.png` | 16x16 | Small browser tabs |
| `favicon-32x32.png` | 32x32 | Standard browser tabs |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `android-chrome-192x192.png` | 192x192 | Android home screen |
| `android-chrome-512x512.png` | 512x512 | Android splash screen |
| `mstile-150x150.png` | 150x150 | Windows tiles |
| `safari-pinned-tab.svg` | Vector | Safari pinned tabs |
| `site.webmanifest` | - | PWA manifest |
| `browserconfig.xml` | - | Windows tile config |

## Brand colors

- Primary (Teal): `#0D9488`
- Secondary (Amber): `#F59E0B`
- Theme color: `#ffffff`

## Regenerate favicons

```bash
# From project root with ImageMagick installed:
magick public/icons/hospedy-favicon-32.svg -resize 16x16 public/favicon/favicon-16x16.png
magick public/icons/hospedy-favicon-32.svg -resize 32x32 public/favicon/favicon-32x32.png
magick public/icons/hospedy-icon-color.svg -resize 180x180 -background none public/favicon/apple-touch-icon.png
magick public/icons/hospedy-icon-color.svg -resize 192x192 -background none public/favicon/android-chrome-192x192.png
magick public/icons/hospedy-icon-color.svg -resize 512x512 -background none public/favicon/android-chrome-512x512.png
magick public/icons/hospedy-icon-color.svg -resize 150x150 -background none public/favicon/mstile-150x150.png
magick public/favicon/favicon-16x16.png public/favicon/favicon-32x32.png public/favicon/favicon.ico
```
