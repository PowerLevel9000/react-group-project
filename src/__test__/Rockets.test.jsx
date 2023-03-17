import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Rockets from '../components/Rockets';

describe('Testing Rockets', () => {
  it('Sould render rockets', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
