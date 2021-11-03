import Keypad from 'components/Keypad';
import { render, screen } from 'testUtils';

test.each([2, 3, 4, 5, 6, 7, 8, 9])(
  'should render numbers 2 to 9',
  (number) => {
    render(<Keypad />);
    const name = new RegExp(`^${number}`);
    expect(screen.getByRole('button', { name })).toBeVisible();
  },
);
