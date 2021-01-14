const yargs = require('yargs');

const enviroment = yargs
.options({'host':{
    alias: 'h',
    description: 'host',
    type: 'string'
},
'port':{
    alias: 'p',
    description: 'port',
    type: 'number'
},
'https': {
    alias: 'hs',
    description: 'https',
    type: 'boolean',
    //required: true
},
'user': {
    alias: 'u',
    description: 'credential: admin(000), manager(999)',
    type: 'string',
    choice: ['admin', 'manager'],
    required: true
},
'env':{
    alias: 'e',
    description: 'enviroment: local, dev, int, pre, pro',
    type: 'string',
    choice: ['local', 'dev', 'int', 'pre', 'pro'],
    required: true
}
})
.help()
.alias('help', 'h')
.argv;
module.exports = enviroment;