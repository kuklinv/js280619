import {Components} from "./components.js";

export function Menu(element, title, items) {
    Components.call(this, element);                  // создали экземпляр именно от общего компонента
    // this._element = element;                       // чтобы не искать во всем документе этот элемент через document......
    this._title = title;
    this._items = items;
    this._render();
    this._dropdownArea = this._element.querySelector('.dropdown-menu'); // заменяем повторяющийся поиск элемента
    this._element.querySelector('button').addEventListener('click', this.toggl.bind(this)); // bind нужен чтобы не терялся контекст при addeventListener - который работает на элементе - а нужен dropdawnArea
}
Menu.prototype = Object.create(Components.prototype);    // сказали что прототип от компонента
Menu.constructor = Menu;                               // конструктор оставили явно от элемента меню

Menu.prototype.open = function () {
    this._dropdownArea.classList.add('show');
};

Menu.prototype.close = function () {
    this._dropdownArea.classList.remove('show');
};

Menu.prototype.toggl = function () {
    this._dropdownArea.classList.toggle('show');
};
Menu.prototype._render = function f() {
    this._element.innerHTML =
        `                    
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
        ${this._title}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    ${this._items.map((item) => `<a class="dropdown-item" href="#">${item}</a>`).join('')}  
<!--    join для красоты без запятых и пробелов-->
    </div>
</div>
`;
};