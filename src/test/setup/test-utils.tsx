import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth/context/AuthContext';
import type { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  initialAuthState?: {
    user: any;
    loading: boolean;
    error: string | null;
  };
}

async function customRender(
  ui: React.ReactElement,
  { 
    route = '/',
    initialAuthState = { user: null, loading: false, error: null },
    ...renderOptions 
  }: CustomRenderOptions = {}
) {
  window.history.pushState({}, 'Test page', route);

  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
      <BrowserRouter>
        <AuthProvider>
          {children}
        </AuthProvider>
      </BrowserRouter>
    );
  };

  const rendered = render(ui, { wrapper: AllTheProviders, ...renderOptions });

  // Wait for any effects to complete
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  return {
    user: userEvent.setup(),
    ...rendered,
  };
}

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
export { userEvent };