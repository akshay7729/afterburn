import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button} from 'reactstrap'

class Contact extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChnage = this.handleInputChnage.bind(this)

    }

    handleInputChnage(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
     }

    handleSubmit(e){
        console.log(`Current state : ${JSON.stringify(this.state)}`);
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChnage}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Lastname</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChnage}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="telnum" 
                                        name="telnum"
                                        placeholder="Telephone Number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChnage}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="email" 
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChnage}
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                        <Input 
                                            type="checkbox"
                                            name="agree"
                                            value={this.state.agree}
                                            onChange={this.handleInputChnage}
                                        /> {''} <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input 
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChnage}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input 
                                        type="textarea" 
                                        id="message" 
                                        name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChnage}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;