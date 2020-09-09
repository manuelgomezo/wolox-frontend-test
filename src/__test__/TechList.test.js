import React from 'react';
import { screen, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'Locales/locales';

import { TechList } from 'Pages';
import { act } from 'react-dom/test-utils';

jest.mock('Services/Wolox', () => ({
  getList: () =>
    new Promise((res) => {
      const testObject = {
        tech: 'Manuel Testing',
      };
      res([[testObject], null]);
    }),
}));

describe('TechList getList correct response', () => {
  it('should render TechList correct component', async () => {
    await act(async () => {
      await render(
        <I18nextProvider i18n={i18n}>
          <TechList />
        </I18nextProvider>,
      );
      const textLabel = await screen.findByText('Manuel Testing');
      expect(textLabel).toBeInTheDocument();
    });
  });
});
