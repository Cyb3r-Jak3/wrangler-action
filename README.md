# Wrangler Action

This is my version of [Cloudflare's Wrangler Action](https://github.com/cloudflare/wrangler-action). This is build using typescript instead of docker/bash. This is not a complete drop in replacement (I didn't want to handle auth), but it is easy to swap in.

*This is not endorsed or supported by Cloudflare*

## Migrating

The biggest difference is that `apiToken`, `apiKey`, `email` and `accountId` are only set through environment variables.
API Token and Account ID Example:

```yaml
- name: Wrangler Example
  uses: Cyb3r-Jak3/wrangler-action
  env:
    CLOUDFLARE_ACCOUNT_ID : ${{secrets.ACCOUNT_ID}}
    CLOUDFLARE_API_TOKEN: ${{ secrets.TEST_TOKEN }}
```

If you are still using wrangler 1

```yaml
- name: Wrangler Version 1
  uses: Cyb3r-Jak3/wrangler-action
  with:
    wranglerVersion: 1
  env:
    CF_ACCOUNT_ID : ${{secrets.ACCOUNT_ID}}
    CF_API_TOKEN: ${{ secrets.TEST_TOKEN }}
```

You can also use your email and global API Key with wrangler 1. You should look into upgrading to wrangler 2 and using an API token.

```yaml
- name: Wrangler Version 1
  uses: Cyb3r-Jak3/wrangler-action
  with:
    wranglerVersion: 1
  env:
    CF_EMAIL : ${{secrets.ACCOUNT_ID}}
    CF_API_KEY: ${{ secrets.TEST_TOKEN }}
```

## Inputs

| Input               | Type    | Description | Default |
|---------------------|---------|-------------|---------|
| `config`            | String  |"Path to wrangler.toml config file|         |
| `command`           | String  |The Wrangler command you wish to run. For example: \"publish\" - this will publish your Worker|         |
| `environment`       | String  |The environment you'd like to publish your Workers project to - must be defined in wrangler.toml|         |
| `failMissingSecret` | Boolean |Boolean input to fail the job if a secret value is not set| true    |
| `secrets`           | List    |A new line delimitated string of environment variable names that should be configured as Worker secrets|
| `wranglerVersions`  | String  |The version of Wrangler you'd like to use to publish your project|
| `workingDirectory`  | String  |"The relative path which Wrangler commands should be run from"| `.`     |

## Example

```yaml
- name: Different Environment
  uses: ./action
  with:
    environment: staging
  env:
    HELLO: ${{ secrets.HELLO }}
    CF_ZONE_ID: ${{ secrets.ZONE_ID }}
    CLOUDFLARE_ACCOUNT_ID : ${{ secrets.ACCOUNT_ID }}
    CLOUDFLARE_API_TOKEN: ${{ secrets.API_TOKEN }}
```

## Issues

If you run into any problems then please open an [issue](https://github.com/Cyb3r-Jak3/wrangler-action/issues/new/choose). I will continue to update documentation and troubleshooting as needed.
