import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import ReactDOM from 'react-dom';

import App from './App';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => 'context_value',
}));

describe('App', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should validate if empty', () => {
    render(<App />);
  });
});
