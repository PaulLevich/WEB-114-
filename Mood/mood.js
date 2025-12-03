//Paul Levich 11/27/2025
//Mood.js File

//Select the mood display element from the DOM
//const moodDisplay = {document.querySelector('#moodDisplay')};

const moodDisplay = document.querySelector('#moodDisplay');

// This object holds the background color, text color, and message for each mood
const moods = {
  happy:     { bg: '#ff9800', text: '#3e2723', message: 'Happy like when you have a warm Pumpkin spice latte in your hand.' },
  calm:      { bg: '#92AAC7', text: '#1f490dff', message: 'Calm like the undisturbed snow on a tree.'},
  excited:   { bg: '#D81B5C', text: '#e4d24cff', message: 'Excited like walking outside to the first fall of leaves and making leaf angels.'},
  chill:     { bg: '#2082A6', text: '#461b72ff', message: 'Chill like the formations of the Aurora Borealis.'},
  mysterious:{ bg: '#1d6161ff', text: '#000000ff', message: 'Mysterious like a forest with no sounds except the sound of wind blowing through the wind.'}
};

// This listens for clicks anywhere on the page and checks if it's a mood button

// When anything on the page is clicked, call handleMoodClick
//handleMoodClick.document.addEventListener('click', handleMoodClick);
document.addEventListener('click', handleMoodClick);

function handleMoodClick(MoodChoice){

    // Check if the thing clicked is a mood button
    if (MoodChoice.target.classList.contains('mood-btn')) {
        
        // Get the mood name from the button's data-mood attribute
        const mood = MoodChoice.target.getAttribute('data-mood');
            
        // Get the settings for that mood from the moods object
        const moodSettings = moods[mood];
        // Update the background color
        document.body.style.backgroundColor = moodSettings.bg;
        // Update the text color of the body
        document.body.style.color = moodSettings.text;
        //Update the display message
        
        moodDisplay.textContent = moodSettings.message;

        
  }
}

