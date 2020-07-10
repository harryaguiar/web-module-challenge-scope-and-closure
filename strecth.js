/*

1 - Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
    (function(){
      var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
*/


/*

2 - Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation here).
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
*/

function createBase(data){
    return function(x){
        return data + x
    }

}


var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
    
console.log(addSix(21));

    
/*
Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
*/