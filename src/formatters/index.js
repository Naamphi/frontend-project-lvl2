import stylish from './stylish.js';
import plain from './plain.js';

const formatters = (difference, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(difference);
    case 'plain':
      return plain(difference);
    default:
      throw new Error(`This format is not supported: '.${formatName}'. Please read the documentation and use the available formats`);
  }
};

export default formatters;
