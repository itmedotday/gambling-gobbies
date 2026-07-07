import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: true,
    projects: [
      {
        test: {
          name: 'engine',
          root: './packages/engine',
          environment: 'node',
          passWithNoTests: true,
        },
      },
      {
        test: {
          name: 'server',
          root: './apps/server',
          environment: 'node',
          passWithNoTests: true,
        },
      },
      {
        test: {
          name: 'web',
          root: './apps/web',
          environment: 'jsdom',
          passWithNoTests: true,
          include: ['src/**/*.test.{ts,tsx}'],
        },
      },
    ],
  },
});
