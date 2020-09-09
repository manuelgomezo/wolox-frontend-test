import React from 'react';
import { render, screen } from '@testing-library/react';
import { create, act } from 'react-test-renderer';

import { TechList } from 'Pages';
import Wolox from 'Services/Wolox';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
// }));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
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
    // const card = screen.getByText(/Manuel Testing/i);
  });
});

describe('TechList getList error response', () => {
  beforeAll(() => {
    Wolox.getList = jest.fn(() => {
      return new Promise((res) => {
        res([null, new Error('Testing error')]);
      });
    });
  });

  it('should render TechList error component', () => {
    let root;
    act(() => {
      root = create(<TechList />);
    });
    expect(root).toThrow(TypeError);
  });
});
