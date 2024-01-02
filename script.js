let url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'


async function init() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function currentQuestion() {
    let question = await init();
    console.log(question)
    let currentQuestion = document.getElementById('currentQuestion');
    currentQuestion.innerHTML = question['results']['0']['question'];
}

function clickOnAnswer() {
    
}