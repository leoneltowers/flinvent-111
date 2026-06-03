# Deploy Instructions - Flinvent (111.flinvent.net)

## Status
✅ Proyecto listo para deploy en Coolify
- Stack: Next.js 15 + TypeScript + Tailwind + Framer Motion
- Docker: ✅ Configurado (Dockerfile + docker-compose.yml)
- Dominio: 111.flinvent.net
- Ruta local: `/home/dev/.openclaw/workspace/flinvent-111`

## Deploy en Coolify

### Opción 1: Via Coolify UI (Recomendado)
1. Abre Coolify en `https://coolify.leonel.dev` (o tu URL)
2. "New Application" / "New Service"
3. Selecciona "Docker Compose"
4. Copia el contenido de `docker-compose.yml`
5. Deploy
6. Configura dominio a `111.flinvent.net` en Caddy

### Opción 2: Via Terminal / SSH
```bash
cd /opt/coolify/applications/flinvent-111
docker compose up -d
```

### Opción 3: Copy & Deploy
```bash
cp -r /home/dev/.openclaw/workspace/flinvent-111 /opt/coolify/applications/
cd /opt/coolify/applications/flinvent-111
docker compose up -d
```

## Caddy Configuration
Caddyfile ya incluido:
```
111.flinvent.net {
  reverse_proxy flinvent-111:3000
  encode gzip
}
```

Asegúrate de:
1. Agregar al Caddyfile principal de tu servidor, O
2. Importar desde Coolify UI

## Verificar Status
```bash
docker logs flinvent-111
docker ps | grep flinvent-111
```

## Acceso
- URL: https://111.flinvent.net
- Puerto interno: 3000
- Red Docker: `caddy` (externa)

---
**Build time**: ~50s
**Container size**: ~400MB
**Performance**: Optimized for production
