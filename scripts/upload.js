const ora = require('ora');
const config = require('./config/upload-config.json');

function deployDev() {
  const spinner = ora('Upload to aid dev server.');
  const SftpUpload = require('sftp-upload');
  const sftp = new SftpUpload(config.sftpOtopns);
  sftp
    .on('connect', function () {
      spinner.start();
    })
    .on('completed', function () {
      spinner.succeed('Completed dev server upload!!!');
    })
    .on('error', function (err) {
      spinner.fail('Failed upload...');
      throw err;
    })
    .upload();
}

deployDev();
