import React from 'react'
import styled from 'styled-components'
import androidstudio from '../images/social-media.png'
import visualstudio from '../images/covid-19.png'
import reactjs from '../images/cloudy.png'
import sql from '../images/speech-bubble.png'
import git from '../images/social-media.png'
import java from '../images/covid-19.png'
import dsa from '../images/cloudy.png'
import cpp from '../images/speech-bubble.png'
import background from '../images/bg3.jpg'

function Skills() {
    return (
        <Container id="skills" style={{backgroundImage:"url("+background+")"}}>
            <h1>Skills</h1>
            <Wrap>
                <div><img src={androidstudio} alt='android'></img><h3>android studio</h3></div>
                <div><img src={visualstudio} alt='visual-studio'></img><h3>visual studio</h3></div>
                <div><img src={reactjs} alt='reactjs'></img><h3>reactjs</h3></div>
                <div><img src={sql} alt='sql'></img><h3>sql</h3></div>
                <div><img src={git} alt='git'></img><h3>git & github</h3></div>
                <div><img src={java} alt='java'></img><h3>JAVA</h3></div>
                <div><img src={dsa} alt='git'></img><h3>DSA</h3></div>
                <div><img src={cpp} alt='cpp'></img><h3>CPP</h3></div>
            </Wrap>
        </Container>
    )
}

export default Skills

const Container = styled.div`
    height: 80vh;
    background-image: url('/images/bg3.jpg');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        padding-bottom: 50px;
    }
`

const Wrap = styled.div`
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    text-transform: capitalize;
    div {
        display: flex;
        flex-direction: column;
        margin: 20px 50px;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 150px;
        width: 200px;
        border: 2px solid white;
        border-radius: 6%;
        img {
            width: 50px;
            padding-right: 10px;
        }
    }
    div:hover {
        border: 4px solid white;
    }
`
