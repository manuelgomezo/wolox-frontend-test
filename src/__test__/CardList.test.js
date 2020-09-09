import React from 'react';
import { screen, render } from '@testing-library/react';

import { CardList } from 'Components';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: (key) => key }),
}));

describe('CardList', () => {
  it('should render CardList correct component', async () => {
    render(<CardList data={[]} />);
  });

  it('should render a Card into CardList with some text', async () => {
    render(<CardList data={[{ tech: 'OnlyOnTheTest' }]} />);
    const textLabel = await screen.findByText('OnlyOnTheTest');
    expect(textLabel).toBeInTheDocument();
  });
});
