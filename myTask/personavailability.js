let trArr = document.body.querySelectorAll('table[class="js-teachers"] > tbody > tr');

const highlight = (trArr) => {
    trArr.forEach(function (item) {
        if (item["children"][2]["textContent"] == 'm') {
            item.classList.add('male');
        } else {
            item.classList.add('female');
        }
        if (item["children"][3].dataset.available === 'true') {
            item.classList.add('available');
        } else if (item["children"][3].dataset.available === 'false') {
            item.classList.add('unavailable');
        } else  if (!item["children"][3].hasOwnProperty('dataset')) {
            item.setAttribute('hidden', 'true');
        }
        if (Number(item["children"][1]["textContent"]) < 18) {
            item.style = 'text-decoration: line-through';
        }
    });

};

setTimeout(() => {
    highlight(trArr);
}, 2000);





