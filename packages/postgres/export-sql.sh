#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

# import dump into postgres database
PGPASSWORD=$POSTGRES_PASSWORD pg_dump -c -v $POSTGRES_DB