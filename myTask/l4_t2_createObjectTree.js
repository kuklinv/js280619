let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

const createTree = (targetHTML, data) => {
  targetHTML.appendChild(createTreeDom(data));
};

const createTreeDom = (data) => {
  if (isEmpty(data)) return;
  let  ul = document.createElement('ul');
  for (let key in data) {
      li = document.createElement('li');
      li.innerHTML = key;

      let ulChildren = createTreeDom(data[key]);
      if (ulChildren) {
          ulChildren.appendChild(li);
      }
      ul.append(li);
  }
  return ul;
};

let  targetHTML = document.querySelector('#tree');
createTree(targetHTML, data);

function isEmpty(obj) {
    for (let key in obj) {
        console.log(false);
    }
    return console.log(true);
}
