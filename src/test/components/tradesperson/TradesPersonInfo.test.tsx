```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../setup/test-utils';
import { TradesPersonInfo } from '../../../components/tradesperson/TradesPersonInfo';
import { mockTradesperson } from '../../setup/mocks';

describe('TradesPersonInfo', () => {
  it('renders name and trade', () => {
    render(<TradesPersonInfo person={mockTradesperson} />);
    
    expect(screen.getByRole('heading')).toHaveTextContent(mockTradesperson.name);
    expect(screen.getByText(mockTradesperson.trade)).toBeInTheDocument();
  });

  it('displays rating stars', () => {
    render(<TradesPersonInfo person={mockTradesperson} />);
    const stars = screen.getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);
  });

  it('shows location and response time', () => {
    render(<TradesPersonInfo person={mockTradesperson} />);
    
    expect(screen.getByTestId('location')).toHaveTextContent(`${mockTradesperson.location}, PA`);
    expect(screen.getByTestId('response-time')).toHaveTextContent(mockTradesperson.responseTime);
  });
});
```