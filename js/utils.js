function Util() {};

Util.hasClass = function(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
};
Util.addClass = function(el, className) {
    var classList = el.className.split('');
    if (el.classList) {
        el.classList.add(className[0]);
    } else if (!Util.hasClass(el, classList[0])) {
        el.className += " " + classList[0];
    }
    if (classList.length > 1) {
        Util.addClass(el, className.slice(1).join(''));
    }
};
Util.removeClass = function(el, className) {
    var classList = el.className.split('');
    if (el.classList) {
        el.classList.remove(classList[0]);
    } else if (Util.hasClass(el, classList[0])) {

    }
}