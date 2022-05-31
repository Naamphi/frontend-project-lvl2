import stylish from './stylish.js';

const format = (difference, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(difference);
    default:
      throw new Error(`This format is not supported: '.${formatName}'. Please read the documentation and use the available formats`);
  }
};

export default format;
