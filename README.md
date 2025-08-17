# RoastRoom-Frontend

This is the frontend for RoastRoom, built with Vue.js and Vite.

![Frontend Build](https://github.com/LzrBear/RoastRoom-Frontend/actions/workflows/frontend-build.yml/badge.svg?branch=main)

## Getting Started

1. Navigate to `RoastRoom-Frontend`
2. Install dependencies:
   ```shell
   npm install
   ```
3. Start the development server:
   ```shell
   npm run dev
   ```

4. Build for production:
    ```shell
    npm run build
    ```

## Requirements
- Node.js v20 or newer is recommended for compatibility with the latest Vite and plugins.

## CI/CD
This project includes a GitHub Actions workflow for automated builds. Ensure your workflow uses Node.js v20 or newer:
```yaml
         - name: Set up Node.js
            uses: actions/setup-node@v4
            with:
               node-version: '20'
```

## Troubleshooting
- If you see an error like `crypto.hash is not a function`, update Vite and @vitejs/plugin-vue to the latest versions and use Node.js v20 or newer.
- Remove `node_modules` and `package-lock.json`, then reinstall dependencies:
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm install
   ```

## Features
- View, create, and comment on posts
- Rate posts
- Responsive UI with modular Vue components

## Project Structure
- `src/components/`: Vue components
- `src/api/`: API abstraction
- `src/store/`: State management (Pinia)
- `src/router.ts`: Routing

## License
MIT
