import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = (difference, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(difference);
    case 'plain':
      return plain(difference);
    case 'json':
      return json(difference);
    default:
      throw new Error(`This format is not supported: '.${formatName}'. Please read the documentation and use the available formats`);
  }
};

export default formatters;
