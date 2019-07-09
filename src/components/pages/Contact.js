import React, { Component } from 'react';
import { Label, Col, Button, Row} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form'

class Contact extends Component {

    constructor(props){
        super(props)


        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(values){
        console.log(`Current state : ${JSON.stringify(values)}`);
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor=".firstname" md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname" 
                                        className="form-control"
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First name"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor=".lastname" md={2}>Lastname</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        className="form-control"
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last name"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor=".telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        id="telnum" 
                                        name="telnum"
                                        className="form-control"
                                        placeholder="Telephone Number"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor=".email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        id="email" 
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check" check>
                                        <Label check>
                                        <Control.checkbox 
                                            model=".agree"
                                            name="agree"
                                            className="form-check-input"
                                        /> {''} <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select 
                                        name="contactType"
                                        model=".contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message" 
                                        className="form-control"
                                        id="message" 
                                        name="message"
                                        rows="12"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;