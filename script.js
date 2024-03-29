let speech = new SpeechSynthesisUtterance();
/*This object represents a speech request that can be passed to the SpeechSynthesis interface to be spoken aloud by the system's speech synthesis service.*/

let voices = [];
/*This array will be used to store the available voices for speech synthesis.*/

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
/*This block of code sets up an event listener for the voiceschanged event of the speechSynthesis object. When this event is triggered (which usually happens when the list of available voices changes), the code inside the arrow function is executed.
It retrieves the available voices using window.speechSynthesis.getVoices() and assigns them to the voices array.
It sets the voice of the speech object to the first available voice (voices[0]).
It iterates through each voice in the voices array and adds an <option> element to the voiceSelect dropdown menu for each voice, displaying the voice's name as the option's text and using the index i as the value.*/

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

/*This line adds an event listener to the change event of the voiceSelect dropdown menu. When the user selects a different voice from the dropdown menu, the code inside the arrow function is executed. It sets the voice of the speech object to the selected voice from the dropdown menu, using the index obtained from voiceSelect.value.*/

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
/*This line adds an event listener to the click event of the first <button> element found in the HTML document. When this button is clicked, the code inside the arrow function is executed. It sets the text property of the speech object to the value entered in the first <textarea> element found in the HTML document.
It then calls window.speechSynthesis.speak(speech) to speak the text using the system's speech synthesis service.*/