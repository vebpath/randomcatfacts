let button = document.getElementById('button')
let factOutput = document.getElementById("fact")
let random_cat_facts_api = "https:/meowfacts.herokuapp.com"



function fetchRandomCatFacts(){
    button.innerHTML = "Loading..."
    fetch(random_cat_facts_api).then(res=>res.json()).then(data=>{
    factOutput.textContent =data.data[0] 
    button.innerHTML = "New Fact"
    })

}

fetchRandomCatFacts()

function speak(){
    let uttrance = new SpeechSynthesisUtterance(factOutput.textContent)
    speechSynthesis.speak(uttrance)
}

function copyFact(){
    navigator.clipboard.writeText(factOutput.textContent)
}

function shareFact(){
    navigator.share({
        title: "cat fact",
        text: factOutput.textContent
    })
}