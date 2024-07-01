import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const rsbuildConfig = defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: `/subpath/`,
  },
  html: {
    template: './public/index.html',
  },
});

export default rsbuildConfig;
