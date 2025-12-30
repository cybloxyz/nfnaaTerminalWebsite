// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

//foldersystem
//files
const foldersystem = {
  home: {
    'README.md': `'This is the README file.'`,
    about: {
      secretfolder: {},
      'info.txt': `'This is some info about me'`,
    },
    projects: {
      'project1.txt': `"Details about project 1."`,
      'project2.txt': `"Details about project 2."`,
    },
    pictures: {
      'picture1.png': `"This is picture 1."`,
      'picture2.png': `"This is picture 2."`,
    },
    music: {
      'song.mp3': `"This is a song file."`,
    },
  },
};

let currentPath = ['home'];

//ls
export const ls = async (args: string[]): Promise<string> => {
  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });
  const items = Object.keys(currentDir);
  return items.join('    ');
};

//cat
export const cat = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Usage: cat [filename]`;
  }
  const filename = args[0];
  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });

  if (typeof currentDir[filename] === 'string') {
    return currentDir[filename];
  } else if (typeof currentDir[filename] === 'object') {
    return `cat: ${filename}: Is a directory`;
  } else {
    return `cat: ${filename}: No such file or directory`;
  }
};

//pwd
export const pwd = async (args: string[]): Promise<string> => {
  return `/${currentPath.join('/')}`;
};

//cd
export const cd = async (args: string[]): Promise<string> => {
  if (args.length === 0 || args[0] === '~') {
    currentPath = ['home'];
    return 'hey! you just back to home';
  }

  const target = args[0];

  if (target === '..' || target === '../') {
    if (currentPath.length > 1) {
      currentPath.pop();
      return `moved to ${currentPath.join('/')}`;
    }
    return `where you wanna go huh? it is root directory already.`;
  }
  if (target === '.') {
    return '';
  }

  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });

  if (currentDir[target] && typeof currentDir[target] === 'object') {
    currentPath.push(target);
    return `moved to ${currentPath.join('/')}`;
  } else {
    return `cd: no such file or directory: ${target}`;
  }
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// echo
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

// whoami
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

░███     ░███   ░███████████   ░███     ░███     ░████████       ░████████ 
░██████  ░███   ░███           ░██████  ░███    ░███   ░███     ░███   ░███
░███ ░███░███   ░███           ░███ ░███░███   ░███     ░███   ░███     ░███
░███  ░██████   ░█████████     ░███  ░██████   ░████████████   ░████████████
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███ 

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
