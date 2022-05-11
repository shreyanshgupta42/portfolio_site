/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import instacloneimg from '../images/social-media.png'
import covidtrackerimg from '../images/covid-19.png'
import weatherappimg from '../images/cloudy.png'
import chatappimg from '../images/speech-bubble.png'
import background from '../images/bg4.jpg'

function Projects() {
    return (
        <Container id='projects' style={background?{backgroundImage:"url("+background+")"}:{backgroundColor:"black"}}>
            <p>Hello, I am Shreyansh Gupta<br/>Android Developer | React.js<br/><br/>3rd year NIT Raipur</p>
            <hr></hr>
            <h1>Projects</h1>
            <Wrap>
                <a
                    href="https://chat-web-app-4c247.firebaseapp.com/"
                    target="_blank"
                >
                    <img src={chatappimg} alt='icon'></img>
                    Chat-app
                </a>
                <a
                    href="https://github.com/shreyanshgupta42/Insta-clone"
                    target="_blank"
                >
                    <img src={instacloneimg} alt='icon'></img>
                    Instagram-clone
                </a>
                <a
                    href="https://shreyanshgupta42.github.io/corona2/#/"
                    target="_blank"
                >
                    <img src={covidtrackerimg} alt='icon'></img>
                    Covid Tracker
                </a>
                <a
                    href="https://github.com/shreyanshgupta42/Android-weather-app/tree/master"
                    target="_blank"
                >
                    <img src={weatherappimg} alt='icon'></img>
                    Weather App
                </a>
            </Wrap>
        </Container>
    )
}

export default Projects

const Container = styled.div`
    height: 100vh;
    background-image: url('https://drive.google.com/file/d/13p6kg25nGq3Jsobg2ZrOSyPWLSddA60B/view?usp=sharing');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: 35px;
    }
    h1{
        padding-bottom: 40px;
        text-transform: uppercase;
    }
    hr{
        width: 500px;
    }
`

const Wrap = styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: capitalize;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 150px;
        width: 200px;
        border: 2px solid white;
        border-radius: 6%;
        img{
            width:50px;
            padding-right: 10px;
        }
    }
    a:hover {
        border: 4px solid white;
    }
`
