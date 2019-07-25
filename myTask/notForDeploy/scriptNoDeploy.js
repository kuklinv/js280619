
const createCalendar = (id, year, month) => {
    let data = new Date(year, month - 1);
    let formatedDate = data.toLocaleString("en-US", { year: 'numeric', month: 'long' });
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

function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

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

const createBody = (data, month) => {
    const tbody = document.createElement('tbody');
    let td = document.createElement('td');
    let  tr = document.createElement('tr');
    let today = data.getDate();
    tbody.appendChild(tr);
    while (getDay(data) === month - 1) {
        for (let i = 0; i < getDay(data); i += 1) {
           tr.appendChild(td);
         }
        data.setDate(data.getDate() + 1);
    }

   //  while (getDay(data) === month - 1) {
   //     tbody.appendChild(td);
   //     td.innerText = data.getDate();
   //     if (getDay(data) % 7 == 6) {
   //          tbody.appendChild(tr);
   //      }
   //      d.setDate(d.getDate() + 1);
   //  }
   //  if (getDay(data) != 0) {
   //      for (let i = getDay(data); i < 7; i++) {
   //          tbody.appendChild(td);
   //      }
   //  }
    return tbody;
};
createCalendar("cal", 2012, 9);
















