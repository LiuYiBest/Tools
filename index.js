const options = program.opts();

program
    .option('-x, --xxx', 'the xxx')
//子命令
program
    .command('clone <source> [destination]')
    .description('clone a repository into a newly created directory')
    .action((source, destination) => {
        console.log('clone command called');
    });

program.parse(process.argv);

