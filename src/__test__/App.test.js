import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import ReactDOM from 'react-dom';

import App from '../App';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => 'context_value',
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: (key) => key }),
}));

describe('App', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should validate if empty', () => {});

  it('should render App component', () => {
    render(
      <Router>
        <App />
      </Router>,
    );
  });
});
