import cheerio from 'cheerio';
import axios from 'axios';
import { stringToSlug } from '@utils/string-to-slug';
import {
  selectRandom,
  downloadImage,
  saveJson,
} from '@utils/multiple-fuctions';
import { TypesSwapi } from '@models';

// TODO: Specs for coverage

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
    })
    .catch(error => {
      console.error(error);
    });
};

// get images with query param
export default (req: any, res: any) => {
  const { search, type } = req.query as { search: string; type: TypesSwapi };
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
