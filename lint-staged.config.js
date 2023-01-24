/* eslint-disable no-undef */
module.exports = {
  '**/*.{md,json}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'package.json': ['format-package -w'],
};
