
const syn = window.speechSynthesis;
const voices = document.getElementById("voices");
const play_btn = document.getElementById("play-btn");
const text_container = document.getElementById("text-container");



// set voices when they are ready
syn.onvoiceschanged = function() { 
    syn.getVoices().forEach((voice, index) => {
        voices.add(new Option(voice.name, index));
    })
}

play_btn.addEventListener('click', evt => {
    const voice = syn.getVoices()[voices.value];
    const text = text_container.value;
    speek(voice, text)
})

function speek(voice, text) {
    const text_model = new SpeechSynthesisUtterance(text);
    text_model.voice = voice;
    text_model.pitch = 2;
    syn.speak(text_model);
}
