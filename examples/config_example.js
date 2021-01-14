module.exports = {
    "dev": {
        "host": process.env.ENV_DEV_HOST,
        "port": process.env.ENV_DEV_PORT
        
    },
    "int": {
        "host": process.env.ENV_INT_HOST,
        "port": process.env.ENV_DEV_PORT
    },
    "pre":{
        "host": process.env.ENV_PRE_HOST,
        "port": process.env.ENV_DEV_PORT
    },
    "pro":{
        "host": process.env.ENV_PRO_HOST,
        "port": process.env.ENV_DEV_PORT
    }    
}