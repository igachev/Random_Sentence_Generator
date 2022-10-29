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
        return rl.close()
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
        process.stdout.write(adverb + ' ');
    }, 2500);

    setTimeout(() => {
        process.stdout.write(detail);
    }, 3000);
}

askForSentence()