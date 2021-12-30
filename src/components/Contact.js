/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container id="contact">
            <h1>Contact</h1>
            <Wrap>
                <div>
                    <h3>Profiles</h3>
                    <p>
                        <a
                            href="https://github.com/shreyanshgupta42"
                            target="_blank"
                        >
                            Github
                        </a>
                        <br />
                        <a
                            href="https://www.linkedin.com/in/shreyansh-gupta-94b817190/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                        <br />
                        <a
                            href="https://twitter.com/shreyansgupta41"
                            target="_blank"
                        >
                            Twitter
                        </a>
                        <br />
                        <a
                            href="https://www.codechef.com/users/shreyansgupta4"
                            target="_blank"
                        >
                            Codechef
                        </a>
                        <br />
                        <a
                            href="https://codeforces.com/profile/group11_5"
                            target="_blank"
                        >
                            Codeforces
                        </a>
                    </p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>
                        New Advocate Colony
                        <br />
                        Nawapara
                        <br />
                        Surajpur
                        <br />
                        Chhattisgarh
                    </p>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <p>
                        shreyanshgupta422@gmail.com
                        <br />
                        9660710979
                    </p>
                </div>
            </Wrap>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    height: 30vh;
    background-image: url('/images/bg5.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    div {
        p {
            text-align: left;
        }
    }
`
