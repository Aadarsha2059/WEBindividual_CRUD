// src/constants.tsx

// Book items array with updated image paths
export const bidItems = [
  {
    id: 1,
    link: '/assets/images/book_2.jpg',  // Path relative to public folder
    description: 'Book 1: Introduction to Programming',
    startingBid: 50,
  },
  {
    id: 2,
    link: '/assets/images/book_3.jpg',
    description: 'Book 2: Advanced Data Structures',
    startingBid: 75,
  },
  {
    id: 3,
    link: '/assets/images/book_4.jpg',
    description: 'Book 3: Web Development Basics',
    startingBid: 100,
  },
  {
    id: 4,
    link: '/assets/images/book_5.jpg',
    description: 'Book 4: Mastering Python',
    startingBid: 120,
  },
  {
    id: 5,
    link: '/assets/images/book_6.jpg',
    description: 'Book 5: Machine Learning 101',
    startingBid: 150,
  },
  {
    id: 6,
    link: '/assets/images/book_8.png',
    description: 'Book 6: Digital Marketing Guide',
    startingBid: 200,
  },
  {
    id: 7,
    link: '/assets/images/book_9.jpg',
    description: 'Book 7: The Art of Graphic Design',
    startingBid: 250,
  },
  {
    id: 8,
    link: '/assets/images/book_10.png',
    description: 'Book 8: Data Science for Beginners',
    startingBid: 300,
  },
  {
    id: 9,
    link: '/assets/images/book_11.jpg',
    description: 'Book 9: Introduction to Cybersecurity',
    startingBid: 350,
  },
  {
    id: 10,
    link: '/assets/images/devkotapoems.png',
    description: 'Book 10: Devkota Poems Collection',
    startingBid: 400,
  },
  {
    id: 11,
    link: '/assets/images/doshichasma.png',
    description: 'Book 11: Doshichasma',
    startingBid: 450,
  },
  {
    id: 12,
    link: '/assets/images/bhagwatgeeta.png',
    description: 'Book 12: Bhagwat Geeta',
    startingBid: 500,
  },
  {
    id: 13,
    link: '/assets/images/sumnina.png',
    description: 'Book 13: Sumnima by Hari Bansha Acharya',
    startingBid: 550,
  },
];

// Users array with updated user image paths
export const auctionParticipants = [
  { id: 'bisnu', name: 'Bisnu', image: '/assets/images/bisnhu.png.jpeg' },
  { id: 'ritesh', name: 'Ritesh', image: '/assets/images/ritesh.png' },
  { id: 'gaurva', name: 'Gaurav', image: '/assets/images/gaurav.png' },
  { id: 'uttam', name: 'Uttam', image: '/assets/images/uttam.png' },
  { id: 'chirayu', name: 'Chirayu', image: '/assets/images/chirayu.png' },
  { id: 'suraj', name: 'Suraj', image: '/assets/images/suraj.png' },
  { id: 'anuj', name: 'Anuj', image: '/assets/images/anuj.png' },
];

// Sample bid data for auction
export const sampleBids = [
  { participant: 'Bisnu', bid: 55 },
  { participant: 'Ritesh', bid: 80 },
  { participant: 'Gaurav', bid: 100 },
  { participant: 'Uttam', bid: 120 },
  { participant: 'Chirayu', bid: 130 },
  { participant: 'Suraj', bid: 150 },
  { participant: 'Anuj', bid: 160 },
  { participant: 'Bisnu', bid: 180 },
  { participant: 'Ritesh', bid: 200 },
  { participant: 'Gaurav', bid: 220 },
];

export const defaultWinner = { bid: 220, user: 'Gaurav' };
