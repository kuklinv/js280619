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

const pageContainer = document.querySelector('div[class="task2"]');
let fragment = document.createDocumentFragment();
const createTree = (htmlStructure, dataTree) => {
  for (let externalKey in dataTree ) {
      if (isEmpty(externalKey)) {
          let  liElem = document.CreateElement('li');
          liElem.innerHTML = `<span>[externalKey]</span>`
      }
  }
};

// fragment.appendChild();
// htmlStructure.appendChild(fragment);

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

createTree(pageContainer, data);