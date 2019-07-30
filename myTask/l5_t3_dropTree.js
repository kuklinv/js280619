let mainUl = document.querySelector('ul[class="tree"]');
let selectedLi;

mainUl.addEventListener('mouseover', function (e) {
    let target = e.target;
    target.style.fontWeight = 'bold';
});

mainUl.addEventListener('mouseout', function (e) {
    let target = e.target;
    target.style.fontWeight = 'normal';
});

mainUl.addEventListener('click', function (e) {
   let target = e.target;
   target.childNodes.toggle();
   // while (target != this) {
   //     if (target.name == 'li') {
   //         target.toggle();
   //         // target.childNodes.forEach((item) => item.toggle());
   //     }
   //     target = target.parentNode;
   // }
});

// mainUl.addEventListener('onclick', function (e) {
//     let target = e.target;
//     while (target != mainUl) {
//         if (target.name == "li") {
//             // convolution(target);
//             target.toggle();
//             return;
//         }
//         target= target.parentNode;
//     }
// });
//
// const convolution = (node) => {
//   if (!node.hasChildNodes()) {
//       // node.childNodes.forEach(setAttribute('hidden', 'true'));
//       node.toggle();
//   }
//   convolution(node.firstChild);
//
// };

// mainUl.addEventListener('onclick', function (e) {
//     let target = e.target;
//     while (target != mainUl) {
//         if (target.name = 'LI') {
//             convolution(target);
//             return;
//         }
//         target = target.parentNode;
//     }
// });

// const convolution = (node) => {
//     if (selectedLi) {
//         selectedLi.setAttribute('hidden', 'false');
//     }
//     selectedLi = node.children;
//     selectedLi.setAttribute('hidden', 'true');
// };



//
// const createTreeDom = (data) => {
//     if (isEmpty(data)) return;
//     let  ul = document.createElement('ul');
//     for (let key in data) {
//         let li = document.createElement('li');
//         li.innerHTML = key;
//
//         let ulChildren = createTreeDom(data[key]);
//         if (ulChildren) {
//             li.appendChild(ulChildren);
//         }
//         ul.appendChild(li);
//     }
//     return ul;
// };
//
// let  targetHTML = document.querySelector('div[class="task2"]');
//
// const createTree = (targetHTML, data) => {
//     targetHTML.appendChild(createTreeDom(data));
// };
//
// createTree(targetHTML, data);
//
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
