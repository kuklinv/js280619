let main = document.querySelector('main');  // может быть контейнер и это решит вопрос ?
let header = document.createElement('h1');
let  headerStr = `
      JavaScript.RU: DOM/UI/course\n
              /group 280619\n
        /index for task debugging
`.trim();
header.innerHTML = headerStr;
main.appendChild(header);
// h1.classList.add();