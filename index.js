let readline = require('readline')
let rl = readline.createInterface(process.stdin,process.stdout)
let names = ['Peter','Michell','Jane','Steve']
let places = ['Sofia','Plovdiv','Varna','Burgas']
let verbs = ['eats','holds','sees','plays with','brings']
let nouns = ['stones','cake','apple','laptop','bikes']
let adverbs = ['slowly','diligently','warmly','sadly','rapidly']
let details = ['near the river','at home','in the park']

let askForSentence = function() {
    rl.question('Click [Enter] to generate sentence',function() {
        console.log(generateSentence());
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
    let result = `${name} from ${place} ${verb} ${noun} ${adverb} ${detail}`
    return result;
}

askForSentence()