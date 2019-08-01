
const createCalendar = (id, year, month) => {
    let data = new Date(year, month - 1);
    let formatedDate = data.toLocaleString("en-US", {year: 'numeric', month: 'long'});
    const table = document.createElement('table');
    let caption = createCaption(formatedDate);
    const thead = createHeader(dataNameArr);
    const tbody = createBody(data);
    table.append(caption, thead, tbody);
    const targetHTMLelement = document.getElementById('calendar');
    targetHTMLelement.appendChild(table);
};
const createCaption = (data) => {
    let caption = document.createElement("caption");
    caption.innerHTML = data;
    return caption;
};

let dataNameArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const createHeader = (dataNameArr) => {
    const thead = document.createElement('thead');
    dataNameArr.forEach((key) => {
        const th = document.createElement('th');
        th.innerHTML = key;
        thead.appendChild(th);
    });
    return thead;
};

const createBody = (data) => {
    const tbody = document.createElement('tbody');
    let today = function getDay(date) {
        var day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    };
    // let now = data.getDate();
    let month = data.getMonth();
    for (let i = 0; i < 5; i += 1) {
        let tr = document.createElement('tr');
        let j = 0;
        while (j < 7) {
            let td = document.createElement('td');
            if (data.getMonth() != month) {
                td.innerHTML = null;
                td.classList.add('empty');
            } else {
                td.innerHTML = data.getDate();
            }
            tr.appendChild(td);
            j += 1;
            data.setDate(data.getDate() + 1);
        }
        tbody.appendChild(tr);
    }
    return tbody;
};
createCalendar("cal", 2012, 9);















