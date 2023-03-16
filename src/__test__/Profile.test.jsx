import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../components/Profile';

describe('is Profile having reserve titles ', () => {
  const mockStore = configureStore([]);
  const initialState = {
    mission: {
      missions: [
        { id: 1, mission_name: 'Mission 1', isReserved: true },
        { id: 2, mission_name: 'Mission 2', isReserved: false },
        { id: 3, mission_name: 'Mission 3', isReserved: true },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('profile should render', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    const ProfileContainer = screen.getByTestId('Profile');
    expect(ProfileContainer).toBeInTheDocument();
  });

  test('Reserved missions should render', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    const ProfileContainer = screen.getAllByRole('heading');
    // two title headers
    expect(ProfileContainer.length).toBe(4);
  });
});
