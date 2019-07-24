
const createCalendar = (id, year, month) => {
    let data = new Date(year, month - 1);
    let dataObj = {};
    dataObj.year = data.getFullYear();
    dataObj.month = data.getMonth();
    dataObj.day = data.getDay(data);
    let formatedDate = data.toLocaleString("en-US", { year: 'numeric', month: 'long' });
    const table = document.createElement('table');
    let caption = createCaption(formatedDate);
    const thead = createHeader(dataNameArr);
    const tbody = createBody(dataNameArr);
    table.append(caption, thead, tbody);
    // let idSelector = `#{id}`;
    const targetHTMLelement = document.querySelector('div');
    targetHTMLelement.appendChild(table);
};
const createCaption = (data) => {
    let caption = document.createElement("caption");
    caption.innerHTML = data;
    return caption;
};

let  dataNameArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const createHeader = (dataNameArr) => {
    const thead = document.createElement('thead');
    dataNameArr.forEach((key) => {
        const th = document.createElement('th');
        th.innerHTML = key;
        thead.appendChild(th);
    });
    return thead;
};

const createBody = (arr) => {
    const tbody = document.createElement('tbody');
    for (let i = 0; i <= 5; i += 1) {
        let tr = document.createElement('tr');
        for (let j; j <= arr.length; i += 1) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        // users.forEach((user) => {
        //     const tr = document.createElement('tr');
        //     const rowKeysArr = Object.keys(user);
        //     rowKeysArr.forEach((key) => {
        //         const td = document.createElement('td');
        //         td.innerHTML = user[key];
        //         tr.appendChild(td)
        //     });
        tbody.appendChild(tr);
    }
    // });
    return tbody;
};
createCalendar("cal", 2012, 9);
















