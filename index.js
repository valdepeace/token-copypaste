const dotenv = require('dotenv');

const clipboardy = require('clipboardy');
const fs = require('fs');
const getToken = require('./lib/getToken');
const argv = require('./arguments');
const os = require('os');
const homedir = os.homedir() + '/.token_copypaste'
if(process.env.NODE_ENV === 'development'){
    const config = require('./config');
    const credential = require('./credential');
    dotenv.config();
}else{
    if(!fs.existsSync(homedir)){
        fs.mkdirSync(homedir);
        console.log('Created directory .token_copypaste in home user')               
    }    
    if(!fs.existsSync(homedir + '/credential.js')){
        fs.copyFileSync('./examples/credential_example.js', homedir + '/credential.js' );
        console.log('modified files in folder <user>./token_copypaste: credential.js')        ;
    }
    if(!fs.existsSync(homedir + '/config.js')){
        fs.copyFileSync('./examples/config_example.js', homedir + '/config.js' );
        console.log('modified files in folder <user>./token_copypaste: config.js');
    }
    if(!fs.existsSync(homedir + '/.env')){
        fs.copyFileSync('./examples/env_example', homedir + '/.env' );
        console.log('modified files in folder <user>./token_copypaste: .env');
    }
    dotenv.config({
        path: homedir + "/.env",
        //encoding: "utf8",
        //debug: true
    });    
}

const credential = require(homedir + '/credential');        
const config = require(homedir + '/config');


const url = new URL('https://localhost:3000');

/************ config url *****************/
const env = config[argv.env];
url.hostname = env.host || 'localhost';
url.port = env.port || 3000;
url.pathname = '/users/login'

/************ config credential *****************/
const cre = credential[argv.user]

/************ custom host and port *****************/
if(argv.host !== undefined)
    url.host = argv.host
if(argv.port !== undefined)
    url.port !== argv.port
if(argv.https)
    url.protocol = 'https'

console.log('Url get token: %s', url.href)

const token = getToken(url.href, cre).then((res)=>{    
    clipboardy.writeSync(res.data.token);
    if(res.data !== undefined && res.data.token !== undefined)
        console.log('Token copy in clipboard: %s', res.data.token);
}).catch(err=>{
    console.log(err);
})
