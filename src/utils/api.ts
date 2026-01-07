import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

//export const getReadme = async () => {
//const { data } = await axios.get(config.readmeUrl);
//return data;
//};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

//export const getQuote = async () => {
//const { data } = await axios.get('https://api.quotable.io/random');
//return {
//quote: `“${data.content}” — ${data.author}`,
//};
//};

//alternatif quote random
export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  {
    text: "Life is what happens when you're making other plans.",
    author: 'John Lennon',
  },
  { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
  {
    text: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    text: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison',
  },
  {
    text: 'If you want to live a happy life, tie it to a goal, not to people or things.',
    author: 'Albert Einstein',
  },
  {
    text: 'Never let the fear of striking out keep you from playing the game.',
    author: 'Babe Ruth',
  },
  {
    text: 'Money and success don’t change people; they only amplify what is already there.',
    author: 'Will Smith',
  },
  {
    text: 'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  {
    text: 'Not how long, but how well you have lived is the main thing.',
    author: 'Seneca',
  },
  {
    text: 'In order to write about life first you must live it.',
    author: 'Ernest Hemingway',
  },
  {
    text: 'The big lesson in life, baby, is never be scared of anyone or anything.',
    author: 'Frank Sinatra',
  },
  {
    text: 'Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.',
    author: 'Attributed to various sources',
  },
  {
    text: 'Curiosity about life in all of its aspects, I think, is still the secret of great creative people.',
    author: 'Leo Burnett',
  },
  {
    text: 'Life is not a problem to be solved, but a reality to be experienced.',
    author: 'Soren Kierkegaard',
  },
  { text: 'The unexamined life is not worth living.', author: 'Socrates' },
  { text: 'Turn your wounds into wisdom.', author: 'Oprah Winfrey' },
  {
    text: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    author: 'Dolly Parton',
  },
  {
    text: 'Do all the good you can, for all the people you can, in all the ways you can, as long as ever you can.',
    author: 'Hillary Clinton',
  },
  {
    text: 'Don’t settle for what life gives you; make life better and build something.',
    author: 'Ashton Kutcher',
  },
  {
    text: 'Everything negative – pressure, challenges – is all an opportunity for me to rise.',
    author: 'Kobe Bryant',
  },
  { text: 'I like criticism. It makes you strong.', author: 'LeBron James' },
  {
    text: 'You never really learn much from hearing yourself speak.',
    author: 'George Clooney',
  },
  {
    text: 'Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.',
    author: 'Celine Dion',
  },
  {
    text: 'Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.',
    author: 'John F. Kennedy',
  },
  { text: 'Live for each second without hesitation.', author: 'Elton John' },
  {
    text: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    text: 'Life is really simple, but men insist on making it complicated.',
    author: 'Confucius',
  },
  {
    text: 'Life is a succession of lessons which must be lived to be understood.',
    author: 'Helen Keller',
  },
  {
    text: 'My mission in life is not merely to survive, but to thrive.',
    author: 'Maya Angelou',
  },
  {
    text: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
    author: 'Dr. Seuss',
  },
  {
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Life is short, and it is here to be lived.',
    author: 'Kate Winslet',
  },
  {
    text: 'The longer I live, the more beautiful life becomes.',
    author: 'Frank Lloyd Wright',
  },
  { text: 'Every moment is a fresh beginning.', author: 'T.S. Eliot' },
  {
    text: 'When you cease to dream you cease to live.',
    author: 'Malcolm Forbes',
  },
  {
    text: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    text: 'The best way to predict your future is to create it.',
    author: 'Abraham Lincoln',
  },
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
  {
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Zig Ziglar',
  },
  {
    text: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill',
  },
  {
    text: 'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
  },
  {
    text: 'no matter how hard is life, just do not stop',
    author: 'nfnaa',
  },
  {
    text: 'RARE QUOTES! look for someone who loves you like the president loves palm trees',
    author: 'indonesia',
  },
  {
    text: 'giving up? remember to 5 years rule in business',
    author: 'nfnaa',
  },
  {
    text: 'having a bad day? eat ice cream!',
    author: 'nfnaa',
  },
  {
    text: 'having issues with peoples? go search GPT, wait until there is AIscrapping',
    author: 'somwan',
  },
  {
    text: `you know you're in love when you can't fall asleep because reality is finally better than your dreams`,
    author: 'Dr.seuss',
  },
  {
    text: 'it is better to be hated for what you are than to be loved for what you are not',
    author: 'Andre Gide',
  },
  {
    text: 'and sometimes you love a person just because they feel like home',
    author: 'Bridget Jones Diary',
  },
  {
    text: 'try not. do, or do not. there is no try',
    author: 'star wars',
  },
  {
    text: 'after all, tomorrow is another day!',
    author: 'gone with the wind',
  },
  {
    text: 'look! Adventure is out there!',
    author: 'up',
  },
  {
    text: 'if you believe in yourself, with a tiny pinch of magic, all your dreams can come true!',
    author: 'Spongebob',
  },
  {
    text: 'you never know the true value of a moment until it becomes a memory',
    author: 'Spongebob',
  },
  {
    text: 'no one can change a person, but someone can be a reason for that person to change',
    author: 'Spongebob',
  },
  {
    text: 'stupidity is not a virus, but it sure is spreading like one',
    author: 'Sandy',
  },
  {
    text: 'i am absorbing his blows like i am made of some sort of spongy material!',
    author: 'Spongebob',
  },
  {
    text: 'a 5 letter of happiness, MONEY',
    author: 'Mr.Krabs',
  },
  {
    text: 'giving up is for rookies',
    author: 'Hercules',
  },
  {
    text: 'someone you not meet yet is loving you',
    author: 'somwan',
  },
];

export const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
