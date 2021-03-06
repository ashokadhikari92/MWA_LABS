
// Way 1: Using ES6 features, without for-loop
String.prototype.filterWords = function(notAllowedWords){
    let wordsInString = this.split(' ');
    let updatedWords = wordsInString.map(word => {
        if(notAllowedWords.indexOf(word) > -1){
            return "***";
        }
        return word;
    });

   return updatedWords.join(" ");
}

console.log("This house is nice !!".filterWords(["house","nice"]));


// Way 2: Using Promise

String.prototype.filterWords = function(notAllowedWords){
    let that = this;
    let filterPromise = new Promise(function(resolve,reject){
        if(Array.isArray(notAllowedWords)){
            let wordsInString = that.split(' ');
            let updatedWords = wordsInString.map(word => {
                if(notAllowedWords.indexOf(word) > -1){
                    return "***";
                }
                return word;
            });
        
           let updatedSentence = updatedWords.join(" ");
           resolve(updatedSentence);
        }else{
            reject("Method parameter should be Array.");
        }
    });

    return filterPromise;
}

"This house is nice !!".filterWords(["house","nice"]).then(data=>{console.log(data)});

// Way 3: Using Async/Await

String.prototype.filterWords = async function(notAllowedWords){
    let that = this;
    let doFilter = function(){
        return new Promise(function(resolve,reject){
            if(Array.isArray(notAllowedWords)){
                let wordsInString = that.split(' ');
                let updatedWords = wordsInString.map(word => {
                    if(notAllowedWords.indexOf(word) > -1){
                        return "***";
                    }
                    return word;
                });
            
               let updatedSentence = updatedWords.join(" ");
               resolve(updatedSentence);
            }else{
                reject("Method parameter should be Array.");
            }
        });
    };

    try{
        let result = await doFilter();

        return result;
    }catch(error){
        console.log(error);
    }

}

"This house is nice !!".filterWords(["house","nice"]).then(data=>{console.log(data)});

// Way 4: Using Observables

const rx = require('rxjs');
const rxOps = require('rxjs/operators');


String.prototype.filterWords = function (notAllowedWords) {
    rx.from(this.split(" "))
        .pipe(
            rxOps.map((word) => { if (notAllowedWords.indexOf(word) > -1) { return "***" } else { return word } }), 
            rxOps.reduce((word1, word2) => word1 + " " + word2)
        )
        .subscribe((updatedSentence) => { console.log(updatedSentence) }, (error) => console.log(error), null)
}

"This house is nice !!".filterWords(["house","nice"]);