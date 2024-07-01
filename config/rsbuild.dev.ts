import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const rsbuildConfig = defineConfig({
  plugins: [pluginReact()],
  dev: {
    assetPrefix: `http://localhost:3000/subpath/`,
  },
  output: {
    assetPrefix: `http://localhost:3000/subpath/`,
  },
  html: {
    template: './public/index.html',
  },
  server: {
    port: 3000,
  },
});

export default rsbuildConfig;
