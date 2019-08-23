export function Components (element) {
    this._element = element;
}
Components.prototype.hide = function () {
    this._element.setAttribute('hidden', true)
};
Components.prototype.show = function () {
    this._element.setAttribute('hidden', false);
};