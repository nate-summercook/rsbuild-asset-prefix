import React from 'react';
import { createRoot } from 'react-dom/client';
import TestApp from './TestApp';

const mount = (el: Element): void => {
  const root = createRoot(el);
  root.render(<TestApp />);
};

const devRoot = document.querySelector('#rsbuild-example');
mount(devRoot);
