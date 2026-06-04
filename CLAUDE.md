@AGENTS.md

# Flinvent-111

App Next.js con animaciones avanzadas. Proyecto de desarrollo/experimentación.

## Stack

- Next.js + TypeScript
- Framer Motion + GSAP (animaciones)
- Lottie React (animaciones SVG)
- Lucide React (iconos)

## Deploy

- URL pública: https://dev.flinvent.net
- Plataforma: Coolify (servidor 10.187.17.99)
- GitHub: https://github.com/leoneltowers/flinvent-111 (público)
- Auto-deploy: webhook en cada push a main
- Coolify App UUID: `ub6b28uk9vruy7u0cvgn4uyk`
- Container alias en red infra: `flinvent-111`
- Puerto interno: 3000

## Comandos

```bash
npm run dev    # desarrollo local (puerto 3000)
npm run build  # build producción
npm run lint   # linting
```

## Notas

- Proyecto migrado desde `.openclaw/workspace/flinvent-111` a `~/projects/flinvent-111`
- CF Tunnel apunta directo al container via alias en red infra
