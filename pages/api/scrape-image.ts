import fs from 'fs';
import cheerio from 'cheerio';
import axios from 'axios';
import { stringToSlug } from '@utils/string-to-slug';
import { TypesSwapi } from '@models';

const downloadImage = async (url: string, path: string) => {
  axios({
    method: 'get',
    url,
    responseType: 'stream',
  }).then(response => {
    response.data.pipe(fs.createWriteStream(path));
  });
};

const saveJson = (newData: any, type: TypesSwapi) => {
  const filePath = `libs/mocks/swapi-data/${type}.json`;
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  data.push(...newData);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

const selectRandom = () => {
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

const getImagesData = (toSearch: string, type: TypesSwapi) => {
  const user_agent = selectRandom();
  const header = {
    'User-Agent': `${user_agent}`,
  };
  axios
    .get('https://www.google.com/search', {
      params: {
        q: toSearch,
        oq: toSearch,
        hl: 'en',
        tbm: 'isch',
        asearch: 'ichunk',
        async: '_id:rg_s,_pms:s,_fmt:pc',
        sourceid: 'chrome',
        ie: 'UTF-8',
      },
      headers: header,
    })
    .then(response => {
      const $ = cheerio.load(response.data);

      const images_results = [];
      const correctDiv = $($('div.rg_bx')[0]);
      const json_string = correctDiv.find('.rg_meta').text();

      images_results.push({
        nameToSearch: toSearch,
        title: correctDiv.find('.iKjWAf .mVDMnf').text(),
        source: correctDiv.find('.iKjWAf .FnqxG').text(),
        link: JSON.parse(json_string).ru,
        original: JSON.parse(json_string).ou,
        thumbnail: correctDiv.find('.rg_l img').attr('src')
          ? correctDiv.find('.rg_l img').attr('src')
          : correctDiv.find('.rg_l img').attr('data-src'),
      });

      downloadImage(
        images_results[0].original,
        `public/images/${type}/${stringToSlug(toSearch)}.jpg`
      );

      saveJson(images_results, type);
      console.log(images_results);
    })
    .catch(error => {
      console.log(error);
    });
};

// get images with query param
export default (req: any, res: any) => {
  const { search, type }: { search: string; type: TypesSwapi } = req.query;
  getImagesData(search, type);
  res.status(200).json({ message: 'image scrapped' });
};

// Example to scrape images on React component
// const handleClick = async () => {
//   data.data.results.map(async item => {
//     try {
//       await axios.get('/api/scrape-image', {
//         params: {
//           query: item.name,
//           type: 'people' as TypesSwapi,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   });
// };
