/* Routing Function
* Example:
* route('/', 'index.html');
*/
var path = 'views';
var routes = {};
function route (path, templateId) {
    routes[path] = {templateId: templateId};
}

var view = null;
function router () {
    view = view || document.getElementById('view');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];
    if (view) {
        render('view', route.templateId);
    }
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);


/* Load Views Function 
 * This function for load and compile template
*/
function render (id, file) {
    var app = new XMLHttpRequest();
    app.open('GET', path + '/' + file, true);
    app.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
        document.getElementById(id).innerHTML = this.responseText;
    };
    app.send();
}

String.prototype.replaceAll = function(search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
}

function ready (func) {
    return window.addEventListener('load', func);
}

/* Template function */
class App {
    constructor() {
        
    }
    setTitle (name) {
        return document.title = name;
    }
    
    setBackground(color) {
        return document.body.style.backgroundColor = color;
    }
}