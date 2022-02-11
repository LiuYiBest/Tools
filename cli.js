const program = require('commander');

program
    .option('-x, --xxx', 'the xxx')
// 子命令
//添加任务
program
    .command('add')
    .description('添加一个任务')
    .action((...args) => {
        let  words = args.slice(0,-1).join(' ')
        console.log(words);
    });
//删除任务
program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        console.log('tasks');
    });

program.parse(process.argv);
console.log(program.xxx)

