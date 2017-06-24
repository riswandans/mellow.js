/* Routing examples:
* route('/page', 'page.html');
* Result:
* http://127.0.0.1/#/page
*/
route('/', 'index.html');
route('/page', 'page.html');
route('/test', "test.html");

function main() {
    // Load class App and Set Title
    const app = new App();
    app.setTitle("Hello World");
}

// Load 'main' function when document page ready
ready(main);