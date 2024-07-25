FROM postgres:16-alpine

# Definir o locale
ENV LANG=pt_BR.UTF-8
ENV LANGUAGE=pt_BR:pt
ENV LC_ALL=pt_BR.UTF-8
# Variáveis de ambiente (substitua pelos seus valores reais)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=testing
ENV POSTGRES_DB=postgres

# Copiar o script de inicialização
COPY init.sql /docker-entrypoint-initdb.d/
COPY pg_hba.conf postgresql.conf entrypoint_master /docker-entrypoint-initdb.d/

# Definir o entrypoint
RUN apk update && apk add neovim
