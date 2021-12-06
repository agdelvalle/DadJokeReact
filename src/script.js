import React from "react";
import ReactDOM from "react-dom";
const button = document.querySelector('#btn');

// get joke
async function getJoke(){
    const joke = document.querySelector('#joke');

// show random loading text
    // const loadingText = ['This one is the best...', 'Waiting for a joke...', "Here's a good one...", "You're gonna laugh for sure..."]
    // joke.style.backgroundColor = "#69A562";
    // joke.style.color = "whitesmoke";
    // joke.innerHTML = "Preparing a joke..."
    // joke.innerHTML = loadingText[Math.floor(Math.random()*4)];
    
    const getData = await fetch('https://icanhazdadjoke.com/', 
    {headers: {
        Accept: 'application/json'}
    })
    const results = await getData.json(); 
    // check
    console.log(results.joke)
    // display joke
    joke.style.backgroundColor = "whitesmoke";
    const newJoke = (<span className="newJoke">{results.joke}</span>);

    ReactDOM.render(newJoke, joke)
};

// display joke on click
export default function clickBtn(){button.addEventListener('click', function(){
    getJoke();
    console.log('working');
});}
