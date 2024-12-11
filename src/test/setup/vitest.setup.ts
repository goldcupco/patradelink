import '@testing-library/jest-dom';
import { expect, afterEach, beforeAll, afterAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect method
expect.extend(matchers);

beforeAll(() => {
  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock window.location
  Object.defineProperty(window, 'location', {
    writable: true,
    value: {
      href: '',
      assign: vi.fn(),
      replace: vi.fn(),
      reload: vi.fn(),
      pathname: '/',
      search: '',
      hash: '',
      origin: 'http://localhost:3000',
    },
  });
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  window.location.href = '';
});

afterAll(() => {
  vi.resetModules();
});