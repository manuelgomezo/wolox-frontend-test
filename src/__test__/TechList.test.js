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

describe('TechList getList correct response', () => {
  beforeAll(() => {
    Wolox.getList = jest.fn(() => {
      return new Promise((res) => {
        const testObject = {
          tech: 'Manuel Testing',
        };
        res([[testObject], null]);
      });
    });
  });

  it('should render TechList correct component', () => {
    render(<TechList />);
  });
});

describe('TechList getList error response', () => {
  beforeAll(() => {
    Wolox.getList = jest.fn(() => {
      return new Promise((res) => {
        res([null, 'Error']);
      });
    });
  });

  it('should render TechList error component', () => {
    render(<TechList />);
  });
});
