import { render, screen } from '@src/test/test-utils';
import App from '@src/App';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/finnally/i)).toBeInTheDocument();
  });
});
