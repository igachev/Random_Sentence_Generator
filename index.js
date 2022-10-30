let readline = require('readline')
let rl = readline.createInterface(process.stdin,process.stdout)
let names = ['Peter','Michell','Jane','Steve']
let places = ['Sofia','Plovdiv','Varna','Burgas']
let verbs = ['eats','holds','sees','plays with','brings']
let nouns = ['stones','cake','apple','laptop','bikes']
let adverbs = ['slowly','diligently','warmly','sadly','rapidly']
let details = ['near the river','at home','in the park']

let askForSentence = function() {
    rl.question('Click [Enter] to generate sentence ',function(text) {
        
        if(text !== '') {
            console.log('ERROR! Input data is not required!');
            return rl.close()
        }

        generateSentence();
    })
}

function generateRandomWord(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem = arr[randomIndex]
    return randomItem
}

 function generateSentence() {
    let name = generateRandomWord(names)
    let place = generateRandomWord(places)
    let verb = generateRandomWord(verbs)
    let noun = generateRandomWord(nouns)
    let adverb = generateRandomWord(adverbs)
    let detail = generateRandomWord(details)
   
    setTimeout(() => { 
        process.stdout.write(name);        
    }, 500);

    setTimeout(() => {
        process.stdout.write(' from ' + place + ' ');
    }, 1000);

    setTimeout(() => {
        process.stdout.write(verb + ' ');
    }, 1500);

    setTimeout(() => {
        process.stdout.write(noun + ' ');
    }, 2000);

    setTimeout(() => {
        process.stdout.write(adverb + '\n');
    }, 2500);

    setTimeout(() => {
        process.stdout.write(detail);
    }, 3000);

    setTimeout(() => {
        askForMoreSentences()
    },3100)
}

function generateMultipleSentences() {
    let name = generateRandomWord(names)
    let place = generateRandomWord(places)
    let verb = generateRandomWord(verbs)
    let noun = generateRandomWord(nouns)
    let adverb = generateRandomWord(adverbs)
    let detail = generateRandomWord(details)
    let result = `${name} from ${place} ${verb} ${noun} ${adverb} ${detail}`
    return result;
}

let askForMoreSentences =  function() {
    rl.question('Do you want to generate more sentences? (y/n): and press enter: ',function(answer) {
        
        if(answer === 'n') {
            return rl.close()
        }

        else if(answer === 'y') {
            rl.question("How many? Enter a number between (1-10): and press enter: ",function(digit) {
                
                let countSentences = Number(digit)
                if(countSentences > 0 && countSentences <= 10) {
                    for(let i = 0; i < countSentences; i++) {
                        console.log(generateMultipleSentences())
                    }
                }
                else {
                    console.log('Error!Number must be in range (1-10)');
                    askForMoreSentences()
                }
        askForMoreSentences()
            })
        }

        else {
            console.log('Invalid command! Choose y or n!');
            askForMoreSentences()
        }
    })
}

askForSentence()