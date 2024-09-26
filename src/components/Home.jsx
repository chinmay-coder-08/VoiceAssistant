import React, { useState, useEffect } from 'react'
import Weatherinfo from './Weatherinfo';
import "../css/weatherinfo.css"
import "../css/home.css"
import ModalListening from './ModalListening';
import Definationcomponent from './Definationcomponent';


const Home = ({ showAlert }) => {
    const [showingweather, setshowingweather] = useState(false);
    const [showingdefination, setshowingdefination] = useState(false);
    const [definationd, setdefinationd] = useState("");
    const [weatherinfo, setweatherinfo] = useState("");
    const [text, settext] = useState("");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const mic = new SpeechRecognition();
    mic.continuous = true;
    // mic.interimResults = true;
    mic.lang = 'en-in';
    // useEffect(() => {
    //     handlelisten();
    //     // eslint-disable-next-line
    // }, [isListening]);

    // Handle the listening
    function handlelisten() {
        mic.start();
    }

    // stopping mic
    const stopMic = () => {
        mic.stop();
    }

    mic.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript
        console.log(transcript);
        settext(transcript)
        commands(transcript);
        mic.onerror = event => {
            console.log(event.error)
        }
    }

    const commands = (transcript) => {
        if (transcript.includes("hello")) {
            readOut("hi, how are you")
        }
        else if (transcript.includes("weather of")) {
            let city = transcript.split("");
            city.splice(0, 11)
            city = city.join("");
            getwather(city, transcript);

        }
        else if (transcript.includes("what is mean by")) {
            let word = transcript.split("");
            word.splice(0, 16)
            word = word.join("");
            getdefination(word);

        }
        else if (transcript.includes("search for")) {
            let searchterm = transcript.split("");
            searchterm.splice(0, 11)
            searchterm = searchterm.join("");
            readOut(`Searching google for ${searchterm}`)
            window.open(`https://google.com/search?query=${searchterm}`)
        }
        else if (transcript.includes("search Google for")) {
            let searchterm = transcript.split("");
            searchterm.splice(0, 18)
            searchterm = searchterm.join("");
            readOut(`Searching google for ${searchterm}`)
            window.open(`https://google.com/search?query=${searchterm}`)
        }
        else if (transcript.includes("search YouTube for")) {
            let youtubesearchterm = transcript.split("");
            youtubesearchterm.splice(0, 19)
            youtubesearchterm = youtubesearchterm.join("");
            console.log(youtubesearchterm);
            readOut(`Searching Youtube for ${youtubesearchterm}`)
            window.open(`https://www.youtube.com/results?search_query=${youtubesearchterm}`)
        }
        else if (transcript.includes("search Amazon for")) {
            let amazonsearchterm = transcript.split("");
            amazonsearchterm.splice(0, 18)
            amazonsearchterm = amazonsearchterm.join("");
            console.log(amazonsearchterm);
            readOut(`Searching Amazon for ${amazonsearchterm}`)
            window.open(`https://www.amazon.in/s?k=${amazonsearchterm}`)
        }
    }

    const getwather = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b436c0e79898d1bf10b8cd1e7297b02`
            const response = await fetch(url);
            const data = await response.json();
            const { name } = data;
            const { country } = data.sys;
            const { temp, pressure } = data.main;
            readOut(`Weather of ${city} is  ${temp} degree celsius`);
            const mynewweatherinfo = { temp, pressure, name, country }
            setweatherinfo(mynewweatherinfo);
            setshowingweather(true)
        } catch (error) {
            showAlert("Error", "City not found")
            readOut("City not found")
            console.log(error);
        }
    }
    async function getdefination(word) {
        try {
            let url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=f276c47d-117a-4e13-8554-01e72d75d1d9`
            const res = await fetch(url);
            const data = await res.json();
            const definationd = data[0].shortdef[0];
            setdefinationd(definationd)
            setshowingdefination(true);
            readOut(definationd)
        } catch (error) {
            readOut("Word not found")
            showAlert("Error", "Word not found", "danger")
        }
    }
    useEffect(() => {
        setdefinationd(false)
        setshowingweather(false)
    }, [text])
    // Speak function
    const readOut = (message) => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        console.log("Speaked");
    }
    return (
        <>
            <div className="container bg" >
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success m-2" onClick={() =>
                    handlelisten()
                }>
                    Start Listening</button>
                <button className="btn btn-danger m-2" onClick={() =>
                    mic.stop()
                }>
                    Stop Listening</button>
                <div className="commands in_middle hide_on_small"></div>
                <div className="weather">
                    {showingweather ? <Weatherinfo temp={weatherinfo.temp} name={weatherinfo.name} country={weatherinfo.country} /> : null}
                </div>
                {text ? <div className="userText">
                    <h4 style={{ fontFamily: "Roboto" }} className="m-3 text-primary">{text}</h4>
                </div> : null}
                {showingdefination ? <Definationcomponent defination={definationd} /> : null}

            </div>
            <ModalListening text={text} stopMic={stopMic} />
        </>
    )
}

export default Home;
