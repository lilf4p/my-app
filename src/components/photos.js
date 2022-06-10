import React from "react";
import { Carousel, Container } from "react-bootstrap";

function Photos () {
    return(
        <Container fluid='true' className='Photos'>
            <Carousel id='photos' variant="light">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../immagini/Panoramica1.jpg")}
                    alt="Panoramica1.jpg"
                    />
                    <Carousel.Caption>
                    <h5>Aurora</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../immagini/ice.png")}
                    alt="ice.png"
                    />
                    <Carousel.Caption>
                    <h5>Black beach</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../immagini/roccia.png")}
                    alt="roccia.png"
                    />
                    <Carousel.Caption>
                    <h5>Rock</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../immagini/skogafoss.png")}
                    alt="skogafoss.png"
                    />
                    <Carousel.Caption>
                    <h5>Skogafoss</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../immagini/cascata.png")}
                    alt="cascata.png"
                    />
                    <Carousel.Caption>
                    <h5 className="Waterfall">Waterfall</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    );
}

export default Photos;