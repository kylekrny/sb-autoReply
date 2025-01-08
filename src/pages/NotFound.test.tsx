import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router';

describe('Not Found Page', async () => {
  it('renders properly', async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const option = screen.queryByText('404 page not found');
    expect(option).not.toBeNull;
  });
});
