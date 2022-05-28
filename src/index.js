import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getFileData = (filepath) => {
  const fileData = fs.readFileSync(getPath(filepath), 'utf8');
  return JSON.parse(fileData);
};

const getDifference = (obj1, obj2, replacer = ' ', spaceCount = 2) => {
  const uniqKeys = _.union(_.keys(obj1), _.keys(obj2));
  const currentSpace = replacer.repeat(spaceCount);
  const lines = _.sortBy(uniqKeys)
    .map((key) => {
      const key1 = _.has(obj1, key);
      const key2 = _.has(obj2, key);
      const value1 = obj1[key];
      const value2 = obj2[key];
      if (!key1) {
        return [`+ ${key}: ${value2}`];
      }
      if (!key2) {
        return [`- ${key}: ${value1}`];
      }
      if (_.isEqual(value1, value2)) {
        return [`  ${key}: ${value1}`];
      }
      if (!_.isEqual(value1, value2)) {
        return [`- ${key}: ${value1}`, `+ ${key}: ${value2}`];
      }
      throw new Error(`Unknown state: '${key}'!`);
    }).flat();
  const currentLines = lines.map((line) => `${currentSpace}${line}`);
  return ['{', ...currentLines, '}'].join('\n');
};

const genDiff = (filepath1, filepath2) => {
  const file1 = getFileData(filepath1);
  const file2 = getFileData(filepath2);
  return getDifference(file1, file2);
};

export default genDiff;
