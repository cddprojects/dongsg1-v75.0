#!/bin/sh
set -eu

SOURCE_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)/dist"
TARGET_DIR="${HOME}/httpdocs"

if [ ! -f "${SOURCE_DIR}/index.html" ] || [ ! -d "${SOURCE_DIR}/assets" ]; then
  echo "Deployment aborted: dist/ is missing a production build." >&2
  exit 1
fi

mkdir -p "${TARGET_DIR}"
cp -rf "${SOURCE_DIR}/." "${TARGET_DIR}/"

echo "Deployed dist/ to ${TARGET_DIR}"
