import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/pages/Profiles/Profile';

describe('Profile Page Tests', () => {
  test('Profile Components Renders Correctly in DOM', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(screen.queryByText(/My Rockets/)).toBeTruthy();
    expect(screen.queryByText(/My Missions/)).toBeTruthy();
  });
  it('correctly rendered', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
