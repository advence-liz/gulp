var argv = require('argv');
argv.option([
    {
        name: 'option',
        type: 'csv,int'
    },
    {
        name: 'path',
        short: 'P',//区分大小写
        type: 'list,path'
    }
]);
console.dir(argv.run());