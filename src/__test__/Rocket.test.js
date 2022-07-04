import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/pages/Rockets/Rocket';

describe('Rockets Page Tests', () => {
  test('Rockets Components Renders Correctly in DOM', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.queryByText(/Missions/)).toBeNull();
  });
  it('correctly rendered', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
