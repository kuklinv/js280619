function makeArmy() {
    let shooters = [];

    let i = 0;
    for ( let i = 0 ; i < 10; i += 1) {
        let shooter = function() {
            alert( i );
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

export default army;

