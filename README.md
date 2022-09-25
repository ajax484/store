# STORE API
## overview
This is the backend to that provides the api for an e-commerce store.

## Running project
you need to have node.js preinstalled.

### Install
``` 
npm install 
```

### Run the App
```
npm start
```
-----------
## REST API
The server is running on localhost port **7700**, the REST API to the app is described below:

### Request
requests are to be made in JSON format to `http:localhost:7700/api`.

### Response
All responses are of JSON format:
```
{
    message: String,
    data: Object
}
```


### Endpoints

##### Ping
**Ping request** 
`GET /ping/`

**Ping response**
###### Request OK- 200
```
{
    "msg": "hello world"
}
```

#### Authentication
##### Register
**Register request**
`POST /auth/register/`
```
{
  "email": "example@gmail.com",
  "password": "Password@123"
}
```

**Register response**
###### Request OK- 200
```
{
    "msg": "user is successfully saved"
}
```

##### Login
**Login request**
`POST /auth/login/`
```
{
  "email": "example@gmail.com",
  "password": "Password@123"
}
```

**Login response**
###### Request OK- 200
```
{
    "msg": "You have logged in successfully",
    "data": {
        "email": "example@gmail.com"
    }
}
```

##### Logout
**Logout request**
`DELETE /auth/logout/`

**Logout response**
###### Request OK- 200
```
{
    "msg": "Logout Success"
}
```
