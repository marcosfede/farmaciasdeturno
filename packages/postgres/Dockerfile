FROM postgres:11

ENV POSTGIS_VERSION=2.5

# Update repositories & Install dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-11-postgis-${POSTGIS_VERSION} \
        postgresql-11-postgis-scripts \
    && rm -rf /var/lib/apt/lists/*

COPY import-sql.sh import-sql.sh
COPY export-sql.sh export-sql.sh
