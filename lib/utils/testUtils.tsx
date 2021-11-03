import { render, RenderOptions } from '@testing-library/react';
import AppContextProvider from 'components/AppContextProvider';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
