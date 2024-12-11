```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../setup/test-utils';
import { SpecialtiesList } from '../../../components/tradesperson/SpecialtiesList';

describe('SpecialtiesList', () => {
  const specialties = ['Residential', 'Commercial', 'Emergency'];

  it('renders all specialties', () => {
    render(<SpecialtiesList specialties={specialties} />);
    
    const tags = screen.getAllByTestId('specialty-tag');
    expect(tags).toHaveLength(specialties.length);
    
    specialties.forEach(specialty => {
      expect(screen.getByText(specialty)).toBeInTheDocument();
    });
  });

  it('applies correct styling to specialty tags', () => {
    render(<SpecialtiesList specialties={specialties} />);
    
    const tags = screen.getAllByTestId('specialty-tag');
    tags.forEach(tag => {
      expect(tag).toHaveClass(
        'px-2',
        'py-1',
        'text-sm',
        'bg-gray-100',
        'text-gray-700',
        'rounded-full'
      );
    });
  });

  it('renders empty list when no specialties provided', () => {
    const { container } = render(<SpecialtiesList specialties={[]} />);
    const list = container.firstChild as HTMLElement;
    expect(list).toBeEmptyDOMElement();
  });

  it('maintains specialty order', () => {
    render(<SpecialtiesList specialties={specialties} />);
    
    const tags = screen.getAllByTestId('specialty-tag');
    tags.forEach((tag, index) => {
      expect(tag).toHaveTextContent(specialties[index]);
    });
  });
});
```