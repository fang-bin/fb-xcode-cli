var program = require('commander');
var download = require('download-git-repo');
var chalk = require('chalk');
var ora = require('ora');
program
  .version('1.0.0')
  .option('-i, init [name]', '初始化fb-xcode项目')
  .parse(process.argv);

if (program.init) {
  var spinner = ora('正在从github下载fb-xcode').start();
  download('fang-bin/xcode-cli', program.init, function (err) {
    if (!err) {
      console.info(chalk.blueBright('下载成功'));
    } else {
      console.log(err);
    }
  })
}
