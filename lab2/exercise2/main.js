
function even(){
    let that = this;
    setTimeout(function(){
        let updateArray = that.filter(value => value%2 == 0);
        console.log(updateArray);
    })
}


function odd(){
    let that = this;
    setTimeout(function(){
        let updateArray = that.filter(value => value%2 != 0);
        console.log(updateArray);
    })
}

Array.prototype.even = even;
Array.prototype.odd = odd;

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');