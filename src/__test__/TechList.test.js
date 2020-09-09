import React from 'react';
import { render } from '@testing-library/react';
import { TechList } from 'Pages';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: (key) => key }),
}));

describe('TechList', () => {
  it('should validate if empty', () => {});

  it('should render TechList component', () => {
    render(<TechList />);
  });
});
