
const createCalendar = (id, year, month) => {
    let data = new Date(year, month - 1);
    let dataObj = {};
    dataObj.year = data.getFullYear();
    dataObj.month = data.getMonth();
    dataObj.day = data.getDay();\
    // const table = document.createElement('table');
    // let caption = document.createElement("caption");
    const thead = createHeader(dataNameArr);
    // const tbody = createBody(users);
    // table.append(thead, tbody);
    let idSelector = `#{id}`;
    const targetHTMLelement = document.querySelector('idSelector');
    // targetHTMLelement.appendChild(table);
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

const createBody = () => {
    const tbody = document.createElement('tbody');
    // users.forEach((user) => {
    //     const tr = document.createElement('tr');
    //     const rowKeysArr = Object.keys(user);
    //     rowKeysArr.forEach((key) => {
    //         const td = document.createElement('td');
    //         td.innerHTML = user[key];
    //         tr.appendChild(td)
    //     });
    //     tbody.appendChild(tr);
    // });
    // return tbody;
};

createCalendar("cal", 2012, 9); //<div id=„cal“></div>