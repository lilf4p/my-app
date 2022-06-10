import React from "react";
import { Container } from "react-bootstrap";


function About () {
    return (
        <Container id = 'about' className="About">
            <div className="Avatar">
                <img className="ImageAvatar" src={require("../immagini/avatar.png")} alt="Avatar" />
            </div>
            <h1 className="Welcome">Hey 👋 I'm lilf4p</h1>
            <div className="Title">
                Developer and Student of Master in Computer Science 
            </div>
            <p className="Description"> Discover my project and hobbies</p>            
        </Container>
    )
}

export default About;