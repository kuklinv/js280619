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

const createTree = (targetDiv, data) => {
  targetDiv.appendChild(createTreeDom(data));
};

const createTreeDom = (data) => {
  if (isEmpty(data)) return;
  let  ul = document.createElement('ul');
  for (let key in data) {
      let  li = document.createElement('li');
      li.innerHTML = key;

      let  childrenUl = createTreeDom(data[key]);
      if (childrenUl) {
          li.appendChild(childrenUl);
      }
      ul.appendChild(li);
  }
  return ul;
};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

let targetDiv = document.querySelector('#tree');
createTree(targetDiv, data);
