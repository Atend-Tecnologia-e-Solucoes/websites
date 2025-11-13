#!/bin/bash

# Script para iniciar a aplicação com PM2
# Instala dependências se necessário e depois inicia

set -e  # Para em caso de erro

cd "$(dirname "$0")"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 📦 Verificando dependências..."

# Verifica se node_modules existe, se não, instala
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.package-lock.json" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] 📥 Instalando dependências..."
  npm install --production=false
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Dependências instaladas"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Dependências já instaladas"
fi

# Verifica se precisa fazer build
if [ ! -d ".next" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🔨 Fazendo build da aplicação..."
  npm run build
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Build concluído"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Build já existe"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🚀 Iniciando aplicação..."
exec npm start

