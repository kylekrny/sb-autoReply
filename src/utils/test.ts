import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import {
  createMemoryRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom';
import routerConfig from './router';

const renderWithRouter = (
  element: ReactElement,
  path = '/',
  secondRoute: RouteObject = { path: 'test', element },
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const { pathname } = new URL(`http://localhost:3000${path}`);

  const router = createMemoryRouter(
    [{ path: pathname, element: element }, secondRoute],
    {
      initialEntries: [path],
    },
  );

  return render(<RouterProvider router={router} />, { ...options });
};



export const renderWithFullRouter = (
  path = '/',
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [path],
  });

  return render(<RouterProvider router={router} />, { ...options });
};
