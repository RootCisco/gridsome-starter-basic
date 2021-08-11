const env = process.env.BUILD_ENV || 'prod';
const buildConf = require('../build.config');

const path = require('path');
const del = require('del');
const Zip = require('adm-zip');
const dayjs = require('dayjs');

const patterns = ['dist/**/.DS_Store', 'dist/404', 'dist/404.html'];

prepare();

async function prepare() {
  // delete 404, .DS_Store
  await del(patterns);

  // eslint-disable-next-line no-console
  console.log('Prepared dist...!!!');

  if (env !== 'dev') createZip();
}

function createZip() {
  const zip = new Zip();
  const date = dayjs().format('YYMMDD');

  const distPath = path.resolve(process.cwd(), '../zip');

  zip.addLocalFolder('./dist', buildConf[env].pathPrefix);
  zip.writeZip(`${distPath}/${env}_${date}.zip`);

  // eslint-disable-next-line no-console
  console.log('created zip file done.');
}
