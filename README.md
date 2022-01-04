## Table of contents
* [General Info](#general-info)
* [Setup](#setup)
* [Planed features](#planned-features)

## General Info 
This project is ment as a blueprint for a simple singlepage webapplication, with the feel of a multipageapplication.
For the multipageapplication feeling there is a build in router for the frontend, which is really easy to [use](#frontend).

## Setup
* [Dockercontainer](#dockercontainer)
* [Express](#express)
* [Frontend](#frontend)
* [Configure Ngnix](#configure-ngnix)

## Dockercontainer

## Express
Create a ".env" file in your root directory "/blueprint_webpage/.". Specify the port for the webservice to run (for example PORT=3333):
```
PORT=3333
```
To start the application write:
```
npm start
```
## Frontend
The header and the footer of the webpage are static. The only content which will rerender depending on the route, is the section of the body with the id "app-container". THe implemented views will 
* [Routes](#routes)
* [Views](#views)
* [Javascript for views](#javascript-for-views)
* [Navigation](#navigation)

## Routes
in /public/index.html specify the links like this
```html
<a class="nav-item" href="/" data-link>plugins</a>
<a class="nav-item" href="/info" data-link>info</a>
```
to render a view for the specified routes add the following to "/public/static/index.js" to the router
```javascript
const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/info", view: Info}
    // { path: "/plugins", view: Plugins }
    // { path: "/plugins/:id", view: Plugin }
  ];
```
import also the routes in the same file to use them
```javascript
// views
import Home from "./views/Home.js";
// import Plugins from "./views/Plugins.js";
// import Plugin from "./views/Plugin.js";
import Info from "./views/Info.js";
```

## Views
To create a view place a new javascript file under "blueprint_webpage/public/static/views/(Home.js)"
Your View can look like the following:
```javascript
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home"); // set the title in the browser
  }

  async getHtml() {
    return `
      <div>Hello from home</div>
    `;
  }
}
```

## Javascript for views
When a view gets loaded, you need something like a trigger to use javascript to modify the contents of the view. 
To do this you can execute for example function after rendering the view.
Add the following code in "/public/static/index.js" 
```javascript
document.querySelector("#app").innerHTML = await view.getHtml(); // add the following after this line

// execute a function depending on the view
  if (location.pathname === "/") 
    alert("hello, i am an alert in home")
```

## Navigation
If you stick to the layout of the navigation in the header, you can use the build in burger button, which will appear at smaller screen sizes. Use "data-link" like in the examples of the links in router, to prevent the site from reloading
```html
<a class="nav-item" href="/" data-link>plugins</a>
<a class="nav-item" href="/info" data-link>info</a>
```

## Configure Ngnix
install nginx and certbot
in sites-available create a new file (for example "mysite")
and point to the file in sites-enabled
your configuration can look like the following
```nginx
server {
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://localhost:3333;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
```
replace "yourdomain.com" and "www.yourdomain.com" with your domain names.
add a "A" record in your DNS settings of your Domainprovider and enter the IP-Address of your server.

cerbot will automatically sign your ssl certificate. To do so enter the following into your console:
```
certbot --nginx
```
enter the number of your domains which you will sign. Cerbot will add the necessery lines into your sites-available config.

## Planed for the future
* Webpack integration
