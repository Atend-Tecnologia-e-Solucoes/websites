#!/bin/bash

# Script para iniciar a aplicação com PM2
# Instala dependências se necessário e depois inicia

cd "$(dirname "$0")"

# Função para tratamento de erros
handle_error() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ ERRO: $1"
  exit 1
}

# Trap para capturar erros
trap 'handle_error "Erro inesperado na linha $LINENO"' ERR

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
# Verifica se .next existe E se tem conteúdo válido (build-manifest.json indica build completo)
if [ ! -d ".next" ] || [ ! -f ".next/BUILD_ID" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🔨 Fazendo build da aplicação..."
  # Limpa build anterior se existir mas estiver incompleto
  if [ -d ".next" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🧹 Limpando build anterior incompleto..."
    rm -rf .next
  fi
  # Executa o build (sem set -e para capturar erros manualmente)
  if ! npm run build; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ ERRO: Build falhou! Verifique os logs acima."
    exit 1
  fi
  
  # Verifica se o build foi bem-sucedido (BUILD_ID é criado após build bem-sucedido)
  if [ ! -f ".next/BUILD_ID" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ ERRO: Build aparentemente concluído mas BUILD_ID não encontrado!"
    exit 1
  fi
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Build concluído com sucesso"
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Build já existe e está completo"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🚀 Iniciando aplicação..."
exec npm start

