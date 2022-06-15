import React from "react";
import { Card,ProgressBar,Accordion } from "react-bootstrap";

function Study () {
    const now1 = 100;
    const now2 = 5;
    return (
        <Card id='study' className="bg-dark text-white">
            <Card.Img src={require("../immagini/laureasfondo.png")} alt="laureasfondo.png" />
            <Card.ImgOverlay >
                <Card.Title>Laurea in Informatica</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Study;