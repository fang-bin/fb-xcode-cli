#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs');
program
  .version('1.0.0')
  .option('-i, init [name]', '初始化fb-xcode项目')
  .parse(process.argv);

if (program.init) {
  const spinner = ora('正在从github下载fb-xcode').start();
  download('fang-bin/xcode-cli', program.init, function (err) {
    if (!err) {
      spinner.succeed('下载成功，可以开始coding');
      // console.info(chalk.blueBright('下载成功'));

      fs.readFile(`${process.cwd()}/${program.init}/package.json`, (err, data) => {
        if (err) throw err;
        let _data = JSON.parse(data.toString())
        _data.name = program.init
        _data.version = '1.0.0'
        let str = JSON.stringify(_data, null, 4);
        fs.writeFile(`${process.cwd()}/${program.init}/package.json`, str, function (err) {
          if (err) throw err;
        })
      });
    } else {
      // console.log(err);
      spinner.fail('下载失败');
    }
  })
}
