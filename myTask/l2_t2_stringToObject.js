let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    let arrFromStr = str.split('\n  ').filter(function (strItem) {
        return strItem !== '';
    });
    let myParsingArr = [];
    let myParsingObject = {};
    arrFromStr.forEach(function (strItem) {
        let oneKeyArr = strItem.split(': ');
        myParsingArr.push(oneKeyArr);
    });
    myParsingObject.setter = function (key, value) {
        this[key] = value;
    };
    for (let i = 0; i < myParsingArr.length; i += 1) {
        myParsingObject.setter(myParsingArr[i][0], myParsingArr[i][1]);
    }
    delete myParsingObject.setter;
    console.log(myParsingObject);
}

styleToObject(style);