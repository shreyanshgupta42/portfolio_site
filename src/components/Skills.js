import React from 'react'
import styled from 'styled-components'

function Skills() {
    return (
        <Container id="skills">
            <h1>Skills</h1>
            <Wrap>
                <div><img src='images/android.png' alt='android'></img><h3>android studio</h3></div>
                <div><img src='images/visual-studio.png' alt='visual-studio'></img><h3>visual studio</h3></div>
                <div><img src='images/structure.png' alt='reactjs'></img><h3>reactjs</h3></div>
                <div><img src='images/sql-server.png' alt='sql'></img><h3>sql</h3></div>
                <div><img src='images/git.png' alt='git'></img><h3>git & github</h3></div>
                <div><img src='images/java.png' alt='java'></img><h3>JAVA</h3></div>
                <div><img src='images/git.png' alt='git'></img><h3>DSA</h3></div>
                <div><img src='images/c-.png' alt='cpp'></img><h3>CPP</h3></div>
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
