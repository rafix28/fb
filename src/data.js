import user1 from './assets/user1.jpg';
import user2 from './assets/user2.jpg';
import user3 from './assets/user3.jpg';
import user4 from './assets/user4.jpg';
import post1 from './assets/post1.png';
import post2 from './assets/post2.png';

export const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', photo: user1, position: 'Designer' },
  { id: 2, name: 'Anisa Keena', email: 'john@example.com', photo: user2, position: 'SEO' },
  { id: 3, name: 'Lucile Felmlee', email: 'john@example.com', photo: user3, position: 'Developer' },
  { id: 4, name: 'Starr Shupp', email: 'john@example.com', photo: user4, position: 'Client' },
];

export const posted = [
  {
    id: 1,
    image: post1,
    likes: 52,
    comment: 2,
    share: 4,
    content: 'Nam malis menandri ea, facete debitis volumus est ut, commune placerat nominati ei sea. Labore alterum probatus no sed, ius ea quas iusto inermis, ex tantas populo nonumes nam. Quo ad verear copiosae gubergren, quis commodo est et.',
    author: users[0],
  },
  {
    id: 2,
    image: post2,
    likes: 77,
    comment: 4,
    share: 7,
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    author: users[1],
  },
];
