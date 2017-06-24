## Intro

Mellow.js is a micro-framework javascript library for building static web application.

### Features

- Structured
- Routing
- Views
- Local Storage
- Validator
- Fast & Reliable

### Example app.js
```js
/* Routing examples:
* route('/page', 'page.html');
* Result:
* http://127.0.0.1/#/page
*/
route('/', 'index.html');
route('/page', 'page.html');
route('/test', 'test.html');

function main() {
    // Load class App
    const app = new App();
    // Set Title
    app.setTitle("Hello World");
}

// Load 'main' function when document page ready
ready(main);
```
