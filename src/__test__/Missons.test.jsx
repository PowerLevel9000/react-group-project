import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missons';
import store from '../redux/store';

test('is Missions is rendering', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  const MissonContainer = screen.getByTestId('missions');
  expect(MissonContainer).toBeInTheDocument();
});
