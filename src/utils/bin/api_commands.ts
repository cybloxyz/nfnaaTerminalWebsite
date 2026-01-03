// // List of commands that require API calls

import { getProjects } from '../api';
import { getRandomQuote } from '../api';
//import { getQuote } from '../api';
//import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-light-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

//export const quote = async (args: string[]): Promise<string> => {
//const data = await getQuote();
//return data.quote;
//};

//export const readme = async (args: string[]): Promise<string> => {
//const readme = await getReadme();
//return `Opening GitHub README...\n
//${readme}`;
//};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

export const wrapQuote = (text: string, maxWords: number = 8): string => {
  const words = text.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i] + ' ';
    if ((i + 1) % maxWords === 0) result += '\n'; // Tambah baris baru
  }
  return result.trim();
};

export const quote = async (args: string[]): Promise<string> => {
  const randomQuote = getRandomQuote();
  return `"${wrapQuote(randomQuote.text)}" - ${randomQuote.author}`;
};
