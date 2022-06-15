import { Button, Container } from "react-bootstrap";

function Social () {
    return (
        <Container fluid="true" id="social" className="Social">
            <hr />
            <h2>Find me on social media!</h2>
            <Button size="sm" variant="primary" href="https://github.com/lilf4p" target="_blank">Github</Button>{' '}
            <Button size="sm" variant="primary" href="https://www.instagram.com/lilf4p/" target="_blank">Instagram</Button>{' '}
            <Button size="sm" variant="primary" href="https://twitter.com/lilf4p" target="_blank">Twitter</Button>{' '}
        </Container>
    );
}

export default Social;