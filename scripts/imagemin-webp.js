const ora = require('ora');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

const spinner = ora('imagemin webp start');
const dirPath = 'src/assets/images';

(async () => {
  spinner.start();

  await imagemin([`${dirPath}/**/*.{jpg,png}`], dirPath, {
    plugins: [imageminWebp({ quality: 60 })]
  });

  spinner.succeed('🛠　Create webp optimized');
})();
