// task 1

let linksElements = [...document.querySelectorAll('a')];
linksElements.forEach(function (elem) {
  if (elem.matches('a[href^="http"]') || elem.matches('a[href^="ftp"]')) {
    elem.classList.add('external');
  }
  if (elem.matches('a[href*="internal"]')) {
    elem.classList.remove('external');
  }
});

// task 2

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

var pageContainer = document.querySelector('#container');

const createTree = (htmlStructure, inputDataStructure) => {
  let ulElement = document.createElement('ul');
  let liElement = document.createElement('li');
  let fragment = document.createDocumentFragment(); // цикл по li с appendChild(list[i])
   
  // liElement.appendChild(document.createTextNode('element Li'));
  // fragment.appendChild(liElement.appendChild(...))

  //or

  // fragment.innerHTML = "<li>element list1</li><li>elemrnt list2</li>";// - String

  fragment.append();
  htmlStructure.appendChild(fragment);

};

const iterDataTree = (dataTree) => {
  for (let key in dataTree) {
    if (isEmpty(dataTree)) {

    }
  }


function isEmpty(obj) {
  for(var key in obj)
  {
      return false;
  }
  return true;
}

    createTree(pageContainer.data);