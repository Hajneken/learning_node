# Express

Framework for server wrapping functionality of node and adding some more

*environment variable* : global variable specific to the environment in which the code lives 

*middleware* : code that sits between two layers of software a.k.a. the software in the middle of 2 other software programs 

Static files: files that do not do anything except just sit on the server 

Express plugs in middleware between

> how to make middleware in express? 

`app.use()` takes `route` and `function`, the function is middleware:

```js
app.use('/', function(req,res,next){
    // the middleware code here 
    next(); // call the next middleware 
})
```

## Parsing HTTP request 

the request can be submitted in 3 ways:
* GET request via *query string*
* POST request via form encoded string 
* POST request as JSON

1. browser sends GET request:

```http
GET /?id=4&page=3 HTTP/1.1
Host: www.example.com
Cookie: username=testUser;name=Hynek
```

2. we are interested in `/?id=4&page=3`

*query string*: the part after `?`

POST request via form:

```http 
POST / HTTP/1.1
Host: www.example.com 
Content-Type: application/x-www-form-urlencoded 
Cookie: num=4;page=2

username=Hynek&password=pwd 
```

the fact it is used by form is indicated by `application/x-www-form-urlencoded`
meaning the content of the request moved to BODY

3. POST request with json:

```http
POST / HTTP/1.1
Host: www.example.com
Content-Type: application/json
Cookie: num=4;page=2

{
    "username":"Hynek",
    "password":"pwd"
}
```
## Architecture

> organizing the code as the app gets bigger 

e.g. MVC (Model View Controller)

- Controller can be thought of are as routes and their handling 
  - e.g.: `app.get('/person', handlePerson())`
- View is a React or MJS template that triggered controller in the first place
- Model is database which Controller accesses, rendering the resulting page 

there is an express generator for creating App (similar to Spring Boot)
