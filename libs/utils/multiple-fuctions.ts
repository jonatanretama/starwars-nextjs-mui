import axios from 'axios';
import fs from 'fs';
import { TypesSwapi } from '@models';

export const downloadImage = async (url: string, path: string) => {
  axios({
    method: 'get',
    url,
    responseType: 'stream',
  }).then(response => {
    response.data.pipe(fs.createWriteStream(path));
  });
};

// TODO: Specs for coverage
export const saveJson = (newData: any, type: TypesSwapi) => {
  const filePath = `libs/mocks/swapi-data/${type}.json`;
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  data.push(...newData);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

export const selectRandom = () => {
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
  ];
  const randomNumber = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomNumber];
};
