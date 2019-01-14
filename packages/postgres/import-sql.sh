#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

# import dump into postgres database
PGPASSWORD=$POSTGRES_PASSWORD psql -U $POSTGRES_USER $POSTGRES_DB < /tmp/dump.sql