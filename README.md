## Intro

Mellow.js is a micro-framework javascript library for building static web application.

### Features

- Structured
- Routing
- Views
- Local Storage
- Validator
- Fast & Reliable

### Example hello world app.js 
```js
route('/', 'Hello World');

function main() {
    const app = new App();
    app.setTitle("Hello World");
}

ready(main);
```

### Example views app.js 
```js
route('/', 'index.html');
route('/page', 'page.html');
route('/test', 'test.html');

function main() {
    const app = new App();
    app.setTitle("Hello World");
}

ready(main);
```
