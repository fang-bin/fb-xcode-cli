#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
program
  .version('1.0.0')
  .option('-i, init [name]', '初始化fb-xcode项目')
  .parse(process.argv);

if (program.init) {
  const spinner = ora('正在从github下载fb-xcode').start();
  download('fang-bin/xcode-cli', program.init, function (err) {
    if (!err) {
      console.info(chalk.blueBright('下载成功'));
    } else {
      console.log(err);
    }
  })
}
