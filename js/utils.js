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
    }
};
Util.removeClass = function(el, className) {
    var classList = el.className.split('');
    if (el.classList)
        el.className.remove(classList[0]);
}
Util.toggleClass = function(el, className, bool) {
    if (bool) {
        Util.addClass(el, className);
    } else {
        Util.removeClass(el, className);
    }
}