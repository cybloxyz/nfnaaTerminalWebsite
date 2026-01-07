// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

//foldersystem
//files
const foldersystem = {
  home: {
    'README.md': `hello welcome to my terminal website! take a look around and have fun! 
                  wanna open the secretfolder? go search the clue`,
    someofme: {
      secretfolder: {
        myfavpic: {
          'smileeww.png': `/pic/smileeww.png`,
          'sylchibi.png': `/pic/sylchibi.png`,
          'sylus.png': `/pic/sylus.png`,
          'syluss.png': `/pic/syluss.png`,
          'whh.png': `/pic/whh.png`,
        },
        'topsecret.txt': `lemme tell you something..but only if you the top 3! but HEY WAIT A MINUTE NOT NOW I STILL WORK ON THE CODE!`,
      },
      'me.txt': `'This is some info about me'`,
      favorite: {
        'from-day-zero-to-zero-day.pdf': '/doc/fdztzd.pdf',
        'serious-cryptography.pdf': '/doc/seriouscryptography.pdf',
        'art-of-exploitation.pdf': '/doc/artofexploitation.pdf',
        'organic-chemistry.pdf': '/doc/organic-chemistry.pdf',
        'clue.txt': `JVKE best song, different song, but the same words`,
      },
    },
    pictures: {
      'nothing.txt': `hmmmmmmmm HE IS...IF YOU KNOW YOU KNOW`,
      'sailor-ducky.stl': `https://www.printables.com/model/1525661-sailor-ducky`,
      'cutie.png': `/pic/cutie.png`,
      'mephistoo.png': `/pic/mephistoo.png`,
    },
  },
};

let currentPath = ['home'];
let isUnlocked = false;

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
    return 'returned to home sweetie!';
  }

  const target = args[0];

  if (target === '..' || target === '../') {
    if (currentPath.length > 1) {
      currentPath.pop();
      return `moved to /${currentPath.join('/')}`;
    } else {
      return 'where you wanna go huh? it is in root already!';
    }
  }

  if (target === '.') {
    return '';
  }

  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });
  if (target === 'secretfolder' && !isUnlocked) {
    return `Access Denied: secretfolder is locked. Use 'unlock [password]' to open it.`;
  }
  if (currentDir[target] && typeof currentDir[target] === 'object') {
    currentPath.push(target);
    return 'moved to ' + currentPath.join('/');
  } else {
    return `cd: no such file or directory: ${target}`;
  }
};

//unlock
export const unlock = async (args: string[]): Promise<string> => {
  const desc = 'to unlock the secretfolder!. Usage: unlock [password]';
  const secretcode = 'tillifoundher';
  if (args.length === 0) {
    return `Usage: unlock [secret_code]`;
  }
  const code = args[0];
  if (code === secretcode) {
    let currentDir: any = foldersystem;
    currentPath.forEach((p) => {
      currentDir = currentDir[p];
    });
    isUnlocked = true;
    return `Secret folder unlocked! You can now access 'someofme/secretfolder' uhh..how you get this? ik hardcoded..`;
  } else {
    return `Incorrect secret code. Access denied lol.`;
  }
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(` `);
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
\nType 'man [command]' for more explanation.
`;
};

const manual = {
  banner: `
to show welcome page. 

Usage: banner`,
  bing: `
just search something with bing. 
  
Usage: bing [searching]`,
  cat: `
wanna read the text? use cat. 
  
Usage: cat [filename]`,
  catpdf: `
you can't read pdf with cat, use catpdf. 
    
Usage: cat [filename.pdf]`,
  cd: `
exploring? you need cd then, use it to enter or exit the directory. 
  
Usage: cd [directory], cd .. or cd ../`,
  date: `
make sure you already in present, touch the grass now what time is it. 
  
Usage: date`,
  duckduckgo: `
not sure with bing? try duckduckgo. 
  
Usage: duckduckgo [searching]`,
  echo: `
it just give back what you write, just try it. 
  
Usage [your text]`,
  email: `
it is my email, what do you want to mail?. 
  
Usage: email`,
  github: `
my github! just check it btw.
  
Usage: github`,
  google: `
what? just google it. 
  
Usage: google [searching]`,
  help: `
need help? just ask!. 
  
Usage: help`,
  linkedin: `
yo this is my linkedin, let's make connection!. 
  
Usage: linkedin`,
  ls: `
need to know what is in here? use this. 
  
Usage: ls`,
  man: `
here you are using me. 
  
Usage: man [command]`,
  projects: `
yoo my github projects. 
  
Usage: projects`,
  pwd: `
lost somewhere? didn't now where you are? use this. 
  
Usage: pwd`,
  quote: `
having bad day?...sucks, i'll give you a motivation then. 
  
Usage: quote`,
  reddit: `
no google, no duckduckgo, no bing? then use reddit. 
  
Usage: reddit [searching]`,
  repo: `
his website repo, thanks to cveinnt for such cool beginning. 
  
Usage: repo`,
  resume: `
you want to hire me?! then check my resume gorgeous. 
  
Usage: resume`,
  sudo: `
super user, even you'll never be super hahaha just try it. 
  
Usage: sudo`,
  sumfetch: `
sum of my identity and social media maybe. 
  
Usage: sumfetch`,
  unlock: `
use it to unlock secret folder...somewhere in directory. 
  
Usage: unlock [password]`,
  vim: `
just type and see. 
  
Usage: vim`,
  weather: `
do you even go outside? go check the weather!. 
  
Usage: weather`,
  whoami: `
doubt about yourself? ask then. 
  
Usage: whoami`,
  view: `
wanna see picture? use this.

Usage: view [filename.png]`,
  goto: `
for seeing non-pdf, non-txt or non-picture format btw.

Usage: goto [filename]`,
};

//man
export const man = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: man [command]';
  }

  const command = args[0];
  let c: any = manual;

  if (typeof c[command] === 'string') {
    return c[command];
  } else {
    return `man: there is no man for ${command}`;
  }
};

//view
export const view = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: view [filename.png]';
  }

  const filename = args[0];

  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });

  const file = currentDir[filename];

  if (file) {
    if (
      typeof file === 'string' &&
      (file.match(/\.(png|jpe?g|webp)$/i) || file.startsWith('http'))
    ) {
      window.open(file, '_blank');
      return `opening ${filename}...`;
    }
    return `can't open ${filename}, is it png or jpg?`;
  }
  return `view: ${filename} no such png or jpg file`;
};

//goto
export const goto = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: goto [filename.stl]';
  }

  const filename = args[0];

  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });

  const file = currentDir[filename];

  if (file) {
    if (typeof file === 'string' && file.startsWith('http')) {
      window.open(file, '_blank');
      return `opening ${filename}...`;
    }
    return `can't open ${filename}, maybe invalid`;
  }
  return `goto: ${filename} no such works`;
};

//pdf
export const catpdf = async (args: string[], cmd: string): Promise<string> => {
  const filename = args[0];

  let currentDir: any = foldersystem;
  currentPath.forEach((p) => {
    currentDir = currentDir[p];
  });

  const file = currentDir[filename];

  if (file) {
    if (
      typeof file === 'string' &&
      (file.startsWith('http') || file.endsWith('.pdf'))
    ) {
      window.open(file, '_blank');
      return `opening ${filename}...`;
    }
    return `File ${filename} is not readable`;
  }
  return `catpdf: ${filename} no such pdf file`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
//export const donate = async (args: string[]): Promise<string> => {
//return `thank you for your interest.
//here are the ways you can support my work:
//- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
//- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
//`;
//};

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

  return 'i am not ready..wait until i personalized my linkedin haha';
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

export const vim = async (args: string[]): Promise<string> => {
  return `forget it, i use vscode`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: what power do you expect to have huh?`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

                         ִֶָ. ..🍷𓂃 ࣪ ִֶָ🐦‍⬛་༘࿐

░███     ░███   ░███████████   ░███     ░███     ░████████       ░████████ 
░██████  ░███   ░███           ░██████  ░███    ░███   ░███     ░███   ░███
░███ ░███░███   ░███           ░███ ░███░███   ░███     ░███   ░███     ░███
░███  ░██████   ░█████████     ░███  ░██████   ░████████████   ░████████████
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███
░███     ░███   ░███           ░███     ░███   ░███     ░███   ░███     ░███ 

ciao! welcome to nfnaa terminal website

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
