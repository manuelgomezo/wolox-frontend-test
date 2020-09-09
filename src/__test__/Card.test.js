import React from 'react';
import { screen, render } from '@testing-library/react';

import { Card } from 'Components';

describe('Card', () => {
  it('should render Card correct component', async () => {
    render(<Card>Testing component</Card>);
    const textLabel = await screen.findByText('Testing component');
    expect(textLabel).toBeInTheDocument();
  });
});
