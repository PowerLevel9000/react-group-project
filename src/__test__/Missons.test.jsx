import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missons';

describe('Missions testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    mission: {
      missions: [
        { id: 1, name: 'Mission 1' },
        { id: 2, name: 'Mission 2' },
        { id: 3, name: 'Mission 3' },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('is no of rows are correct', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const missionRows = screen.getAllByRole('row');
    // since one is for heading
    expect(missionRows.length).toBe(initialState.mission.missions.length + 1);
  });
  test('is Missions container rendering', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const MissionsContainer = screen.getByTestId('missions');
    expect(MissionsContainer).toBeInTheDocument();
  });
});
