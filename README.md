# Role Browse Singapore

## Local development

```powershell
npm install
npm run dev
```

The root `index.html` is the Vite source template and intentionally loads
`/src/main.tsx`. It must not be served directly in production.

## Production deployment on Plesk

1. Run `.\deploy.ps1` locally to build and push the latest `dist/`.
2. In **Plesk → Git → Additional deployment actions**, configure:

```sh
sh plesk-deploy.sh
```

3. Click **Deploy**.

The deployment script copies `dist/.` to `$HOME/httpdocs/`. Production must
serve the compiled `dist/index.html`, its `assets/`, and `.htaccess`; serving
the repository root causes a blank page because browsers cannot execute
`/src/main.tsx` directly.
