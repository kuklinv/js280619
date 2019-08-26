export class Components  {
    constructor(element) {
        this._element = element;
    }
    hide() {
        this._element.setAttribute('hidden', true)
    }
    show() {
        this._element.setAttribute('hidden', false);
    }
};
