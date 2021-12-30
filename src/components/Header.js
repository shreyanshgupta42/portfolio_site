import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <div>
                <a href="#projects">Projects</a>
            </div>
            <div>
                <a href="#skills">Skills</a>
            </div>
            <div>
                <a href="#contact">Contacts</a>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    position: fixed;
    div {
        padding: 0 30px;
    }
    a:hover {
        color: grey;
    }
`
