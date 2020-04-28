export const EXPECTED_ITEM = {
  name: 'Alicia Keys',
  single: 'Underdog',
  rating: 5,
  coverUrl: 'https://i.ibb.co/9NfsZgQ/alicia-keys.jpg',
  color: '#2A8EB0'
};

export const EXPECTED_RESPONSE = {
  errorCode: null,
  errorMessage: null,
  body: [
    {
      name: 'Alicia Keys',
      single: 'Underdog',
      rating: 5,
      coverUrl: 'https://i.ibb.co/9NfsZgQ/alicia-keys.jpg',
      color: '#2A8EB0'
    },
    {
      name: 'Ariana Grande',
      single: 'Put Your Hearts Up',
      rating: 7,
      coverUrl: 'https://i.ibb.co/fxKWK1G/ariana-grandes.jpg',
      color: '#D29602'
    },
    {
      name: 'Beyoncé',
      single: 'Single Ladies',
      rating: 9,
      coverUrl: 'https://i.ibb.co/FzH8DSS/beyonce.jpg',
      color: '#2B5583'
    }
  ]
};
