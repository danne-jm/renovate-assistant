# renovate-assistant

## Scripts
- `./run-renovate.sh`: Runs renovate with the environment variables from `.env`.
- `./run-renovate-dry.sh`: Runs renovate in dry-run mode with the environment variables from `.env`. You can add flags if needed, e.g. `--fork-processing=enabled`. This shows what renovate would do without making any real changes.

## .env contents
```bash
# Example .env file for renovate wrapper
RENOVATE_TOKEN=PAT
LOG_LEVEL=debug
GIT_AUTHOR_NAME=Renovate Bot
GIT_AUTHOR_EMAIL=renovate@example.com
```