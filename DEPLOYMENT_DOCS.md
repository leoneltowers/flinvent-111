# Flinvent 111 — Deployment Documentation

**Fecha:** 2026-06-03  
**Status:** ✅ Production  
**URL:** https://111.flinvent.net

---

## Resumen

Landing page moderna con Next.js 15, Framer Motion 3D, y OpenClaw design. Deployada en Coolify con Caddy reverse proxy y Cloudflare Tunnel.

---

## Tech Stack

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Animations:** Framer Motion, GSAP, scroll-triggered effects
- **UI/UX:** Dark mode (OpenClaw style), neon accents (cyan/pink/purple)
- **3D Effects:** Mouse tracking parallax, floating cards, hover animations
- **Container:** Docker multi-stage build, ~400MB optimized
- **Proxy:** Caddy (reverse proxy, TLS, compression)
- **Tunnel:** Cloudflare Tunnel (cloudflared)
- **CDN/DNS:** Cloudflare

---

## Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│ Internet (Cloudflare)                                   │
│ 111.flinvent.net                                        │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ↓ HTTPS
        ┌─────────────────────────────┐
        │ Cloudflare Tunnel           │
        │ (cloudflared container)     │
        │ → host.docker.internal:3000 │
        └─────────────────────────────┘
                      │
                      ↓
        ┌─────────────────────────────┐
        │ Caddy (reverse proxy)       │
        │ Port 80/443                 │
        │ TLS internal (local CA)     │
        └─────────────────────────────┘
                      │
                      ↓ http://flinvent-111:3000
        ┌─────────────────────────────┐
        │ flinvent-111 (Next.js)      │
        │ Port 3000                   │
        │ Network: caddy              │
        │ Status: ✅ Running          │
        └─────────────────────────────┘
```

---

## Containers

### flinvent-111 (Next.js App)
```bash
Container: flinvent-111
Image: flinvent-111-flinvent-111:latest
Port: 0.0.0.0:3000 → 3000/tcp
Network: caddy
Status: Up
Logs: npm start → "Ready in 261ms"
```

**Verificar:**
```bash
docker ps | grep flinvent
docker logs flinvent-111
curl http://172.28.0.2:3000
```

### Caddy (Reverse Proxy)
```bash
Container: caddy
Image: caddy:latest
Ports: 80→80, 443→443
Networks: (default + servicios)
Caddyfile: /opt/servicios/caddy/Caddyfile
Status: Up
```

**Configuración (111.flinvent.net):**
```
111.flinvent.net {
    tls internal
    reverse_proxy flinvent-111:3000
    encode gzip
}
```

**Verificar:**
```bash
docker ps | grep caddy
docker logs caddy
curl -k https://10.187.17.99 -H "Host: 111.flinvent.net"
```

### cloudflared (Cloudflare Tunnel)
```bash
Container: cloudflared
Image: cloudflare/cloudflared:latest
Networks: infra, coolify
Status: ✅ Up
Command: tunnel --no-autoupdate run --token [TOKEN]
```

**Verificar:**
```bash
docker ps | grep cloudflared
docker logs cloudflared
```

---

## Cloudflare Tunnel Configuration

**Service:** `http://host.docker.internal:3000`

**Setup en Cloudflare UI:**
1. Dashboard → Tunnels → [Tu tunnel]
2. Public Hostname → Add
3. Subdomain: `111`
4. Domain: `flinvent.net`
5. Service: `http://host.docker.internal:3000`
6. Save

**Status:** ✅ Connected  
**URL:** https://111.flinvent.net

---

## Build & Deploy

### Local Build
```bash
cd /home/dev/.openclaw/workspace/flinvent-111
npm run build
sudo docker build -t flinvent-111:latest .
```

### Docker Compose (Coolify)
```bash
cd /home/dev/.openclaw/workspace/flinvent-111
sudo docker compose up -d
```

**Build Time:** ~50 segundos (multi-stage)  
**Image Size:** ~400MB  
**Startup Time:** ~261ms

### Git Repository
```
Path: /home/dev/.openclaw/workspace/flinvent-111
Branch: master
Commits: 5
  1. Initial commit: Flinvent landing - Next.js 15, Framer Motion 3D
  2. Add Docker configuration for Coolify deployment
  3. Add Coolify configuration and Caddy reverse proxy setup
  4. Configure Next.js standalone output for Docker
  5. Fix Dockerfile and docker-compose for production deployment
```

---

## Componentes

### Hero
- 3D parallax con mouse tracking
- Animated badge, title, subtitle
- CTA buttons con glow effects
- Floating cards (3 features)
- Scroll indicator animado

### Services
- Grid 3×2 con 6 servicios
- Hover animations (lift, glow, accent line)
- Gradient overlays
- OpenClaw styling

### Features
- Timeline estilo (6 features)
- Staggered animations
- Scroll-triggered reveal
- Badges con stats

### Testimonials
- Grid 3 columnas (6 testimonios)
- Card zoom on hover
- Stats section (500+ clients, 99.99% uptime, etc)
- Quote styling

### CTA
- Animated background
- Dual buttons (primary + secondary)
- Social proof

### Footer
- 4 columnas (Brand, Product, Company, Legal)
- Social links
- Copyright dinámico

### Navbar
- Sticky positioning
- Responsive menu (mobile toggle)
- Glow text logo
- CTA button

---

## SEO & Metadata

```typescript
title: "Flinvent — Transformación Digital & Software a Medida"
description: "Software personalizado e integración IA para empresas..."
keywords: "software, IA, transformación digital, desarrollo, cloud"
og:type: "website"
lang: "es"
```

---

## Performance

- **Build:** 5.7s (Next.js Turbopack)
- **Startup:** 261ms (npm start)
- **Compression:** gzip (Caddy)
- **Static Pages:** Pre-rendered
- **TypeScript:** Full type checking

---

## Troubleshooting

### Container no responde
```bash
docker logs flinvent-111
docker restart flinvent-111
```

### Caddy SSL error
- Verificar Caddyfile: `/opt/servicios/caddy/Caddyfile`
- Reload: `docker restart caddy`
- Logs: `docker logs caddy`

### Tunnel disconnected
- Verificar cloudflared: `docker ps | grep cloudflared`
- Restart: `cd /opt/servicios/cloudflared && docker compose restart`
- Logs: `docker logs cloudflared`

### DNS/SSL warnings
- Si DNS no apunta: usa TLS interno (`tls internal` en Caddyfile)
- Una vez DNS esté configurado: cambiar a `tls` automático (Let's Encrypt)

---

## Mantenimiento

### Logs diarios
```bash
docker logs flinvent-111 --tail 100
docker logs caddy --tail 50
docker logs cloudflared --tail 50
```

### Updates
1. Pull code: `git pull origin master`
2. Rebuild: `docker compose build --no-cache`
3. Restart: `docker compose up -d`

### Backups
- Código: Git repo
- Config: `/opt/servicios/caddy/Caddyfile`
- Volumes: Docker named volumes (si aplica)

---

## URLs Internas

- **Container (interno):** http://172.28.0.2:3000
- **Docker host:** http://host.docker.internal:3000
- **Localhost:** http://localhost:3000
- **Caddy (HTTPS):** https://10.187.17.99 (requiere Host header)

---

## Notas

- cloudflared estaba detenido → reiniciado ✓
- Cloudflare Tunnel apuntaba a `host.docker.internal:3000` → funcionando ✓
- Caddy TLS en modo interno (sin DNS válido) → funcionando
- Next.js build optimizado para producción ✓

---

**Documentado:** 2026-06-03 03:54 UTC  
**Por:** Esclavo (Infra Assistant)  
**Status:** Ready for production 🚀
