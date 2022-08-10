import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,Button } from "react-bootstrap";
import axios from "axios";

export default function Updater(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title',event.target[0].value);
        formData.append('description',event.target[1].value);
        axios.post('http://localhost/newsapi/updateNews.php',formData).then(res => {
        if(res)
        console.log("successful");
        else
        console.log("operation failed");
      })
    }
    return(
        <Container>
            <Row>
                <Col>
                <h2>Add Content</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="title" className="formcss" placeholder="Enter Name here" />
                    </Form.Group>
                    <Form.Control as="textarea" className="formcss" name="description" placeholder="Enter Description Here"/>
                    <Form.Control type="file" name="image" className="formcss" placeholder="Choose File"/>
                    <Form.Group>
                        <Button type="submit" name="submit" className="formcss"> sumit</Button>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}