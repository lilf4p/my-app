import React from "react";
import { Carousel } from "react-bootstrap";

function Photos () {
    return(
        <Carousel id='photos' variant="light">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../immagini/Panoramica1.jpg")}
                alt="Panoramica1.jpg"
                />
                <Carousel.Caption>
                <h5>Photos</h5>
                <p>This are some shot from my trip in Iceland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../immagini/ice.png")}
                alt="ice.png"
                />
                <Carousel.Caption>
                <h5>Photos</h5>
                <p>This are some shot from my trip in Iceland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../immagini/roccia.png")}
                alt="roccia.png"
                />
                <Carousel.Caption>
                <h5>Photos</h5>
                <p>This are some shot from my trip in Iceland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../immagini/skogafoss.png")}
                alt="skogafoss.png"
                />
                <Carousel.Caption>
                <h5>Photos</h5>
                <p>This are some shot from my trip in Iceland.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../immagini/cascata2.png")}
                alt="cascata.png"
                />
                <Carousel.Caption>
                <h5>Photos</h5>
                <p>This are some shot from my trip in Iceland.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Photos;