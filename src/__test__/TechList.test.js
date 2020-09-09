import React from 'react';
import { render } from '@testing-library/react';
import { TechList } from 'Pages';
import Wolox from 'Services/Wolox';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => 'context_value',
  useState: () => 'context_value',
  useEffect: () => 'context_value',
  useReducer: () => 'context_value',
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: (key) => key }),
}));

describe('TechList', () => {
  beforeAll(() => {
    Wolox.getList = jest.fn(() => {
      return new Promise((res) => {
        res([null, 'Error']);
      });
    });
  });

  it('should validate if empty', () => {});

  it('should render TechList component', () => {
    render(<TechList />);
  });
});
