---
description: Self-host the Worker
---

# Worker

Each time you click the "(Re-)Generate cache" button on the Winden settings page, Winden will create a Queue with the following payload:

```json
{
  "task": "generate_cache",
  "site": "https:\/\/your-site.com\/wp-json\/wakaloka_winden\/v1\/worker\/ping",
  "package": "...",
  "nonce": "...",
  "config": "...",
  "content": "...",
  "version": "...",
  "css": "..."
}
```

Once the Queue is created, Winden will send a `POST` request to the Worker to process the Queue. The Worker will then process the Queue, and Winden will send a `GET` request to the Worker periodically, to check if the Queue is being processed and done. When the Queue is done, Winden will fetch the result from The Worker and save it as a CSS file in the `wp-content/uploads/winden` directory.

The Worker is a service that consume your work to generate a tiny single cached CSS file for the entire website with less than 10KB.

## The Worker services

The Worker service consists of two parts:

- [The Queue Pool service](#queue-pool-service)
- [The Compiler service](#compiler-service)

Below is the diagram of the Worker service architecture:

![The Worker services](/img/diagram.png)

### The Queue Pool service {#queue-pool-service}

:::info
The Queue Pool service is hosted on [Hetzner](https://hetzner.cloud/?ref=J37mHc19fUpr). 
:::

The Queue Pool service is responsible in receiving the Queue request from the Winden plugin, scheduling the Queue, dispatching the `generate_cache` task to the Compiler service, and storing the result which the Winden plugin will fetch to generate the CSS file.

### The Compiler service {#compiler-service}

:::info
The Compiler service is hosted on [GitHub](https://docs.github.com/en/actions) server.
:::

The Compiler service is responsible in receiving the `generate_cache` task from the Queue Pool service, processing the task in a clean environment for each task, and sending the result back to the Queue Pool service.

The Compiler service does the actual process of generating the CSS.

## Self-host the Worker

The Worker service is free to use for everyone. However, if you want to host your Worker, this guidance will help you to do so.

The Worker is open-sourced and available on [GitHub](https://github.com/wakaloka/winden-worker).

### Prerequisites

- GitHub account
- Server with Docker installed

### Set Up the Compiler service

1. Download the Worker source code from [GitHub](https://github.com/wakaloka/winden-worker/archive/refs/heads/main.zip).
2. Publish the Worker source code to your GitHub account.
3. Set the repository visibility to `Private`.
4. Create a new [Personal Access Token](https://github.com/settings/tokens) with the following permissions:
    - `repo`
    - `workflow`

### Set Up the Queue Pool service

1. Download the Worker source code from [GitHub](https://github.com/wakaloka/winden-worker/archive/refs/heads/main.zip).
2. Upload the Worker source code to your server.
3. from the root directory of the Worker source code, run the following command:

```bash
SERVER_NAME=__WORKER_DOMAIN__ \
APP_SECRET=__APP_SECRET__ \
GITHUB_API_TOKEN=__GITHUB_PERSONAL_TOKEN__ \
WORKER_TOKEN=__WORKER_TOKEN__ \
WORKER_REPO_OWNER=__GITHUB_USERNAME__ \
WORKER_REPO_NAME=__GITHUB_REPOSITORY__ \
WORKER_REPO_REF=main \
CF_API_TOKEN=__CLOUDFLARE_API_TOKEN__ \
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up --build -d
```

The following lists are the descriptions of the placeholders on the commands above:

- `__WORKER_DOMAIN__` is the domain name of your Worker service. For example, `worker-1.your-domain.com`.
- `__APP_SECRET__` is the random string token used by the Queue Pool Service. 
- `__GITHUB_PERSONAL_TOKEN__` is the Personal Access Token created in the previous step.
- `__WORKER_TOKEN__` is the random string token used by the Compiler service to authenticate the request from and to the Queue Pool service.
- `__GITHUB_USERNAME__` is your GitHub username or organization name where the Worker source code is published.
- `__GITHUB_REPOSITORY__` is the repository's name where the Worker source code is published.
- `__CLOUDFLARE_API_TOKEN__` is the Cloudflare API Token to help automatically set up the SSL certificate for your Worker service.

:::tip
You can generate a random string by using the following command:

```bash
php -r "echo bin2hex(random_bytes(16));"
```
:::
