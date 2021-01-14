# token-copypaste
Token copy paste from swagger api

# Install
```
npm install -g token-copypaste
```
create files in folder user named .gettoken_copypaste:
1. create credential.js: parameter options --user <type user>
   ```
   {
       <type user>:{
           "email": "",
           "password: ""
       }
   }
   ```
2. config.js: parameter options --env <enviroment> [dev, int, pre, pro]
   ```
   {
       <enviroment>:{
           host: "localhost",
           port: 3000
       }
   }
   ```
Is used for construct url and json request method post:
```
<host>:<port>/path{body: credential}
```

# Use

```
token --env dev --user admin
```
# dependencies
* axios
* clipboardy
* dotenv
* yargs