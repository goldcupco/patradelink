export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Tradesperson {
  id: string;
  name: string;
  trade: string;
  location: string;
  county: string;
  zipCode: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  yearsExperience: number;
  specialties: string[];
  phone: string;
  email: string;
  available: boolean;
  imageUrl: string;
  priceRange: '$' | '$$' | '$$$';
  responseTime: string;
}

export const tradespeople: Tradesperson[] = [
  {
    id: '1',
    name: 'John Smith',
    trade: 'Electrician',
    location: 'Philadelphia',
    county: 'Philadelphia',
    zipCode: '19019',
    rating: 4.8,
    reviewCount: 127,
    yearsExperience: 15,
    specialties: ['Residential', 'Commercial', 'Solar Installation'],
    phone: '(215) 555-0123',
    email: 'john.smith@example.com',
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
    priceRange: '$$',
    responseTime: 'Usually responds within 1 hour',
    reviews: [
      {
        id: 'r1',
        userName: 'Michael R.',
        rating: 5,
        comment: 'John did an excellent job installing our new electrical panel. Very professional and knowledgeable.',
        date: '2024-02-15'
      },
      {
        id: 'r2',
        userName: 'Sarah T.',
        rating: 4,
        comment: 'Great work on the solar installation. Slightly delayed but kept us informed.',
        date: '2024-02-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    trade: 'Plumber',
    location: 'Pittsburgh',
    county: 'Allegheny',
    zipCode: '15201',
    rating: 4.9,
    reviewCount: 89,
    yearsExperience: 12,
    specialties: ['Emergency Repairs', 'Water Heaters', 'Pipe Installation'],
    phone: '(412) 555-0124',
    email: 'sarah.johnson@example.com',
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    priceRange: '$$$',
    responseTime: 'Usually responds within 30 minutes',
    reviews: [
      {
        id: 'r3',
        userName: 'David L.',
        rating: 5,
        comment: 'Sarah responded quickly to our emergency call and fixed the issue efficiently.',
        date: '2024-02-18'
      }
    ]
  },
  {
    id: '3',
    name: 'Mike Williams',
    trade: 'Carpenter',
    location: 'Harrisburg',
    county: 'Dauphin',
    zipCode: '17101',
    rating: 4.7,
    reviewCount: 156,
    yearsExperience: 20,
    specialties: ['Custom Cabinets', 'Deck Building', 'Renovations'],
    phone: '(717) 555-0125',
    email: 'mike.williams@example.com',
    available: false,
    imageUrl: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=400&h=300&fit=crop',
    priceRange: '$$',
    responseTime: 'Usually responds within 2 hours',
    reviews: [
      {
        id: 'r4',
        userName: 'Jennifer K.',
        rating: 5,
        comment: 'The custom cabinets Mike built are absolutely beautiful. Worth every penny!',
        date: '2024-02-12'
      }
    ]
  },
  {
    id: '4',
    name: 'Lisa Brown',
    trade: 'HVAC Technician',
    location: 'Allentown',
    county: 'Lehigh',
    zipCode: '18101',
    rating: 4.9,
    reviewCount: 73,
    yearsExperience: 8,
    specialties: ['AC Installation', 'Heating Systems', 'Maintenance'],
    phone: '(610) 555-0126',
    email: 'lisa.brown@example.com',
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
    priceRange: '$$',
    responseTime: 'Usually responds within 1 hour',
    reviews: [
      {
        id: 'r5',
        userName: 'Robert M.',
        rating: 5,
        comment: 'Lisa was very professional and got our AC working perfectly.',
        date: '2024-02-16'
      }
    ]
  },
  {
    id: '5',
    name: 'David Martinez',
    trade: 'Mason',
    location: 'Erie',
    county: 'Erie',
    zipCode: '16501',
    rating: 4.6,
    reviewCount: 94,
    yearsExperience: 18,
    specialties: ['Brick Work', 'Stone Walls', 'Concrete'],
    phone: '(814) 555-0127',
    email: 'david.martinez@example.com',
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1604084789058-73c16c1e0cd3?w=400&h=300&fit=crop',
    priceRange: '$$$',
    responseTime: 'Usually responds within 3 hours',
    reviews: [
      {
        id: 'r6',
        userName: 'Patricia H.',
        rating: 4,
        comment: 'Beautiful stonework on our garden wall. Very pleased with the result.',
        date: '2024-02-14'
      }
    ]
  }
];