const inputElement = document.getElementById('input');
let wordTitle = document.getElementById('word-title');
let meaningElement = document.getElementById('word-meaning');
let instruction = document.getElementById('instruction');
let audio = document.getElementById('audio');


async function getData(word){
    instruction.style.display = 'block';
    instruction.innerText = `searching word - "${word}"`
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json()
    wordTitle.innerText = `${word}`
    let meaning = data[0].meanings[0].definitions[0].definition
    meaningElement.innerText = `${meaning}`;
    console.log(data);
    let audioPath = data[0].phonetics[0].audio
    audio.src = `${audioPath}`;

    inputElement.value = '';
    instruction.style.display = 'none';
    
}

inputElement.addEventListener('keyup', (e) =>{
    if(e.target.value && e.key === "Enter"){
        getData(e.target.value);
    }
})