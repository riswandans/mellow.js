## Intro

Mellow.js is a micro-framework javascript library for building static web application.

### Features

- Structured
- Routing
- Views
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
    // Set Title
    setTitle("Hello World");
}

// Load 'main' function when document page ready
ready(main);
```