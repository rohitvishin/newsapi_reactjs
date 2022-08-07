import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,Button } from "react-bootstrap";

export default function Updater(){
    const handleSubmit = (event) => {
        console.log("in")
        event.preventDefault();
        console.log(event.target[0].value)
    }
    return(
        <Container>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="name" placeholder="Enter Name here" />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" name="submit"> sumit</Button>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}